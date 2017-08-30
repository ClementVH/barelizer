import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    propertie1 = 0;

    propertie2 = 'Hello';

    HelloWorld() {
        console.log('hello World');
    }
}
