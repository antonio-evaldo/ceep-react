# React: Entendendo como a biblioteca funciona

## Module 2

* How we can create class components

Basic sintax:

```js
import React, { Component } from "react";

class Card extends Component {
    render() {
        return (
            // Insert JSX here...
        );
    }
}

export default Card;
```

* Understanding how JSX renders objects
* Hierarchy between components (parents/children)
* Components can have children that are components
* How to integrate JS into JSX

## Module 3

* How to integrate CSS into your React application
* Differences between `class` and `className`
* `key` property of components

React asks for a `key` property in `li` elements, they don't appear in the HTML code, it's for library purposes.

* CSS Naming Standard
* Treating name conflicts
* Modules entry point
* Project organization

Inside the folders of the components, you can create a `index.js` file just to export the component, avoiding the duplication of the component name when exporting it.

For example, this:

```js
import Card from './components/Card/Card'
```

becomes this:

```js
import Card from './components/Card'
```

I also noticed that the project was printing an error, saying it couldn't find the component, until I restarted the server.

## Module 4

* How the JS `this` keyword is dynamic and how to deal with it
* References to functions and injection of dependecies
* Associating references through `bind`

When passing the reference of a function as a property of a component, and the function body uses the `this` keyword, we have to **bind** the `this` to the original function, avoiding its reference to dynamically change. For this, we use the `bind` React method when passing the function as a reference. For example:

```js
export class CustomButton extends Component {
    constructor() {
        // Declaring properties...
    }

    test(event) {
        // Using the this keyword...
    }

    render() {
        return (
            <button onClick={this.test.bind(this)} >Click me!</button>
        );
    }

}
```

What we pass to the `bind` method parameter, the function will refer to it when using `this` internal keyword.

## Module 5

* Thinking about how to transmit information between objects
* System update flow

We can't call the `render` method directly, or better, we can, but React won't return anything to the component, i.e., won't render it again.

* What is `state` for

We use `state` to store variables that, when having their values changed, we want to re-render the components that depends on those variables to choose what to show on the page.

* How to assign `state` in a safe way

Every component has a `state` property and a `setState` method. In `state`, we store an object with the information we want to be dynamic, and in `setState`, we pass a new object as a parameter, which will update the `state` property. For example:

```js
constructor() {
    this.state = {
        numbers: [];
    }
}

addNumber(newNumber) {
    const newState = {
        numbers: [...this.state.numbers, newNumber]
    }

    this.setState(newState);
}
```

* Dynamically updating screen visualization

# Getting Started with Create React App

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
