import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
  Topic : any = []
  constructor() { 
    this.Topic=[
      'App Development',
      'Web Development',
      'UI/UX Design',
      'Search Engin Optimization (SEO)',
      'Social Media Marketing (SMM)',
    ]
  }
  name: string;
  ngOnInit() {
  }
  onSubmit(f: NgForm) {
    console.log();
    f.reset();
  }
}
