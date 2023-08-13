import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  public valor1: number = 0;
  public valor2: number = 0;
  public operacao: string | undefined;
  public resultado: number = 0;

  constructor(private alertController: AlertController) {}

  calcular() {
    if (this.operacao != null){
      let transformaResultadoEmString : string = " "+this.resultado;
    switch (this.operacao) {
      case 'Dividir':
           if (this.valor1 != 0 && this.valor2 != 0 && this.valor1 != null && this.valor2 != null){
            this.resultado = this.valor1 / this.valor2;
            this.presentAlert("O resultado é",transformaResultadoEmString);
           }else{
            this.presentAlert("Erro ao Calcular!","Não é possivel dividir numeros por 0!");
           }
        break;
     
        case 'Somar':
        if ( this.valor1 != null && this.valor2 != null){
          this.resultado = this.valor1 + this.valor2;
          this.presentAlert("O resultado é",transformaResultadoEmString)
        }else{
          this.presentAlert("Erro ao Calcular!","Todos os campos deve ser preenchidos!");
        }
        break;
      
        case 'Diminuir':
          if ( this.valor1 != null && this.valor2 != null){
            this.resultado = this.valor1 - this.valor2;
            this.presentAlert("O resultado é",transformaResultadoEmString)
        }else{
          this.presentAlert("Erro ao Calcular!","Todos os campos deve ser preenchidos!");
        }
        break;
      
        case 'Multiplicar':
        if (this.valor1 != null && this.valor2 != null){
          this.resultado = this.valor1 * this.valor2;
        }else{
        this.presentAlert("Erro ao Calcular!","Todos os campos deve ser preenchidos!");
        }
        break;
      default:
        this.resultado = 0;
        break;
    }
  }
  else{
    this.presentAlert("Erro ao Calcular!","Todos os campos deve ser preenchidos!");
  }
  }

  limparCampos() {
    this.valor1 = 0;
    this.valor2 = 0;
    this.operacao = '';
    this.resultado = 0;
  }

  async presentAlert(subHeader: string, message: string) {
    const alert = await this.alertController.create({
      header: 'Calculadora',
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

}
