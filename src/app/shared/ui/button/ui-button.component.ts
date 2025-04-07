import { Component } from '@angular/core';

@Component({
  selector: 'button[UIButton]',
  standalone: true,
  template: '<ng-content></ng-content>',
  styleUrl: './ui-button.component.scss',
})
export class UiButtonComponent {

}
