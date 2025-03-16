import { Component, OnInit, Renderer2 } from '@angular/core'; 

@Component({
  selector: 'app-services-text-slider',
  templateUrl: './services-text-slider.component.html',
  styleUrls: ['./services-text-slider.component.css']
})
export class ServicesTextSliderComponent {
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    const script = this.renderer.createElement('script');
    script.src = '../../../../assets/js/Services_Text_Slider.js'; // Path to your JS file
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    this.renderer.appendChild(document.body, script);
  }
}
