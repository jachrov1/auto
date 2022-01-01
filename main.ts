function Doleva () {
    wuKong.setAllMotor(30, 0)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
}
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
function Dopredu () {
    wuKong.setAllMotor(30, 30)
    basic.showLeds(`
        . . . . .
        . # . # .
        . # . # .
        . # . # .
        . . . . .
        `)
}
function Doprava () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    wuKong.setAllMotor(0, 30)
}
function Stop () {
    basic.showIcon(IconNames.No)
    wuKong.stopAllMotor()
}
basic.showIcon(IconNames.Heart)
music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 70)
basic.showIcon(IconNames.Happy)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
wuKong.stopAllMotor()
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 0) {
        Dopredu()
    } else if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 1) {
        Doleva()
    } else if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 0) {
        Doprava()
    } else {
        Stop()
    }
})
