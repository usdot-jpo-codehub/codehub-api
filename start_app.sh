cd /opt/heimdall
/sbin/initctl start strong-pm
sl-pmctl create heimdall-webapp-service
slc deploy -s heimdall-webapp-service
