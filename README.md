# reelo-app

## Setting up the application

**1. Clone the Repository:** 
  
  Open your terminal and navigate to the directory where you want to clone the project. Then run the following    
  command:
    
`git clone https://git@github.com:codespirit7/reelo-app.git`


**2. Navigate to the Project Directory:**

  Move into the project directory using the `cd` command.

`cd repository`


**3. Install Dependencies:**

  Once you're inside the project directory, install the necessary dependencies. Typically, an Express project has a 
  
  package.json file containing the dependencies. Run:

`npm install`

**4. Start the server:**

  Start the Express server. The command to start the server is often specified in the scripts section of 
  
  the package.json file. It's commonly named something like start. Run:

`npm run start`

**5. Access the server:**
  Once the server is running, you should be able to access it in your browser or using tools like cURL or Postman.
  
  By default, an Express server might run on [[http://localhost:5000](http://localhost:5000/api/questions)](http://localhost:5000/api/questions).
  
  Open your browser and navigate to [[http://localhost:5000](http://localhost:5000/api/questions)](http://localhost:5000/api/questions) (or the specified port). You should see the application 
  
  running.


## Testing API

**API Endpoint**

**URL:** http://localhost:5000/api/questions

**Method:** GET

**Content Type:** application/json


  
**Request Body**
<pre>
  {
    "totalMarks": "100",
    "Difficulty": {
        "easy": "20",
        "medium": "50",
        "hard": "30"
    }
}
  
</pre>

- **totalMarks:** 100
- **Difficulty:** An object specifying the distribution of questions across difficulty levels.
  - easy: 20
  - medium: 50
  - hard: 30


 ## Testing Guidelines

- **Send a GET Request:**
  - Use your preferred API testing tool (e.g., Postman, curl) to send a GET request to the provided URL: http://localhost:5000/api/questions.
  - Set the request method to GET.
  - Set the content type to application/json.
  - Include the sample request body in the request payload.

- **Review the Response:**
  - Examine the response received from the API.
  - Check for a successful status code (e.g., 200 OK).
  - Verify that the response body contains relevant information.

- **Validation:**
  - Validate that the response structure matches the expected format.
  - Ensure that the total marks and difficulty distribution are correctly processed.
  - If applicable, handle error responses gracefully.

- **Error Handling:**
  - Test error scenarios by sending invalid requests or omitting required parameters.
  - Verify that the API returns appropriate error codes and error messages.




