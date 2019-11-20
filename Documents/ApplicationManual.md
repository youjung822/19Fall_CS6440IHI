# Application Mannual

**Author**: RunTime Terror

### 1. Application Access
Access our Food Planner application using the below url. It takes you to the initial page with login for account management in the upper right corner and the Menu Navigation on the left side.

_URL: https://apps.hdap.gatech.edu/newfoodplanner2frontend/_

![](./images/0_initialPage.PNG)

### 2. Account Management
#### 2.1 Log In
By clicking Login from the initial page, you can access login page. Using the test credential below, we can sign into the application. 

_Username: test, Password: test_

![](./images/1_Login.PNG)

#### 2.2 Sign Up
Clicking "Sing up" button takes you to Sign Up page. Enter the required information as well as current allergies. It will create an account on FoodPlanner as well as register the one as a patient with allergy conditions on HAPI FHIR.  

![](./images/2-2_SignUp.PNG)

#### 2.3 Log out  
After singing into the application, you can see the user's name displayed on the left hand corner and the entered allergy conditions are preserved on the bottom of the allergy search bar. Lastly, by clicking "LogOut" on right top corner, it will sign you out. 

![](./images/3_LogOut.PNG)

### 3. Allergy
Through the left side bar or accessing the application, you will be able to find "My Allergies" page. This will show you the current allergies and allow you to edit them. The allergy information is received via HAPI FHIR communication first using FHIR patientID, and maintained by user input.    

![](./images/4_Allergy.PNG)

### 4. Ingredient

Team Member   | Role
------------  |------
Donald Ford   | Developer
Dale Park     | Project Manager
Vaneesh Bahl  | Quality Analyst/Manager
Andrew Lo     | Developer
Youjung Kim (Angela)   | Developer
