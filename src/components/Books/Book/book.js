import image from '../../../bg-image.jpg';
import { Link } from 'react-router-dom';

const book = (props) => {
    return(
        <div className="card" style={{width: '18rem' }}>
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{ props.book.name }</h5>
                <p className="card-text">Available copies: { props.book.availableCopies }</p>
                <p className="card-text">Author: { props.book.author.name }</p>
                <div className='d-flex justify-content-center'>
                    <Link className='btn btn-warning mx-1' to={ '/books/edit/' + props.book.id } onClick={ () => props.onEdit(props.book.id) }>
                        Edit
                    </Link>

                    <Link className='btn btn-danger mx-1' onClick={ () => props.onDelete(props.book.id) }>
                        Delete
                    </Link>

                    <Link className='btn btn-primary mx-1' onClick={ () => props.onMark(props.book.id) } >
                        Taken
                    </Link>
                </div>       
            </div>
        </div>
    )
}

export default book;