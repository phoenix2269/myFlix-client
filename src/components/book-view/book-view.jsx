export const BookView = ({ book }) => {
    return (
        <div>
            <div>
                <img src={book.image} />
            </div>
            <div>
                <span>Title: </span>
                <span>{book.title}</span>
            </div>
            <div>
                <span>author: </span>
                <span>{book.author}</span>
            </div>
        </div>
    );
};