import { Component } from '@angular/core';

@Component({
  selector: 'app-new-deals',
  templateUrl: './new-deals.component.html',
  styleUrls: ['./new-deals.component.css']
})
export class NewDealsComponent {

  arr = ['cat', 'lion', 'tiger', 'girraff']
  show: boolean = false
  isChecked: boolean[] = [];


  handleDelete(index: number) {
    // this.arr.splice(index,1)
    this.arr = this.arr.filter((el, i) => {
      return i !== index;
    })
  }

  handleCheckBox(event: any, index: number) {
    this.isChecked[index] = event.target.checked;
  }

  check: boolean = false;
  handleClick() {
    this.check = !this.check;
    console.log(this.check);
    const bg = document.getElementById('booo')
    if (this.check) {
      bg!.style.backgroundColor = 'green'
    }
    else {
      bg!.style.backgroundColor = 'white'
    }
  }


}
