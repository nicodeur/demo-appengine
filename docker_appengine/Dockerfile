FROM golang
ADD . app/
WORKDIR app/

ENV redisHost=$redisHost
ENV redisPort=$redisPort
ENV staging=$staging

EXPOSE 8080
CMD go run main.go