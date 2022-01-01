function Doleva () {
    wuKong.setAllMotor(22, 0)
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
    wuKong.stopAllMotor()
})
function Dopredu () {
    wuKong.setAllMotor(18, 18)
    basic.showLeds(`
        . . . . .
        . # . # .
        . # . # .
        . # . # .
        . . . . .
        `)
}
function Hudba () {
    for (let pořadí = 0; pořadí <= 3; pořadí++) {
        basic.showNumber(pořadí)
        music.playMelody("C F B C5 E G B D ", 422)
    }
}
function Ztraceno () {
    basic.showIcon(IconNames.No)
    wuKong.setAllMotor(20, -20)
}
function Doprava () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    wuKong.setAllMotor(0, 22)
}
basic.showIcon(IconNames.Heart)
Hudba()
basic.showIcon(IconNames.TShirt)
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
        Ztraceno()
    }
})
