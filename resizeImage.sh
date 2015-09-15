#!/bin/sh
# author: @erikccoder

usage ()
{
  echo 'Usage : imageWidth <new width> <image file>'
  echo '	example: imageWidth 600 ABC.jpg'
  echo '	example: imageWidth 500 *.jpg'
  exit
}

if [ "$#" -ne 2 ]
then
  usage
fi

sips -Z $1 $2
