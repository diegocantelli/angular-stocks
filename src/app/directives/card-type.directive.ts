import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[cardType]'
})
export class CardTypeDirective implements OnInit {
  //diretivas também podem aceitar inputs
  //pelo fato do nome do input ser igual ao da diretiva, é possível realizar o bind desta form [cardType]="stock"
  @Input() cardType: number = 0;
  @Input() increaseClass = 'increase';
  @Input() decreaseClass = 'decrease';

  //elementRef -> contém uma referência do elemento no qual a diretiva foi aplicada
  constructor(private el: ElementRef) { }

  ngOnInit() {
    if (this.cardType) {
      if (this.cardType >= 0) {
        this.el.nativeElement.classList.add(this.increaseClass);
        this.el.nativeElement.classList.remove(this.decreaseClass);
      } else if (this.cardType <= 0) {
        this.el.nativeElement.classList.add(this.decreaseClass);
        this.el.nativeElement.classList.remove(this.increaseClass);
      } else {
        this.el.nativeElement.classList.remove(this.increaseClass);
        this.el.nativeElement.classList.remove(this.decreaseClass);
      }
    }
  }

}
