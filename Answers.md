1.  Explain the differences between `client-side routing` and `server-side routing`.
A: Navigation between pages with client-side routing is handled by the internal Javascript while server-side routing is handled by 
a server. Client-side routing is generally faster than server-side because for server-side, you have to wait for the server to return the data you want rendered whereas a change in client-side will trigger a change in state that will render different components already available. Server-side routing will result in a page refresh whereas a client-side will not.

2.  What does HTTP stand for?
A: HTTP stands for Hypertext Transfer Protocol and is a set of rules that govern how browsers interact with servers.

3.  What does CRUD stand for?
A: CRUD stands for Create, Read, Update, and Delete as it pertains to interacting with server resources.

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
A: To Create, Read, Update, and Delete something from the server, we must send a request to the server using the Post(), Get(), Put(), and Delete() HTTP methods respectively.

5.  Mention three tools we can use to make AJAX requests
A: After we fetch the information from the server using fetch() and a promise comes back, we can use then(), catch(), and finally() to manipulate the information. Then() takes a callback with the response from the server passed in; the response is usually data that we want to set on state or render. Catch() is the same as then() but instead of response, we get an error back telling us what went wrong. Finally() is used for when we need to wait for all of the data to return before we perform an operation.