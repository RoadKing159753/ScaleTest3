# Build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
ARG PAT

SHELL [ "/bin/sh", "-c" ]

RUN npm install @vue/cli -g

COPY .npmrc-docker .npmrc
RUN echo ${PAT}  \
 && BASE64PAT=`printf "%s" "${PAT}" | base64` \ 
 && printf "%s" "$BASE64PAT" \
 && sed -i "s|{{AZUREDEVOPS_PAT}}|$BASE64PAT|g" .npmrc \
 && cat .npmrc
 
COPY package.json .

RUN npm install

COPY . .

RUN npm run build:production


# Production stage
FROM nginx:stable-alpine as production-stage
EXPOSE 80

COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY entrypoint.sh /docker-entrypoint.d/40-apetito-settings.sh
RUN chmod +x /docker-entrypoint.d/40-apetito-settings.sh

CMD ["nginx", "-g", "daemon off;"]