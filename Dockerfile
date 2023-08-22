# Use a base image
FROM node:14.16.0

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY tutorial-web-fe .

# Build the Angular app
RUN npm run build

# Start the Angular app
CMD ["npm", "start"]
