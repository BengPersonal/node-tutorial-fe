# Use a base image
FROM node:14.16.0

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Angular app
RUN npm run build

FROM nginx:latest
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=0 /dist/node-tutorial-fe /usr/share/nginx/html
EXPOSE 50002
# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]
