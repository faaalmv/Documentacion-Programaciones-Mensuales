import React, { useState, useCallback, useEffect } from 'react';
import { initialData, SHEET_NAMES } from './constants';
import type { AppData } from './types';

const AppStyles = () => (
  <style>{`
    :root {
      --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      --background-color: #f8f9fa;
      --container-bg-color: #ffffff;
      --header-bg-color: #2E7D32;
      --header-text-color: #ffffff;
      --group-header-bg-color: #E8F5E9;
      --total-col-bg-color: #E3F2FD;
      --row-hover-bg-color: #f1f3f5;
      --row-odd-bg-color: #ffffff;
      --row-even-bg-color: #F7F9F9;
      --focus-ring-color: #1976D2;
      --border-color: #dee2e6;
      --text-color: #212529;
      --highlight-color: #BBDEFB;
    }
    
    @keyframes highlight-fade {
      from { background-color: var(--highlight-color); }
      to { background-color: transparent; }
    }

    body {
      font-family: var(--font-sans);
      background-color: var(--background-color);
      color: var(--text-color);
      margin: 0;
    }
    .app-container {
      padding: 20px;
    }
    .tabs {
      border-bottom: 2px solid var(--border-color);
      margin-bottom: 1rem;
      display: flex;
      flex-wrap: wrap;
    }
    .tabs button {
      padding: 10px 15px;
      border: none;
      background-color: transparent;
      cursor: pointer;
      margin-right: 5px;
      border-bottom: 3px solid transparent;
      transition: all 0.2s ease-in-out;
      font-size: 1rem;
    }
    .tabs button:hover {
      background-color: var(--row-hover-bg-color);
    }
    .tabs button.active {
      border-bottom: 3px solid var(--header-bg-color);
      font-weight: bold;
      color: var(--header-bg-color);
    }
    .table-container {
        overflow-x: auto;
        border: 1px solid var(--border-color);
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    }
    .data-table {
      border-collapse: collapse;
      width: 100%;
      font-size: 11pt;
      table-layout: fixed;
    }
    .data-table th, .data-table td {
      border: 1px solid var(--border-color);
      padding: 8px 10px;
      text-align: center;
      vertical-align: middle;
      white-space: nowrap;
      transition: background-color 0.3s;
    }
    .data-table th {
      background-color: var(--header-bg-color);
      color: var(--header-text-color);
      font-weight: bold;
      position: sticky;
      top: 0;
      z-index: 10;
    }
    
    .data-table tbody tr:nth-child(even) {
        background-color: var(--row-even-bg-color);
    }
    .data-table tbody tr:nth-child(odd) {
        background-color: var(--row-odd-bg-color);
    }
    .data-table tbody tr:not(.group-header-row):hover {
        background-color: var(--row-hover-bg-color);
    }

    .sticky-col {
        position: sticky;
        background-color: inherit; /* Inherit from tr for alternating colors */
        z-index: 5;
    }
    .data-table th.sticky-col {
        z-index: 15;
    }
    .codigo-col { width: 110px; }
    .descripcion-col { width: 320px; text-align: left; white-space: normal; }
    .unidad-col { width: 80px; }
    .dia-col { width: 50px; }
    .total-col { width: 80px; font-weight: bold; }
    
    .sticky-col-1 { left: 0; }
    .sticky-col-2 { left: 110px; }
    .sticky-col-3 { left: 430px; }

    .data-table .group-header-row td {
      background-color: var(--group-header-bg-color);
      font-weight: bold;
      text-align: left;
      border-left: 5px solid var(--header-bg-color);
      position: sticky;
      top: 0;
    }
    .data-table .number-input {
      width: 100%;
      border: none;
      text-align: center;
      background-color: transparent;
      font-family: inherit;
      font-size: inherit;
      -moz-appearance: textfield;
      padding: 0;
      margin: 0;
    }
    .data-table .number-input::-webkit-outer-spin-button,
    .data-table .number-input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    .data-table .number-input:focus {
      outline: 2px solid var(--focus-ring-color);
      background-color: #ffffff;
      box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.2);
      border-radius: 2px;
    }
    .total-col {
        background-color: var(--total-col-bg-color);
    }
    
    .highlight {
      animation: highlight-fade 1s ease-out;
    }
  `}</style>
);

const App: React.FC = () => {
  const [data, setData] = useState<AppData>(initialData);
  const [activeSheet, setActiveSheet] = useState<string>(SHEET_NAMES[0]);
  const [lastUpdated, setLastUpdated] = useState<{itemId: number, dayIndex: number} | null>(null);

  useEffect(() => {
    if (lastUpdated) {
      const timer = setTimeout(() => setLastUpdated(null), 1000);
      return () => clearTimeout(timer);
    }
  }, [lastUpdated]);

  const handleValueChange = useCallback((itemId: number, dayIndex: number, value: string) => {
    const numericValue = parseInt(value, 10);
    if (isNaN(numericValue) && value !== '') return;

    setData(prevData => {
      const currentSheetData = prevData[activeSheet];
      const newSheetData = currentSheetData.map(row => {
        if (row.type === 'item' && row.id === itemId) {
          const newDias = [...row.dias];
          newDias[dayIndex] = isNaN(numericValue) ? 0 : numericValue;
          return { ...row, dias: newDias };
        }
        return row;
      });

      return {
        ...prevData,
        [activeSheet]: newSheetData,
      };
    });
    setLastUpdated({ itemId, dayIndex });
  }, [activeSheet]);
  
  const currentSheetData = data[activeSheet] || [];
  const dayHeaders = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <>
      <AppStyles />
      <div className="app-container">
        <div className="tabs">
          {SHEET_NAMES.map(sheetName => (
            <button
              key={sheetName}
              className={activeSheet === sheetName ? 'active' : ''}
              onClick={() => setActiveSheet(sheetName)}
              aria-current={activeSheet === sheetName}
            >
              {sheetName}
            </button>
          ))}
        </div>
        <div className="table-container">
            <table className="data-table">
            <thead>
              <tr>
                <th className="codigo-col sticky-col sticky-col-1">CÓDIGO</th>
                <th className="descripcion-col sticky-col sticky-col-2">DESCRIPCIÓN</th>
                <th className="unidad-col sticky-col sticky-col-3">UNIDAD</th>
                {dayHeaders.map(day => (
                  <th key={day} className="dia-col">{day}</th>
                ))}
                <th className="total-col">TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {currentSheetData.map((row, rowIndex) => {
                if (row.type === 'groupHeader') {
                  return (
                    <tr key={`group-${rowIndex}`} className="group-header-row">
                      <td colSpan={35}>{row.descripcion}</td>
                    </tr>
                  );
                }
                
                if (row.type === 'item') {
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
                          />
                        </td>
                      ))}
                      <td className={`total-col ${isUpdatedRow ? 'highlight' : ''}`}>{total}</td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default App;
