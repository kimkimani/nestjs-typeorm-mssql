import { IsNotEmpty,IsInt } from 'class-validator';

export class UpdateNoteDto {
  @IsNotEmpty({ message: 'title field cannot be empty' })
  title: string;

  @IsNotEmpty({ message: 'content field cannot be empty' })
  content: string;

  @IsNotEmpty({ message: 'The field rating cannot be empty' })
  @IsInt({ message: 'rating must be of type number' })
  rating: number;
}
