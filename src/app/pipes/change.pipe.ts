import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe, PercentPipe } from '@angular/common';
import { StockInterface } from '../services/stocks.service';

@Pipe({
  name: 'change'
})

//é necessário implementar a interface PiPeTransform
export class ChangePipe implements PipeTransform {

  //Neste caso está usando um outro pipe pré definido pelo Angular como um pipe
  constructor(private currencyPipe: CurrencyPipe, private percentPipe:
    PercentPipe) { }

  //Ao criar pipes, é uma boa prática sempre retornar uma string ou valores que podem ser facilmente convertidos em string
  //O primeiro vaalor passado para a função é o valor passado no component via binding
  //Os demais argumentos são opcionais, serão utilizados conforme for necessário através dos argumentos do pipe passados no template
  transform(stock: StockInterface, showPercent: boolean = true): any {
    let value = `${this.currencyPipe.transform(stock.change, 'USD', 'symbol',
      '.2')}`;
    if (showPercent) {
      value += ` (${this.percentPipe.transform(stock.changeInPercent,
        '.2')})`;
    }
    return value;
  }
}