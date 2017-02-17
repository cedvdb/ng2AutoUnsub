import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subject } from 'rxjs/Subject'

export abstract class AutoUnsub implements OnDestroy {

  _destroy$ = new Subject<void>();

  constructor() { }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
