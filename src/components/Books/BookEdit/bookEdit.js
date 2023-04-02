import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const BookEdit = (props) => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name : "",
        category : "",
        authorId : 0,
        availableCopies : 0   
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name !== "" ? formData.name : props.selectedBook.name;
        const category = formData.category !== "" ? formData.category : props.selectedBook.category;
        const authorId = formData.authorId !== 0 ? formData.authorId : props.selectedBook.author.id;
        const availableCopies = formData.availableCopies !== 0 ? formData.availableCopies : props.selectedBook.availableCopies;

        props.onEdit(props.selectedBook.id, name, category, authorId, availableCopies);
        navigate("/")
    }

    return (
        <form onSubmit={ onFormSubmit }>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" name="name" aria-describedby="emailHelp" placeholder={ props.selectedBook.name } onChange={ handleChange }/>
            </div>
            <div className="form-group">
                <label htmlFor="category">Category</label>
                <select name="category" className='form-control' onChange={ handleChange }>
                    {
                        props.categories.map((category) => {
                            if(props.selectedBook.category !== undefined && props.selectedBook.category === category){
                                return <option key={ category } selected={ props.selectedBook.category } value={ category }>{ category }</option>
                            }else{
                                return <option key={ category } value={ category }>{ category }</option>
                            }
                        })
                    }
                </select>
            </div>

            <div className='form-group'>
                <label htmlFor="authorId">Author</label>
                <select name='authorId' className='form-control' onChange={ handleChange }>
                    {
                        props.authors.map((author) => {
                            if(props.selectedBook.author !== undefined && props.selectedBook.author.id === author.id){
                                return <option key={ author.id } selected={ author.id } value={ author.id }>{ author.name }</option>
                            }else
                                return <option key={ author.id } value={ author.id }>{ author.name }</option>
                            }
                        )
                    }
                </select>
            </div>
            
           
            <button type="submit" className="btn btn-primary">Edit</button>
        </form>
    )
}

export default BookEdit;