import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToMany,
  } from 'typeorm';
import { User } from './user.entity';


@Entity()
export class Song {
    @PrimaryGeneratedColumn()
    songId: number;
    
    @Column({ length: 100 })
    title: string;
    
    @Column({ length: 100 })
    genre: string;
    
    @Column({ length: 100 })
    year: string;
    
    @Column({ length: 100 })
    duration: string;
    
    @ManyToMany(() => User, user => user.likedSongs)
    users: User[];

}


    