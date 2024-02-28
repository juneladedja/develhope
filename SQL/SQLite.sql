SELECT * FROM demo;
CREATE TABLE Libri (
    book_id INT PRIMARY KEY,
    titolo VARCHAR(255),
    autore VARCHAR(255),
    genere VARCHAR(50),
    pubblicato_anno INT,
    isbn VARCHAR(13),
    prezzo DECIMAL(10, 2),
    valutazione DECIMAL(3, 2),
    stock_count INT
);
