cd /opt/heimdall
yum -y install gcc-c++
curl --silent --location https://rpm.nodesource.com/setup_4.x | bash -
yum -y install nodejs
npm install -g npm
npm install -g strong-pm
npm install -g strongloop

# Install Aurelia UI Dependencies.
# We did not do this on the CI server because the bundle is ~300MB.
# We will need to figure out a better way to handle this.
cd client
npm install -g gulp
npm install
gulp build

# Install and Pack the Node/Loopback Dependencies
# Unable to build and pack since CodeDeploy expects appspec.yml to be at the
# root of the package and packing has an intermediate folder that disrupts.
cd ..
slc build --npm
sl-pm-install --upstart=0.6 --force
