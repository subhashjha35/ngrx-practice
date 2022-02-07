import { addFruitActionSuccess, loadFruitAction, loadFruitActionSuccess } from './actions/fruits.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    constructor(
        private store: Store
    ) { }

    ngOnInit() {
        let abc = (): void => {
            console.log('abc called');
        }
    }

    addFruit(item: string): void {
        this.store.dispatch(addFruitActionSuccess({fruitName: item}));
        console.error('Fruit Add called');
    }

    loadFruits(): void {
        this.store.dispatch(loadFruitAction());
    //     this.service.loadFruits.subscribe(() => data)
    }
}
