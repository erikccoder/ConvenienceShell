del *.ts
del *.m3u8
ffmpeg -loglevel warning -re -rtbufsize 1500M -f dshow -i video="screen-capture-recorder" -f dshow -i audio="virtual-audio-capturer" -c:v libx264 -force_key_frames expr:gte(t,n_forced*2) -b:v 1000k -minrate 1000k -maxrate 1000k -bufsize:v 1000k -preset:v veryfast -pix_fmt yuv420p -tune film -c:a libmp3lame -q:a 2 -ar 44100 -ac 2 ^
	-segment_list_flags  live ^
	-hls_time 2 ^
	-hls_list_size 3 ^
	-hls_wrap 5 ^
	out.m3u8
