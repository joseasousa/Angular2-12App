import { TestBed, inject } from '@angular/core/testing';

import { JumbotronComponent } from './jumbotron.component';

describe('a jumbotron component', () => {
	let component: JumbotronComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				JumbotronComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([JumbotronComponent], (JumbotronComponent) => {
		component = JumbotronComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});