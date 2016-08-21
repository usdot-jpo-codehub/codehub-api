#!/bin/bash

cd /opt/heimdall

# If node and its related parts are not installed then install them
hash node 2>/dev/null
if [ $? != 0 ]
then
  yum -y install gcc-c++
  curl --silent --location https://rpm.nodesource.com/setup_4.x | bash -
  yum -y install nodejs
  npm install -g npm
fi

hash slc 2>/dev/null
if [ $? != 0 ]
then
  # Install and Pack the Node/Loopback Dependencies
  # Unable to build and pack since CodeDeploy expects appspec.yml to be at the
  # root of the package and packing has an intermediate folder that disrupts.
  npm install -g strongloop
fi

hash sl-pm-install 2>/dev/null
SLPMINSTALL=$?

hash sl-pmctl 2>/dev/null
SLPMCTL=$?

if [ $SLPMINSTALL != 0 ] || [ $SLPMCTL != 0 ]
then
  npm install -g strong-pm
fi

slc build --pack
sl-pm-install --upstart=0.6 --force

