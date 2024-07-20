import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  numero: number = 1233;

  usuario: user = [
    {
      name: 'Michael Brown',
      age: 19,
      cc: '1234567893',
      sex: 'm',
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Fes%2Fvectors%2Fmujer-feliz.html&psig=AOvVaw2sWt_uVwu00f_fL3kDKuqT&ust=1719085097931000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKC11pe57YYDFQAAAAAdAAAAABAE'
    },
    {
      name: 'Andrea',
      age: 19,
      cc: '1234567893',
      sex: 'f',
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Fes%2Fvectors%2Fmujer-feliz.html&psig=AOvVaw2sWt_uVwu00f_fL3kDKuqT&ust=1719085097931000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKC11pe57YYDFQAAAAAdAAAAABAE'

    },

    {
      name: 'Luis',
      age: 19,
      cc: '1234567893',
      sex: 'f',
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Fes%2Fvectors%2Fmujer-feliz.html&psig=AOvVaw2sWt_uVwu00f_fL3kDKuqT&ust=1719085097931000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKC11pe57YYDFQAAAAAdAAAAABAE'

    }

  ];


  public mostrarNombreAlerta(nombre:string): void{
    alert("Hola "+nombre)
  }
}

interface user{
  name: string;
  age: number;
  cc: string;
  sex: string;
  img: string;

}
