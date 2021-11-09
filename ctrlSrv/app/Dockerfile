FROM node:16-alpine

WORKDIR /app

# copy files and install dependencies
COPY . ./
RUN npm install

EXPOSE 8000

CMD ["npm", "start"]