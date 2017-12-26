# Updates yum
apt-get -y update

# Installs nginx
if nginx >/dev/null; then
    echo "Installing nginx"
    apt-get install nginx

    # Sets nginx to starts
    systemctl enable nginx || exit $?
    systemctl start nginx || exit $?
fi