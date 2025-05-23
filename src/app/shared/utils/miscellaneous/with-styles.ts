import { createComponent, DestroyRef, EnvironmentInjector, inject, Type } from '@angular/core';
import { createTokenFromFactory } from '@shared/utils/miscellaneous/create-token';

const MAP = createTokenFromFactory(() => {
  const map = new Map();

  inject(DestroyRef).onDestroy(() => map.forEach((component) => component.destroy()));

  return map;
});

export function withStyles(component: Type<unknown>): undefined {
  const map = inject(MAP);
  const environmentInjector = inject(EnvironmentInjector);

  if (!map.has(component)) {
    map.set(component, createComponent(component, { environmentInjector }));
  }

  return undefined;
}
