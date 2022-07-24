import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-pong',
  template: `
    <p>
      pong works!
    </p>
  `,
  styles: [
  ]
})
export class PongComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
