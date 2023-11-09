FROM node
COPY . .
RUN apt-get update && apt-get install -y nodejs
RUN apt-get update && apt-get install -y \
    xvfb
RUN npm install
CMD ["xvfb-run", "npx", "cypress", "run"]

