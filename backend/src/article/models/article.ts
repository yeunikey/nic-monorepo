import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Article {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    authorName: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    doi: string;

    @Column({ type: 'timestamp' })
    publishedAt: Date;

}
