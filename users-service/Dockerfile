FROM registry.gitlab.com/devs.stargazer/nzbcloud-environment/images/alpine:latest

ADD ./users-service/package.json ./users-service/yarn.lock ./
RUN yarn
ADD ./users-service/ ./
RUN yarn build
EXPOSE 3010

CMD ["docker/start.sh"]