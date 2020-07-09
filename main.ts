input.onButtonPressed(Button.A, function () {
    led.unplot(x, 0)
    if (x < 0) {
        x = 0
        led.plot(x, 0)
    } else {
        x += -1
    }
})
input.onButtonPressed(Button.B, function () {
    led.unplot(x, 0)
    if (x > 4) {
        x = 4
        led.plot(x, 0)
    } else {
        x += 1
    }
})
let x = 0
x = 0
basic.forever(function () {
    led.plot(x, 0)
})
