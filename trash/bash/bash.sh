#!/usr/bin/env bash

# username=$(whoami)
# echo "$username ALL=(ALL) NOPASSWD: ALL"

apt-get install sudo
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
source ~/.bashrc
nvm install 18





# Install nvm and Node.js
bash -c ". .nvm/nvm.sh \
    && nvm install 18 \
    && nvm use 18 \
    && nvm alias default 18"

echo "nvm use default &>/dev/null" >> ~/.bashrc.d/51-nvm-fix

# Install dependencies
sudo apt-get update \
    && sudo apt-get install -y --no-install-recommends \
        xvfb x11vnc fluxbox dbus-x11 x11-utils x11-xserver-utils xdg-utils \
        fbautostart xterm eterm gnome-terminal gnome-keyring seahorse nautilus \
        libx11-dev libxkbfile-dev libsecret-1-dev libnotify4 libnss3 libxss1 \
        libasound2 libgbm1 xfonts-base xfonts-terminus fonts-noto fonts-wqy-microhei \
        fonts-droid-fallback vim-tiny nano libgconf2-dev libgtk-3-dev twm \
    && sudo apt-get clean && sudo rm -rf /var/cache/apt/* && sudo rm -rf /var/lib/apt/lists/* && sudo rm -rf /tmp/*

npm install -g bun && npm install -g yarn
echo "Success"