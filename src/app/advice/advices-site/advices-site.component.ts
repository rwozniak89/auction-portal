import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-advices-site',
  templateUrl: './advices-site.component.html',
  styles: []
})
export class AdvicesSiteComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }


  handleButtonClick(id: number){
    //routing przez kod
    console.log(id);
    this.router.navigate(['article', id], {relativeTo: this.activatedRoute})
  }
}
