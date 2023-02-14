import * as firebaseAdmin from 'firebase-admin';
import * as bcrypt from 'bcrypt';

import { User, Address, UserCreateRequest, UserUpdateRequest } from '../models/user.model';

const saltRounds = 10;

export class UserService {
	private db = firebaseAdmin.firestore();

	public async getUsers(): Promise<User[]> {
		const usersSnapshot = await this.db.collection('users').get();
		return usersSnapshot.docs.map((doc) => {
			return { id: doc.id, ...doc.data() } as User;
		});
	}

	public async getUser(id: string): Promise<User> {
		const userDoc = await this.db.collection('users').doc(id).get();
		return { id: userDoc.id, ...userDoc.data() } as User;
	}

	public async createUser(userCreateRequest: UserCreateRequest): Promise<User> {
		const password = await bcrypt.hash(userCreateRequest.password, saltRounds);
		const address: Address = {
            street: userCreateRequest.address.street,
            city: userCreateRequest.address.city,
            province: userCreateRequest.address.province,
            zip: userCreateRequest.address.zip
        };
        const user: User = {
            email: userCreateRequest.email,
            password,
            name: userCreateRequest.name,
            address
        };
		const userRef = this.db.collection('users').doc();
        await userRef.set(user);
        return { id: userRef.id, ...user };
	}

    public async updateUser(userId: string, userUpdateRequest: UserUpdateRequest): Promise<void> {
        const userRef = this.db.collection('users').doc(userId);

        const updatedUser = await userRef.get().then((snapshot) => {
            const data = snapshot.data();
            if (!data) {
              throw new Error(`User with ID "${userId}" not found`);
            }
            return {
                ...data,
                name: userUpdateRequest.name || data.name,
                email: userUpdateRequest.email || data.email,
                address: {
                    ...(data.address || {}),
                    ...(userUpdateRequest.address
                    ? {
                        street: userUpdateRequest.address.street || data.address?.street,
                        city: userUpdateRequest.address.city || data.address?.city,
                        state: userUpdateRequest.address.province || data.address?.province,
                        zip: userUpdateRequest.address.zip || data.address?.zip,
                    }
                    : {}),
                },
            };
        });

      await userRef.update(updatedUser);
  }

}
