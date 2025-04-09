import { ChangeDetectionStrategy, Component, Directive, ViewEncapsulation } from '@angular/core';
import { withStyles } from '@shared/utils/miscellaneous';

@Component({
  standalone: true,
  template: '',
  styleUrls: ['ui-link.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'ui-link',
  },
})
class UILinkStyles {
}

@Directive({
  selector: '[uiLink]',
  standalone: true,
  host: {
    class: 'ui-link',
  },
})
export class UiLinkDirective {
  _ = withStyles(UILinkStyles);
}
