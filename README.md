***Server Side
- Install Node.js
- Create a Node.js project: Create a new directory and initialize it with the following command or clone the code from the repository:
  
  + mkdir my-socket-app
  + cd my-socket-app
  + npm init -y

- Install nodemon: (https://www.npmjs.com/package/nodemon) to automatically restart the server and apply code changes without manually restarting the socket server.
- Install socket.io: Using the command 

  + npm install socket.io

- Run the server: 

  nodemon server.js (where server.js is the JavaScript file containing your socket code)

***Client Side
- Attach the cdn link to use the socket.io library in the view

  https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.0.1/socket.io.min.js
  
- In the file where the socket is declared (in your case, it is app/assets/javascripts/src/pages/example.js), change the socket host from:

  + socket = io('https://example.com'); // https://example.com is your api path
to:
  + socket = io('http://localhost:3002');

(where localhost:3002 is the address and port where your socket server is running, which is set up in the server-side JavaScript file)
