export interface User {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  address: Address;
}

export interface Address {
  city: string
  province: string
  street: string
  zipcode: string
}

export interface UserCreateRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  address: Address;
}

export interface UserUpdateRequest {
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  address?: Address;
}
