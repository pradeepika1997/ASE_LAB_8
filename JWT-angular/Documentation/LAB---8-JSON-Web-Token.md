# LAB 8 Basic Login using angular and JSON Web Token

## Introduction:
Creating basic login and registration pages where authorization to the home pages is done using JSON web token.

## Main Objective:
### Task-1: Creating backend server API that listens on port 4000 and verifies the JSON web token.

1) Installed the following packages using npm.   
`npm new app_name`   
`npm init`
`npm install express jsonwebtoken `   
`npm install nodemon`   

2) Creating server backend API that listens to the routers on 5000 
1) code for creating the token from user name and email ID             
![](https://github.com/sindhusha-t/ASE-Lab-Assignments/raw/master/LAB-8/JWT-angular/Screenshots/server%20create%20token.PNG)

2) Code for getting the user details in the JSON format after verifying the web token   
![](https://github.com/sindhusha-t/ASE-Lab-Assignments/raw/master/LAB-8/JWT-angular/Screenshots/server%20user%20details.PNG)

3) Function to verify the bearer token key and also opens the port 4000 to listen for GET or POST requests.   
![](https://github.com/sindhusha-t/ASE-Lab-Assignments/raw/master/LAB-8/JWT-angular/Screenshots/server%20verify%20token.PNG)

### Task-2: Creating login and home page.
1) Function that contacts Model( Backend API) for creating the token after authorization.   
![](https://github.com/sindhusha-t/ASE-Lab-Assignments/raw/master/LAB-8/JWT-angular/Screenshots/auth%20service%20create%20token.PNG)
2) Functions that contacts backend API for verifying the token and returning the required user details.   
![](https://github.com/sindhusha-t/ASE-Lab-Assignments/raw/master/LAB-8/JWT-angular/Screenshots/verify%20token%20auth%20service.PNG)

### User Interface - Output
1) Running ng serve    
![](https://github.com/sindhusha-t/ASE-Lab-Assignments/blob/master/LAB-8/JWT-angular/Screenshots/ng%20serve.PNG)
2) Running nodemon for backend server API service   
![](https://github.com/sindhusha-t/ASE-Lab-Assignments/blob/master/LAB-8/JWT-angular/Screenshots/nodemon.PNG)

1) Registration page:   
![](https://github.com/sindhusha-t/ASE-Lab-Assignments/raw/master/LAB-8/JWT-angular/Screenshots/REgister%20page.png)
2) Login Page:   
![](https://github.com/sindhusha-t/ASE-Lab-Assignments/raw/master/LAB-8/JWT-angular/Screenshots/login%20page.png)
3) Home page:   
![](https://github.com/sindhusha-t/ASE-Lab-Assignments/raw/master/LAB-8/JWT-angular/Screenshots/home%20page.png)
4) Display authorized user details
![](https://github.com/sindhusha-t/ASE-Lab-Assignments/raw/master/LAB-8/JWT-angular/Screenshots/display%20user%20details.png)

Conclusion:
We have learnt how to authorize the user using JSON Web Token.
