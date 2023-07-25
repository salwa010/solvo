import { Component } from '@angular/core';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.scss'],
})
export class PositionsComponent {
  status: boolean = true;
  status2: boolean = true;
  status3: boolean = false;
  status4: boolean = false;
  status5: boolean = false;
  status6: boolean = false;

  status8: boolean = false;
  status7: boolean = false;

  clickEvent() {
    this.status = !this.status;
  }
  // status: boolean = false;

  demo() {
    this.status2 = !this.status2;
  }
  clickEvents() {
    this.status3 = !this.status3;
  }
  click4(){
    this.status8 = !this.status8;

  }click5(){
    this.status8 = !this.status8;

  }click6(){
    this.status8 = !this.status8;

  }
  click8(){
    this.status8 = !this.status8;

  }
  click7(){
    this.status7 = !this.status7;

  }
}
