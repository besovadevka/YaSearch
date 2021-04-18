export const processingData = (booksList: any) => {
  return booksList.map((bookItem: any) => {
    return {
      title: bookItem.title,
      author: bookItem.author_name ? bookItem.author_name[0] : 'Unknown',
      coverId: bookItem.cover_i,
      publishData: bookItem.first_publish_year,
      publisher: bookItem.publisher ? bookItem.publisher[0] : 'Unknown',
      isbn: bookItem.isbn ? bookItem.isbn[0] : 'Unknown',
    };
  });
};
