import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('team')
export class Team {

    @PrimaryGeneratedColumn()
    private id: number;

    @Column()
    private fullName: string;

    @Column()
    private position: string;

    @Column()
    private image: string;

    @Column()
    private priority: number;

}