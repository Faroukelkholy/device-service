FROM node:10

WORKDIR /home/device

COPY package*.json ./


RUN npm install 


COPY . .

EXPOSE 8070

CMD ["npm","start"]