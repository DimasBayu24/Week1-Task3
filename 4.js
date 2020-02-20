//4th-answer

// Aplikasi Perpustakaan

const library = [
  { title: "A", author: "1", status: true },
  { title: "B", author: "2", status: false },
  { title: "D", author: "3", status: true },
  { title: "E", author: "4", status: true },
  { title: "F", author: "5", status: false },
  { title: "G", author: "6", status: true },
  { title: "H", author: "7", status: true },



];

function findBookStatus(title) {
  let book = library.find(book => book.title == title);                 //book adalah nilai dari mencocokkan judul dengan function input judul
  if (book.status == true) {                                               //kondisi apabila status terpenuhi atau tidak dan tindakan selanjutnya
    return console.log("Book of " + book.title + " is AVAILABLE");
  } else {
    return console.log("Book of " + book.title + " is NOT AVAILABLE");
  }
}

findBookStatus("B");                                                        //judul buku yang dicari

function findBooksAvailability(status) {                                    //function mengecek ketersediaan buku
  for (const book of library) {
    if (book.status == status) console.log(book);
  }
}

findBooksAvailability(true);                                                  //mengecek availability dan unavailability buku (dapat diisi  dengan boolean)
findBooksAvailability(false);    