let movieSnacks = ""
let p = ""
basic.forever(function () {
    movieSnacks = "hellp"
    basic.showString("" + (movieSnacks.indexOf("p")))
    p = movieSnacks.substr(0, 2)
    basic.showString(p)
    basic.pause(500)
    basic.showString("" + (movieSnacks[1]))
})
