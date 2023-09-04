import { Component, Input } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent {

  @Input() encode!: boolean;

  public title: string = 'Encriptar frase';

  public frase : string = '';

  public clave!: number;

  public resultado: string = '';

  private _unsubscribeAll: Subject<any>;

  constructor(private _productService: ProductService) {
    this._unsubscribeAll = new Subject();
  }
  
  ngOnInit(){    
    if (!this.encode) {
      this.title = 'Desencriptar frase'
    }
  }

  encriptar(){
      this._productService.encode(this.frase, this.clave).pipe(takeUntil(this._unsubscribeAll)).subscribe((response: any) => {
        //this.resultado = response.frase;
      }, (error) => {
        console.log(error);
        this.resultado = error.error.text;
        
      });
  }

  desencriptar(){
    this._productService.decode(this.frase, this.clave).pipe(takeUntil(this._unsubscribeAll)).subscribe((response: any) => {
      //this.resultado = response.frase;
    }, (error) => {
      this.resultado = error.error.text;
    });
  }
}
