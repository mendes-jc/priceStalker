# eBay PriceStalker

## What does this application do ?

It lets you create alerts for some products, like 'iPhone 7 plus', and then it send you emails periodcally in 2, 10 or 30 minutes, showing you the 3 cheaper results for it on eBay.

---
## Installation

First, you need to assure that you have Docker and Docker Compose installed in your machine.
If you need to install it, follow the official guide:

https://docs.docker.com/install/\
https://docs.docker.com/compose/install/

After it, just go to the application folder and run:

```
docker-compose up --build
```
If no error occour, you should be able to access the application through:\
http://localhost:3000/

---
## Structure

The application works with 4 containers, wich are:

* **MongoDB**: The main database of the application, holding all the info about alerts and users.
* **Redis**: This container is used by Bull, wich is responsable for queueing the e-mails that are sent to users.
* **Back-End**: Holds the Node.js application that provides the API for the Front-End and, in parallel, control the jobs that search products on Ebay and request Bull to send the e-mails.
* **Front-End**: Here's the React.js application where you can access all you need to create and modify alerts.

---
## **Details**

### **Axios** ( https://github.com/axios/axios )

Axios is the lib used both in the Front-End and the Back-End to make API requests, because it us define some rules ( like a base URL ) and that makes the code less verbose.

### **ESLint with AirBNB Style Guide** ( https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb )

In development environment I used ESLint in both Front-End and Back-end, using the rules defined by AirBNB.

---
## **Back-End**

Here's what i did choose for the backend and why:

### **Agenda** ( https://github.com/agenda/agenda )

Agenda is responsable for scheduling the searchs made on eBay and put the e-mails on the queue.\
I decided to use it because it provides an easy way to create and change the Repeatable Jobs and use MongoDB to store all the info, as it provides more a greater level of persistence.

### **Bull** ( https://github.com/OptimalBits/bull )

Bull is the lib responsable for dealing with mail sending here.\
I decided to use it because it is easy as is powerful, and it allows to easy control some important settings, like a limit to e-mails sent at some time.

### **Express** ( https://github.com/expressjs/express )

All the API is built on express. It is easy to use, fast to configure and provides all that this application needs.

### **Nodemailer** ( https://github.com/nodemailer/nodemailer )

Nodemailer is the lib responsable for sending the emails to users. I decided to use it because it is very simple and fits all my needs.\

### **Express Handlebars** ( https://github.com/ericf/express-handlebars )

I decided to use it because it let us easily create email template using Mustache template system.\
I used it with Nodemailer Express Handlebars ( https://github.com/yads/nodemailer-express-handlebars ).

### **Mongoose** ( https://github.com/Automattic/mongoose )

I decided to use mongoose to have an easier and less verbose controll to the Mongo Database.

---

## **Front-End**

The main features of the Front-End

---
### **Redux** ( https://github.com/reduxjs/redux )

I decided to use Redux because it provides a great way to centralize the application state in one place. As I used React.js, I also used **React Redux** ( https://github.com/reduxjs/react-redux ).

### **Redux Saga** ( https://github.com/redux-saga/redux-saga )

Redux saga is a awesome middleware that let we put on a new step on the Redux process, allowing to make some side-effects, like a request on an API.\
I used it to get and update all the necessary information from the API.

### **Styled Components** ( https://github.com/styled-components/styled-components )

I decided to use Styled Components because it let us create styled React Components using CSS inside the JavaScript code, so there's no need to import CSS files and use CSS Classes.

### **Immer** ( https://github.com/immerjs/immer )

I used Immer because it let us work with immutable data in a more natural way, because we work on a mutable draft that replaces the original immutable data later.