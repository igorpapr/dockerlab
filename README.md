# dockerlab
Sample node.js app, dockerized

# How I did this assignment:
To run application without dockerizing it:
```
 npm install
 node main.js
```

To build an image from the given Dockerfile:
```
 docker build -t dockerlab:v1 .
```

To create additional bridge network for the future container:
```
 docker network create dockerlab
```

To run the container given the image built before (local image). Limit of cpus: 1. Limit of memory 512m. Soft limit of memory: 256m.
```
 docker run --net dockerlab -p 8080:8080 -d --name dockerlabv1 --rm --cpus=1 -m 512m --memory-reservation=256m dockerlab:v1
```

To show logs of the container (live):
```
 docker logs -f dockerlabv1
```

To create a tag before pushing to Dockerhub:
```
 docker tag dockerlab:v1 igorische/dockerlabv1:dockerlabresult
```

To push the image to Dockerhub:
```
 docker login
 docker push igorische/dockerlabv1:dockerlabresult
```

To pull an image from the Dockerhub:
```
 docker pull igorische/dockerlabv1:dockerlabresult
```

To run a container from the pulled image:
```
docker run --net dockerlab -p 8080:8080 -d --name dockerlabv1 --rm --cpus=1 -m 512m --memory-reservation=256m igorische/dockerlabv1:dockerlabresult
```

To stop the container (automatically removed by --rm flag during run command):
```
docker stop dockerlabv1
```

# To interact with the application:
Open browser by the given URL: http://localhost:8080/index to show test html response.
Open browser by the given URL: http://localhost:8080/test to show test text response.
You can also send GET requests with any http client, i.e. Postman to have a similar result.

