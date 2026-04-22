import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnviaFormulario {
  constructor() {}

  enviaParaBackend(info: string) {


    // Pode ter uma chamada HTTP aqui para enviar os dados para o backend, por exemplo:
    // this.http.post('http://seu-backend.com/api/formulario', { data: info }).subscribe(response => {
    //   console.log('Resposta do backend:', response);
    // });

    console.log("Enviando para o backend: " + info);
  }
}
