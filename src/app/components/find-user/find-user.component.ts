import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-find-user',
  templateUrl: './find-user.component.html',
  styleUrls: ['./find-user.component.css']
})
export class FindUserComponent {

nume: string = "";
utilizatorGasit = User {}
constructor(public appService: AppService){}

cautaUtilizator() {
  console.log('Cauta')
  this.appService.findUserByName(this.nume).subscribe(
    (response: any)=> this.utilizatorGasit = {...response}
  )
  }
}

