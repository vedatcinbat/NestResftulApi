import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../Entities/user.entity';
import { Song } from '../Entities/song.entity';


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        @InjectRepository(Song)
        private songRepository: Repository<Song>
    ) {}

    async findAll(): Promise<User[]> {
        return this.userRepository.find({
            relations: ['likedSongs']
        });
    }

    async findOneUser(id: number): Promise<User> {
        return this.userRepository.findOne({where: {userId: id}});
    }

    async create(user: Partial<User>): Promise<User> {
        return this.userRepository.save(user);
    }

    async update(id: number, user: Partial<User>): Promise<User> {
        await this.userRepository.update(id, user);
        return this.userRepository.findOne({where: {userId: id}});
    }

    async remove(id: number): Promise<void> {
        await this.userRepository.delete(id);
    }


    async likeSong(userId: number, songId: number): Promise<User|Song> {
        const user = await this.userRepository.findOne({
            relations: ['likedSongs'],
            where: {userId}
        });
        const song = await this.songRepository.findOne({where : {songId}});

        if(!user || !song) {
            return null;
        }

        user.likedSongs.push(song);
        await this.userRepository.save(user);

        return user;
    }

}