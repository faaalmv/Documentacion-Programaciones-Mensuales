
export interface ItemRow {
  type: "item";
  id: number;
  codigo: string;
  descripcion: string;
  unidad: string;
  dias: number[];
}

export interface GroupHeaderRow {
  type: "groupHeader";
  descripcion:string;
}

export type SheetRow = ItemRow | GroupHeaderRow;

export type SheetData = SheetRow[];

export interface AppData {
  [sheetName: string]: SheetData;
}
