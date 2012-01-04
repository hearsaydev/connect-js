#!/bin/bash  -ex
cd `dirname $0`
TODAY=`date --rfc-3339=date`
JS_OUTPUT="js/all_${TODAY}.js"
SWF_OUTPUT="swf/xdcomm_${TODAY}.swf"
if [ ! -d "js" ] 
then
  mkdir "js"
fi
if [ ! -d "swf" ] 
then
  mkdir "swf"
fi
/usr/bin/wget https://connect.facebook.net/en_US/all.js -O ${JS_OUTPUT}
SWF_FILE=`cat all_deminified.js  | grep --color=none "_swfPath\": " | sed -E "s/(.*?)swfPath\": \"rsrc.php(.*?.swf)\"/\2/" | sed 's/\\\\//g'`
/usr/bin/wget "http://static.ak.fbcdn.net/rsrc.php/${SWF_FILE}" -O ${SWF_OUTPUT}
/usr/bin/python jsbeautifier.py -o all_deminified.js ${JS_OUTPUT}
# Avoid sending out unnecessary updates if only the timestamp has changed.
ALL_JS_DIFF=`git diff --shortstat all_deminified.js | grep -v "1 insertions"`
#ALL_JS_DIFF=`git diff .`
if [ ! -z "$ALL_JS_DIFF" ]                            
then                                                  
  echo "Commit has changed..."                        
  git --no-pager diff . # Just to see what changed...turn off the pager.
  /usr/bin/git add all_deminified.js
  /usr/bin/git commit -m "Facebook Connect changes for $TODAY"
  /usr/bin/git push origin
fi                                                    
                                                      
