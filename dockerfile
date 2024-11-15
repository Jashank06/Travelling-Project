FROM node:23-alpine

# Copy files into the /Travelling-Project directory
COPY package.json /Travelling-Project/
COPY server.js /Travelling-Project/

# Set /Travelling-Project as the working directory
WORKDIR /Travelling-Project

# Install dependencies
RUN npm install

# Define the command to run your server
CMD ["node", "./server.js"]