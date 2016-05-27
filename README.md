
## Fifth task (Web-services) ##

--------------------------------------------------------------------------------

### Description ###
Create a web-server for any CMS, bug tracking,
project management or other system, using XML or
JSON and a client to list, add and delete documents.

### What was done? ###

Simple web-server, provides API resources /add, /list and /delete

`/add - POST with body data`<br>
`/list - GET`<br>
`/delete - POST with filter`<br>

Web-service creates server on localhost:3005 and use MongoDB to store data.
