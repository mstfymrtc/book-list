export function selectBook(book) {
  return {
    type: "BOOK_SELECTED",
    payload: book
  };
}

//TODO:ACTIONLAR ÇALIŞINCA, TÜM REDUCARLARA BU İSTEK GİDER.
//TODO:TYPE'I UNIQUE YAPMAK LAZIM.
