import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

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
    imports: [CommonModule, MatButtonModule]
})
export class ProductsTableComponent {
    show: boolean = false;
    columnsToDisplay: string[] = ['Name', 'Price'];
    productsList: Product[] = [
        { id: 1, name: 'Apple', price: 100 },
        { id: 2, name: 'Banana', price: 200 },
        { id: 3, name: 'Orange', price: 300 }
    ];

    toggleShow() {
        this.show = !this.show;
    }
}
