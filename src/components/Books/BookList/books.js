import Book from '../Book/book';
const BookList = (props) =>{

    return (
        <div>
            <div className="mt-3 d-flex justify-content-around">
                {
                    props.books.map((book) => {
                        return <Book key={ book.id } 
                                    book={ book } 
                                    onEdit={ props.onEdit } 
                                    onDelete= { props.onDelete } 
                                    onMark={ props.onMark }/>
                    })
                }
            </div>
            <div className='d-flex justify-content-center'>
                <button className="btn btn-dark" onMouseDown={ () => props.onPreviousPage() }>Previous</button>
                {
                      Array.from(Array(props.totalPages), (e, i) => {
                        return <button className='text'>{i}</button>
                      })
                    }{
                }
                <button className="btn btn-dark" onMouseDown={ () => props.onNextPage() }>Next</button>
            </div>
        </div>
    )
}

export default BookList;