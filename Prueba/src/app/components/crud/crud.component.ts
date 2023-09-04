import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';
import { ProductFormComponent } from '../product-form/product-form.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {
  public products: Product[] = [];

  private _unsubscribeAll: Subject<any>;

  public displayedColumns: string[] = ['Codigo', 'Nombre', 'Para la venta', 'Precio'];
  public dataSource!: Product[];

  constructor(
    private _productService: ProductService,
    public dialog: MatDialog
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    //this.noResults = false;
    //this.loading = true;
    this.products = [];
    this._productService.listProducts().pipe(takeUntil(this._unsubscribeAll)).subscribe((response: any) => {

      this.products = response;
      this.dataSource = this.products;
      console.log(this.products);
      
      //this.loading = false;
    }, (error) => {
      alert('An error has occurred');
      //this.loading = false;
      location.reload();
    });
  }


  openDetails(element? : Product){
    this.dialog.closeAll();
    this.dialog.open(ProductFormComponent , {
      width: '85%',
      height: 'auto',
      minHeight: '44%',
      maxHeight: '85%',
      data: {
        product: element
      },
    });

  }
}

