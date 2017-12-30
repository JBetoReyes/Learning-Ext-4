# Docker
## What is an image

### Creating a image from a docker file

**docker build -t="\<name of your image\>" \<path of your Dockerfile\>**

```
docker build -t="net-img" .
```

The previous dot tells docker to use the current directory to locate the Dockerfile

From nows on you are going to have a new image, and you can use it to create a new container using the following sintax.

**docker run -it --name=\<name of your new container\> \<name of your image\>**

```
docker run -it  --name=net net-img
```

You can see your images with this command:

```
docker images
```

### How to work with ports

**docker run -d -p \<ip number (notmandatory)\>:\<port of your host\>:\<port of your container\>**/\<prtotocol(notmandatory)\>

```
# Test for networking module
FROM ubuntu

RUN apt-get update && apt-get install -y iputils traceroute apache2

EXPOSE 80

ENTRYPOINT["apache2ctl"]
CMD["-D", "FOREGROUND"] # Here CMD sets some default arguments for apache2ctl
```

```
docker run -d -p 192.168.56.50:5003:80/tcp --name=web3 apache-img # apache is your image name
```

Seeing the forwarding ports for a specific container

```
docker port web1 # web1 is the name of your container
```

## How to work with volumes

-v **\<name of your volume\>**

```
docker run -it -v /test-vol --name=voltainer ubuntu /bin/bash
```

### How to see where this new volume is stored in your host

```
docker inspect voltainer
```

You will see something like the following

```
"Volumes": {
    "/test-vol": "/var/lib/docker/vfs/dir/a327cac8c7c7b39f01869b7fa11f9999434c2b267494ecd8a26751129e6e3d13"
},
"VolumesRW": {
    "/test-vol": true
}
```

This is the path of your volume

**"/var/lib/docker/vfs/dir/a327cac8c7c7b39f01869b7fa11f9999434c2b267494ecd8a26751129e6e3d13"**

### How to get access to this volume from another container

**--volumes-from=\<name of your previous container\>**

```
docker run -it  --volumes-from=voltainer --name=voltainer2 ubuntu /bin/bash
```

### How to mount a folder in our host as a volume

**/\<yourHostFolder\>:/\<yourGuestFolder\>**

```
docker run -v /data:/data
```

### How to manage volumes in your Dockerfile

**Volume /\<your volume folder name\>**

```
FROM ubuntu

RUN apt-get update
VOLUME /data
ENTRYPOINT ["echo"]
```

### How to delete a volume

**docker rm -v \<name of your container which owns your volume\>**


### what is docker0?

is a bridge

to see more info about docker0 you can install bridge utils 

```
sudo apt-get install bridge-utils
```

```
brctl show docker0
```
