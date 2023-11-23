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

Ready for another commit (reference (v-8))

- Fist things we did express start and connect on the db response thorw TC on root src/index
- again we need some package like cookie-parser and CORS
- we handle separatly ApiError, APiResponse and async function inside utils/files
- you can find all changes the in this commit wiht name [handle the error response separatly]

wow, we are ready for creating the model (reference (v-9))

- we have created first model with name USER and second VIDEO
- now we need one more npm package mongoose aggregate paginate
  [npm i mongoose-aggregate-paginate-v2]
- time to talk about the PASSWORD storing the DB, so need two library, one is 
  bcrypt [npm i bcrypt], second is JWT [npm i jsonwebtoken]
- luckly we wrote the code for access and refresh token inside the user.model.js
- in this commit only 3 file modify, user,video and readme, commit is [user and video model created]

in this commit, we are working the Image upload 

- Firstly we setup the cloudinay [npm i cloudinary] and multer [npm i multer]
- 