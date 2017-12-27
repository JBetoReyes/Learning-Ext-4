export NGINX_HTML="/usr/share/nginx/html"
export NGINX_CONFIG="/etc/nginx/sites-enabled"
export VAGRANT_ROOT="/vagrant"

# deletes the default configurations in nginx and
# sets our configuration file.
echo "Deleting default nginx config folder $NGINX_CONFIG"
rm -rf $NGINX_CONFIG
echo "Setting our nginx config files ${VAGRANT_ROOT}/sites-enabled"
ln -s $VAGRANT_ROOT/sites-enabled /etc/nginx

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
