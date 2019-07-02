import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public AppHeading = 'Mobile App Development';
  public AppText = 'Our dedicated mobile app developers love creating apps and its their passion. As a result, iOS and Android App development has been our forte for years. We help you build apps for your business, consumers and enterprise at a fixed price or can augment your current team for finite period. Thousands of clients have obtained exceptional results while working with our dedicated programmers. So far, we have launched many successful apps for companies with offshore dedicated programmers as well as for agencies when they outsource to us.';
  public WebHeading = 'Web Development';
  public WebText = 'As they say - "Mobile First", it is impossible to imagine mobile without web. We build robust mobile backend as well as do develop web applications. With programming and web design experience of years, companies hire us for our expertise in PHP, .NET, Java to build CMS, E-commerce and business applications. Our web developers build front-end, back-end and APIs as per the solution to be created OR can engage on dedicated bases to augment your current development team.';
  public UiHeading = 'UI/UX Design Analysis';
  public UiText = 'From B2B or B2E apps for enterprises, small businesses, and startups, we have a proven track record of creating high-impact, result driven and engaging mobile apps on all popular platforms with Native, Cross-Platform, and Hybrid Technologies.';
  public AboutHeading = 'This is us';
  public AboutText = 'There are a lot of companies that do what we do. They share the same what and how, but our clients work with us for our why and our who. We are IndiaNIC, and you are in the right place.';
  public StuffHeading = 'Stuff we did';
  public StuffText = 'While we can not show you the iceberg of work that is our process or technology we used, Here a shiny bits that breach the surface. Here our portfolio of few of our best mobile, web and game projects.';
  public IdeaHeading = 'Tell us your Idea';
  public IdeaText = 'We like fast - the same way the technology market moves. In the time it takes you to say "I have got a great idea", someone else has already started working on a similar project half the world away.Tell us about your idea, and we are sure we can take to the next level.';


  constructor() { }

  ngOnInit() {
  }

}
