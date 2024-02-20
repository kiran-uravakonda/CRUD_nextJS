import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';

@Controller('book')
export class BookController {
    constructor(private bookService: BookService) {}

    @Get()
  async getAllBooks(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  @Post()
  async createBook(
    @Body()
    book
  ): Promise<Book> {
    return this.bookService.create(book);
  }

  @Get(':id')
  async getBook(
    @Param('id')
    id: string,
  ): Promise<Book> {
    return this.bookService.findById(id);
  }


  @Put(':id')
  async updateBook(
    @Param('id')
    id: string,
    @Body()
    book
  ): Promise<Book> {
    return this.bookService.updateById(id, book);
  }

  @Delete(':id')
  async deleteBook(
    @Param('id')
    id: string,
  ): Promise<Book> {
    return this.bookService.deleteById(id);
  }

  @Delete()
  async deleteAllBooks(): Promise<string> {
      await this.bookService.deleteAll();
      return 'data was deleted successfully'
    }



}
   
  




