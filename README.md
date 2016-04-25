# Trello

##Description: a small app something like trello. For front here used angular, backend API - firebase.
Source code are in src/ directory. First level directory is angular modules. In our case we have three 
 modules: 
 app - main module, core for our app, here we have components, directives, services and views
 db-api - work with firebase API (something like ORM), here services for work with our db instances and db scheme 
 common - services that we need in db-api and app, move here to avoid duplicate code
 
##Install 
1) git clone git@github.com:vasergen/trello.git
2) cd trello
3) npm install
4) npm run start    
