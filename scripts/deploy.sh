#!/bin/bash

# Check if dist directory exists
if [ ! -d "dist" ]; then
  echo "dist directory does not exist. Please build the project first"
  exit 1
fi

# Check if DEPLOY_KEY is set
# if [ -z "$DEPLOY_KEY" ]; then
#   echo "DEPLOY_KEY is not set. Please set it as your base64 encoded wallet.json"
#   exit 1
# fi

# # Check if ANT_PROCESS is set
# if [ -z "$ANT_PROCESS" ]; then
#   echo "ANT_PROCESS is not set. Please set it to the ArNS process id"
#   exit 1
# fi

# Check if UNDERNAME is set if not set it as @
if [ -z "$UNDERNAME" ]; then
  UNDERNAME="ardoc"
  echo "UNDERNAME is not set. Setting it to ardoc"
fi
# echo $ANT
#1. export DEPLOY_KEY=$(base64 -i ./.secrets/cookbook2.json)
#2. export ANT_PROCESS=kzoVwiVrpSCTGRyURFKeuxvvS5InXamfUE03TANUQR4
#3. GITHUB_SHA="test" npm run deploy
# DEPLOY_KEY=$(base64 -i ../../.secrets/cookbook2.json) npx -y permaweb-deploy --deploy-folder dist --ant-process $ANT_PROCESS --undername $UNDERNAME
DEPLOY_KEY=$(base64 -i ./.secrets/cookbook2.json) npx permaweb-deploy --ant-process kzoVwiVrpSCTGRyURFKeuxvvS5InXamfUE03TANUQR4 --undername $UNDERNAME
