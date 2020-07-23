FROM registry.gitlab.com/devs.stargazer/nzbcloud-environment/images/alpine:latest

RUN apk add ffmpeg

ADD ./social-network/package.json ./social-network/yarn.lock ./
RUN yarn

ADD ./social-network/ ./
RUN yarn build

EXPOSE 3010

CMD ["docker/start.sh"]