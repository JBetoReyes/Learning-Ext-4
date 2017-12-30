# Docker

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
