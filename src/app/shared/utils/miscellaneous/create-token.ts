import { InjectionToken } from '@angular/core';

export function createToken<T>(defaults?: T): InjectionToken<T> {
  return defaults === undefined
    ? new InjectionToken('')
    : createTokenFromFactory(() => defaults);
}

export function createTokenFromFactory<T>(factory?: () => T): InjectionToken<T> {
  return factory ? new InjectionToken<T>('', { factory }) : new InjectionToken<T>('');
}
