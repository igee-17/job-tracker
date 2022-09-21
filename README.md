# Job Tracker

##### CREATED WITH REACT.js

VIEW IN DEPLOYMENT - [Jobster](https://jobtrackerr.netlify.app)

## RESOURCES AND LIBRARIES USED

#### Favicons
[Generate Favicons](https://favicon.io/)

#### Normalize.css and Global Styles

- CSS in JS (styled-components)
- saves times on the setup
- less lines of css
- speeds up the development
- normalize.css
- small CSS file that provides cross-browser consistency in the default styling of HTML elements.
- [normalize docs](https://necolas.github.io/normalize.css/)

```sh
npm install normalize.css
```

- import 'normalize.css' in index.js
- SET BEFORE 'index.css'
- replace contents of index.css


#### Styled Components 

- CSS in JS
- Styled Components
- have logic and styles in component
- no name collisions
- apply javascript logic
- [Styled Components Docs](https://styled-components.com/)


```sh
npm install styled-components
```

```js
import styled from 'styled-components';

const El = styled.el`
  // styles go here
`;
```

- element can be any html element (div,button,section, etc)


#### Logo and Images

- [Cool Images](https://undraw.co/)


#### React Router 6

- [React Router Docs](https://reactrouter.com/docs/en/v6)

```sh
npm install react-router-dom@6
```

#### React Toastify

[React Toastify](https://www.npmjs.com/package/react-toastify)

```sh
npm install --save react-toastify
```

#### React Redux

```sh
npm install @reduxjs/toolkit react-redux
```


#### API

- Root URL
- https://jobify-prod.herokuapp.com/api/v1/toolkit



###### Register USER

- https://jobify-prod.herokuapp.com/api/v1/toolkit/auth/register

- POST /auth/register
- {name:'john',email:'john@gmail.com',password:'secret'}
- sends back the user object with token

###### Register USER - TESTING()

- POST /auth/testingRegister
- {name:'john',email:'john@gmail.com',password:'secret'}
- sends back the user object with token

###### Login USER

- POST /auth/login
- {email:'john@gmail.com',password:'secret'}
- sends back the user object with token

###### Update USER

- PATCH /auth/updateUser
- { email:'john@gmail.com', name:'john', lastName:'smith', location:'my location' }
- sends back the user object with token

#### React Icons

[React Icons](https://react-icons.github.io/react-icons/)

```sh
npm install react-icons
```


#### Moment.js

[moment.js](https://momentjs.com/)

```sh
npm install moment
```

```js
const date = moment(createdAt).format('MMM Do, YYYY');
```

#### Recharts Library

[Recharts](https://recharts.org)

```sh
npm install recharts
```

- For now does not work with React 18

```sh
npm install react@17 react-dom@17
```
OR

```sh
npm install recharts --force
```

