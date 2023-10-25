import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-search-bar',
	templateUrl: './search-bar.component.html',
	styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
	searchForm: FormGroup;
	searchImgPath = "/assets/svg/search.svg"
	microphoneImgPath = "/assets/svg/voice-search-icon.svg"


	constructor(private fb: FormBuilder) {
		this.searchForm = this.fb.group({
			searchQuery: [''] // Initialize with an empty string
		});
	}

	onSubmit() {
		const searchQuery = this.searchForm.value.searchQuery;
		console.log('Search Query:', searchQuery);
	}
}
