input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Happy)
    basic.pause(500)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        # # # # #
        # . . . #
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        # # # # .
        # # . . .
        # . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        # # # . .
        # . # # .
        # # # . .
        # . # # .
        # # # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . # . . #
        # # # . #
        . # . . #
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . # # # .
        . . . # .
        . # # # .
        . # . . .
        . # # # .
        `)
    basic.pause(100)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.pause(1000)
})
basic.showLeds(`
    . # . . .
    . # # . .
    . # # # .
    . # # . .
    . # . . .
    `)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . . . .
            # # # # .
            # # . . .
            # . . . .
            . . . . .
            `)
        basic.pause(500)
    }
})
