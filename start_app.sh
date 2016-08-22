#!/bin/bash

cd /opt/heimdall

/sbin/initctl status strong-pm | grep -q 'strong-pm stop/waiting'
if [ $? = 0 ]
then
  /sbin/initctl start strong-pm
fi

sl-pmctl status heimdall-api-service 2>&1 >/dev/null | grep -q 'Error: Unknown "ServerService" id "undefined"'
if [ $? = 0 ]
then
  sl-pmctl create heimdall-api-service
  sl-pmctl set-size heimdall-api-service 1
else
  sl-pmctl status heimdall-api-service | grep -q "Not started"
  if [ $? = 0 ]
  then
    sl-pmctl start heimdall-api-service
  fi
fi

slc deploy -s heimdall-api-service
