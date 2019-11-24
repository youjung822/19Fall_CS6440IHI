# Application Manual

**Team Name**: RunTime Terror  
**Project Name**: Food Planner2  
**Github Link**: https://github.gatech.edu/gt-cs6440-hit-fall2019/FoodPlanner2  
**Team Member**

* Andrew Lo - Developer
* Youjung Kim - Developer
* Vaneesh Bahl - Quality Analyst/Manager
* Dale Park - Project Manager
* Donald Ford - Developer

## Contents
* [1. Application Access](#application-access)
* [2. Account Management](#account-management)
    * [2.1. Log in](#log-in)
    * [2.2. Sign up](#sign-up)
    * [2.3. Log out](#log-out)
* [3. My Allergies](#my-allergies)
* [4. My Ingredients](#my-ingredients)
* [5. Recipe Look up](#recipe-look-up)
* [6. Local Application Deployment](#local-application-deployment)
    * [6.1. How To Run Local Build](#how-to-run-local-build)
    * [6.2. How To Access Local Database](#how-to-access-local-database)
* [7. Production Application Deployment](#production-application-deployment)
* [8. Checks To See If The Servers Are Alive](#checks-to-see-if-the-servers-are-alive)
    * [8.1. Production Servers](#production-servers)
    * [8.2. Local Servers](#local-servers)
    * [8.3. Postman Script](#postman-script)
    * [8.4. API Document](#api-document)
* [9. Version](#version)


<a name="application-access"></a>

### 1. Application Access
Access our Food Planner application using the below url. It directs you to the application with Login in the upper right corner and the Menu Navigation on the left side.

_URL: https://apps.hdap.gatech.edu/newfoodplanner2frontend/_

![](./images/0_initialPage.PNG)

<a name="account-management"></a>

### 2. Account Management

<a name="log-in"></a>

#### 2.1. Log In
By clicking Login from the initial page, you can access the login page. Using the test credential below, we can sign into the application. 

_Username: test, Password: test_

![](./images/1_Login.PNG)

<a name="sign-up"></a>

#### 2.2. Sign Up
Clicking "Sing up" button takes you to the Sign Up page. Enter the required information as well as current allergies. It will create an account on FoodPlanner as well as create a patient on HAPI FHIR with the allergy conditions .  

![](./images/2-2_SignUp.PNG)

<a name="log-out"></a>

#### 2.3. Log out  
After signing into the application, you can see the user's name displayed on the left hand corner and the entered allergy conditions are saved on the bottom of the allergy search bar. Lastly, by clicking "LogOut" in the top right corner, it will sign you out. 

![](./images/3_LogOut.PNG)

<a name="my-allergies"></a>

### 3. My Allergies
Through the left side bar, you will be able to find "My Allergies" page. This will show you the current allergies and allow you to edit them. The allergy information is also received via HAPI FHIR communication using FHIR patientID and maintained by user input. This allergy data will be preserved when you refresh the page.    

![](./images/4_Allergy.PNG)
* Search allergies: Typing a few characters of the allergen on the search bar will populate a list of matching items.  
    ![](./images/4_Allergy_Search.PNG)
* Add allergies: By selecting the one from the list, the allergen will be registered on the bottom of the search bar. 
* Delete allergies: Clicking X button next to the saved allergen will delete it from your allergies.

<a name="my-ingredients"></a>

### 4. My Ingredients
Similarly, using the left side bar you will be able to find "My Ingredients" page. This will show you previously added ingredients and allow you to edit them. The ingredient search results are pulled from Spoonacular API and the saved list of ingredients are maintained by user. In the same way with allergies, the ingredient data will br preserved when you refresh the page.    

![](./images/5_Ingredient.png)
* Search ingredients: Typing a few characters of the ingredient on the search bar will populate a list of matching items.  
* Add ingredients: By selecting the one from the list, the ingredient will be registered on the bottom of the search bar. 
* Delete ingredient: Clicking X button next to the saved ingredient will delete the item from the saved list.

<a name="recipe-look-up"></a>

### 5. Recipe Look up
Lastly, on the left side bar, you will find the "Recipe Look up" menu. This page will take your allergies and ingredients as input and recommend the meal planning options. The recipes are received from Spoonacular API.   
* Search recipes: You can search by type of "Cuisine" and "Recipe Keyword". If you do not enter any information into these search fields, the query will return all categories.The user can also filter results by their "Allergies" and their "Ingredients".

As shown in the example, a cuisine of American and keyword of pizza was used and resulted in three hits that matched those inputs without the "Allergy" or "Ingredient" filter set. 

![](./images/6_Recipe.png)

Once the allergy filter is enabled, two pizzas that contain seafood and eggs are removed from the results based on the users saved allergies in their profile. 

![](./images/6_RecipeByAllergies.png)

When the "Ingredients" filter is enabled, the pizza that contains salami is the only result based on the saved ingredients for the user profile.

![](./images/6_RecipeByIngredient.png)

* View recipes: By clicking "View Recipe" button, it will direct you to a web page with the recipe detail.
* View Nutrition: By clicking "View Nutrition" button, the application populates a page with the total calories of the recipe and a pie chart of nutritional information.
    
![](./images/6_RecipePieChart.PNG)

<a name="local-application-deployment"></a>

### 6. Local Application Deployment

<a name="how-to-run-local-build"></a>

#### 6.1. How To Run Local Build

To deploy all three dockers (frontend, backend, database) download and install docker here.
URL: https://www.docker.com/
Next, open up terminal or PowerShell, and cd to FoodPlanner2 project folder and run 

a.	build tagged services “docker-compose build”
b.	start all services “docker-compose up”
c.	stopping all services “docker-compose down”

All in one command: “docker-compose down; docker-compose build; docker-compose up;”

Frontend URL: http://localhost:3000/
Backend URL: http://localhost:8080/

<a name="how-to-access-local-database"></a>

#### 6.2. How To Access Local Database

Database access, please download pgAdmin 4 and connect to localhost:5432 using username ‘postgres’ and no password.

<a name="production-application-deployment"></a>

### 7. Production Application Deployment

Please refer to section 2 of the Special Instructions document.  
URL: https://github.gatech.edu/gt-cs6440-hit-fall2019/FoodPlanner2/blob/master/Final%20Delivery/Special%20Instructions.pdf

<a name="checks-to-see-if-the-servers-are-alive"></a>

### 8. Checks To See If The Servers Are Alive

<a name="production-servers"></a>

#### 8.1. Production Servers

Frontend Application URL:  
`curl -I https://apps.hdap.gatech.edu/newfoodplanner2frontend/`
Response:
```
HTTP/1.1 200 OK
Date: Sun, 24 Nov 2019 20:54:07 GMT
Server: envoy
content-type: text/html
content-length: 2611
last-modified: Wed, 20 Nov 2019 04:56:31 GMT
etag: "5dd4c77f-a33"
accept-ranges: bytes
x-envoy-upstream-service-time: 0
Access-Control-Allow-Origin: *

```

Backend Application URL:  
`curl https://apps.hdap.gatech.edu/newfoodplanner2backend/`
Response:
```
Hello Runtime Terror
```

Database URL:  
https://apps.hdap.gatech.edu/pgadmin/login?next=%2Fpgadmin%2Fbrowser%2F  
Database Name: foodplanner2database  
Login: student@hdap.gatech.edu  
Password: hdap2019!  
Database Login: test  
Password: test  

<a name="local-servers"></a>

#### 8.2. Local Servers

Frontend Application URL:  
`curl -I http://localhost:3000/`
Response:
```
HTTP/1.1 200 OK
Server: nginx/1.17.4
Date: Sun, 24 Nov 2019 21:14:06 GMT
Content-Type: text/html
Content-Length: 2611
Last-Modified: Fri, 22 Nov 2019 07:50:48 GMT
Connection: keep-alive
ETag: "5dd79358-a33"
Accept-Ranges: bytes


```
Backend Application URL: `curl http://localhost:8080/`
Response:
```
Hello Runtime Terror
```

Database access, please download pgAdmin 4.  
Database URL: localhost:5432  
Database Login: postgres  
No Password  

<a name="postman-script"></a>

#### 8.3. Postman Script

Please refer to section 1 of the Special Instructions document.  

URL: https://github.gatech.edu/gt-cs6440-hit-fall2019/FoodPlanner2/blob/master/Final%20Delivery/Special%20Instructions.pdf

Script URL: https://github.gatech.edu/gt-cs6440-hit-fall2019/FoodPlanner2/blob/master/FoodPlanner.postman_collection.json

<a name="api-document"></a>

#### 8.4. API Document
For all API functionalities, expected results and possible errors are all located in the API.pdf document below.
URL: https://github.gatech.edu/gt-cs6440-hit-fall2019/FoodPlanner2/blob/master/Final%20Delivery/API.pdf

<a name="version"></a>

### 9. Version

- Front End
  + Node.js v10.16.3
  + yarn v1.19.1
  + npm 6.12.0
- Docker 2.1.0.3
- Back End
  + Java 1.8
  + SpringBoot 2.1.6.RELEASE
  + Maven 3.6.2
  + HAPI FHIR 3.1.0
- Database
  + postgres 12.0