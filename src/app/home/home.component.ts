import { Component, OnInit } from '@angular/core';
import {HomeService} from "../service/home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  form = {
    data: {
      displayValue: <string> null,
      secondValue: <string> null,
      count: <number> 0,
      secondCount: <number> 0
    }
  }

  ngOnInit() {
  }

  printHelloWorld() {
    this.homeService.printHelloWorld().subscribe(res => {
      this.form.data.count += 1
      this.form.data.displayValue = res + ' ' + this.form.data.count
    })
  }

  printBye() {
    this.homeService.printBye().subscribe(res => {
      this.form.data.secondCount += 1
      this.form.data.secondValue = res + ' ' + this.form.data.secondCount
    })
  }

}
