export interface IBankAccountOption {
  label: string;
  value: string;
}

export interface IBankActions {
  [key: string]: () => void;
}
