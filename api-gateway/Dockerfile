FROM registry.gitlab.com/devs.stargazer/nzbcloud-environment/images/alpine:latest

ADD ./api-gateway/package.json ./api-gateway/yarn.lock ./
RUN yarn
COPY ./api-gateway/ ./
RUN yarn build
EXPOSE 3010

CMD ["docker/start.sh"]