import { Component, OnInit } from '@angular/core';

import { Form } from './form';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  generateBudget() {
    console.log(this.model.savingsGoal/(this.model.income - this.model.expenses))
  }
  

  model = new Form(100, 50, 100);

  submitted = false;

  onSubmit() { this.submitted = true; }

  ngOnInit(): void {
  }

}
