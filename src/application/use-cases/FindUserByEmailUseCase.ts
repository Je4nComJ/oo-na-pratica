import { IUserRepository } from "../../domain/repository/IUserRepository";
import { User } from "../../domain/entity/User";

export class FindUserByEmailUseCase {

    constructor(private repository: IUserRepository) {}
   
    async execute(email: string): Promise<User> {
        const user = await this.repository.findByEmail(email);
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    }
}