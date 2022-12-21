import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-starts',
  templateUrl: './starts.component.html',
  styleUrls: ['./starts.component.css'],
})
export class StartsComponent {
  @Input() rating: number = 0;
  @Input() count: number = 0;
  @Input() center: boolean = true;

  getClass(r: number): string {
    if (r <= this.rating) return 'fa fa-star text-primary mr-1';
    else if (r <= this.rating + 0.5)
      return 'fa fa-star-half-alt text-primary mr-1';
    return 'far fa-star text-primary mr-1';
  }
}
