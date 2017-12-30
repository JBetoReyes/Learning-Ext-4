### Creating a link between two containers

1.- Lets create a new image with this Dockerfile

```
FROM ubuntu

RUN apt-get update && apt-get -y iputils-ping traceroute apache2

EXPOSE 80

ENTRYPOINT ["apache2ctl"]
CMD ["-D","FOREGROUND"]
```

2.- The next step is create the image

```
docker build -t="apache-img"
```

3.- Now is time to create a new container

```
# The name of your container is mandatory in this case
docker run --name=src -d apache-img 
```

4.- We are going to create a new container, thin in order to create a link with a our apache app

```
docker run --name=rcvr --link=src:ali-src -it ubuntu /bin/bash
```

And thats it !, we have just created a link between two containers!

but how to test it?, let see that

1.- In the previous container run the /bin/bash

```
# To see the configuration variales for our link
env | grep ALI

# ALI_SRC_PORT_80_TCP_ADDR=172.17.0.12
# ALI_SRC_PORT_80_TCP_PROTO=tcp
# ALI_SRC_PORT_80_TCP_PORT=80
# ALI_SRC_PORT=tcp://172.17.0.12:80
# ALI_SRC_NAME=/rcvr/ali-src
# ALI_SRC_PORT_80_TCP=tcp://172.17.0.12:80

```

```
apt-get update

apt-get wget

wget -O- 172.15.0.0.12:80

# or

wget -O- ali-src:80
```
