# mern
a project on MERN

- some folder setup like public src and two files .env .gitignore 

- one utility library install for server start and stop which is nodemon 
  [npm i --save-dev nodemon] [npm i -D nodemon], after the installation change the script in p.json file 
  "scripts": {
    "dev": "nodemon src/index.js"
  },

- one another utility library for pretty code and code format that is PRETTIER.
  use this command  [npm i -D prettier] after the installation create thses files on the root
  .prettierrc, .prettieringnorre

we are going to setup DB in mongoodb(Atlas) follow the steps (second shot(v-7))

- First creat an account on the mongoodb atlas (atlas)[https://cloud.mongodb.com/]
- store all credential in .env

Now, we need mongoose and express so install via npm
[npm i mongoose][npm i express][npm i dotenv]

- we wrote the connection code inside the src/db/index and called it root of src ./index
- we did lots of things regarding the dotenv for  import statement and some change did inside p.json


