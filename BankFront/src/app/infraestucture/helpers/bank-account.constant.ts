import { IBankAccountOption } from './bank-account.interfaces';

export const LIST_ACTIONS_BANK_ACCOUNT: IBankAccountOption[] = [
  {
    label: 'Depósito en sucursal',
    value: 'AC1001',
  },
  {
    label: 'Depósito desde cajero',
    value: 'AC1002',
  },
  {
    label: 'Depósito desde otra cuenta',
    value: 'AC1003',
  },
  {
    label: 'Compra con la tarjeta en establecimiento físico',
    value: 'AC1004',
  },
  {
    label: 'Compra con la tarjeta en pagina web',
    value: 'AC1005',
  },
  {
    label: 'Retiro en cajero',
    value: 'AC1006',
  },
];
