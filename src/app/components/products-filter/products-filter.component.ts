import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ColorService } from 'src/app/services/color.service';
import { SizeService } from 'src/app/services/size.service';

@Component({
  selector: 'app-products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.css'],
})
export class ProductsFilterComponent implements OnInit {
  sizes: string[] = [];
  colors: string[] = [];
  @Output() filterChange = new EventEmitter<any>();
  filter: any = {
    prices: [{ min: 0, max: 0 }],
    colors: [''],
    sizes: [''],
  };

  constructor(
    private sizeService: SizeService,
    private colorService: ColorService
  ) {}

  changePrice(event: any, min: number, max: number) {
    if (event.target.checked) {
      this.filter.prices.push({ min: min, max: max });
    } else {
      const ix = this.filter.prices.findIndex(
        (x: any) => x.min == min && x.max == max
      );
      this.filter.prices.splice(ix, 1);
    }
    this.filterChange.emit(this.filter);
  }

  changeSize(event: any, s: string) {
    if (event.target.checked) {
      this.filter.sizes.push(s);
    } else {
      const ix = this.filter.sizes.findIndex((x: any) => x == s);
      this.filter.sizes.splice(ix, 1);
    }
    this.filterChange.emit(this.filter);
  }
  changeColor(event: any, s: string) {
    if (event.target.checked) {
      this.filter.colors.push(s);
    } else {
      const ix = this.filter.colors.findIndex((x: any) => x == s);
      this.filter.colors.splice(ix, 1);
    }
    this.filterChange.emit(this.filter);
  }

  ngOnInit(): void {
    this.sizes = this.sizeService.getSizes();
    this.colors = this.colorService.getColors();
  }
}
