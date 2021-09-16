FROM node:14

# Sets up top level directory that will contain our package*.json files and dependencies 
WORKDIR /home

# chaining two commands, first install dependencies and then run custom script using nodemon to ensure backend changes are automatically reflected 
ENTRYPOINT npm install && npm run watch

# chaining two commands, first install dependencies and then run the index.js file. Issue with this is that dockerfile is cached, and so we aren't able to see live updates in our code.
# ENTRYPOINT npm install && node ./src/index.js


# Need to --ignore because otherwise, when we try and write/save to our json file, nodemon will update  
 # "watch": "nodemon --ignore './data/*.json' ./src/index.js"