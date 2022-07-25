import { identifierName, LocalizedString } from '@angular/compiler';
import { Component, OnInit , ViewChild,ElementRef, Input} from '@angular/core';
import { tap } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  @ViewChild('name') 
  namekey!:ElementRef;
name:string="";
value:string="";
  constructor() { }

  ngOnInit(): void{

  }
  

startQuiz(){
  console.log(this.namekey.nativeElement) ;
localStorage.setItem("name",this.namekey.nativeElement.value);
}
}
