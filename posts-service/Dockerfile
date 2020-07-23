FROM registry.gitlab.com/devs.stargazer/nzbcloud-environment/images/alpine:latest

ADD ./posts-service/package.json ./posts-service/yarn.lock ./
RUN yarn
ADD ./posts-service/ ./
RUN yarn build
EXPOSE 3010

CMD ["docker/start.sh"]