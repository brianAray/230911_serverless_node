# HTTP

HTTP (HyperText Transfer Protocol) is the foundation of data communication on the world wide web. It is an application layer protocol that faciliates the exchange of information between a web server and a web client (usually a web browser).

HTTP defiens the structure of requests and responses that are used to transfer text, images, videos, and other resources across the internet.

## Key Characteristics

1. **Client Server Communication**
    - In the HTTP model, communication occurs between the client and the server
    - The client initiates the request to a server, and the server responds with the requested information or performs the requested action
2. **Stateless Protocol**
    - HTTP is inherently stateless, meaning that each request from a client to a server is independent and does not retain information from previous requests
    - To maintain the same user session, things like cookies, JWT token, session handling is used
3. **Request-Response Cycle**
    - A Typical HTTP interaction goes like this:
        - Client sends a HTTP request to a server, specifiying the resource they need
        - The server processes the request and sends an HTTP response back to the client containing the requested data or indiciation of success or failure
4. **Uniform Resource Locator (URL)**
    - URLS are used to identify resources on the web
    - They consist of
        - A scheme (either HTTP or HTTPS)
        - A host (www.example.com)
        - Port (Option) (:3432)
        - Path (/api/v2/resource)
        - Query Parameters (/item?name=Milk)
        - Fragment Identifier
5. **HTTP Methods (HTTP Verbs)**
    - HTTP defines various request methods (or verbs) that speicfy the action to be performed on a resource
        - GET
            - Retrieve data from the server
        - POST
            - Send data to the server to create a new resource
        - PUT
            - Update an existing resource on the server
        - DELETE
            - Remove a resource from the server
        - PATCH
            - Partially update a resouce
6. **Status Codes**
    - HTTP responses include status codes taht indicate the outcome of the request
        - 100s
            - Informational Responses
        - 200s
            - Successful responses
        - 300s
            - Redirection responses
        - 400s
            - Client Error responses
        - 500s
            - Server Error responses
7. **Headers**
    - HTTP headers provide additional information about the request or response, including:
        - content-type
        - authorization
        - length
        - caching instructions
        - etc
8. **MIME Types**
    - MIME (Multipurpose Internet Mail Extensions) types are used to specify the type and format of data in HTTP requests and responses.
    - Common types include:
        - text/html
        - application/json
        - image/jpeg
9. **Security**
    - HTTP can be used in a secure manner using HTTPS, HTTPS adds encrypting using SSL/TLS to protect the confidentiality and integrity of the data transferred
10. **Cookies and Sessions**
    - HTTP supports cookies and sessions to maintain user state and enable features like user authentication and shopping carts