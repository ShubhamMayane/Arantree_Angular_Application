import { Component,OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-services-sectors-carousel',
  templateUrl: './services-sectors-carousel.component.html',
  styleUrls: ['./services-sectors-carousel.component.css']
})
export class ServicesSectorsCarouselComponent {


  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    const script = this.renderer.createElement('script');
    script.src = '../../../../assets/js/Services_Sector_Img_Slider.js'; // Path to your JS file
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    this.renderer.appendChild(document.body, script);
  }
}
