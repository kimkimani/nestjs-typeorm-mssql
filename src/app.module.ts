import { Module } from '@nestjs/common';
import { NotesModule } from './note/note.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from './note/note.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      password: '123@kim',
      database: 'note',
      options: {
        encrypt: false, // MSSQL-specific option
      },
      synchronize: true, //use this with development enviroment
      entities: [Note],
    }),
    NotesModule
  ],
})
export class AppModule {}
