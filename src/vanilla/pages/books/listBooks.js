import Api from 'data/books/booksApi';


class ListBooks {

	constructor(){
		this.arrBooks = this.getAllBooks();
		this.generateList(this.arrBooks);
	}

	getItemBook(book){
		let template = `
			<li>
				<span>${book.title}</span>
				<span> - </span>
				<span>${book.author}</span>
				<span> - </span>
				<span>${book.published}</span>
			</li>
		`;
		return template;
	}

	generateList(listBooks){
		let listBooksHTML = [];

		listBooks.forEach((item, idx) => {
			listBooksHTML.push(this.getItemBook(item));
		})

		let ul = `
			<ul>
				${listBooksHTML.join('')}
			</ul>
		`;
		
		let container = document.getElementById('container');
		container.innerHTML = ul;
	}

	getAllBooks(){
		return Api.getAll();
	}
}

export default ListBooks;