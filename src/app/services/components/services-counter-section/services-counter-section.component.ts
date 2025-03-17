import { Component,OnInit,ViewChild,Renderer2 } from '@angular/core';

@Component({
  selector: 'app-services-counter-section',
  templateUrl: './services-counter-section.component.html',
  styleUrls: ['./services-counter-section.component.css']
})
export class ServicesCounterSectionComponent implements OnInit {
  currentCount_1: number = 0;    // Variable to hold the current count
  targetCount_1: number = 70;    // The number to count to
  intervalId_1: any;             // To store interval reference


  currentCount_2: number = 0;    // Variable to hold the current count
  targetCount_2: number = 26;    // The number to count to
  intervalId_2: any;

  @ViewChild('counterDiv') counterDiv:any;

  ngOnInit(): void {
              // IntersectionObserver to detect when the div is in view
              const observer = new IntersectionObserver(entries => {
                console.log("div is in focus");
                                
                                entries.forEach(entry => {
                                    if (entry.isIntersecting) {
                                      this.startCounting(); // Start the counter when div comes into view
                                        observer.disconnect(); // Stop observing once the counter has started
                                    }
                                });
                            }, {
                                threshold: 0.7 // Start counting when 100% of the div is visible in the viewport and if the width of device is below 600 px then Start counting when 50% of the div is visible
                            });
        
                observer.observe(this.counterDiv); // Start observing the counterContainer div
  }


  startCounting(): void {
    // Using setInterval to count every second
    this.intervalId_1 = setInterval(() => {
      if (this.currentCount_1 < this.targetCount_1) {
        this.currentCount_1++;
      } else {
        clearInterval(this.intervalId_1); // Stop the count when target is reached
      }
    }, 10); // Update every second (1000 milliseconds)

 // Using setInterval to count every second
      this.intervalId_2 = setInterval(() => {
        if (this.currentCount_2 < this.targetCount_2) {
          this.currentCount_2++;
        } else {
          clearInterval(this.intervalId_2); // Stop the count when target is reached
        }
      }, 10); // Update every second (1000 milliseconds)
  }
  resetCount(): void {
    clearInterval(this.intervalId_1);  // Stop the current counting
    this.currentCount_1 = 0;           // Reset to 0
    clearInterval(this.intervalId_2);  // Stop the current counting
    this.currentCount_2 = 0;           // Reset to 0
    this.startCounting();             // Start counting again
  }

}
