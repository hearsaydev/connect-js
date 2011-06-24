#!/bin/bash -ex
cd `dirname $0`
/usr/bin/wget https://connect.facebook.net/en_US/all.js -O all.js
/usr/bin/python jsbeautifier.py -o all_deminified.js all.js
# Avoid sending out unnecessary updates if only the timestamp has changed.
ALL_JS_DIFF=`git diff --shortstat all.js | grep -v "2 insertions"`
#ALL_JS_DIFF=`git diff .`
if [ ! -z "$ALL_JS_DIFF" ]                            
then                                                  
  echo "Commit has changed..."                        
  git --no-pager diff .
  /usr/bin/git add -u
  /usr/bin/git commit -m `date --rfc-3339=date`       
  /usr/bin/git push -f origin master                      
fi                                                    
                                                      
