export interface Address {
  city: string;
  name: string;
  postalCode: string;
  province: string;
  type: string;
}

export interface User {
  address: Address;
  birthday: string;
  createdAt: number;
  email: string;
  fullname: string;
  nationality: string;
  nick: string;
  password: string;
}
