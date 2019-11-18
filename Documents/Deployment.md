# Deployment
## How to deploy to production environment?
To deploy to HDAP, create a pull new request from master branch to cs6440 or make a change in cs6440 will trigger the automated continuous integration continuous deployment process.

## Deployment Details
Namespace - foodplanner2

Frontend App Name - newfoodplanner2frontend  
Port - 80  
Instances - 1  
Proxy IncomingPath - /newfoodplanner2frontend/  
Proxy containerPath - /  
Image Location - build.hdap.gatech.edu/foodplanner2/food-planner-front-end  

Backend App Name - newfoodplanner2backend  
Port - 80  
Instances - 1  
Proxy IncomingPath - /newfoodplanner2backend/  
Proxy containerPath - /  
Image Location - build.hdap.gatech.edu/foodplanner2/food-planner-back-end  
Environment Variable - ENV: production  

Database App Name - foodplanner2database  
Port - 5432  
Instances - 1  
Proxy IncomingPath - /foodplanner2database/  
Proxy containerPath - /  
Image Location - build.hdap.gatech.edu/foodplanner2/food-planner-database  
Environment Variable - ENV: production  
