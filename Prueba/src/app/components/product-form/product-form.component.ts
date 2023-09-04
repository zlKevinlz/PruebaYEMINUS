import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  private _unsubscribeAll: Subject<any>;

  public form: FormGroup;

  public title: string = "Crear Producto";

  constructor(
    private _productService: ProductService,
    public dialogRef: MatDialogRef<ProductFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { product: Product },
    public dialog: MatDialog
  ) {
    this._unsubscribeAll = new Subject();

    this.form = new FormGroup({
      productId: new FormControl(),
      descripcion: new FormControl(""),
      productoParaLaVenta: new FormControl(true),
      precio: new FormControl(),
      imagen: new FormControl(""),
      porcentajeIva: new FormControl()
    });

    if(this.data.product){
      this.title = 'Editar Producto'
      console.log(this.data.product);
      
      this.form.patchValue(this.data.product)
    }
  }

  createProduct() {
    this._productService.createProduct(this.form.value).pipe(takeUntil(this._unsubscribeAll)).subscribe((response: any) => {

      console.log(response);
      location.reload();
    }, (error) => {
      alert('An error has occurred');
      location.reload();
    });
  }

  editProduct() {
    this._productService.editProduct(this.form.value).pipe(takeUntil(this._unsubscribeAll)).subscribe((response: any) => {

      console.log(response);
      location.reload();
    }, (error) => {
      alert('An error has occurred');
      location.reload();
    });
  }

  deleteProduct(){

  }

  closeDialog(){
    this.dialog.closeAll()
  }
}
