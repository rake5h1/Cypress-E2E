FROM node

# Install Xvfb and other dependencies
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

# Set up virtual display
ENV DISPLAY=:99
COPY package*.json ./
RUN npm install
COPY . .
CMD ["sh", "-c", "Xvfb $DISPLAY -ac +extension RANDR -screen 0 1280x1024x16 & sleep 2 && npm run test"]
