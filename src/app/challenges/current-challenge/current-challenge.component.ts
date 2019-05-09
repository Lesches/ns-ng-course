import { Component, ViewContainerRef } from '@angular/core';
import { ModalDialogService } from 'nativescript-angular/modal-dialog';

import { DayModalComponent } from '../day-modal/day-modal.component';
import { UIService } from '~/app/shared/ui.service';
import {RouterExtensions} from "nativescript-angular";

@Component({
  selector: 'ns-current-challenge',
  templateUrl: './current-challenge.component.html',
  styleUrls: ['./current-challenge.component.css'],
  moduleId: module.id
})
export class CurrentChallengeComponent {
  constructor(
    private router: RouterExtensions
  ) {}

  onEdit(){
      this.router.navigate(['/challenges/edit'], {
          transition: {name: 'slideLeft'}

      });
  }
}
