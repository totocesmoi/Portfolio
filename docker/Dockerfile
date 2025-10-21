FROM node:latest AS build
WORKDIR /React-Typescript-Portfolio

ADD ./React-Typescript-Portfolio .

RUN ls

RUN npm install
RUN npm run build -- --base=/containers/portfolio_muzard_3A/


FROM nginx:latest AS server
COPY --from=build ./React-Typescript-Portfolio/build /usr/share/nginx/html