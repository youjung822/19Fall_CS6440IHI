# Test Plan (Version 4.0)

This test plan is designed to describe the testing strategy, test selection techniques, adequacy criteria, bug tracking and also includes the test cases to be executed to validate the Food Planner Web App.

**Author**: RunTime Terror

## 1 Testing Strategy

### 1.1 Overall Strategy

In order to have a robust application, a team should prepare a progressive testing plan which should include unit tests, integration tests and system (also called End to End) tests. Apart from that, to ensure that the application does not collapse due to unforeseen non functional requirements or enhanced functionality, a good regression test suite must also be executed quite often (or after every build).

Following levels of testing will be performed:

**Unit Testing** : Every developer will test their respective modules.

**System Test** : We will have Integration and complete E2E validations being done during this phase. We will start by looking at some integrated systems and then finally test the whole system. If needed, we will plan to run some End to End scenarios on Hangouts calls in order to ensure no bugs seep through after deployment. 

### 1.2 Test Selection

Testing will mostly be based on black box techniques. White box testing would only be done if any code reviews are required in case of an elusive/critical issue encountered during integration/system testing.

Black box techniques that would be heavily used in different stages of testing are Class Partitioning and Boundary Value Analysis. Both these techniques when used in conjunction will help eliminate most of the bugs in the app.

### 1.3 Adequacy Criterion

We will stick to the basics of branch coverage and statement coverage techniques to ensure that we have a quality test suite.  

### 1.4 Bug Tracking

For bug tracking our team would be using **Github Repo - Issues Section**.  

### 1.5 Test Case Execution

We will be executing the test cases manually. Our intent was to focus more on finding a better and faster way of developing the App and testing it thoroughly. 

## 2 Test Cases
*We are still finalizing the design and the requirements. Once everything is completed, we will have the test cases written as per the system expectations.



