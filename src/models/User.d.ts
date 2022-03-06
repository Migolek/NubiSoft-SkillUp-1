import { Address } from '@/models/Address';

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
