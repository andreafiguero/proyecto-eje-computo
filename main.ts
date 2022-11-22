function ANIMACIÓN () {
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
        . # # # .
        . # # # .
        . # # # .
        # . . . #
        `)
    basic.pause(1000)
}
function FESCUDO () {
    basic.showLeds(`
        # . . . #
        . # # # .
        . # # # .
        . # # # .
        # . . . #
        `)
}
function Frecargar () {
    basic.showLeds(`
        . . . . .
        . # . . #
        # # # . #
        . # . . #
        . . . . .
        `)
}
input.onButtonPressed(Button.A, function () {
    if (BALAS > 0) {
        fDISPARAR()
        BALAS += -1
        N = randint(1, 3)
    }
    if (N == 1) {
        FESCUDO()
    } else if (N == 2) {
        Frecargar()
        game.addScore(1)
    } else if (N == 3) {
        fDISPARAR()
        game.addScore(1)
    }
})
input.onPinPressed(TouchPin.P2, function () {
    FESCUDO()
    N = randint(1, 3)
    if (N == 1) {
        FESCUDO()
    } else if (N == 2) {
        fDISPARAR()
    } else if (N == 3) {
        Frecargar()
    }
})
function fDISPARAR () {
    basic.showLeds(`
        . . . . .
        # # # # .
        # # . . .
        # . . . .
        . . . . .
        `)
}
input.onButtonPressed(Button.B, function () {
    if (true) {
        Frecargar()
        BALAS += 1
        N = randint(1, 3)
        if (N == 1) {
            FESCUDO()
        } else if (N == 2) {
            fDISPARAR()
            game.addScore(1)
        } else if (N == 3) {
            Frecargar()
        }
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    ANIMACIÓN()
})
let N = 0
let BALAS = 0
BALAS = 0
game.setLife(2)
basic.forever(function () {
    if (game.score() == 2) {
        game.gameOver()
    }
})
