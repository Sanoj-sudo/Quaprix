# Use node image with specified version for building
FROM node:lts-alpine3.20 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy rest of the application code to destination folder
COPY . .

# Build the application
RUN npm run build

# Use nginx image to serve static files
FROM nginx:alpine

# Copy build output from builder stage to nginx  html directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Run nginx
CMD ["nginx", "-g", "daemon off;"]