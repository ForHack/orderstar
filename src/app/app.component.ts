import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UiButtonComponent } from '@shared/ui/button/ui-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UiButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
