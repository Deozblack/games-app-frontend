import { Directive, ElementRef, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appValidate]'
})
export class ValidateDirective {

  private htmlElement!:ElementRef<HTMLElement>
  private _errors!: ValidationErrors | null ;

  @Input() set errors( value: ValidationErrors | null  ){
    this._errors = value;
    this.setErrorMessage();
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  setErrorMessage(){

    if (!this.htmlElement) return;

    if (!this._errors) {
      this.htmlElement.nativeElement.innerHTML = '';
      return
    }

    const errors = Object.keys(this._errors)

    if (errors.includes('required')) {
      this.htmlElement.nativeElement.innerHTML = 'Este campo es requerido.'
      return
    }

    if (errors.includes('email')) {
      this.htmlElement.nativeElement.innerHTML = 'Formato de correo incorrecto.'
      return
    }

    if (errors.includes('minlength')) {
      const min = this._errors!['minlength']['requiredLength']
      const current = this._errors!['minlength']['actualLength']

      this.htmlElement.nativeElement.innerHTML = `Mínimo ${min} caracteres. (${current})`
      return
    }

    if (errors.includes('maxlength')) {
      const max = this._errors!['maxlength']['requiredLength']

      this.htmlElement.nativeElement.innerHTML = `Maximo ${max} caracteres.`
      return
    }

  }

}
