
import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { initialData, SHEET_NAMES } from './constants';
import type { AppData, ItemRow, SheetData, SheetRow } from './types';

const SHEET_COLORS: { [key: string]: { base: string; active: string } } = {
  "GENERAL": { base: '#4A5568', active: '#14B8A6' },
  "COMEDOR": { base: '#4A5568', active: '#3B82F6' },
  "PACIENTES": { base: '#4A5568', active: '#6366F1' },
  "BANCO DE LECHE": { base: '#4A5568', active: '#8B5CF6' },
  "NUTRICIÓN CLÍNICA": { base: '#4A5568', active: '#EC4899' },
  "DIETOLOGÍA(S)": { base: '#4A5568', active: '#D946EF' },
  "JORNADA": { base: '#4A5568', active: '#F97316' },
  "RECEPCIÓN": { base: '#4A5568', active: '#16A34A' },
};

const GROUP_PALETTE = [
    { main: '#EBF5FF', subtle: '#F8FBFF', hover: '#EBF5FF', text: '#3B82F6' }, // Blue
    { main: '#E0F2F1', subtle: '#F3F9F9', hover: '#E0F2F1', text: '#0D9488' }, // Teal
    { main: '#F3E8FF', subtle: '#FAF7FF', hover: '#F3E8FF', text: '#8B5CF6' }, // Purple
    { main: '#FFF7ED', subtle: '#FFFCF5', hover: '#FFF7ED', text: '#F97316' }, // Orange
    { main: '#FEF2F2', subtle: '#FFFAFA', hover: '#FEF2F2', text: '#EF4444' }, // Red
    { main: '#F0FFF4', subtle: '#F9FFFB', hover: '#F0FFF4', text: '#16A34A' }, // Green
    { main: '#FFFBEB', subtle: '#FFFDF5', hover: '#FFFBEB', text: '#F59E0B' }, // Amber
    { main: '#FCE7F3', subtle: '#FEFBFD', hover: '#FCE7F3', text: '#DB2777' }, // Pink
];

const generateColorFromString = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    const index = Math.abs(hash) % GROUP_PALETTE.length;
    return GROUP_PALETTE[index];
};


const AppStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

    :root {
      --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      
      --bg-main: #f8f9fa;
      --bg-container: #ffffff;
      --text-primary: #1a202c;
      --text-secondary: #4a5568;
      --border-color: #e2e8f0;

      --primary-50: #f0fdfa;
      --primary-100: #ccfbf1;
      --primary-300: #5eead4;
      --primary-500: #14b8a6;
      --primary-600: #0d9488;
      --primary-700: #0f766e;

      --neutral-100: #f1f5f9;
      --neutral-200: #e2e8f0;

      --focus-ring-color: rgba(20, 184, 166, 0.4);
      
      --border-radius-md: 8px;
      --border-radius-lg: 12px;
      --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
      --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
      --transition-normal: 300ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes highlight-glow {
      0% { box-shadow: 0 0 0 0 var(--focus-ring-color); }
      50% { box-shadow: 0 0 8px 3px var(--focus-ring-color); }
      100% { box-shadow: 0 0 0 0 var(--focus-ring-color); }
    }
    
    @keyframes total-flash {
        0% { background-color: var(--primary-100); transform: scale(1); }
        50% { background-color: var(--primary-300); transform: scale(1.05); }
        100% { background-color: var(--primary-100); transform: scale(1); }
    }

    body {
      font-family: var(--font-primary);
      background-color: var(--bg-main);
      color: var(--text-primary);
      margin: 0;
      padding: 2rem;
    }
    .app-container {
      background-color: var(--bg-container);
      border-radius: var(--border-radius-lg);
      box-shadow: var(--shadow-md);
      padding: 1rem 1.5rem 1.5rem;
      max-width: 100%;
    }
    
    .tabs {
      border-bottom: 1px solid var(--border-color);
      margin-bottom: 1.5rem;
      display: flex;
      flex-wrap: wrap;
    }
    .tabs button {
      padding: 0.75rem 0.5rem;
      margin: 0 0.5rem;
      border: none;
      background-color: transparent;
      cursor: pointer;
      border-bottom: 3px solid transparent;
      transition: all var(--transition-normal);
      font-size: 0.95rem;
      font-weight: 600;
    }
    .tabs button:hover {
      opacity: 0.8;
    }
    .tabs button.active {
      font-weight: 700;
    }

    .table-container {
      overflow-x: auto;
      border: 1px solid var(--border-color);
      border-radius: var(--border-radius-lg);
      transition: opacity var(--transition-normal);
      opacity: 1;
    }
    .table-container.switching {
      opacity: 0.5;
    }
    
    .data-table {
      border-collapse: collapse;
      width: 100%;
      font-size: 0.875rem;
      table-layout: fixed;
    }
    .data-table th, .data-table td {
      border: none;
      border-bottom: 1px solid var(--border-color);
      padding: 10px 12px;
      text-align: center;
      vertical-align: middle;
      white-space: nowrap;
      transition: background-color var(--transition-fast);
    }
    .data-table th {
      background-color: var(--neutral-100);
      color: var(--text-secondary);
      font-weight: 700;
      text-transform: uppercase;
      font-size: 0.75rem;
      letter-spacing: 0.05em;
      position: sticky;
      top: 0;
      z-index: 10;
      border-bottom: 2px solid var(--border-color);
    }
    
    .data-table tbody tr:not(.group-header-row):hover {
        background-color: var(--row-hover-bg);
    }

    .sticky-col {
      position: sticky;
      background-color: inherit;
      z-index: 5;
    }
     .sticky-col:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: -1px;
        width: 1px;
        background: var(--border-color);
    }
    .data-table th.sticky-col { z-index: 15; }
    .sticky-col-1 { left: 0; }
    .sticky-col-2 { left: 110px; }
    .sticky-col-3 { left: 430px; box-shadow: 2px 0 5px rgba(0,0,0,0.04); }
     .sticky-col-3:after { content: none; }
    
    .codigo-col { width: 110px; text-align: left; }
    .descripcion-col { width: 320px; }
    .data-table th.descripcion-col, .data-table td.descripcion-col { text-align: left; white-space: normal; font-weight: 500;}
    .unidad-col { width: 80px; }
    .dia-col { width: 50px; }
    .total-col { width: 80px; font-weight: bold; }
    
    .data-table .group-header-row {
        user-select: none;
        cursor: pointer;
    }
    .data-table .group-header-row:hover td {
        opacity: 0.9;
    }
    .data-table .group-header-row td {
      background-color: var(--group-bg-color);
      color: var(--group-text-color);
      font-weight: 700;
      text-align: left;
      position: sticky;
      top: 48px; /* Height of th */
      z-index: 8;
      transition: background-color var(--transition-fast), opacity var(--transition-fast);
      border-bottom: 1px solid var(--border-color);
      border-top: 1px solid var(--border-color);
    }
     .data-table .group-header-row .chevron-icon {
        display: inline-block;
        transition: transform var(--transition-normal);
        margin-right: 0.75rem;
        width: 20px;
     }
      .data-table .group-header-row .chevron-icon.expanded {
        transform: rotate(90deg);
      }
    
    .data-table .number-input {
      width: 100%;
      border: 1px solid transparent;
      text-align: center;
      background-color: transparent;
      font-family: inherit;
      font-size: inherit;
      border-radius: var(--border-radius-md);
      -moz-appearance: textfield;
      padding: 4px 0;
      margin: -4px 0;
      transition: all var(--transition-fast);
    }
    .data-table .number-input:disabled {
      color: var(--text-primary);
    }
    .data-table .number-input::-webkit-outer-spin-button,
    .data-table .number-input::-webkit-inner-spin-button {
      -webkit-appearance: none; margin: 0;
    }
    .data-table .number-input:focus {
      outline: none;
      background-color: white;
      border-color: var(--primary-500);
      box-shadow: 0 0 0 3px var(--focus-ring-color);
    }
    .total-col {
        background-color: var(--primary-50);
        color: var(--primary-700);
    }
    
    .highlight {
      animation: highlight-glow 1s ease-out;
    }
    .total-flash {
      animation: total-flash 1s ease-out;
    }
  `}</style>
);

const calculateGeneralSummary = (currentData: AppData): SheetData => {
    const itemMap = new Map<string, ItemRow>();

    for (const sheetName of SHEET_NAMES) {
        if (sheetName === 'GENERAL') continue;
        for (const row of currentData[sheetName]) {
            if (row.type === 'item') {
                const summaryItem = itemMap.get(row.codigo);
                if (summaryItem) {
                    const newDias = summaryItem.dias.map((d, i) => d + (row.dias[i] || 0));
                    itemMap.set(row.codigo, { ...summaryItem, dias: newDias });
                } else {
                    itemMap.set(row.codigo, { ...row, dias: [...row.dias] });
                }
            }
        }
    }

    const generalTemplate = initialData['GENERAL'];
    return generalTemplate.map(row => {
        if (row.type === 'item') {
            const summedItem = itemMap.get(row.codigo);
            return { 
              ...row, 
              dias: summedItem ? summedItem.dias : Array(31).fill(0) 
            };
        }
        return row;
    });
};

const getInitialState = (): AppData => {
    const summary = calculateGeneralSummary(initialData);
    return { ...initialData, 'GENERAL': summary };
};

const App: React.FC = () => {
  const [data, setData] = useState<AppData>(getInitialState);
  const [activeSheet, setActiveSheet] = useState<string>(SHEET_NAMES[0]);
  const [isSwitching, setIsSwitching] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<{itemId: number, dayIndex: number} | null>(null);
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set());

  const groupColors = useMemo(() => {
    const allDescriptions = new Set<string>();
    Object.values(data).forEach(sheet => {
      sheet.forEach(row => {
        if (row.type === 'groupHeader') {
          allDescriptions.add(row.descripcion);
        }
      });
    });
    
    const colorMap: { [key: string]: ReturnType<typeof generateColorFromString> } = {};
    Array.from(allDescriptions).forEach(desc => {
      colorMap[desc] = generateColorFromString(desc);
    });
    return colorMap;
  }, [data]);

  useEffect(() => {
    const currentSheetData = data[activeSheet] || [];
    const allGroupDescriptions = new Set<string>();
    currentSheetData.forEach(row => {
      if (row.type === 'groupHeader') {
        allGroupDescriptions.add(row.descripcion);
      }
    });
    setExpandedGroups(allGroupDescriptions);
  }, [activeSheet, data]);

  useEffect(() => {
    if (lastUpdated) {
      const timer = setTimeout(() => setLastUpdated(null), 1000);
      return () => clearTimeout(timer);
    }
  }, [lastUpdated]);

  const handleSheetChange = (sheetName: string) => {
    setIsSwitching(true);
    setTimeout(() => {
      setActiveSheet(sheetName);
      setIsSwitching(false);
    }, 150);
  };
  
  const handleValueChange = useCallback((itemId: number, dayIndex: number, value: string) => {
    if (activeSheet === 'GENERAL') return;

    const numericValue = value === '' ? 0 : parseInt(value, 10);
    if (isNaN(numericValue)) return;

    setData(prevData => {
      const newSheetData = prevData[activeSheet].map(row => {
        if (row.type === 'item' && row.id === itemId) {
          const newDias = [...row.dias];
          newDias[dayIndex] = numericValue;
          return { ...row, dias: newDias };
        }
        return row;
      });

      const newData = { ...prevData, [activeSheet]: newSheetData };
      const summary = calculateGeneralSummary(newData);
      return { ...newData, 'GENERAL': summary };
    });
    setLastUpdated({ itemId, dayIndex });
  }, [activeSheet]);

  const toggleGroup = useCallback((groupDescription: string) => {
    setExpandedGroups(prev => {
      const newSet = new Set(prev);
      if (newSet.has(groupDescription)) {
        newSet.delete(groupDescription);
      } else {
        newSet.add(groupDescription);
      }
      return newSet;
    });
  }, []);

  const handleGroupKeyDown = useCallback((event: React.KeyboardEvent, groupDescription: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleGroup(groupDescription);
    }
  }, [toggleGroup]);
  
  const currentSheetData = data[activeSheet] || [];
  const dayHeaders = Array.from({ length: 31 }, (_, i) => i + 1);

  const groupedData = useMemo(() => {
    const groups: { header: SheetRow, items: ItemRow[] }[] = [];
    let currentGroupItems: ItemRow[] = [];

    currentSheetData.forEach(row => {
        if (row.type === 'groupHeader') {
            groups.push({ header: row, items: [] });
            currentGroupItems = groups[groups.length - 1].items;
        } else if (row.type === 'item') {
            if (groups.length === 0) {
                groups.push({ header: { type: 'groupHeader', descripcion: 'GENERAL' }, items: [] });
                currentGroupItems = groups[groups.length - 1].items;
            }
            currentGroupItems.push(row);
        }
    });
    return groups;
  }, [currentSheetData]);


  return (
    <>
      <AppStyles />
      <div className="app-container" style={{animation: 'fadeIn 0.5s ease-out forwards'}}>
        <div className="tabs">
          {SHEET_NAMES.map(sheetName => {
            const colors = SHEET_COLORS[sheetName] || { base: '#4A5568', active: '#1a202c' };
            const isActive = activeSheet === sheetName;
            return (
              <button
                key={sheetName}
                className={isActive ? 'active' : ''}
                onClick={() => handleSheetChange(sheetName)}
                aria-current={isActive}
                style={{
                    color: isActive ? colors.active : colors.base,
                    borderBottomColor: isActive ? colors.active : 'transparent'
                }}
              >
                {sheetName}
              </button>
            )
          })}
        </div>
        <div className={`table-container ${isSwitching ? 'switching' : ''}`}>
            <table className="data-table">
            <thead>
              <tr>
                <th className="codigo-col sticky-col sticky-col-1">CÓDIGO</th>
                <th className="descripcion-col sticky-col sticky-col-2">DESCRIPCIÓN</th>
                <th className="unidad-col sticky-col sticky-col-3">UNIDAD</th>
                {dayHeaders.map(day => <th key={day} className="dia-col">{day}</th>)}
                <th className="total-col">TOTAL</th>
              </tr>
            </thead>
            {groupedData.map(({ header, items }) => {
              const isExpanded = expandedGroups.has(header.descripcion);
              const colors = groupColors[header.descripcion] || GROUP_PALETTE[0];
              return (
                <tbody 
                    key={header.descripcion}
                    style={{
                        '--group-bg-color': colors.main,
                        '--group-text-color': colors.text,
                        '--row-hover-bg': 'var(--neutral-100)',
                    } as React.CSSProperties}
                >
                  <tr
                    className="group-header-row"
                    onClick={() => toggleGroup(header.descripcion)}
                    onKeyDown={(e) => handleGroupKeyDown(e, header.descripcion)}
                    role="button" tabIndex={0} aria-expanded={isExpanded}
                  >
                    <td colSpan={35}>
                      <span className={`chevron-icon ${isExpanded ? 'expanded' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>
                      </span>
                      {header.descripcion}
                    </td>
                  </tr>
                  {isExpanded && items.map(row => {
                    const total = row.dias.reduce((sum, val) => sum + (val || 0), 0);
                    const isUpdatedRow = lastUpdated?.itemId === row.id;
                    return (
                      <tr key={row.id}>
                        <td className="codigo-col sticky-col sticky-col-1">{row.codigo}</td>
                        <td className="descripcion-col sticky-col sticky-col-2">{row.descripcion}</td>
                        <td className="unidad-col sticky-col sticky-col-3">{row.unidad}</td>
                        {row.dias.map((value, dayIndex) => (
                          <td key={dayIndex} className={`dia-col ${isUpdatedRow && lastUpdated.dayIndex === dayIndex ? 'highlight' : ''}`}>
                            <input
                              type="number"
                              className="number-input"
                              value={value}
                              onChange={(e) => handleValueChange(row.id, dayIndex, e.target.value)}
                              onFocus={(e) => e.target.select()}
                              aria-label={`Value for ${row.descripcion} on day ${dayIndex + 1}`}
                              disabled={activeSheet === 'GENERAL'}
                            />
                          </td>
                        ))}
                        <td className={`total-col ${isUpdatedRow ? 'total-flash' : ''}`}>{total}</td>
                      </tr>
                    );
                  })}
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};

export default App;
