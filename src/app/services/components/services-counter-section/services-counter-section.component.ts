import { Component,OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-services-counter-section',
  templateUrl: './services-counter-section.component.html',
  styleUrls: ['./services-counter-section.component.css']
})
export class ServicesCounterSectionComponent {

  //code to run the js file when this component gets redner
  constructor(private renderer: Renderer2) { }


  ngOnInit(): void {
    const script = this.renderer.createElement('script');
    script.src = '../../../../assets/js/Automatic_Counter.js'; // Path to your JS file
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    this.renderer.appendChild(document.body, script);
  }
}
