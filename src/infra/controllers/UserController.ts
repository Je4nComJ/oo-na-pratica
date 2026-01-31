import { UpdateUserUseCase } from './../../application/use-cases/UpdateUserUseCase';
import { CreateUserDTO } from "../../application/dtos/CreateUserDTO";
import { EditUserDTO } from "../../application/dtos/EditUserDTO ";
import { CreateUserUseCase } from "../../application/use-cases/CreateUserUseCase";
import { FindUserByEmailUseCase } from "../../application/use-cases/FindUserByEmailUseCase";
import { FindUserByIdUseCase } from "../../application/use-cases/FindUserByIdUseCase";
import { GetAllUsersUseCase } from "../../application/use-cases/GetAllUsersUseCase";
import { UserRepositoryInMemory } from "../repository/UserRepositoryInMemory";
import { Request, Response } from "express";
import { DeleteUserUseCase } from '../../application/use-cases/DeleteUserUseCase';

export class UserController {
    
    private repository: UserRepositoryInMemory;

    constructor() {
        this.repository = new UserRepositoryInMemory();
    }

  async getAllUsers(req: Request , res: Response) {
    const useCase = new GetAllUsersUseCase(this.repository);
    const users = await useCase.execute();
    res.json({ data: users });
  }

  async createUser(req: Request , res: Response) {
    const useCase = new CreateUserUseCase(this.repository);
    const dto = new CreateUserDTO(
        req.body.name,
        req.body.email,
        req.body.password);
    const user = await useCase.execute(dto);
    res.status(201).json({ data: user });
  }

  async getUserById(req: Request , res: Response) {
    const { id } = req.params;
    if(!this.validateId(id, res)) {
      return;
    }
    const useCase = new FindUserByIdUseCase(this.repository);
    const user = await useCase.execute(id);
    res.json({ data: user });  
  }

  async getUserByEmail(req: Request , res: Response) {
    const { email } = req.params;
        if(!this.validateEmail(email, res)) {
      return;
    }
    const useCase = new FindUserByEmailUseCase(this.repository);
    const user = await useCase.execute(email);
    res.json({ data: user });
  }

  async updateUser(req: Request , res: Response) {
    const { id } = req.params;
    const useCase = new UpdateUserUseCase(this.repository);
    const dto = new EditUserDTO(
        req.body.name,
        req.body.email,
        req.body.password);
    const user = await useCase.execute(dto);
    res.json({ data: user });
  }

  async deleteUser(req: Request , res: Response) {
    const { id } = req.params;
    if(!this.validateId(id, res)) {
      return;
    }
    const useCase = new DeleteUserUseCase(this.repository);
    await useCase.execute(id);
    res.json({ message: `delete user with id ${id}...` });
  }

  private validateId(id: unknown,res: Response): id is string {
    if (!id || typeof id !== "string") {
        res.status(400).json({ message: "ID inválido" });
        return false;
    }
    return true;
    }

      private validateEmail(email: unknown,res: Response): email is string {
    if (!email || typeof email !== "string") {
        res.status(400).json({ message: "Email inválido" });
        return false;
    }
    return true;
    }
}