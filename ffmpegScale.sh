#!/bin/sh

usage ()
{
  echo 'Usage : ffmpegScale <input file> <scale> <output file>'
  echo '	example: ffmpegScale in.mp4 320:480 out.mp4'
  echo '	example: ffmpegScale in.mp4 320:-1 out.mp4'
  exit
}

if [ "$#" -ne 3 ]
then
  usage
fi


ffmpeg -i $1 -vf scale=$2 $3

