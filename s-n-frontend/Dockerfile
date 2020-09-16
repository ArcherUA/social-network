FROM registry.gitlab.com/devs.stargazer/nzbcloud-environment/images/alpine:latest

ADD ./s-n-frontend/package.json ./s-n-frontend/yarn.lock ./
RUN yarn
COPY ./s-n-frontend/ ./
RUN yarn run build
EXPOSE 3010

CMD ["docker/start.sh"]