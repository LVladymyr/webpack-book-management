import Api from 'data/authors/authorsApi';


class ListAuthors {

	constructor(){
		this.arrAuthors = this.getAllBooks();
		this.generateList(this.arrAuthors);
	}

	getItemAuthor(author){
		let template = `
			<li>
				<span>${author.author}</span>
				<span> - </span>
				<span>${author.birthYear}</span>
			</li>
		`;
		return template;
	}

	generateList(listAuthors){
		let listAuthorsHTML = [];

		listAuthors.forEach((item, idx) => {
			listAuthorsHTML.push(this.getItemAuthor(item));
		})

		let ul = `
			<ul>
				${listAuthorsHTML.join('')}
			</ul>
		`;
		
		let container = document.getElementById('container');
		container.innerHTML = ul;
	}

	getAllBooks(){
		return Api.getAll();
	}
}

export default ListAuthors;