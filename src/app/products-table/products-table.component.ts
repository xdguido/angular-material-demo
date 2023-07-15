import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type Product = {
    id: number;
    name: string;
    price: number;
};

@Component({
    selector: 'app-products-table',
    templateUrl: './products-table.component.html',
    styleUrls: ['./products-table.component.css'],
    standalone: true,
    imports: [CommonModule]
})
export class ProductsTableComponent {
    columnsToDisplay: string[] = ['id', 'Product Name', 'Product Price'];
    productsList: Product[] = [
        { id: 1, name: 'Apple', price: 100 },
        { id: 2, name: 'Banana', price: 200 },
        { id: 3, name: 'Orange', price: 300 }
    ];
}
