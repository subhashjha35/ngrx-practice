import { of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {

  constructor() { }
  loadFruits() {
    // return throwError({'message': 'error handling message'});
    return of(['apple', 'mango', 'cherry']);
  }
}