| |Purpose |Steps necessary to perform the test|Expected result|Actual result|Pass/Fail|
|---|:-:|:-:|:-:|:-:|:-:|
| 1 |To Test if the webpage gets loaded successfully. |Bring up the URL of the web page of the Food Planner using the URL:  https://apps.hdap.gatech.edu/newfoodplanner2frontend/.|The web page should load successfully.|It loads successfully.|Pass|
| 2 |Test the Login screen. |Launch the Food Planner App using the URL:    https://apps.hdap.gatech.edu/newfoodplanner2frontend/.|Login screen should appear.|Login screen is displayed.|Pass|
|3|      Test the different components on the Login screen       | Launch the Food Planner App using the URL:    https://apps.hdap.gatech.edu/newfoodplanner2frontend/. | There should be a header saying "My Food Planner" in bold text and dark blue color. There should be a "username" text field. There should be a "Password" text field. Below the text fields there should be a "LOGIN" button. |              All the components are displayed.               | Pass |
|4|                     Test the home page.                      | Launch the Food Planner App using the URL:    https://apps.hdap.gatech.edu/newfoodplanner2frontend/. Login using the valid credentials. | At the top left corner a welcome message should be displayed for the current user. |                    Message is displayed.                     | Pass |
|5|           Test the home page for the Login button.           | Launch the Food Planner App using the URL:    https://apps.hdap.gatech.edu/newfoodplanner2frontend/. Login using the valid credentials. | At the top right corner, there should be an option to go back to the Login screen. |                  Login button is displayed.                  | Pass |
| 6 | Validate the options presented on the home page of the Food Planner web app. | Bring up the URL of the Food Planner web page and check the homepage. | Home Page should display "My Allergies", "My Ingredients" and "Recipe Lookup" options on the left side of the home page. | Looks good. | Pass |
| 7 | Validate the "My Allergies" tab | Bring up the URL of the Food Planner web page and check the   homepage. Click on the "My Allergies" Tab. | When the user clicks on the "My Allergies" tab there should be a "My Allergies" header displayed on the Right side of the page. | The required tab is there. | Pass |
| 8 | Validate the "My Allergies" tab II | Bring up the URL of the Food Planner web page and check the   homepage. Click on the "My Allergies" Tab. | When the user clicks on the "My Allergies" tab there should be a "My Allergies" header displayed on the Right side of the page. Below the Header there should be a text field/drop down list where the user should be able to enter their existing Allergies. | User can either use the drop down to look for the allergies or can start to type in the text field which would lead the drop down to display matching options. | Pass |
| 9 | Validate the "My Allergies" tab III | Bring up the URL of the Food Planner web page and check the   homepage. Click on the "My Allergies" Tab. | Once the user enters their existing condition in the text field , they should be able to see the condition being added to the list below the text field. | Looks good | Pass |
| 10 | Validate the "My Allergies" tab IV | Bring up the URL of the Food Planner web page and check the   homepage. Click on the "My Allergies" Tab. | Once the user enters their existing condition in the text field and hit the search button, they should be able to see the condition being added to the list below the text field. As the user keeps on adding the Allergies, the list below the text field should keep on adding that condition to the display list. | Looks good | Pass |
| 11 | Validate the "My Allergies" tab IV | Bring up the URL of the Food Planner web page and check the   homepage. Click on the "My Allergies" Tab. | User should be able to remove a condition from the list by simply clicking on the "X" button next to each condition. | Looks good | Pass |
| 12 | Validate the "My Ingredients" tab I | Bring up the URL of the Food Planner web page and check the   homepage. | "My Ingredients" tab should be displayed on the left side below the "My Allergies". | Looks good | Pass |
| 13 | Validate the "My Ingredients" tab II | Bring up the URL of the Food Planner web page and check the   homepage. Click on the "My Ingredients" Tab. | When the user clicks on the "My Ingredients" tab there should be a "My Ingredients" header displayed on the Right side of the page. Below the Header there should be a text field where the user should be able to enter ingredients. | Works fine | Pass |
| 14 | Validate the "My Ingredients" tab III | Bring up the URL of the Food Planner web page and check the   homepage. Click on the "My Ingredients" Tab. | As soon as the user starts typing in the search Ingredients text box, matching list of ingredients should start appearing and the user should be able to select one of those. | Works fine | Pass |
| 15 | Validate the "My Ingredients" tab III | Bring up the URL of the Food Planner web page and check the   homepage. Click on the "My Ingredients" Tab. | As the user keeps on searching and selecting the ingredients, the ingredients should start displaying below the text field. | Works fine | Pass |
| 16 | Validate the "My Ingredients" tab IV | Bring up the URL of the Food Planner web page and check the   homepage. Click on the "My Ingredients" Tab. | User should be able to remove the ingredients from the selection by clicking on the "X" next to every ingredient name in the list of selected ingredients. | Looks good | Pass |
| 17 | Validate the "Recipe Lookup" tab I | Bring up the URL of the Food Planner web page and check the   homepage. | "Recipe Lookup" tab should be displayed on the left side below the "My Ingredients". | Looks good | Pass |
| 18 | Validate the "Recipe Lookup" tab II | Bring up the URL of the Food Planner web page and check the   homepage. Click on the "Recipe Lookup" button. | Once the user clicks on the button, "Recipe Lookup" header should be displayed on the right side of the page. | Looks good. Header is displayed. | Pass |
| 19 | Validate the "Recipe Lookup" tab III | Bring up the URL of the Food Planner web page and check the   homepage. Click on the "Recipe Lookup" button. | Below the "Recipe Lookup" header, there should be a sub header "Cuisine" displayed. Next to this sub header there should be a drop down list with different cuisines listed. | Works fine | Pass |
| 20 | Validate the "Recipe Lookup" tab IV | Bring up the URL of the Food Planner web page and check the   homepage. Click on the "Recipe Lookup" button. | Next to the cuisines drop down list there should be 2 check box fields called "Filter by my Allergies" and "Filter by my ingredients". | Looks good | Pass |
| 21 | Validate the "Recipe Lookup" tab V | Bring up the URL of the Food Planner web page and check the   homepage. Click on the "Recipe Lookup" button. | Below the Cuisine drop down list there should be a text field where the user can enter the names of specific recipes and search them accordingly. | Works fine. | Pass |
| 22 | Validate the "Recipe Lookup" tab VI | Bring up the URL of the Food Planner web page and check the   homepage. Click on the "Recipe Lookup" button. | Once the user enables either/both the check boxes, the system should filter the recipes based on the user selected check box. | Looks good. | Pass |
| 23 | Validate the performance of the Food planner app. | Bring up the URL of the Food Planner web page and check the   homepage. | The web app should respond fairly fast and there should not be any delays after user selection of any buttons or after any user searches. | App is quite responsive. | Pass |
| 24 | Validate the "Recipe Lookup" tab VI | Bring up the URL of the Food Planner web page and check the   homepage. Click on the "Recipe Lookup" button. | The App should be able to display records based on the filter selection. User can select both the filters or can select either of them; the app should be able to display the recipes based on the filter selection. | This works fine. | Pass |
| 25 | Validate the "Recipe Lookup" tab VI | Bring up the URL of the Food Planner web page and check the   homepage. Click on the "Recipe Lookup" button. | User should be able to type in the recipe and search for it. | Looks good. | Pass |
|      |         |                                     |                 |               |  |
|      |         |                                     |                 |               |           |
|      |         |                                     |                 |               |           |
|      |         |                                     |                 |               |           |
|      |         |                                     |                 |               |           |
|      |         |                                     |                 |               |           |
|      |         |                                     |                 |               |           |
|      |         |                                     |                 |               |           |
|      |         |                                     |                 |               |           |
|      |         |                                     |                 |               |           |
|      |         |                                     |                 |               |           |
|      |         |                                     |                 |               |           |
