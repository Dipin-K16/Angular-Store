import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  openModal(){
    const modalDiv = document.getElementById('myModal');
    if(modalDiv!=null){
      modalDiv.style.display='block'
    }
  }

  closeModal(){
    const modalDiv = document.getElementById('myModal');
    if(modalDiv!=null){
      modalDiv.style.display='none'
    }
  }


}
