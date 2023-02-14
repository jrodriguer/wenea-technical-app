export interface User {
  id?: string;
  email: string;
  password: string;
  name: string;
  address: Address;
}

export interface Address {
  city: string
  province: string
  street: string
  zip: string
}

export interface UserCreateRequest {
  email: string;
  password: string;
  name: string;
  address: Address;
}

export interface UserUpdateRequest {
  email?: string;
  password?: string;
  name?: string;
  address?: Address;
}
