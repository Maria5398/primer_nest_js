import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
//import { Table, Model } from 'sequelize-typescript';

@Entity()
export class tasks {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  description: string;

  @Column({ default: true })
  done: boolean;
}