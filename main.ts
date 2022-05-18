/**
 * Pin 1 and 0 are the arms
 */
radio.onReceivedNumber(function (receivedNumber) {
    for (let index = 0; index < 4; index++) {
        pins.servoWritePin(AnalogPin.P0, 0)
        pins.servoWritePin(AnalogPin.P1, 90)
        basic.pause(500)
        pins.servoWritePin(AnalogPin.P0, 90)
        pins.servoWritePin(AnalogPin.P1, 0)
        basic.pause(500)
    }
})
radio.sendNumber(1)
