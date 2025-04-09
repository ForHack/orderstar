import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UiLinkDirective } from '@shared/ui/link/ui-link.directive';

@Component({
  selector: 'app-footer',
  imports: [
    RouterLink,
    UiLinkDirective,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {

}
