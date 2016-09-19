# React Native Starter Kit

[![Build Status](https://travis-ci.org/maratfakhreev/react-native-starter-kit.svg?branch=master)](https://travis-ci.org/maratfakhreev/react-native-starter-kit)
[![Dependency Status](https://david-dm.org/maratfakhreev/react-native-starter-kit.svg)](https://david-dm.org/maratfakhreev/react-native-starter-kit)
[![devDependency Status](https://david-dm.org/maratfakhreev/react-native-starter-kit/dev-status.svg)](https://david-dm.org/maratfakhreev/react-native-starter-kit#info=devDependencies)

It is the simple starter kit for mobile applications based on React Native, ES6/ES7, Babel and Flux technologies.

## It includes:
* React Native as core technology
* Alt as flux realization
* Base skeleton to fast application start

## Install
### OSX

Install Node.js

```bash
brew install nvm
nvm install node
nvm alias default node
```

## Quick start

Clone application as new project

```bash
git clone git@github.com:maratfakhreev/react-native-starter-kit.git && cd react-native-starter-kit
```

Run prepare script if you need to change application name in all iOS and Android files and entries. And this you need definitely ;)

```bash
bin/prepare YourAppName
```

Run bootstrap script

```bash
bin/setup
```

## Run application

Run the application fully complies to [the original instruction](https://facebook.github.io/react-native/docs/getting-started.html). Or you can use next command:
```bash
npm start
```

## Code linting tasks

Run ES6 linter
```bash
npm test
```

## Getting to know React Native

* To find out more about React Native, check out the [documentation](https://facebook.github.io/react-native/docs/getting-started.html).
* To find out more about Alt, check out the [documentation](http://alt.js.org/docs/).
