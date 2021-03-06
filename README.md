# GiggleBot by Dexter Industries
This library provides blocks to control the Gigglebot, its motors, neopixels, sensors and servos.
For more information: https://www.gigglebot.io/pages/program-the-gigglebot-robot

## Example Usage


### Displaying a smile #lights-smileshow
To display a big red smile:

```blocks
lights.smileShow(NeoPixelColors.Red)
```
### Displaying a rainbow smile  #lights-smilerainbow
Because everyone loves rainbows, the Gigglebot can smile at you in rainbow colors. It's so happy it's giggling in colors!
```blocks
lights.smileRainbow()
```

### Cycling through the colors of the rainbow #lights-smilecyclerainbow

You can cycle through the colors of the rainbow if you want a dazzling smile! This block will cycle through the colors three times.
```blocks
lights.smileCycleRainbow(3)
```

### Control that rainbow #lights-smilecyclerainbowtime
You can control how the colors get cycled through, how long each color gets displayed, and how long the whole cycle lasts.
```blocks
lights.smileCycleRainbowTime(100, 3000)
```

### Use the smile to display a value #lights-smileshowgraph

You can use the smile to display a value visually. For example, the Gigglebot can give you an idea of how far it is from an object. The below code will show a full smile if there is no obstacle within a meter. Then leds will turn off one by one as the Gigglebot gets closer to the obstacle.

```blocks
basic.forever(() => {
    lights.smileShowGraph(gigglebot.distanceSensorReadRangeContinuous(), 1000)
})
```

### Control the NeoPixels eyes #lights-whicheye
You can choose to change the eye colors to your heart content by using the Neopixels blocks. This variable block will allow you to decide which eye.
This will turn both eyes to green.
```blocks
lights.whichEye(gigglebotWhichEye.Both).showColor(neopixel.colors(NeoPixelColors.Green))
```

### More control over the NeoPixels smile #lights-smile
You can use the Neopixel blocks to control the smile. The following code would turn the lights off.
```blocks
lights.smile().clear()
```

## To use a second micro:bit as a remote control #remote-remotecontrolaction
This is a quick and rewarding project! You can control your Gigglebot by using a second microbit. You will need to have :
* You will need a microbit in your hand, or on your head that we will call the microbit-controller.
* You will need a microbit on the Gigglebot that will obey the microbit-controller.
* The microbit-controller needs its own code to send radio messages to the gigglebot-microbit. The microbit-controller is unable to control the Gigglebot directly.
* The gigglebot-microbit receives radio messages and translates them into gigglebot commands.

#### On the remote micro:bit #remote-remotecontrol

Use a second micro:bit as a remote control for your Gigglebot. Moving the remote hand-held microbit will control the Gigglebot.
On this micro:bit, put the following code:
(note that the group number must be the same between remote and GiggleBot, and each pair must have a unique number)

```blocks
remote.setGroup(1)
basic.forever(function () {
    remote.remoteControl()
})

```

#### On your gigglebot's microbit #remote-onremotecontrol
#### use the following blocks #remote-remotecontrolaction

On the gigglebot's micro:bit, put this code:
(note that the group number must be the same between remote and GiggleBot, and each pair must have a unique number)
```blocks
remote.setGroup(1)
remote.onRemoteControl(function () {
    remote.remoteControlAction()
})
```

## Supported targets

* for PXT/microbit

## License

MIT License

Copyright 2018 Dexter Industries

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
