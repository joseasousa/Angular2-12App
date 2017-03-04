import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'jumbotron',
	templateUrl: 'jumbotron.component.html'
})
export class JumbotronComponent {
	private jbtHeading: string;
	private jbtText: string;
	private jbtBtnText: string;
	private jbtBtnUrl: string;

	constructor() {
		this.jbtHeading = "Hello word";
		this.jbtText = "Mussum Ipsum, cacilds vidis litro abertis.Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! undefined";
		this.jbtBtnText = "Read more"
		this.jbtBtnUrl = "/about"
	}

}