**Food Planner Backend API Documentation**
----

* [Show All Patients](#show-all-patients)
* [Find patient by ID](#find-patient-by-id)
* [Create new patient](#create-new-patient)
* [Update patient by ID](#update-patient-by-id)
* [Delete patient by ID](#delete-patient-by-id)
* [Patient Login](#patient-login)

## Show All Patients

  Returns json data for all patients

* **URL**

  /api/patients/

* **Method:**

  `GET`
  
*  **URL Params**

  None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    [
      {
          "id": 1,
          "firstName": "test",
          "lastName": "test",
          "email": "test@test.com",
          "userName": "test",
          "password": "test",
          "allergies": "shrimp",
          "conditions": "heartburn"
      }
    ]
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />

* **Sample Call:**

  ```
    GET /newfoodplanner2backend/api/patients HTTP/1.1
    Host: apps.hdap.gatech.edu
    Content-Type: application/json
    User-Agent: PostmanRuntime/7.19.0
    Accept: */*
    Cache-Control: no-cache
    Postman-Token: 305976b2-a08f-409a-a94b-6b729c477a5e,885bf36d-6d1e-4e56-93d0-920dee558337
    Host: apps.hdap.gatech.edu
    Accept-Encoding: gzip, deflate
    Content-Length: 51
    Connection: keep-alive
    cache-control: no-cache

    {
        "userName": "test",
        "password": "test1"
    }
  ```
  
  
  
## Find patient by ID

  Returns json data for a patient by ID

* **URL**

  /api/patients/:id

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id : 12, name : "Michael Bloom" }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```
    ```

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`

* **Sample Call:**

  ```
  GET /newfoodplanner2backend/api/patients/1 HTTP/1.1
  Host: apps.hdap.gatech.edu
  Content-Type: application/json
  User-Agent: PostmanRuntime/7.19.0
  Accept: */*
  Cache-Control: no-cache
  Postman-Token: 0fe51b90-e709-4dc7-8810-be95183b65f3,c68b8388-6f56-4363-b665-347ad242a460
  Host: apps.hdap.gatech.edu
  Accept-Encoding: gzip, deflate
  Connection: keep-alive
  cache-control: no-cache


  ```  
  
## Create new patient

  Create a new patient, and returns its json data.

* **URL**

  /api/patients

* **Method:**

  `POST`
  
*  **URL Params**

* **Data Params**

     **Required:**
   
     `firstname=[alphanumeric]`
     `lastname=[alphanumeric]`
     `email=[alphanumeric]`
     `username=[alphanumeric]`
     `password=[alphanumeric]`
  
     **Optional:**
   
     `allergies=[alphanumeric]`
     `conditions=[alphanumeric]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
        "id": 3,
        "firstName": "test2",
        "lastName": "test2",
        "email": "test2@test.com",
        "userName": "test2",
        "password": "test2",
        "allergies": "banana",
        "conditions": "Abdominal Adhesions"
    }
    ```
    
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```
    {
        "timestamp": "2019-11-16T22:15:36.515+0000",
        "message": "Required request body is missing: public backend.model.Patient backend.controller.PatientController.createPatient(backend.model.Patient)",
        "details": "uri=/api/patients"
    }
    ```

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`

* **Sample Call:**

  ```
  POST //newfoodplanner2backend:8080/api/patients HTTP/1.1
  Host: Http:
  Content-Type: application/json
  User-Agent: PostmanRuntime/7.19.0
  Accept: */*
  Cache-Control: no-cache
  Postman-Token: 791822f4-4579-4df0-90f2-1d4b152e6c0d,49591e45-9b81-46a0-82ff-3e1b3f3ea46d
  Host: localhost:8080
  Accept-Encoding: gzip, deflate
  Content-Length: 203
  Connection: keep-alive
  cache-control: no-cache
  
  {
      "firstName": "test2",
      "lastName": "test2",
      "email": "test2@test.com",
      "userName": "test3",
      "password": "test3",
      "allergies": "coconut",
      "conditions": "Abdominal Adhesions"
  }
  ```  
  
## Update patient by ID

Returns json data for a patient by ID

* **URL**

    /api/patients/:id

* **Method:**

    `PUT`

*  **URL Params**

* **Data Params**

   **Required:**
 
   `firstname=[alphanumeric]`
   `lastname=[alphanumeric]`
   `email=[alphanumeric]`
   `username=[alphanumeric]`
   `password=[alphanumeric]`

   **Optional:**
 
   `allergies=[alphanumeric]`
   `conditions=[alphanumeric]`

* **Success Response:**

* **Code:** 200 <br />
  **Content:** 
  ```
  {
      "id": 2,
      "firstName": "test2",
      "lastName": "test2",
      "email": "test2@test.com",
      "userName": "emilywatson",
      "password": "test2",
      "allergies": "coconut",
      "conditions": "Abdominal Adhesions"
  }
  ```
  
* **Error Response:**

* **Code:** 404 NOT FOUND <br />
  **Content:** 
  ```
  {
      "timestamp": "2019-11-16T22:25:18.708+0000",
      "message": "Patient not found: 10",
      "details": "uri=/api/patients/10"
  }
  ```

OR

* **Code:** 401 UNAUTHORIZED <br />
  **Content:** `{ error : "You are unauthorized to make this request." }`

* **Sample Call:**
    
    ```
    PUT /newfoodplanner2backend/api/patients/2 HTTP/1.1
    Host: apps.hdap.gatech.edu
    Content-Type: application/json
    User-Agent: PostmanRuntime/7.19.0
    Accept: */*
    Cache-Control: no-cache
    Postman-Token: f380f51a-dcea-4c8d-be9e-22bbf992a665,a90a5cbd-075e-41f6-af3b-cced693b9c3b
    Host: apps.hdap.gatech.edu
    Accept-Encoding: gzip, deflate
    Content-Length: 203
    Connection: keep-alive
    cache-control: no-cache
    
    {
        "firstName": "test2",
        "lastName": "test2",
        "email": "test2@test.com",
        "userName": "test2",
        "password": "test2",
        "allergies": "coconut",
        "conditions": "Abdominal Adhesions"
    }
    ```  

## Delete patient by ID

Delete a patient by ID

* **URL**

    /api/patients/:id

* **Method:**

    `DELETE`

*  **URL Params**

* **Data Params**

   **Required:**
 
    `id=[integer]`
    
* **Success Response:**

* **Code:** 200 <br />
  **Content:** 
  ```
    {
    "id": 1,
    "firstName": "test2",
    "lastName": "test2",
    "email": "test2@test.com",
    "userName": "test",
    "password": "test2",
    "allergies": "coconut",
    "conditions": "Abdominal Adhesions"
    }
  ```
  
* **Error Response:**

* **Code:** 404 NOT FOUND <br />
  **Content:** 
  ```
    {
      "timestamp": "2019-11-16T22:25:18.708+0000",
      "message": "Patient not found: 1",
      "details": "uri=/api/patients/1"
    }
  ```

OR

* **Code:** 401 UNAUTHORIZED <br />
  **Content:** `{ error : "You are unauthorized to make this request." }`

* **Sample Call:**
    
    ```
    PUT //localhost:8080/api/patients/1 HTTP/1.1
    Host: Http:
    Content-Type: application/json
    User-Agent: PostmanRuntime/7.19.0
    Accept: */*
    Cache-Control: no-cache
    Postman-Token: e102f49e-46e2-452c-9276-b13cfc09e97f,31915ab9-5147-4e1d-8cef-1e47ac50fe26
    Host: localhost:8080
    Accept-Encoding: gzip, deflate
    Content-Length: 203
    Connection: keep-alive
    cache-control: no-cache
    
    {
        "firstName": "test2",
        "lastName": "test2",
        "email": "test2@test.com",
        "userName": "test2",
        "password": "test2",
        "allergies": "coconut",
        "conditions": "Abdominal Adhesions"
    }
    ```  
  
## Patient Login

    Login in as a patient.

* **URL**

    /api/login

* **Method:**

    `POST`

*  **URL Params**

* **Data Params**

   **Required:**
 
    `userName=[alphanumeric]`
    `password=[alphanumeric]`
    
* **Success Response:**

* **Code:** 200 <br />
  **Content:** 
  ```
  {
      "id": 1,
      "firstName": "John",
      "lastName": "Doe",
      "email": "johndoe@test.com",
      "userName": "test",
      "password": "test",
      "allergies": "shrimp",
      "conditions": "heartburn"
  }
  ```
  
* **Error Response:**

* **Code:** 404 NOT FOUND <br />
  **Content:** 
  ```
    {
        "timestamp": "2019-11-16T22:38:48.566+0000",
        "message": "Patient not found: test1",
        "details": "uri=/api/login"
    }
  ```

OR

* **Code:** 401 UNAUTHORIZED <br />
  **Content:** `{ error : "You are unauthorized to make this request." }`

* **Sample Call:**
    
    ```
    POST /newfoodplanner2backend/api/login HTTP/1.1
    Host: apps.hdap.gatech.edu
    Content-Type: application/json
    User-Agent: PostmanRuntime/7.19.0
    Accept: */*
    Cache-Control: no-cache
    Postman-Token: ed3d2d62-b52f-4db7-b3dc-529cb416ea64,6a0d8749-fe01-4a1f-96a6-15f0cdcfbd20
    Host: apps.hdap.gatech.edu
    Accept-Encoding: gzip, deflate
    Content-Length: 50
    Connection: keep-alive
    cache-control: no-cache
    
    {
      "userName": "test",
      "password": "test"
    }
    ```  
  

