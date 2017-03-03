# blueVR
Create shapes (entities) in webVR


## Overview
This web app allows users to create shapes in a webVR environment without having to write any code. Instead the user inputs information regarding the geometry, color and position where the entity will be placed. Then after clicking the create button the inputed properties of the new entity will be stored in a database which also displaying in the browser.


## Technologies
[A-frame](https://aframe.io/) | HTML5 | CSS3 | JavaScript | jQuery | Handlebars | MongoDB | Node.js | Express


## Installation instructions
To all install dependencies for this project run
```
npm install
```

## Major hurdles
A click, a gaze but really both.

Although webVR runs in the browser, in A-frame, the cursor needs to be modified so that it can interact individual entities with the VR scene. In A-frame a click of the mouse in the browser is not a traditional click event. Instead the "click" is actually the center of the screen which is where the camera is gazing or "clicking".

Learn more [here](https://aframe.io/docs/0.5.0/components/cursor.html#sidebar)!


## Routes
- Create - /create
- Read - /
- Update - /id
- Delete - /delete

## Trello
https://trello.com/b/Sp1qFKey/vr-app
