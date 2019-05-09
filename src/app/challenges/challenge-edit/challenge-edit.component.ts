import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, convertToParamMap} from '@angular/router';
import { PageRoute } from 'nativescript-angular/router';

@Component({
  selector: 'ns-challenge-edit',
  templateUrl: './challenge-edit.component.html',
  styleUrls: ['./challenge-edit.component.css'],
  moduleId: module.id
})
export class ChallengeEditComponent implements OnInit {
  isCreating = true;

  constructor(
    private activatedRoute: ActivatedRoute, private pageRoute: PageRoute) {}

  ngOnInit() {
   this.pageRoute.activatedRoute.subscribe(activatedRoute => {
     activatedRoute.paramMap.subscribe(paramMap => {
       console.log(paramMap.get('mode'));
     });
   });

  }
}
