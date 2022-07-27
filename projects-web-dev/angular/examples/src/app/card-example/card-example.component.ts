import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-card-example',
  templateUrl: './card-example.component.html',
  styleUrls: ['./card-example.component.css']
})
export class CardExampleComponent implements OnInit {
  fullName: string = 'Matheuzin';

  @Input () bioParam: string = '';
  @Input () link1Param: string = '';
  @Input () link2Param: string = '';
  @Input () subtitleParam: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
