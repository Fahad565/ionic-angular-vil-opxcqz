import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  brandName: string;
  bottlePrice: number;
}

@Injectable()
export class CartService {
data: Product[] = [
  {id: 0, brandName: Keringet, bottlePrice: 200},
  {id: 1, brandName: Bahari, bottlePrice: 250}
];
  constructor() { }

}