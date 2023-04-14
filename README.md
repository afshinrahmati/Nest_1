# Nest_1
Do project with Nest

install Nest
> yarn add @nestjs/cli @nestjs/core @nestjs/platform-express

install Nest
> @nestjs/common ==> contains vast majority of function classes
> @nestjs/platform-express ==> lets nest user Express js for handling Http Request
> reflect-metadata ==> Helps make decorators work .Tons more on this in just a minute

| Parts | Description |
| --- | --- |
| `Controllers` | Handles incoming requests |
| `Services` | Handles data access and business logic |
| `Modules` | Groups together code |
| `Pipes` | Validates incoming data |
| `Filters` | Handles errors that occurduring request habdling |
| `Guards` | Handles authentication |
| `Interceptors` | Add extra logic to incoming request or outgoing responses |
| `Repositories` | Handles data stored in a DB |


## provider
provider s is meaning that we all servces for help like factories and repositories and load all class and file  and session and databases ,..... for run application and this load and run do provider

## module
module =?The module encapsulates providers by default ,,1)providers,2)controllers ,3) imports , 4) export
design in module is singleton that mean export just one time
you can share the same instance of any provider between multiple modules effortlessly.
and Every module is automatically a shared module Becase it is singleton
Once created it can be reused by any module
for create module you can handle it with mkdir or nest generate module test

### pipe
it happend befor call controlle for transform interfacr data 
Pipes have two typical use cases:
transformation: transform input data to the desired form (e.g., from string to integer)
validation: evaluate input data and if valid, simply pass it through unchanged; otherwise, throw an exception
like validation
### DTO(data transfer object)
A DTO is an object that defines how the data will be sent over the network
 yarn add class-validator class-transformer
## controller
controller is a place for handel requesr parameter , responsome , query ,...
can make file with mkdir or nest generate controller test/test --flat
test first is in file && test second is class messages
--flat dont create an extra class name is controller




### Service
Run some Business logic
### Repository
 Repository  save information in databases .(CRUD)