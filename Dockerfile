FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to app directory. Using this before overall copy to have cached layer
COPY package*.json ./
# Running npm install. Also cached
RUN npm install

# Bundle app source
COPY . .

ENTRYPOINT ["node"]

#EXPOSE 8080
CMD ["main.js"]