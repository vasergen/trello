# Trello 

##Description: A small app something like trello. (using angular 1.5.x and firebase).
Source code are in **src/** directory. First level directory is angular modules. In our case we have three 
 modules: 
 - **app** - main module, core for our app, here we have **components**, **directives**, **services** and **views**
 - **db-api** - work with firebase API (something like ORM), here **services** for work with our db instances and db **schemes** 
 - **common** - services that we need in **db-api** and **app**, move here to avoid duplicate code
 
##Install 
1. git clone git@github.com:vasergen/trello.git
1. cd trello
1. npm install
1. npm run start

##TODO:
 - **unit test** need to rewrite - I rewrited app for webpack but unit test didnt touched yet
 - **authorization**
 - 


