isNvmInstalled=$false

# Installs nvm
if ! nvm >/dev/null; then 
  echo "Installing nvm..."
  wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash || exit $?
  export NVM_DIR="$HOME/.nvm" || exit $?
  [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" || exit $? # This loads nvm
  
  # Checking if nvm is installed
  if  nvm >/dev/null; then 
    echo "==========nvm installed=========="
    isNvmInstalled=$true
  fi

  # Installing node 8   
  if ! node >/dev/null; then
    nvm install 8 && nvm use 8 || exit $?
  fi
fi