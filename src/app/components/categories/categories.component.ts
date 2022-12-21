import { Component } from '@angular/core';
import { Category } from 'src/app/interfaces/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  categories: Category[] = [
    {
      categoryName: 'Category 1',
      imageUrl: '/assets/img/cat-1.jpg',
      productCount: 60,
    },
    {
      categoryName: 'Category 2',
      imageUrl: '/assets/img/cat-2.jpg',
      productCount: 60,
    },
    {
      categoryName: 'Category 3',
      imageUrl: '/assets/img/cat-3.jpg',
      productCount: 60,
    },
    {
      categoryName: 'Category 4',
      imageUrl: '/assets/img/cat-4.jpg',
      productCount: 60,
    },
  ];
}
