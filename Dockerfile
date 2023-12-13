# Use an official Node.js runtime as a parent image
FROM node:20
# Expose the port defined by the PORT environment variable

WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./


# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . ./

# Expose the port that the app will run on
EXPOSE 3000
# Build the React app

# Command to run the application
CMD ["npm", "start"]