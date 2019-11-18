# FoodPlanner
FoodPlanner

A tool to help guide people in the direction of meal planning based on current conditions. Patients should be able to upload their conditions and allergies from some sources or manually. Users should also be able to scan or manually enter in ingredients available. The app should help to provide quick, intermediate, or other meal ideas based on these factors. Users are able to create a new account/login with an existing account. A test user has been mapped to an FHIR patient to demonstrate the ability to automatically pull allergies into the user’s session. Recipe results can link users to full recipes as well as display some basic nutritional information.

# How to run
## Local Build
1. build tagged services `docker-compose build`
2. start all services `docker-compose up`
3. stopping all services `docker-compose down`

All in one `docker-compose down; docker-compose build; docker-compose up;`

Frontend URL: http://localhost:3000/  
Backend URL: http://localhost:8080/  

## Production
To deploy on production, create a pull request from the master branch to cs6440 branch will trigger the CICD process.

Frontend URL: https://apps.hdap.gatech.edu/newfoodplanner2frontend/  

Backend URL: https://apps.hdap.gatech.edu/newfoodplanner2backend/  

Database URL: https://apps.hdap.gatech.edu/pgadmin/login?next=%2Fpgadmin%2Fbrowser%2F  
Database Name: foodplanner2database

# Team Members
- Donald Ford  
- Dale Park  
- Andrew Lo  
- Youjung Kim  
- Vaneesh Bahl  

# Version
- Front End
  + Node.js v10.16.3
  + yarn v1.19.1
  + npm 6.12.0
- Docker 2.1.0.3
- Back End
  + Java 1.8
  + SpringBoot 2.1.6.RELEASE
  + Maven 3.6.2
- Database
  + postgres 12.0
