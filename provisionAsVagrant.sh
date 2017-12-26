export isNvmInstalled=$false
export NVM_DIR="$HOME/.nvm" || exit $?

# Installs nvm
# the -s argument checks if a file exists
if [ ! -s "$NVM_DIR/nvm.sh" ] >/dev/null; then 
  echo "Installing nvm..."
  wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash || exit $?
  [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" || exit $? # This loads nvm

  # Installing node 8   
  if ! [ -x "$(command -v node)" ]; >/dev/null; then
    nvm install 8 && nvm use 8 || exit $?
  fi
fi

# Checking if nvm is installed
if  [ -s "$NVM_DIR/nvm.sh" ] >/dev/null; then 
  echo "==========nvm installed ${isNvmInstalled} =========="
  isNvmInstalled=$true
fi

# if [ $isNvmInstalled ] && ! [ -x "$(command -v gulp)" ]; then
if ! [ -x "$(command -v gulp)" ]; then
  echo "Installing gulp"
  npm install -g gulp || exit $?
fi

# Creates a link for the source files
if [ ! -d "~/Dev" ] ; then
  mkdir  ~/Dev || exit $?
  ln -s /vagrant/Learning-Ext/ ~/Dev/Learning-Ext || exit $?
fi
