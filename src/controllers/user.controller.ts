import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from '../Entities/user.entity'
import { Song } from '../Entities/song.entity'

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<User> {
        return this.userService.findOneUser(id);
    }

    @Post()
    async create(@Body() user: Partial<User>): Promise<User> {
        return this.userService.create(user);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() user: Partial<User>): Promise<User> {
        return this.userService.update(id, user);
    }

    @Delete(':id')
    async remove(@Param('id') id: number): Promise<void> {
        return this.userService.remove(id);
    }

    @Patch(':userId/like-song/:songId')
    async likeSong(@Param('userId') userId: number, @Param('songId') songId: number): Promise<User|Song> {
        return this.userService.likeSong(userId, songId);
    }
    
}