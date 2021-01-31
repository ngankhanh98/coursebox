# Mobile Application

## Getting Started

### 📦 Installation

#### Prerequisite

Make sure you have React Native, Expo properly setted up on the machines (both PC and smartphone)

#### Source code

You can either have the source code via **remote git repository** or from **an attached folder**

- If you're with the attached folder, you unzip it.
- If you're with git repository, here are two options:
    - Using git command on your machine

        Direct to the directory you want to save the source code. In terminal, enter:

        ```bash
        $ git clone https://github.com/ngankhanh98/coursebox.git
        ```

    - Download from github

        Click to  [https://github.com/ngankhanh98/coursebox/archive/master.zip](https://github.com/ngankhanh98/coursebox/archive/master.zip) to download the source code. Unzip when the download process is done.

#### Build and run

In the terminal, enter:

```bash
# Direct to the target directory
$ cd coursebox

# Install neccessary packages. Packages should be completely installed without any error.
$ npm install

# Build and run 
$ npm run start
```

Now, you will find a simulating mobile application is running inside Expo in your smart phone.

## React Navigation

React Navigation was used to route screens in the mobile application. For example, in the group of screen **Auth** contains **LoginScreen, RegisterScreen, ResetPasswordScreen,** and **AccountScreen**, we can implement navigation as instruction below.

We have a subfolder called **screen/Auth**

```bash
├───screens
│   ├───Account
│   ├───**Auth**     
│		│    ├───**LoginScreen.js**
│		│    ├───**RegisterScreen.js**
│		│    ├───**ResetPasswordScreen.js**
│		│    ├───**AccountScreen.js**
│		│    └───**index.js**
│   ├───Course
│   ├───Dashboard
│   └───Home
├───selectors
└───store
```

In **screen/Auth/index.js,** we should implement navigation as below:

```jsx
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import ResetPasswordScreen from './ResetPasswordScreen';
import WelcomeScreen from './WelcomeScreen'
import AccountScreen from './AccountScreen'
import React from 'react';

const Stack = createStackNavigator();

const AuthNavigator = ) => {
    return (
    <Stack.Navigator>
           <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
           <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
           <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
           <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} options={{ headerShown: false }} />
    </Stack.Navigator>)
}

export default AuthNavigator
```

Now, screens can switch to eache others, using `navigation.navigate(<Stack.screen.name>)`

For example, in **LoginScreen,** we have a register link, which will navigate to **RegisterPassword** when hitted.

```jsx
...
export defaultfunction LoginScreen({ navigation }) {
	return (
        <Background>
            ...

            <View style={styles.row}>
                <Text style={styles.label}>Don’t have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.link}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </Background>
    )

```

#### Private Route with React Navigation

A sceenario is on the table: what if a certain screen is protected and only accessed with a matched condition. 

Take this as a example: when you did not log in, you cannot see screen **AccountScreen.** But when you successfully logged in, navigation will automatically route to **AccountScreen** (still now protected route), you can access this screen because you pass a token requiring of the screen.

```jsx
import { createStackNavigator } from '@react-navigation/stack';
import { getUserToken } from '../../selectors/user.selector';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import ResetPasswordScreen from './ResetPasswordScreen';
import WelcomeScreen from './WelcomeScreen'
import AccountScreen from './AccountScreen'
import { connect } from 'react-redux';
import React from 'react';

const Stack = createStackNavigator();

const AuthNavigator = ({ token }) => {
    // console.log('token', token)
    return <Stack.Navigator>
        {token ? (
            // User is signed in
            <Stack.Screen name="Account" component={AccountScreen} />
        ) : (
                // No token found, user isn't signed in
                <>
                    <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} options={{ headerShown: false }} />
                </>
            )}

    </Stack.Navigator>
}

const mapStateToProps = (state) => {
    const token = getUserToken(state)
    return { token }
}
export default connect(mapStateToProps)(AuthNavigator)
```

`token` knowledge is about to be presented in the next section, using Redux

## Redux

With state management, Redux is in charged. Getting through folder structure is a first step to understand.

```jsx
.
├── actions            
├── assets
├── components     
├── contants       
├── docs
├── interceptors
├── node_modules
├── package-lock.json
├── package.json
├── reducers
├── screens
├── selectors
├── store
└── webpack.config.js
```

- **component**: contains UI handling, only display the application (dumb component)
- **screens**: contains screens, every screen might contain component and have a bussiness login (call actions to request alter store)
- **actions**: implement redux actions
- **reducers**: implement multiple reducers.
- **store**: implement redux stores
- **selectors**: query state from store

I was using the exactly same architecture as Redux suggestion, which I am pretty confident to say so.

## Http Request

Http Requests are made inside **actions.** It waits until get a response did the application continue to dispatch a reducer (in charge of changing state).

```jsx
const LOGIN = (response) => ({ type: 'user/login', payload: response })

const login = ({ email, password }) => async (dispatch) => {
    try {
        const res = await http.post('/user/login', { email: email, password: password });
        dispatch(LOGIN(res.data))
        dispatch(TOAST_ADD({ status: res.status, message: TOAST_MESSAGE.LOGIN_SUCCESS }))
    } catch (error) {
        dispatch(TOAST_ADD({ status: error?.response.status ?? 500, message: error.response.data.message ?? "Internal error"}))
    }
}
```

We can (and highly recommend to) implement http interceptor. Why? Because almost every request need access token.

After logging in, `user/login` reducer will add `token` to state. We can now retrieve it by `getState()` and then attach token to request before it sent.

```jsx
const axios = require('axios');
import store from '../store'
const http = axios.create({
    baseURL: 'http://api.dev.letstudy.org',
    headers: {
        "content-type": "application/json"
    },
    responseType: "json"
});

http.interceptors.request.use(function (request) {
    const { token } = store.getState().userReducer
    axios.defaults.headers.common['Authorization'] = "Bearer " + token;
    return request;
}, function (error) {
    return Promise.reject(error);
});

export default http
```
