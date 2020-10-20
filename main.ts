let degré = 0
basic.forever(function () {
    degré = input.compassHeading()
    if (degré < 45) {
        basic.showString("N")
    } else {
        if (degré < 135) {
            basic.showString("E")
        } else {
            if (degré < 225) {
                basic.showString("S")
            } else {
                if (degré < 315) {
                    basic.showString("W")
                } else {
                    basic.showString("N")
                }
            }
        }
    }
})
