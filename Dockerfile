# Use official Node.js image
FROM node:18

# Create app directory
WORKDIR /app

# Copy app files
COPY package*.json ./
RUN npm install

COPY . .

# Expose port
EXPOSE 3000

# Start the app
CMD ["node", "app.js"]
