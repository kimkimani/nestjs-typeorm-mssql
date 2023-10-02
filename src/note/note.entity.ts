import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('notes')

export class Note {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'title', length: 60, nullable: false })
  title: string;

  @Column({ name: 'content', length: 160, nullable: false })
  content: string;

  @Column({ name: 'rating', type: 'int', nullable: true  })
  rating: number;
}
