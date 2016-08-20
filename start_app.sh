cd /opt/heimdall
/sbin/initctl start strong-pm
sl-pmctl create heimdall-api-service
slc deploy -s heimdall-api-service
