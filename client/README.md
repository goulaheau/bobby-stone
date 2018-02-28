# BobbyStone Client

Client based on Angular 5.

## Getting Started

### Prerequisites

[Node.js](https://nodejs.org/en/download/) 8.8 or higher is required.

[AngularCLI](https://cli.angular.io/) 1.5.0 or higher is required.

### Installing

Open the console and get inside this directory.

Then install the dependencies.

```
npm i
```

That's all, you can now start.

```
npm start
```

## Acknowledgments

### Known Bugs

On the connection page and the registration page, if there is an error with your request to the server, there is no message showing. You have to open the console to see what's wrong.

If you're connected and you can't do anything, that's because your token is not good anymore, you have to delete it manually : On Chrome, open the Devtool, go to Applications > Local storage > your website et delete the line containing the token.

