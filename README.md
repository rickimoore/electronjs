# Electron Case Study

This project was created in preparation for future roles developing cross-platform
desktop applications using ElectronJS. With this framework, I was able to create a basic UI dashboard.
The dashboard includes an authentication, analytics, product, and inbox. The analytics and product dashboards use data
pulled from UniSwap V3, while the inbox messages use a FakerJs package.

For quick development I implemented the following stack structure.

####  Electron Forge . ReactJS . TailwindCSS . RecoilJs . Apollo Client . ChartJS

### Electron Forge:
Electron Forge allows me to quickly distribute my electron desktop app to multiple OS using their CLI. It fits perfect
with ElectronJs and was really easy to integrate.

### ReactJs:
Since electron is made with javascript, I saw it as a perfect opportunity to integrate with ReactJS
for even faster development. This project is using React 18 and Typescript configurations.

### TailwindCss:
Continuing with the goal of fast development, I implemented TailwindCss which allows me to skip the need
to maintain multiple and complex style sheets. 

### RecoilJs:
At this time im fairly new using Recoil as a alternative state management system to Redux. I have enjoyed
using it in previous work projects because of its ultra minimalism and quick setup time.

### Apollo:
Apollo Client is a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL.

### ChartJS:
ChartJS is a great choice to visualize data pulled from the graph. It provides easy to use responsive and animated graphs.


## Requirements:
### NodeJs v16.16

### To Run Development:
In the project directory, you can run:

### `npm run dev` or `yarn dev`


### To Build and Distribute

### 1. `npm run build` or `yarn build`
### 2. `npm run make` or `yarn make`

