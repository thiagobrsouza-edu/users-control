/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hashSync } from 'bcrypt';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserPasswordDto } from './dto/update-user-pass.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { name, email, password, profile} = createUserDto;
    const exists = await this.repository.findOne({where: {email: email}});
    if (exists) {
      throw new HttpException('Usuário já cadastrado!', HttpStatus.CONFLICT);
    }
    const newUser = this.repository.create({name, email, password, profile});
    await this.repository.save(newUser);
    delete newUser.password;
    return newUser;
  }

  async findAll() {
    return this.repository.find({select: ['id', 'name', 'email', 'profile']});
  }

  async findOne(id: number) {
    const user = await this.repository.findOne({where: {id: id}});
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const userFound = await this.repository.findOne({where: {id: id}});
    const exists = await this.repository.findOne({where: {email: updateUserDto.email}});
    if (exists && (exists.id !== userFound.id)) {
      throw new HttpException('User already exists!', HttpStatus.CONFLICT);
    }
    this.repository.merge(userFound, updateUserDto);
    await this.repository.save(userFound);
    delete userFound.password;
    return userFound;
  }

  async updatePassword(id: number, updateUserPassDto: UpdateUserPasswordDto) {
    const user = await this.repository.findOne({where: {id: id}});
    this.repository.merge(user, updateUserPassDto);
    user.password = hashSync(user.password, 8);
    await this.repository.save(user);
    return 'Senha atualizada com sucesso!';
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
