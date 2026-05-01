import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-color',
  templateUrl: './color.page.html',
  styleUrls: ['./color.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class ColorPage {

  r: number = 0;
  g: number = 0;
  b: number = 0;

  btnColor: string = 'rgb(0,0,0)';
  bgColor: string = '#ffffff';

  mudarCorBotao() {
    this.btnColor = `rgb(${this.r}, ${this.g}, ${this.b})`;
  }

  mudarFundo() {
    this.bgColor = `rgb(${this.r}, ${this.g}, ${this.b})`;
  }

}