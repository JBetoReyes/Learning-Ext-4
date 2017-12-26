# Updates yum
apt-get -y update

# Installs nginx
if [ ! -x /usr/sbin/nginx ]; then
    echo "Installing nginx"
    apt-get install -y nginx
    # this script starts the nginx process attached to passenger
    touch /etc/init.d/nginx-passenger.sh
    echo "sudo /opt/nginx/sbin/nginx" >> /etc/init.d/nginx-passenger.sh
    update-rc.d nginx-passenger.sh defaults
    # how to see if nginx is running 
    # $ ps -C nginx -f

    # Sets nginx to starts
    # systemctl enable nginx || exit $?
    service nginx start || exit $?
fi

# Installs git
if ! [ -x "$(command -v git)" ]; then
  echo "Installing git"
  apt-get install -y git
  git config --global user.name "JBetoReyes"
  git config --global user.email beto.kellyano@gmail.com
fi
