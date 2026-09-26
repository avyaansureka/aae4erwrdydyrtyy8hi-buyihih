input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Yes)
    music.play(music.stringPlayable("F C5 E G E G A C ", 150), music.PlaybackMode.UntilDone)
    basic.clearScreen()
})
basic.forever(function () {
    if (input.lightLevel() > 100) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . # . # .
            . # # # .
            # . . . #
            `)
    } else {
        basic.clearScreen()
    }
})
