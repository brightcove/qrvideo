```sh
$ ffmpeg -framerate 1 -i qrs/img%d.png -c:v libx264 -r 30 -pix_fmt yuv420p out.mp4
```

`framerate` means how long should each image be visible compared to the framerate of the output video (-r).

The size of each block in the index.js must be even.
