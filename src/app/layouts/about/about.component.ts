import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public FeatureText = 'THE STRENGTH OF THE COMPANY IS ITS PEOPLE';
  public AboutUs = 'What is Soul Agent?';
  public AboutUsText = 'Such a simple question to ask. So many appropriate answers. Answers that everyone gives. The right answers. The expected answers. Such a complex question when you look behind the scenes. Behind the words, the lines and the s p a c e s between them. Behind the image, and the first impression, and the second or the third.';
  public AboutUsText1 = 'It’s the office filled at 3 am with people staying late. It’s the light in their eyes as they wipe their forehead. It’s the pat on the shoulder and the look they give each other when they offer their support to each other.';
  public AboutUsText2 = 'It’s the takeaway during the break that brings them together, and their smile when they are asked how many hours they slept the previous night. It’s their dreams and hopes that each of them has buried deep inside and put aside every morning when they come back.';
  public AboutUsText3 = 'It’s the mentors that inspire them every day by sharing their experience, and the look of pride on everyone’s face when they accomplish things together.';
  public ManagerQuote = '“Successful people do what unsuccessful people are not willing to do. Dont wish it were easier; wish you were better.”';
  public CEOName = 'Ahtasham Anjum';
  public Post = 'CEO'; 



  constructor() { }

  ngOnInit() {
  }

}
