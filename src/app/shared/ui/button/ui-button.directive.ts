import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  inject,
  Input,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';
import { UIButtonVariant, UIRounded } from '@shared/ui/button/ui-button.options';
import { withStyles } from '@shared/utils/miscellaneous';


@Component({
  standalone: true,
  template: '',
  styleUrls: ['ui-button.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'ui-button',
  },
})
class UIButtonStyles {
}

@Directive({
  selector: '[uiButton]',
  standalone: true,
  host: {
    'class': 'ui-button',
  },
})
export class UiButtonDirective implements AfterViewInit {
  // Injections
  private _elementRef = inject(ElementRef);
  private _renderer = inject(Renderer2);
  _ = withStyles(UIButtonStyles);

  @Input()
  rounded: UIRounded = 'full';

  @Input()
  variant: UIButtonVariant = 'muted';

  ngAfterViewInit() {
    this._renderer.addClass(this._elementRef.nativeElement, this.variant);
    this._renderer.addClass(this._elementRef.nativeElement, `rounded-${this.rounded}`);
  }
}
