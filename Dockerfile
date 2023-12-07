FROM node:20-alpine
WORKDIR /angular-layout

COPY package.json package-lock.json  /angular-layout/


RUN npm install -g npm@latest; \
  npm install -g @angular/cli@17; \
   npm install -g http-server; \
   npm install --force;

COPY . .
EXPOSE 4200
# Command to run the application
CMD ["ng","serve","--host","0.0.0.0"]


