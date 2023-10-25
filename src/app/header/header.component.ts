import { Component } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	settingsLogoPath = "/assets/svg/hamburger-menu.svg"
	siteLogoPath = "/assets/svg/youtube-logo.svg"

}
