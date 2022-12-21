import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css'],
})
export class StarsComponent {
  @Input() rating: number = 0;
  @Input() count: number = 0;

  getClass(r: number) {
    if (r <= this.rating) return 'fa fa-star text-primary mr-1';
    else if (r <= this.rating + 0.5)
      return 'fa fa-star-half-alt text-primary mr-1';
    return 'far fa-star text-primary mr-1';
    //   fa fa-star-half-alt text-primary mr-1
    //   far fa-star text-primary mr-1
  }
}
