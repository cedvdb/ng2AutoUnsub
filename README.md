Usage example :
When you subscribe to an observable just add takeUntil(.takeUntil(this._destroy$) and your subscriptions will be automatically unsubbed on destroy.

```
import { AutoUnsub } from 'ng2-auto-unsub/auto-unsub.component';

//...
export class TestComponent extends AutoUnsub implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    Observable
    .fromEvent(document, "mousemove")
    .takeUntil(this._destroy$)
    .subscribe(e => console.log(e));
  }

}

```