#!/usr/bin/env sh

set -e

npm run build

cd dist

git add -A
git commit -m 'update'
git push -f git@github.com:harisde03/DTS-FGA-Submission-2.git main:gh-pages

cd -