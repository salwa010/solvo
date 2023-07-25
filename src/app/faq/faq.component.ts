import { Component } from '@angular/core';


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  

})
export class FaqComponent {
  items = ['How can Solvo help my job search? ', 'Does Solvo offer job flexibility?', 'Can I get health benefits working with Solvo?', 'How Can working for Solvo benefit my Career?'];
  expandedIndex = 0;
}


