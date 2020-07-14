for f in "$@"
do
	rm -rf "$f"
done
afplay "/System/Library/Components/CoreAudio.component/Contents/SharedSupport/SystemSounds/finder/empty trash.aif"
