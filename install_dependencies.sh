cd /opt/heimdall
yum -y install gcc-c++
curl --silent --location https://rpm.nodesource.com/setup_4.x | bash -
yum -y install nodejs
npm install -g npm
npm install -g strong-pm
npm install -g strongloop
slc build --pack
sl-pm-install --upstart=0.6 --force
