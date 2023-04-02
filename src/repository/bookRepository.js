import axios from '../custom-axios/axios';

const bookRepository = {
    fetchBooks: () => {
        return axios.get("/books");
    },
    fetchBooksWithPagination: (size = 2, page) => {
        return axios.get("/books/pagination?size="+size+"&page="+page);
    },
    editBook: (id, name, category, author, availableCopies) => {
        return axios.put("/books/edit/" + id , {
            "name" : name,
            "category" : category,
            "authorId" : author,
            "availableCopies" : availableCopies
        })
    },
    addBook: (name, category, author, availableCopies) => {
        return axios.post("/books/add" , {
            "name" : name,
            "category" : category,
            "authorId" : author,
            "availableCopies" : availableCopies  
        })
    },
    deleteBook: (id) => {
        return axios.delete("/books/delete/" + id);
    },
    markAsTaken: (id) => {
        return axios.post("/books/mark/" + id);
    },
    getBook: (id) => {
        return axios.get("/books/" + id);
    },
    getAuthors: () => {
        return axios.get("/books/authors");
    },
    getCategories: () => {
        return axios.get("/books/categories");
    }
}

export default bookRepository;