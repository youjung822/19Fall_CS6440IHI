# **Research Document for Food Planner App**

Our team RunTime Terror was assigned Project # 24 – Food Planner app. The expectation from our team was to build a web app with the following description:

 

**“A tool to help guide people in the direction of meal planning based on current conditions. Patient should be able to upload their conditions and allergies from some source or manually. User should also be able to scan or manually enter in ingredients available. The app should help to provide quick, intermediate, or other meal ideas based on these factors.”**

 

Our team started with the internal discussions on how to build the App and more importantly what to build in the App. We were lucky to have some very talented and diligent people on our team who instantly started to research for sources and useful material available online. 

We started building a Google Doc where we would mention any ideas or reliable sources that we would find and then we would discuss the doc in our weekly discussions.

Below are the first Notes from that google Doc:

## **Initial Planning Notes:**

·     Research API’s that contain information about food.

·     Possibly use FHIR API.

·     How to map between conditions and foods?

·     Hosting through Georgia Tech on HDAP

·     drone.io

·     Research: What food planners are available out there for patients and providers? 

·     Conditions, Allergies 

·     Is there a prod FHIR DB?

·     Research Food APIs, FHIR APIS, Conditions...

·     Lucidchart for design documents https://www.lucidchart.com/invitations/accept/ea95bb86-de7a-4ab2-b7ff-c8b1801481b9

 

## **Actions taken to build requirements for our Web App:**

 

·     We started looking at various other food related Apps already available online to get an idea how to approach a Food Based Web App. We found some Apps like Spoonacular, FoodPrint, Pepperplate etc. 

·     While most of these Apps are built around the idea of recommending food recipes, very few of them considered the opportunities of taking in allergies of the user as a data point and using it to recommend ingredients/recipes for more personalized diet plans.

·     Apart from that we also researched on the mapping between allergies, ingredients and food.

·     Initially we had planned that the App would consider Allergies and would recommend recipes based on the allergies selected by the user.

·     We wanted to know if there is a way to use any kind of FHIR APIs in our App; we started exploring the same as well.

 

Soon we found that one of our team mate Donald had a good friend working with Spoonacular and he suggested we should be able to use Spoonacular’s APIs to recommend the Recipes using their database. Donald immediately started digging up more information on that front. He discussed with his friend and found out ways to achieve the integration between Spoonacular and our App FoodPlanner.

Further, we had our first interaction with the TA assigned to our project – Taylor. It was a very informative session where he recommended that we should not restrict our App to consider Allergies, rather we should also let the user provide the ingredients of their choice and then recommend the recipe based on the allergies and the ingredients. 

## **Action taken to find information on various APIs:**

Now that we had a better vision of our App, we started looking for various food, recipe and allergy APIs. Below are some of the points that we jotted down during our research on APIs:

### Food APIs

- The FoodData     Central API provides REST access to FoodData Central (FDC). It is intended     primarily to assist application developers wishing to incorporate nutrient     data into their applications or websites.
       https://fdc.nal.usda.gov/api-guide.html

### Recipe APIs

- The Recipe     Puppy is an ingredient based recipe search engine. The Recipe Puppy API     gives developers access to a database of over a million recipes, searching     by ingredient or keyword. Access is gained via HTTP and results can be     returned in JSON or XML
       https://www.programmableweb.com/api/recipe-puppy
- The service     provides recipes highlighting ingredients from the provider company that     applications can incorporate. Recipes are categorized by meal and by     applied classification such as kid-friendly, budget, health-conscious, and     ethnic cuisine. Recipe data is broken down by ingredient, number of     servings, preparation time, and other specifics. API methods support     retrieval of recipes matching specified classifications with particular     characteristics of interest such as ingredients and cooking time. Methods     also support creation of users' personal collections, ingredient shopping     lists, and user polls.
       https://www.programmableweb.com/api/kraft-recipe
- Spoonacular https://spoonacular.com/food-api

 

### Allergy API

- https://healthdata.gov/
- https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6277531/
- https://www.foodallergy.org/research-programs/food-allergy-resource-initiative
- https://www.cms.gov/Research-Statistics-Data-and-Systems/

 

While we were searching for the APIs we came to know that all the teams need to start working on the HDAP deployment. Apart from working on the assignment for the same we did some research on HDAP and below are the notes from the same:

 

### HDAP

·     tinyurl.com/gt-hdap

·     HDAP offers four datasets:

·     *[MIMIC](https://mimic.physionet.org/about/mimic/)*

·     A de-identified inpatient ICU dataset

·     46,500 patients 

·     *[EXACT](http://lin)*

·     A synthetic outpatient dataset

·     10,500 patients

·     [*SyntheticMass*](https://syntheticmass.mitre.org/about.html)

·     A synthetic outpatient dataset

·     20,000 patients

·     *[SynPUF](https://www.cms.gov/Research-Statistics-Data-and-Systems/Downloadable-Public-Use-Files/SynPUFs/DE_Syn_PUF.html)*

·     A synthetic outpatient dataset

·     2,300,000 patients

 

In another discussion with our TA – Taylor, he recommended that our App should have a login page and should let the users sign up and store their allergies. Our team then started the research on how to setup the database for the sign up and login pages so that the App should be able to retain the account information of the users and further should also be able to remember the allergies and ingredients selected by the user in their last login to the Food Planner App.

 

 After all these weeks of research our final version of the App is almost ready with the below finalized **Requirements**:

·     New Users should be able to Sign Up and create an account.

·     Existing Users should be able to Login to the App.

·     App should display a welcome message for the user at the top left corner of the home page.

·     Once the user has successfully logged in they should be able to see “Allergies”, “Ingredients” and “Recipe” tabs on the left side of the home page.

·     User should be able to select various Allergies on the Allergies page.

·     User should be able to choose various Ingredients of their choice on the Ingredients page.

·     User should be able to go to Recipe Tab to see the recommended Recipes. 

·     On the Recipe screen, User should be able to select the Cuisine.

·     On the Recipe screen, user should be able to select the filters based on Allergies and Ingredients. These filters can be selected simultaneously or individually.

·     Based on the cuisine and the above filters, the App should recommend the Food Recipes to the user.