# Angular-WebAPI
Tutorial using aspnet webapi/angular

## Preface

This is the first time I have ever developed a web application of this size or scope.
As such, I am in general naive of what the absolute best practices are regarding overall structure and documentation.
If I am doing anything that could be described as a "bad practice" please inform me so I do not make it into a habit unknowingly. 

Below is a list of general info on the list of features of the website, along with how to run it and how it was built.

Once the website is actually up on your machine, it should hopefully be intuitive how to use the website itself from a UI perrsepctive.
Please inform  me if that is not the case, and I can provide a general user guide.

## Info

The application is currently a simple dating website. 
After registering as a new user, a user can:
  login with their username and password (and stay logged in via jwt tokens)
  can create a simple profile page with basic information
  upload pictures to their profile via Cloudinary
  view a list of other users and their profile based on basic filters
  like and message other users

DatingApp-SPA contains all front end components (developed via angular), 
while DatingApp.API contains the API using ASP.NET core, and manages the database via EntityFramework core

## Running

Run the website by running `npm install` then `ng serve` after cding into DatingApp-SPA, 
and running `dotnet run` while in DatingApp.API.

## Basic Documentation

##DatingApp-SPA 
Built mostly with angular, and styled primarily using [ngx bootstrap](https://valor-software.com/ngx-bootstrap/#/).
[Alertify](https://alertifyjs.com/) was used to handle user notifications.
RxJs was used as well to handle observables.

## DatingApp.API

[AutoMapper](https://automapper.org/) to handle mapping objects.
[Cloudinary](https://cloudinary.com/) was used to uploading and storing user photos.
[SQLite](https://www.sqlite.org/index.html) was used for the development db.
[Postman](https://www.getpostman.com/) was used for debugging the API.
[NewtonSoft](https://www.newtonsoft.com/json) was used for adding pagination info into header

## General Concerns

Will be updated shortly


