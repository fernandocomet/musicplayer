# Getting Started Planning
First thing I did was creating a Trello Board to go on with the project. 
You can see is at [https://trello.com/b/pbhosD7k/musicplayer]
I identified these main tasks:
- Research
- Sketchin
- Prototype
- Design
- Code
- Documentation
- Test
- Deadline

Also I used Pomorello Power-up to track time [https://trello.com/power-ups/5d467a0fcfcb5e720c2cf941/pomorello]

# Research
I identified 8 main music players for deskto. See [https://www.pinterest.es/fernandocomet/web-music-players/]
From this point I analized main component, its distribution and behauvior. See spreedsheet at [https://docs.google.com/spreadsheets/d/1Ei1NC8mF7izq5DfG_4_MMb67eAXKEJ-jgyG2d8UpB80/edit?usp=sharing]

These are main conclussions:
- Player is either on Left or Center
- Loop & Shuffle use to go with player
- Caratule is usually on the left with the beginning of the timeline
- Timeline is Center, Full Screen or Left
- Like button is near Catatule or timeline
- Volume is on the right
- Queue or Menu are on the right

Made some sketchin to identify components on different players, main components are:
- Player (rewind, play-pause, forward)
- Loop, Shuffle 
- Love (Like)
- Caratule (Cover + Song & Title)
- Time (elapsed time - total time)
- Timeline (Music progress)
- Volume
- Menu

# Prototyping & Design
I used Spotify UI Kit [https://www.sketchappsources.com/free-source/3108-spotify-music-mac-app-ui-sketch-freebie-resource.html] as it has almost every component identified in Research.

Also made the color palette at [https://coolors.co/f5f2f3-1f2021-807c7c-bf667f-d99197] from the design given.

I made some different designs, my aim is to test them or ask users to choose one and why, could do for example a MazeDesign Survey. Mainly I am working with atomic components so once I have them, is just about styles. ![Guide](https://raw.githubusercontent.com/fernandocomet/musicplayer/master/musicplayer/src/img/readme_img/guide.png)



# Code
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
I am also using Storybook to make styled components
Project is at Github [https://github.com/fernandocomet/musicplayer/]
Also at Netlify 
Storybook at 

## Available Scripts

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
