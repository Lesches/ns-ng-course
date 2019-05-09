import {NgModule} from "@angular/core";
import {ChallengeEditComponent} from "~/app/challenges/challenge-edit/challenge-edit.component";
import {NativeScriptCommonModule} from "nativescript-angular/common";
import {NativeScriptRouterModule} from "nativescript-angular";
import {SharedModule} from "~/app/shared/shared.module";

@NgModule({
  declarations: [ChallengeEditComponent],
  imports: [NativeScriptCommonModule, /*NativeScriptRouterModule, */NativeScriptRouterModule.forChild([{
        path: '',
        component: ChallengeEditComponent
      }]
  ),
    SharedModule
  ]
})
export class ChallengeEditModule{
}

