# BLUEVR
Create, store and delete shapes (entities) in webVR
![](assets/assets1.png?raw=true)


## Overview
This web app allows users to create shapes in a webVR environment without having to write any code. Instead of writing code, the user inputs data regarding the geometry, color and position for a new entity. After, the user clicks on the create button to store the entity's data to a database while also displaying the new entity in the bowser.
![](assets/assets2.png?raw=true)
![](assets/assets3.png?raw=true)
![](assets/assets4.png?raw=true)


## Technologies
[A-frame](https://aframe.io/) _ HTML5 _ CSS3 _ JavaScript _ jQuery _ Handlebars _ MongoDB _ Node.js _ Express _ [A-frame cursor with visual feedback from Captain Anonymous](http://codepen.io/anon/pen/dpmpJP)


## Wireframe
![](assets/wireframe1.png?raw=true)
![](assets/wireframe2.png?raw=true)
![](assets/wireframe3.png?raw=true)


## Installation instructions
To all install dependencies for this project run
```
npm install
```

## Major hurdles
A click, a gaze, both?

Although webVR runs in the browser, when interacting with A-frame with a computer, the cursor needs to be modified so that it can interact individual entities with the VR scene. In A-frame a click of the mouse in the browser is not a traditional click event. Instead the "click" is actually the center of the screen which is where the camera is gazing or "clicking".

Learn more [here](https://aframe.io/docs/0.5.0/components/cursor.html#sidebar)!


## Routes
- Create - /create
- Read - /
- Update - /id
- Delete - /delete

## Trello
https://trello.com/b/Sp1qFKey/vr-app
