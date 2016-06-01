cd /opt/heimdall
/sbin/initctl start strong-pm
sl-pmctl create heimdall-webapp-service
slc deploy -s heimdall-webapp-service http://127.0.0.1:8071 ./heimdall-webapp-1.0.0.tgz
