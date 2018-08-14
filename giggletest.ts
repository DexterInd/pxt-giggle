{
    
    // Testing the wrapper functions that control the smile
    lights.smileCycleRainbowTime(200, 3000)
    basic.pause(500)
    lights.smileShow(NeoPixelColors.Red)
    basic.pause(500)
    lights.smileShow(NeoPixelColors.Green)
    basic.pause(500)
    lights.smileShow(NeoPixelColors.Blue)
    basic.pause(500)
    lights.smileShow(NeoPixelColors.Black)
    basic.pause(500)
    lights.smileCycleRainbow(5)
    
    for (let i = 0; i < 7; i++) {
        lights.smileShowGraph(i, 7)
        basic.pause(200)
    }

    enum gigglebotWhichEyes {
        //% block="both eyes"
        Both = 2,
        //% block="left eye"
        Left = 1,
        //% block="right eye"// Testing the wrapper functions that control the smile
lights.smileCycleRainbowTime(200, 3000)
basic.pause(500)
lights.smileShow(NeoPixelColors.Red)
basic.pause(500)
lights.smileShow(NeoPixelColors.Green)
basic.pause(500)
lights.smileShow(NeoPixelColors.Blue)
basic.pause(500)
lights.smileShow(NeoPixelColors.Black)
basic.pause(500)
lights.smileCycleRainbow(5)
for (let i = 0; i < 7; i++) {
    lights.smileShowGraph(i, 7)
    basic.pause(200)
}

// testing the ready made variable for the eyes neopixels
let eyesNeoPixels = lights.whichEye(gigglebotWhichEye.Both)
eyesNeoPixels.setPixelColor(gigglebotWhichEye.Left, NeoPixelColors.Green)
eyesNeoPixels.setPixelColor(gigglebotWhichEye.Right, NeoPixelColors.Yellow)
eyesNeoPixels.show()

// testing the ready made variable for the smile neoPixels
let smileNeoPixels = lights.smile()
smileNeoPixels.showColor(NeoPixelColors.Purple)



}
