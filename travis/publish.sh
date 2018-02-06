#!/bin/bash -ex

version="latest"
if [ $TRAVIS_BRANCH != "cpqd_master" ] ; then
  version=$TRAVIS_BRANCH
fi
tag=$TRAVIS_REPO_SLUG:$version

docker login -u="$USERNAME" -p="$PASSWD"
docker tag ${TRAVIS_REPO_SLUG} ${tag}
docker push $tag
