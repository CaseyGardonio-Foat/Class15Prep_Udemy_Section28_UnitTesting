Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@CaseyGardonio-Foat 
Carolista
/
collector-catalogue
1
11
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Open a pull request
The change you just made was written to a new branch named CaseyGardonio-Foat-README-Project_description. Create a pull request below to propose these changes.
    Able to merge. These branches can be automatically merged.
@CaseyGardonio-Foat
Update README.md
 
Nothing to preview

Remember, contributions to this repository should follow our GitHub Community Guidelines.
ReviewersNo reviews
AssigneesNo one—
Labels
None yet
ProjectsNone yet
MilestoneNo milestone
Linked issues
Use Closing keywords in the description to automatically close issues

Helpful resources
GitHub Community Guidelines
 1 commit
 1 file changed
 0 comments
 1 contributor
Commits on Mar 03, 2021
@CaseyGardonio-Foat
Update README.md
0a5e4d5
Showing  with 81 additions and 0 deletions.
 81  README.md 
@@ -1,2 +1,83 @@
# collector-catalogue
Group project for students in LaunchCode's Liftoff Program, March 2021

## Elevator Pitch:

***What problem is it going to solve?***

One of the joys of collecting is learning about the objects you collect. Documenting dates, purchase prices, and background information adds value to both the objects and the collection as a whole, and allows you to make informed decisions about new acquisitions. But how do you organize all of these details in one place? Moreover, how can you connect with like-minded enthusiasts and learn from the vast expertise of the crowd?

###### What goal do you intend to achieve?

Modeled on museum catalogs and databases, this app allows registered users to store and organize information about their collections, including purchase and provenance details, photographs, condition reports, and research notes. It also allows users to post and edit guides on categories of objects on which they have expertise. Both registered users and non-users can access these guides and fora to further their own research. 

##### Who is the audience?

*Collectors of art, antiques, and other objects
*Buyers/sellers researching objects they own or possible acquisitions
*Buyers/sellers wishing to connect with other collectors
*Collectors of all ages and backgrounds who have a passion about any area of collecting
*UX/accessibility specific: Older adults who may require extra-intuitive and/or clear user interface 
*UX/accessibility specific: Researchers who may need to use diacritical marks in their notes (although the app in general will be in English for now)

#### Features

**Core “Need-to-Have” features:**
*A navigation bar for accessing various features of the app including
*A home page to greet new users, tell them a bit about the app, and lay the foundation for a good user experience
*A sign up form so new users can create a personal account and a searchable database to store user account information
*A sign in form so authenticated users can access user-only portions of the app and fetch their collection information from the database
*A form to add an item from a user’s collection, which includes form validation, ability to upload images and enter an item description, and the options to add, edit, and delete items
*A collection display page to browse collections that shows thumbnail images and titles and the ability to search collections or filter them by category 
An item display page that shows a large image/images and a full description of the item, with the ability to search, browse, or go back to the collections page	

**Additional “Nice-to-Have” features (add to the project if there is time):**
*Advanced search feature accommodating searches by year, title, condition, region, etc. (and possibly multiple of these characteristics)		
*Ability to fetch, store, and display information from external APIs
*Ability for users to communicate with one another, via public posts, discussion boards, and/or direct messaging
*Custom Bootstrap theming
*Research and implementation of accessibility best practices
*Full mobile responsiveness and compatibility (could possibly include making use of inbuilt cameras for adding images)
*Research into possibilities for real-world deployment of the app
*A wish-list or searching-for feature allowing users to keep track of items they would like to add to their collections
*A form for searching items for sale on external sites (such as eBay, WorthPoint, etc.)

### gTechnologies to be used

*Front End/UX/UI
*Angular 11 framework
*Bootstrap (4) library
*HTML
*TypeScript
*CSS
*Sass
*Adobe XD for wireframing and user testing
*Linking to outside API services (nice-to-have feature)
*Back End
*Spring Boot
*Java
*CRUD repository 
*MySQL
*IntelliJ
*OAuth for user login (and possible nice-to-have commenting feature)

Need to learn/challenges to solve:

For Core/Need-to-Have Features
How to connect Angular driven front end to SpringBoot back end 
Anya and Casey will need to learn some basic Spring Boot and IntelliJ, etc.
Anna, Tara, and Chandler will need to learn some basic Angular and VSCode, etc.
How to upload attachments and images and send to database
For secondary/Nice-to-Have Features
API-specific protocols/methods (if using API/s)
How to set up Angular environments to keep API keys private/secret (if using API/s)
How to create commenting, discussion, and/or user messaging functionality 
How to fully implement Bootstrap to make site fully responsive
Best practices for user accessibility 
Possibilities for real-world deployment (e.g. as Chrome extension, etc.)

Trello Project trackers:

Workflow: https://trello.com/b/FlCbsf59
User Stories: https://trello.com/b/dF0FgP3B

No commit comments for this range
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About


# TestingStart

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
