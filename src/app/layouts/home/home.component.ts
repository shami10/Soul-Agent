import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public AppHeading = 'Mobile App Development';
  public AppText = 'Our committed mobile app designers love making apps and its their passion. Therefore, iOS and Android App development has been our strength for a considerable length of time. We assist you with building apps for your business, purchasers and undertaking at a fixed cost or can increase your present group for limited period. A large number of customers have gotten uncommon outcomes while working with our committed developers. Up until this point, we have propelled numerous fruitful apps for organizations with seaward devoted software programmers just as for offices when they redistribute to us.';
  public WebHeading = 'Web Development';
  public WebText = 'As is commonly said - "Mobile First", it is difficult to envision mobile without web. We construct powerful mobile backend just as do create web applications. With programming and website composition experience of years, organizations enlist us for our aptitude in PHP, .NET, Java to assemble CMS, E-trade and business applications. Our web engineers fabricate front-end, back-end and APIs according to the answer for be made OR can connect on committed bases to enlarge your present advancement group.';
  public UiHeading = 'UI/UX Design';
  public UiText = 'We give your user much better experience about your design because we make it totally user friendly, branded look. Ui/Ux Design are the base of your brand and we understand how much important is your company for you. So don’t go anywhere tell us about your dreams. Our team love it make it real.';
  public AboutHeading = 'This is us';
  public AboutText = 'There are a lot of companies that do what we do. They share the same what and how, but our clients work with us for our why and our who. We are SoulAgent, and you are in the right place. And You can easily Trust us.';
  public StuffHeading = 'Stuff we did';
  public StuffText = 'While we can not show you the iceberg of work that is our process or technology we used, Here a shiny bits that breach the surface. Here our portfolio of few of our best mobile, web and game projects.';
  public IdeaHeading = 'Tell us your Idea';
  public IdeaText = 'We like quick - a similar way the technology advertise moves. In the time it takes you to state "I have a good thought", another person has just begun taking a shot at a comparative venture a large portion of the world away.Tell us about your thought, and we can take to the next level.';


  constructor() { }

  ngOnInit() {
  }

}
