FROM node
RUN apt-get install xvfb
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "npm","run","test" ]