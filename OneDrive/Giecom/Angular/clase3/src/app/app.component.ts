import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  usuario = {
    name: 'Michael Brown',
    age: 19,
    cc: '1234567893',
    sex: 'F',
    img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Fes%2Fvectors%2Fmujer-feliz.html&psig=AOvVaw2sWt_uVwu00f_fL3kDKuqT&ust=1719085097931000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKC11pe57YYDFQAAAAAdAAAAABAE'
  };

  numero: number=0;
  mostraralerta(): void{
    alert('Boton clicleado' + this.numero);
  }

  public sumar(){
    this.numero++;
  }
  public restar(){
    this.numero--;
  }


}

interface user{
  name: string;
  age: number;
  cc: number;
  sex: string;
  img: string;
}



