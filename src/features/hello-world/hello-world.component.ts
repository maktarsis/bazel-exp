import { Component } from '@angular/core';
import { msg } from '../../app/shared/lib/lib';

@Component({
  selector: 'hello-world',
  templateUrl: 'hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {
  name: string = msg;
}
