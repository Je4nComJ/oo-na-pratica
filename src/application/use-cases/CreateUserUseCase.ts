import { User } from "../../domain/entity/User";
import { IUserRepository } from "../../domain/repository/IUserRepository";
import { CreateUserDTO } from "../dtos/CreateUserDTO";

export class CreateUserUseCase {

    constructor(private repository: IUserRepository) {}
   
    async execute(dto: CreateUserDTO): Promise<User> {
        
        const user = new User(
            this.repository.generateId(),
            dto.name, 
            dto.email, 
            dto.password
        );

        await this.repository.create(user);
        return user;
    }
}