# Angular-WebAPI
Tutorial using aspnet webapi/angular

## Preface

This is the first time I have ever developed a web application of this size or scope.
As such, I am in general naive of what the absolute best practices are regarding overall structure and documentation.
If I am doing anything that could be described as a "bad practice" please inform me so I do not make it into a habit unknowingly. 

Below is a list of general info on the list of features of the website, along with how to run it and how it was built.

Once the website is actually up on your machine, it should hopefully be intuitive how to use the website itself from a UI persepctive.
Please inform  me if that is not the case, and I can provide a general user guide.

## Info

The purpose of this application was not to build a feature complete website that I would expect people to use, but rather an excercise for to become accustomed to web development.

The application is currently a simple dating website.
After registering as a new user, a user can:
  login with their username and password (and stay logged in via jwt tokens)
  can create a simple profile page with basic information
  upload pictures to their profile via Cloudinary
  view a list of other users and their profile based on basic filters
  like and message other users

DatingApp-SPA contains all front end components (developed via angular), 
while DatingApp.API contains the API using ASP.NET core, and manages the database via EntityFramework core.

This application was developed in Visual Studio Code, mainly following a Udemy tutorial.

## Running

Run the website by running `npm install` then `ng serve` after cding into DatingApp-SPA, 
and running `dotnet run` while in DatingApp.API.

## DatingApp-SPA 

[ngx bootstrap](https://valor-software.com/ngx-bootstrap/#/) was used for general styling.

[Alertify](https://alertifyjs.com/) was used to handle user notifications.

[RxJs](http://reactivex.io/) was used as well to handle observables.

## DatingApp.API

[AutoMapper](https://automapper.org/) to handle mapping objects.

[Cloudinary](https://cloudinary.com/) was used to uploading and storing user photos.

[SQLite](https://www.sqlite.org/index.html) was used for the development db.

[Postman](https://www.getpostman.com/) was used for debugging the API.

[NewtonSoft](https://www.newtonsoft.com/json) was used for adding pagination info into header

## Concerns
Below is a list of questions ordered from broad to specific. 

**Disclaimer:** The list is as comprehensive as I could make it, and I understand answering each in detail would probably take too much time and **_is not necessary_**. 
The list is just as much for me as it is to anyone viewing this. 
As such, feel free to answer whichever questions in whatever level of detail believed to be necessary.
  
## Broad Concerns

As I am new to web development, my most pressing concerns are more about the application structure as a whole.
These questions are fairly abstract, so to answer them would require viewing most of the code I wrote. 
As such, these questions are *low priority*.


These sorts of questions are ones that I can probably answer myself as I gain more experience.

  Does my code appear to be maintainable in the long run?
  
  If I were to hand the program off to someone else, would they be able to further develop it without my help?
  
  Does it appear that my code can be scalable? 
  
  Are there any current sections of my code that would be hard to add future features to?
  
  Is my website secure? 
  - (IE if a malicious actor attacked my website, what is the most damaging thing he can do?)
  
  If my website has an insecurity, based on the code, how easy would it be to add more security?
 
  Is my code readable? If not, what can I do to improve readability (beyond adding more comments)?
  
  Is the website intuitive to use?
 
## Concerns regading specific practices

As I was developing the website, these are the questions I compiled directly related to specific techniques I used, but are not about any specific code in general.

  Would my website be improved if I implemented cookies and browser caching? If so, what should I be storing with them?
  - (To my knowledge, I currently don't use any sorts of cookies or caching, unless angular handles anything behind the scenes.)
  
  How can I improve the css to better support different screen sizes? Should this sort of website work just as well on mobile?
  - (I think I would just need to research more css, as well as change how image sizing works.)
  
  How can I best handle manual changes to the database?
  - (For example, I believe if I manually delete a user's profile picture from the db itself, the user's profile picture settings break until another photo is uploaded. This specific issue could probably be fixed by changing code when fetching primary photo, but there might be more bugs of this nature in my code currently.)


  What kind of errors should be displayed to a user? To a developer?
  - (User errors are currently displayed via alertify, and are primarily for failures in db updates or authorization.)
  
  
  Are there any third-party libraries that I should be implementing to simplify my code?


  Is this ReadMe acceptable? Is there not enough or too much detail in any section? How can I better organize/format it?

## Specific Technical Concerns

These are a list of concerns regarding the *code itself* that I wrote:
  
  Currently I am storing only the user id and login/logout time in my JWT token (see [AuthController.cs](DatingApp.API/Controllers/AuthController.cs) and [user.service.ts](DatingApp-SPA/src/app/_services/user.service.ts)).
  - Is there any other info I could or should store in there? 
  - I was unable to find a general guideline for best practices regarding jwt tokens.

  In general, what info should be passed into the http header? What kind of info should be stored there?

  
  
  


