export { booksTemplate, type bookModel };

interface bookModel {
    id:string;
    title:string;
    author: string;
    price: number;
}

const booksTemplate = (book:bookModel) => /*html*/ `
<ul>
    <li book-id="${book.id}">
        <article>
            <h3>${book.title}</h3>
            <p>${book.author}</p>
            <p>R$ ${book.price}</p>
            <button class="column button">Delete</button>
        </article>
    </li>
</ul>
`;
