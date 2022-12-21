import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SizeService {
  constructor() {}

  getSizes() {
    return ['xs', 's', 'm', 'l', 'xl'];
  }
}
