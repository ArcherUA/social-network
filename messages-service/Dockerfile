FROM registry.gitlab.com/devs.stargazer/nzbcloud-environment/images/alpine:latest

ADD ./messages-service/package.json ./messages-service/yarn.lock ./
RUN yarn
COPY ./messages-service/ ./
RUN yarn build
EXPOSE 3010

CMD ["docker/start.sh"]