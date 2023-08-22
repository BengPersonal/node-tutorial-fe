# Use a base image
FROM node:14.16.0

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Angular app
RUN npm run build

# Use a lightweight web server to serve the built Angular app
FROM nginx:alpine

# Copy the built Angular app from the "build" stage to the nginx server
COPY --from=build dist/nginx.conf /usr/share/nginx/html

# Expose port 50001 to the outside world
# EXPOSE 50001

# Command to run the nginx server
CMD ["nginx", "-g", "daemon off;"]
