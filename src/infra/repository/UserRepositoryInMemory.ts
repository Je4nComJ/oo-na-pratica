import { IUserRepository } from "../../domain/repository/IUserRepository";
import { User } from "../../domain/entity/User";

export class UserRepositoryInMemory implements IUserRepository {
    private users: User[] = [];
    
    async create(user: User): Promise<void> {
        this.users.push(user);
    }

    async findById(id: string): Promise<User | null> {
        const user = this.users.find(user => user.id === id);
        return user || null;
    }

    async findByEmail(email: string): Promise<User | null> {
        const user = this.users.find(user => user.email === email);
        return user || null;
    }

    async findAll(): Promise<User[]> {
        return this.users;
    }

    async update(user: User): Promise<boolean> {
        const index = this.users.findIndex(u => u.id === user.id);
        if (index === -1) {
            return false;
        }
        this.users[index] = user;
        return true;
    }

    async delete(id: string): Promise<boolean> {
        const index = this.users.findIndex(user => user.id === id);
        if (index === -1) {
            return false;
        }
        this.users.splice(index, 1);
        return true;
    }

    generateId(): string {
        return (this.users.length + 1).toString();
    }
}