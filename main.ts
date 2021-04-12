let outcome = 0
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    outcome = 0
})
input.onGesture(Gesture.Shake, function () {
    outcome = randint(0, 2)
    if (outcome == 2) {
        basic.showString("YES")
    } else if (outcome == 1) {
        basic.showString("NO")
    } else {
        basic.showString("MAYBE")
    }
})
// Every time no other code is running it will always show this string 
basic.forever(function () {
    basic.showString("Ask a question")
})
