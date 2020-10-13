import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value = 0;

  increment(): void {
    this.value++;
  }

  decrement(): void {
    this.value--;
  }

  evenOrOdd(value): string {
    return value % 2 === 0 ? 'even' : 'odd';
  }

  isPrimeNumber(value): string {
    if (value === 1)
    {
      return ' not ';
    }
    else if (value === 2)
    {
      return '';
    }else
    {
      for (let i = 2; i < value; i++)
      {
        if (value % i === 0)
        {
          return ' not ';
        }
      }
      return '';
    }
  }

  squareRoot(value): number {
    return Math.sqrt(value);
  }

  reset(): void {
    this.value = 0;
  }

  random(): void {
    this.value = Math.floor(Math.random() * 1000) + 1;
  }

  mystery(): void {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }
}
