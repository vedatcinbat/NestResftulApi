import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {User} from '../Entities/user.entity';
import {Song} from '../Entities/song.entity';

@Injectable()
export class SongService {
    constructor(
        @InjectRepository(Song)
        private songRepository: Repository<Song>
    ) {}

    async findAll(): Promise<Song[]> {
        return this.songRepository.find();
    }

    async findOne(id: number): Promise<Song> {
        return this.songRepository.findOne({where: {songId: id}});
    }

    async create(song: Partial<Song>): Promise<Song> {
        return this.songRepository.save(song);
    }

    async update(id: number, song: Partial<Song>): Promise<Song> {
        await this.songRepository.update(id, song);
        return this.songRepository.findOne({where: {songId: id}});
    }

    async remove(id: number): Promise<void> {
        await this.songRepository.delete(id);
    }
}