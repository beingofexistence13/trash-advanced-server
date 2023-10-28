#!/bin/bash

start_time=$(date +%s)

while true; do
  current_time=$(date +%s)
  seconds_elapsed=$(( $current_time - $start_time ))
  timestamp=$(date -d"@$seconds_elapsed" -u +%-d:%-H:%-M:%-S)

  IFS=':' read -r day hour minute second <<< "$timestamp"
  hour="$(( $hour+24*($day-1) ))"

  printf "\r%02d:%02d:%02d" $hour $minute $second
  sleep 0.5
done;