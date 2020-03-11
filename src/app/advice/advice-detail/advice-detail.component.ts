import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-advice-detail',
  template: `
    <section>
      <div class= "alert alert-info" *ngIf="!id">
        Wybierz artykuł po lewej aby zobaczyć szczegóły
      </div>
      <div *ngIf="id">
        Załadowano id: {{id}}
      </div>
    </section>
  `,
  styles: []
})
export class AdviceDetailComponent implements OnInit {

  id = 0;

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('Hello from AdviceDetailComponent')
    this.activateRoute.params.subscribe(
      (params: Params) => {
        this.id  = Number(params.id);
      }
    );
  }



}
