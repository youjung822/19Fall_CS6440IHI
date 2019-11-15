**Food Planner Backend API Documentation**
----

**Show All Patients**
----
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
  
  
  
**Find patient by ID**
----
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
