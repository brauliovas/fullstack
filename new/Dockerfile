# Set base image 
FROM centos

# By default, listen on port 80
EXPOSE 8080

# Set the working directory in the container
WORKDIR /exercise/

# Copy the content of the local source directory to the working directory
ADD . $WORKDIR

# Specify the command to run on container start
ENTRYPOINT ["/exercise/gotty", "-w" , "-p" , "8080" , "/bin/sh"]

# Set any environment variables
ENV name=Braulio 

# Dockerfile creator
LABEL maintainer="braulio@linuxonline.com"
#removed commit
