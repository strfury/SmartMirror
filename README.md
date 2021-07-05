# SmartMirror

# Startup 
1. run ```cd smart_mirror``` in order change your directory to the smart_mirror folder.
2. run ```npm install``` to install the dependencies for the frontend.
3. run `cd ../backend` to change the directory to the backend folder.
4. run ```npm install``` to install the dependencies for the backend. 

# Development
1. run ```npm start``` to start the application in development mode.
2. edit the ```App.js``` file located in the ```src``` folder as well as add whichever components you would like to the components folder to modify the application.
3. Note I highly recommend not to run the development server on a raspberry pi directly. Instead run the development code on your own computer and then access http://<your compuer ip address>:3000 to view your work on the raspberry pi.  

# Building for final Version
1. run ``` npm run build``` to build the application into a desktop application.
2. run `node backend/index.js` inorder to start the final server
3. Navigate to your browser and go to http://localhost:8080/ and your application shoudl be there

# Resources
1. The tutorial I followed to setup the react enviorment is https://dev.to/mandiwise/electron-apps-made-easy-with-create-react-app-and-electron-forge-560e
2. The react js documentation is located https://reactjs.org/docs/getting-started.html
3. The electron js documentation is located https://www.electronjs.org/docs
