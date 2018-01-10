@echo off
setlocal enabledelayedexpansion
SET d=255
echo !d!

SET /A step=%~2
for /L %%t IN (0,!step!,255) DO (
    SET /A d = !d! - !step!
	echo !d!
    if !d! GEQ 0 (
		nircmd.exe win trans stitle "%~1" !d!
	) else (
		nircmd.exe win trans stitle "%~1" 0
	)
)