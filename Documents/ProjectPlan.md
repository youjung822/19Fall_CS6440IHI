# Project Plan

**Author**: RunTime Terror

## Project Goal
The goal is to build a Web based App called Food Planner. 

## Introduction

Food Planner is a tool to guide people in the direction of meal planning based on their current conditions. Patient should be able to upload there conditions and allergies from some source or manually. User should also be able to scan or manually enter in ingredients available. The app should help to provide quick, intermediate, or other meal ideas based on these factors.

## Project Scope
The scope of this project is to enable a user to login to the Web App and select eligible ingredients/food items based on the condition/allergy they have mentioned.

### **Research**

We started our research with a discussion with the TA - Taylor. Taylor was able to resolve a lot of our concerns. We had initially thought to just build the App where we would recommend ingredients based on the conditions/allergies selected by the user. But as per our discussion with Taylor (TA) we are now trying to come up with ideas on how to use the ingredients to further recommend various recipes based on the filter of conditions and ingredients. 

Beyond the meeting, our team started doing research on the App and found some similar websites like spoonacular.com or foodplannerapp.com. We got some really good ideas from these Apps, though our App will be different in many ways. 

As we progressed, we have started using APIs of Spoonacular.com and based on further discussions we have pivoted to Allergies instead of Conditions (as of Nov 1, 2019). The App would let the user select their Allergies and Ingredients and then on the Recipe screen, user would be able to search for recipes by establishing filters based on Allergies and Ingredients. The user would also be able to select a cuisine of their choice.

<u>Nov 10, 2019 Updates</u> - Taylor had recommended to setup a login page for the user. Our team had previously setup the front end for the same. This week we worked on to setup the database to store the login credentials and the data for users. This would let the App retain the selections that the user made when the logged in the last time i.e. information like their allergies and ingredients selection. Once the database is ready we will then work to hook up everything from the front end as well (probably next week).

Nov 17, 2019 Updates</u> - Team did research on connecting the FHIR APIs to the Food Planner App to get an exhaustive list of allergies and ingredients. Apart from that we also worked on to find ways to set up the login page and connecting the front end to the login database. Now the App is able to retain the account information of the users who have signed up previously. We had planned to complete all this work last week but due to some configuration issues we had to investigate more ways to achieve the tasks.

## Processes and Communication Channels

Our team will be contributing to work on the below activities, in that manner. But, first we need to define the Communication pathways. We all will be communicating primarily in WhatsApp group chat sessions. Secondary option is Slack. And finally, all the meetings will be held on Google Hangouts.
The first step was to meet with the assigned TA to our Food Planner App and discuss the expectations and requirements. 

The Team has started working on the below activities/deliverables and will be meeting twice a week to discuss and review the progress and future tasks.

### Project Plan
### Requirements Gathering
### Use Case Model
### Design Document
### Test Plan
### Gantt Chart
### Software Development
### Verification & Validation
### Code Refactoring
### Feature Deployment



## Team

### Team Members

- Donald Ford
- Dale Park
- Andrew Lo
- Youjung Kim (Angela)
- Vaneesh Bahl

### Roles

- **Developer:** A Software Programmer task with implementing parts of the system.
- **Quality Analyst:** Task with verifying the correct functionality of the software.
- **Project Manager:** Task with making sure the project is on track and removing any roadblock that the team might encounter. Submits the final commit ID to Canvas
- **Architect:** Task with designing the system and providing the high level design and documents.
- **Deployment Manager:** Task with providing the manual of the system and packaging the app for deployment on the android phones.
- **Quality Manager:** Task with the responsibility of managing the different levels of testing.

Team Member   | Role
------------  |------
Donald Ford   | Developer
Dale Park     | Project Manager
Vaneesh Bahl  | Quality Analyst/Manager
Andrew Lo     | Developer
Youjung Kim (Angela)   | Developer
