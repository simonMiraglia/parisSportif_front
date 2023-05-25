import { Component, OnInit } from '@angular/core';
import { Pari } from '../models/Pari';
import { PariService } from '../common/services/parisServices/pari.service';


@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css'],
  providers:[ PariService]

})
export class Page3Component implements OnInit {

  title = 'parisSportif_front';
  paris: Pari[] = []

  constructor(private pariService : PariService) {

  }

  ngOnInit() {
    console.log('On init...')
    this.pariService.getParis().subscribe((datas) => {
      this.paris=datas;
    })
    console.log(this.paris)
  }


}
