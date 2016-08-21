#!/bin/bash

cd /opt/heimdall

if  [ ! hash node 2>/dev/null ] &&
    [ ! hash slc 2>/dev/null ] &&
    [ ! hash sl-pm-install 2>/dev/null ] &&
    [ ! hash sl-pmctl 2>/dev/null ]
then
  yum -y install gcc-c++
  curl --silent --location https://rpm.nodesource.com/setup_4.x | bash -
  yum -y install nodejs
  npm install -g npm
  npm install -g strong-pm

  # Install and Pack the Node/Loopback Dependencies
  # Unable to build and pack since CodeDeploy expects appspec.yml to be at the
  # root of the package and packing has an intermediate folder that disrupts.
  npm install -g strongloop
fi

slc build --pack
sl-pm-install --upstart=0.6 --force

