import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const BookAdd = (props) => {

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
        const name = formData.name;
        const category = formData.category;
        const authorId = formData.authorId;
        const availableCopies = formData.availableCopies;

        props.onAdd(name, category, authorId, availableCopies);
        navigate("/")
    }

    return (
        <form onSubmit={ onFormSubmit }>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" name="name" aria-describedby="emailHelp" onChange={ handleChange }/>
            </div>
            <div className="form-group">
                <label htmlFor="category">Category</label>
                <select name="category" className='form-control' onChange={ handleChange }>
                    {
                        props.categories.map((category) => {
                            return <option key={ category } value={ category }>{ category }</option>
                        })
                    }
                </select>
            </div>

            <div className='form-group'>
                <label htmlFor="authorId">Author</label>
                <select name='authorId' className='form-control' onChange={ handleChange }>
                    {
                        props.authors.map((author) => {
                            return <option key={ author.id } value={ author.id }>{ author.name }</option>
                        })
                    }
                </select>
            </div>
            
           
            <button type="submit" className="btn btn-primary">Add</button>
        </form>
    )
}

export default BookAdd;