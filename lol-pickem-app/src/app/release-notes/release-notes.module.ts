import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReleaseNotesComponent } from './release-notes.component';
import { SharedModule } from '../shared';
import { ReleaseNotesRoutingModule } from './release-notes-routing.module';

@NgModule({
  declarations: [ReleaseNotesComponent],
  imports: [CommonModule, SharedModule, ReleaseNotesRoutingModule],
})
export class ReleaseNotesModule {}
