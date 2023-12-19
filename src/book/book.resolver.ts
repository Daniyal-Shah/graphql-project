import { Query, Resolver } from '@nestjs/graphql';

@Resolver('Book')
export class BookResolver {
  @Query('books')
  getAllBooks() {
    return [
      {
        id: 1,
        title: 'Harry Potter',
        price: 100,
      },

      {
        id: 2,
        title: 'Al-Chemist',
        price: 2100,
      },
      {
        id: 3,
        title: 'The fault in our stars',
        price: 1100,
      },
    ];
  }
}
