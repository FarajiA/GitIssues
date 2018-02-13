# GitIssues

Application to show Github issues for specific repositories.<br/>
To start locally, navigate to the working directory and<br/>  
- ````npm install````
- ````npm start````<br/>

Navigate browser to ````http://localhost:3000````

## Server ##
**Node v8+**<br/>
- Node server created for API
  - Server can cache requests
  - Server can perform mapping of JSON and models 
  - We can also map to a model for lighter payload between server & client

  ![screenshotr2](https://user-images.githubusercontent.com/5041718/36124187-c0a77df2-1014-11e8-93bb-d6e637abef5e.png)

- Server side pagination add

![screenshotr3](https://user-images.githubusercontent.com/5041718/36124481-cd9e8a22-1015-11e8-8daf-1fd6dfd0bf5d.png)
  
  
## Client ##  
**AngularJS 1.6.4**<br/>
**Bootstrap 4**<br/>

- Modular Approach to the front end
![screenshotr1](https://user-images.githubusercontent.com/5041718/36124147-97b63762-1014-11e8-8742-d4566e74d5aa.png)

- Controller Structure 
  - JS Closure using IIFE
  - Controller as implementation to avoid $scope var everytime in code
  - DI using $inject to overcome issues during bundling and minification
  
