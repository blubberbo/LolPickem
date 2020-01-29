import { Component, OnInit, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { NotificationService } from '../notification.service';
import { NotificationSnackBarComponent } from '../notification-snack-bar.component';

@Component({
  selector: 'app-lol-pickem-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private snackBar: MatSnackBar, private notificationService: NotificationService, private zone: NgZone) {}

  ngOnInit() {
    this.notificationService.displayError$.subscribe(error => {
      // Load the given component into the snack-bar.
      this.zone.run(() => {
        this.snackBar.openFromComponent(NotificationSnackBarComponent, {
          data: { message: error }
        });
      });
    });
  }
}
