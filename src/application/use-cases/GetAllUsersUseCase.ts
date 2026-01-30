import { IUserRepository } from "../../domain/repository/IUserRepository";
import { User } from "../../domain/entity/User";

export class GetAllUsersUseCase {

    constructor(private repository: IUserRepository) {}
   
    async execute(): Promise<User[]> {
        const users = await this.repository.findAll();
        return users;
    }
}