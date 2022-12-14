# Gateway Controller API

> An API of example created with Express JS

[Postman](https://postman.com/lab-dmorfav/workspace/gatewaycontroller/documentation/6343559-73391276-8ab7-44da-b9cc-c0818b22e6e1)
||
[Deploy](https://fierce-ravine-96646.herokuapp.com/)

## Description

This sample project is managing gateways - master devices that control multiple peripheral devices. 
Your task is to create a REST service (JSON/HTTP) for storing information about these gateways and their associated devices. This information must be stored in the database. 
When storing a gateway, any field marked as “to be validated” must be validated and an error returned if it is invalid. Also, no more that 10 peripheral devices are allowed for a gateway.
The service must also offer an operation for displaying information about all stored gateways (and their devices) and an operation for displaying details for a single gateway. Finally, it must be possible to add and remove a device from a gateway.

- Each gateway has:
  -	a unique serial number (string), 
  -	human-readable name (string),
  -	IPv4 address (to be validated),
  -	multiple associated peripheral devices. 
- Each peripheral device has:
  - a UID (number),
  - vendor (string),
  - date created,
  - status - online/offline.

## Deploy
1. Clone code
2. run `yarn install`
3. Optional you cant pass the arguments `MONGODB_URI` and `PORT` for custom database and service port
4. run `node bin/www`
