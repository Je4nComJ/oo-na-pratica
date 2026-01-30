import { IUserRepository } from "../../domain/repository/IUserRepository";
import { User } from "../../domain/entity/User";

export class FindUserByIdUseCase {

    constructor(private repository: IUserRepository) {}
   
    async execute(id: string): Promise<User> {
        const user = await this.repository.findById(id);
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    }
}