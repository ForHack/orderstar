import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UiButtonDirective } from '@shared/ui/button/ui-button.directive';
import { UiLinkDirective } from '@shared/ui/link/ui-link.directive';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    UiButtonDirective,
    UiLinkDirective,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

}
