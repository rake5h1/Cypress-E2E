FROM node

COPY package*.json ./

RUN npm install

RUN apt-get update && apt-get install -y \
    xvfb \
    libgbm1 \
    libgtk-3-0 \
    libnotify-dev \
    libgconf-2-4 \
    libnss3 \
    libxss1 \
    libasound2 \
    libxtst6 \
    xauth \
    xvfb \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

ENV DISPLAY=:99

COPY . .

CMD [ "npm","run","test" ]