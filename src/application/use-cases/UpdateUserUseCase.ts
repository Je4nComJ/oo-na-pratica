import { IUserRepository } from "../../domain/repository/IUserRepository";
import { User } from "../../domain/entity/User";
import { EditUserDTO } from "../dtos/EditUserDTO ";

export class UpdateUserUseCase {

    constructor(private repository: IUserRepository) {}
   
    async execute(dto: EditUserDTO): Promise<boolean> {
        const existingUser = await this.repository.findById(dto.id);
        if (!existingUser) {
            throw new Error("User not found");
        }
        const user = new User(dto.id, dto.name, dto.email, existingUser.password);
        return this.repository.update(user);
    }
}