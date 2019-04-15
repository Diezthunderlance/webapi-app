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

Built mostly with angular, and styled primarily using [ngx bootstrap](https://valor-software.com/ngx-bootstrap/#/).
[Alertify](https://alertifyjs.com/) was used to handle user notifications.
RxJs was used as well to handle observables.

## DatingApp.API

[AutoMapper](https://automapper.org/) to handle mapping objects.
[Cloudinary](https://cloudinary.com/) was used to uploading and storing user photos.
[SQLite](https://www.sqlite.org/index.html) was used for the development db.
[Postman](https://www.getpostman.com/) was used for debugging the API.
[NewtonSoft](https://www.newtonsoft.com/json) was used for adding pagination info into header

## Concerns
Below is a list of questions ordered from broad to specific. 

The list is as comprehensive as I could make it, and I understand answering each in detail would probably take too much time and is probably not necessary. 
The list is just as much for me as it is to anyone viewing this. 
As such, feel free to answer whichever questions in whatever level of detail you believe to be necessary.
  
## Broad Concerns

As I am new to web development, my most pressing concerns are more about the application structure as a whole.
I currently do not have the most intuition as to these sorts of questions, as I do not currently have much experience running into these problems myself (from a webdev persepective).

  Does my code appear to be maintainable in the long run?
  If I were to hand the program off to someone else, would they be able to further develop it without my help?
  Does it appear that my code can be scalable? 
  Are there any current sections of my code that would be hard to add future features to?
  Is my website secure? (IE if a malicious actor attacked my website, what is the most damaging thing he can do?)
  If my website has an insecurity, based on the code, how easy would it be to add more security?
  Is my code readable? If not, what can I do to improve readability (beyond adding more comments)?
  Is the website intuitive to use?
 
## Concerns regading practices

As I was developing the website, these are the questions I compiled directly related to specific techniques I used

  In general when should I pass off this sort of info into the header? What kind of info should be stored there?
    (For example, I handle the displaying of lists of messages and users by passing pagination info into the http header.)

  
  
  


