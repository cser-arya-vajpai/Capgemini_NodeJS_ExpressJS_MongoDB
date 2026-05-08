//!=====================HTTP MODULE============
//? WHAT IS HTTP MODULE?
/*
1.HTTP IS BUILT-IN MODULE
2.IT IS USED TO CREATE WEB SERVERS
3.IT HANDLES REQUEST AND RESPONSE
4.NO THIRD PARTY PACKAGES REQUIRED
*/


//?HOW TO IMPORT?
const http=require('http')


//? RANGES OF STATUS CODES:---
/*
1.100-199--->INFORMATIONAL
2.200-299--->SUCCESS
3.300-399-->REDIRECT
4.400-499-->CLIENT ERRORS
5.500-599-->SERVER ERROR
*/


//? COMMON STATUS CODE:--
/*
1.200 OK--->SUCCESS
2.201--->NEW DATA CREATED
3.404-->WRONG URL
4.500-->SERVER CRASH

*/



//? HTTP METHODS:--
/*
1.GET-->TO READ THE DATA
2.POST->CREATE DATA
3.PUT-->FULL UPDATE
4.PATCH-->PARTIAL UPDATE
5.DELETE-->TO REMOVE THE DATA

*/

//? PRACTISE ALL server.js file from 1-5...Then we will go for HTTP ROUTING


//!==================HTTP ROUTING=====================

//? HTTP ROUTING is a process of mapping an incoming HTTP Request (URL+method) to  aspecific response...


//Why we need HTTP Routing---->server should get different responses for each request
//endpoints:--- 
/*
    1.   / -->Home/Main Page
    2.   /about -->About Page
    3. /api-->send response in json
    4.  /random-->Error as response
*/

//? REQUEST ARGUEMENTS:--
/*
1.req.url:--URL PATH
2.req.method-->HTTP METHOD
3.req.headers-->Client headers
*/


//?Response Headers:--
/*
1.res.writeHead:---statuscode+Headers
2.res.end--> send response and close the response
*/



//BAsic BoilerPlate code-->this is manual routing
if(req.url==="/"){response1}
else if(req.url==="/about"){response2}
else {repsonse3}

//? Refer server6.js