import { ChangeDetectionStrategy, Component, inject, model, signal} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginComponent } from '../login/login.component'
import { RegistrationComponent } from '../registration/registration.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-header',
  imports: [
    MatFormFieldModule, 
    MatInputModule, 
    FormsModule, 
    MatButtonModule,
    MatToolbarModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly animal = signal('');
  readonly name = model('');
  readonly dialog = inject(MatDialog);

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      data: {name: this.name(), animal: this.animal()},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The LoginComponent dialog was closed');
      if (result !== undefined) {
        this.animal.set(result);
      }
    });
  }
  openRegisterDialog(): void {
    const dialogRef = this.dialog.open(RegistrationComponent, {
      data: {name: this.name(), animal: this.animal()},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The RegistrationComponent dialog was closed');
      if (result !== undefined) {
        this.animal.set(result);
      }
    });
  }
  logout(){
    
  }
}
