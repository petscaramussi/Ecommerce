# Ecommerce
 🅰 Angular + 🟣 .NET Core  - Ecommerce App

## Prints
<img src="https://github.com/petscaramussi/images/blob/main/skinet/login.PNG" width="48%"> <img src="https://github.com/petscaramussi/images/blob/main/skinet/home.PNG" width="48%">

<img src="https://github.com/petscaramussi/images/blob/main/skinet/shop.PNG" width="48%"> <img src="https://github.com/petscaramussi/images/blob/main/skinet/baket.PNG" width="48%">

<img src="https://github.com/petscaramussi/images/blob/main/skinet/checkout1.PNG" width="32%"> <img src="https://github.com/petscaramussi/images/blob/main/skinet/checkout2.PNG" width="32%">  <img src="https://github.com/petscaramussi/images/blob/main/skinet/checkout3.PNG" width="32%">

<img src="https://github.com/petscaramussi/images/blob/main/skinet/checkout4.PNG" width="32%"> <img src="https://github.com/petscaramussi/images/blob/main/skinet/viewOrders.PNG" width="32%"> <img src="https://github.com/petscaramussi/images/blob/main/skinet/confirm.PNG" width="32%">

## Build

### Angular

1. Go to project folder 'client' then 'angular-frontend' and install dependencies:
 ```bash
 npm install
 ```
 
2. Launch development server, and open `localhost:4200` in your browser:
 ```bash
 npm start
 ```
 
  ### .Net

 1. run the following command in a terminal window (in the complete) directory: \Ecommerce
 ```bash
   nuget restore Ecommerce.sln
 ```
 
 2. Go to project folder 'api' then run (do not apply hot reload, some features will do not work):
  ```bash
    dotnet watch --no-hot-reload
 ```

## Design Patterns and Features

### .Net -> Repository Pattern

The repository pattern is a software design pattern used in object-oriented programming to separate the logic that retrieves data from a database or external source from the business logic of an application. It acts as a middleman between the data source and the application's business logic, providing a clean and consistent interface for data access operations. By abstracting the data access logic into a repository, developers can write code that is independent of the specific data storage mechanism, making it easier to switch between different data sources or perform unit testing. This pattern promotes a structured and organized approach to managing data within an application, enhancing maintainability and scalability.



### .Net -> Specification Pattern

The specification pattern is a design pattern in software development that enables the definition of complex business logic or conditions in a composable and reusable manner. It involves creating specialized classes or objects, known as specifications, which encapsulate criteria that need to be evaluated against a target object. These specifications can be combined using logical operators (like AND, OR, NOT) to form more intricate conditions. This pattern is particularly useful in scenarios where there are multiple criteria that need to be applied to filter, validate, or select objects from a collection or a dataset. By encapsulating these conditions in separate specification classes, developers can maintain a clear separation of concerns and facilitate code reusability, ultimately leading to more flexible and maintainable software systems.



### .Net -> Unity of Work - DB Context

The Unit of Work pattern is a design pattern used in software development to manage database transactions in an application. It provides a way to group multiple operations (like inserts, updates, and deletes) into a single transactional scope, ensuring that either all of them succeed or none at all. This pattern abstracts the underlying data access logic, allowing developers to work with a higher-level, application-specific interface. By doing so, it promotes maintainability, testability, and separation of concerns. The Unit of Work pattern is particularly beneficial in scenarios where multiple database operations need to be coordinated, ensuring data integrity and consistency across various entities within an application. It helps to minimize the risk of partial updates or inconsistent states, making it a valuable tool in building robust and reliable software systems.



### .Net -> Reddis

Redis is an open-source, in-memory data structure store that serves as a highly performant and versatile key-value database. It excels at handling real-time, high-throughput workloads by storing data in RAM, which allows for extremely fast read and write operations. Redis supports a variety of data structures, including strings, lists, sets, and more, enabling a wide range of use cases such as caching, session management, and real-time analytics. Additionally, Redis provides features like replication, clustering, and pub/sub messaging, making it suitable for building distributed and fault-tolerant systems. Its simplicity, speed, and flexibility have made Redis a popular choice for applications requiring low-latency data access, especially in scenarios where rapid response times are critical, such as in web applications, gaming, and high-frequency trading systems.



### Angular -> Lazy loading

Angular lazy loading is a technique used to improve the performance and efficiency of web applications built with the Angular framework. It involves loading specific modules of an application on-demand, rather than loading the entire application at once. This means that when a user navigates to a particular route or section of the application, only the necessary code and assets for that section are fetched from the server. This can significantly reduce the initial load time of the application, as it only loads the essential components and resources needed for the current view. Lazy loading is particularly useful for large applications with multiple routes and modules, as it helps optimize resource utilization and improve the overall user experience by delivering faster page loads. It's a powerful tool for building scalable and high-performance Angular applications.


### Angular -> Ngx-Bootstrap

Angular ngx-bootstrap is a popular open-source library that provides a set of native Bootstrap components and directives specifically designed for use in Angular applications. It serves as a bridge between Angular and Bootstrap, allowing developers to seamlessly integrate Bootstrap's extensive UI components into their Angular projects. This library simplifies the process of creating responsive, visually appealing web applications by offering a wide range of pre-styled components like modals, carousels, datepickers, tooltips, and more. ngx-bootstrap also aligns with Angular's component-based architecture, ensuring smooth integration and compatibility with Angular's change detection and lifecycle management. By leveraging the power of ngx-bootstrap, developers can expedite the development process and maintain a consistent and visually appealing user interface within their Angular applications.




