FROM node
COPY . .
RUN apt-get update && apt-get install -y \
    xvfb\
    npm
RUN xvfb-run npx cypress run

