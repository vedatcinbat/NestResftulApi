import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';
import { SongService } from '../services/song.service';
import { Song } from '../Entities/song.entity'

@Controller('songs')
export class SongController {
    constructor(private readonly songService: SongService) {}

    @Get()
    async findAll(): Promise<Song[]> {
        return this.songService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Song> {
        return this.songService.findOne(id);
    }

    @Post()
    async create(@Body() song: Partial<Song>): Promise<Song> {
        return this.songService.create(song);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() song: Partial<Song>): Promise<Song> {
        return this.songService.update(id, song);
    }

    @Delete(':id')
    async remove(@Param('id') id: number): Promise<void> {
        return this.songService.remove(id);
    }
    
}