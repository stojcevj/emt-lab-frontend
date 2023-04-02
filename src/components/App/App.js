import './App.css';
import bookRepository from '../../repository/bookRepository';
import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from '../Header/header';
import BookList from '../Books/BookList/books'
import BookEdit from '../Books/BookEdit/bookEdit';
import BookAdd from '../Books/BookAdd/bookAdd';
import Categories from '../Categories/categories';

function App() {

  const [books, setBooks] = useState(Array);
  const [categories, setCategories] = useState(Array);
  const [authors, setAuthors] = useState(Array);
  const [selectedBook, setSelectedBook] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() =>{
    loadBooks();
    getCategories();
    getAuthors();
  },[]);

  const loadBooks = (currPage) =>{
    bookRepository.fetchBooksWithPagination(5,currPage)
      .then((data) => {
        console.log(data.data);
        setBooks(data.data.content);
        setTotalPages(Math.ceil(Number(data.data['totalElements'] - 1 ) / 5));
      })
  };

  const nextPage = () => {
    loadBooks(currentPage + 1);
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    loadBooks(currentPage - 1);
    setCurrentPage(currentPage - 1);
  };

  const onEdit = (id, name, category, author, availableCopies) => {
    bookRepository.editBook(id, name, category, author, availableCopies)
      .then(() => {
        loadBooks(currentPage);
      })
  };

  const onAdd = (name, category, author, availableCopies) => {
    console.log(category);
    bookRepository.addBook(name, category, author, availableCopies)
      .then(()=>{
        loadBooks(currentPage);
      })
  }

  const onDelete = (id) => {
    bookRepository.deleteBook(id)
      .then(() => {
        loadBooks(currentPage);
      })
  };

  const markAsTaken = (id) => {
    bookRepository.markAsTaken(id)
      .then(() => {
        loadBooks(currentPage);
      })
  };

  const getBook = (id) => {
    bookRepository.getBook(id)
      .then((data) => {
        setSelectedBook(data.data);
      })
  };

  const getAuthors = () => {
    bookRepository.getAuthors()
      .then((data) => {
        setAuthors(data.data);
      })
  };

  const getCategories = () => {
    bookRepository.getCategories()
      .then((data) => {
        setCategories(data.data);
      })
  }

  return (
    <Router>
      <Header />
      <main>
          <div className='container'>
            <Routes>
              <Route path="/" element={ <BookList books={ books } 
                                                  onEdit={ getBook }
                                                  onDelete={ onDelete } 
                                                  onMark={ markAsTaken }
                                                  onNextPage= { nextPage }
                                                  onPreviousPage= { previousPage }
                                                  totalPages={ totalPages }/> }/>

              <Route path="/books" element={ <BookList books={ books } 
                                                  onEdit={ getBook }
                                                  onDelete={ onDelete } 
                                                  onMark={ markAsTaken }
                                                  onNextPage= { nextPage }
                                                  onPreviousPage= { previousPage }
                                                  totalPages={ totalPages }/> }/>

              <Route path="/books/edit/:id" element= { <BookEdit selectedBook= { selectedBook } 
                                                                 categories= { categories } 
                                                                 authors = { authors }
                                                                 onEdit = { onEdit }/> } />
              
              <Route path="/addBook" element= { <BookAdd   categories= { categories } 
                                                                 authors = { authors }
                                                                 onAdd = { onAdd }/> } />

              <Route path="/categories" element= { <Categories categories= { categories } /> } /> 
            </Routes>
          </div>
      </main>
    </Router>
  )
}

export default App;
