import { CheckBoxType } from './storeType';

type LoginFormValues = {
  email: string;
  password: string;
};

type CatalogOptionsType = {
  pageNumber: number;
  pageLimit: number;
  sortColumn: string;
  sortDirection: string;
  tags: CheckBoxType[];
  minPrice: number;
  maxPrice: number;
};

export type { CatalogOptionsType };
export default LoginFormValues;
