## QR Test Video Generator

### What's it do?

Generates a test video containing a series of QR codes that, when read, will equate to the current time in the video it exists or supplied json provided at runtime.


### How do I run it?
1. `npm install`
2. `./bin/cli.js {options}`


#### Options (full/shorthand)
* **name/n** - Desired name of the output file's name. Extension not required.
* **extension/ext** - File extension desired. Default: `mp4`
* **length/l** - File extension desired. Default: `30`
* **audio/a** - Path to audio file to be used. `default` is also an option and a silent audio file will be used for source. Default: `none`
* **json/j** - Allows for specifying a config.json file containing data to be embedded in QR image. See config.json for example. Handlebars placeholders can be used to set current frame with `{{frame}}` and timestamp with `{{timestamp}}`. Default: `none`
* **framerate/f** - How long each image should be displayed compared to the framerate of the output video. (-r) Default: 30.
* **qrs-per-period** - File extension desired. Default: `1`
* **video/v** - Generate video with QR images. If set to false, only QR images will be generated. Default: `true`
* **temp/t** - Override where the QR files are stored. Default: OS specific temp directory.
* **size/s** - Size of one module in pixels. Default: `6`
* **ec-level/e** - Error correction level. Default: `Q`


##### Example of what the tool runs
`
$ ffmpeg -framerate 1 -i qrs/img%d.png -i input_audio.mp3 -c:v libx264 -pix_fmt yuv420p -r 30 -shortest -y output.mp4
`


#### Other Notes
* The size of each block in the index.js must be even.
* If using audio, player's play head will likely not be in sync with image change. *jsmith Note: I'm using this in playback testing, and so far it hasn't made itself an issue.*

### Who?
Gary Katsevman & Jayson Smith