# .devcontainer/Dockerfile
FROM mcr.microsoft.com/devcontainers/typescript-node:latest
# https://github.com/devcontainers/images/tree/main/src/typescript-node
# Debian packages
RUN apt-get update && \
    apt-get install -y htop jq curl wget
# get the latest version of npm
RUN npm install -g npm@$(npm view npm version)
# clear up left over files
RUN apt-get clean -y
RUN rm -rf /var/lib/apt/lists/*
