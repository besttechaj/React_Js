# Interview questions

## 06-05-24

### What is 'useNavigate' hook in react ?

The useNavigate hook is part of the "react-router-dom" package that allows programmatic routing inside a React application.

It will take one argument that is : routing or url path to re-direct the user.

Example:
When we are using button tag or any react element that's why we are unable to use "link" component to re-direct the user to different path whenever someone click on the button, So to perform such type of functionality for any button or react's element, we have one method "useNavigate" present inside the 'react-router-dom' package.

### What is useParams Hook in react ?

It is used to fetch the data or id from the provided url's endpoint.

To get the endpoint's data, we have a hook inside 'react-router-dom package' known as "useParams".

This method will not take any argument.

The return type of useParam hook is an object. The data will be stored in the key and value pair.

### What is axios in react ? What are its features ?

Axios is a library present inside node package manager.

- Axios.post():
  Example: After submitting the form we want to send the newly created data to the database, hence we have a method inside axios that is axios.post(). post() will take 3 parameters which are "url" and "data" (Please Note while sending the data to the database, the identifier should have the same that you have in database) and config (for custom configurations like authorization, content-type, data format ant many more). axios.post() will return one promise hence we have to handle it.

- Axios.get():
  Example: Using the dynamic routing (eg id), we are redirected to the Read component. Now to fetch the data for the particular user we have to first target the url's endpoint id and using id we can fetch the data from axios.get(): to get the the user's details. Hence to get the endpoint we have a method inside 'react-router-dom package' known as "useParams". This method will not take any argument. The return type of useParam hook is an object.

  Since we have fetched the id from the endpoint using "useParam" method. Now we want to fetch the user's details based on id after the component's get mounted. Hence we have one hook that is "useEffect" which will run only once after the component get mounted. So now we can make axios.get() call inside it to fetch the user's details using it's id that we have already fetched from url.

- Axios.put/patch():
  EXAMPLE: After submitting the form we want to send the updated data to the data base for a particular user, hence we have a method inside axios that is axios.put/patch(). put/patch() will take 3 parameters which are "url" and "data" (Please Note while sending the data to the database, the identifier should have the same that you have in database) and config (for custom configurations like authorization, content-type, data format ant many more). axios.put/patch() will return one promise hence we have to handle it.

- Axios.delete():
  It will take one parameter that is url to delete the data based on the url's endpoint
