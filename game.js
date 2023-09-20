let tog = 1
let rollingSound = new Audio('DICEROLLING.mp3')
let winSound = new Audio('YAY.mp3')



let p1sum = 0
let p2sum = 0


function play(player, psum, correction, num) {
    let sum
    if (psum == 'p1sum') {

        p1sum = p1sum + num

        if (p1sum > 100) {
            p1sum = p1sum - num
            // sum = p1sum
        }

        if (p1sum == 6) {
            p1sum = 25
        }
        if (p1sum == 19) {
            p1sum = 41
        }
        if (p1sum == 46) {
            p1sum = 68
        }
        if (p1sum == 56) {
            p1sum = 64
        }
        if (p1sum == 62) {
            p1sum = 98
        }
        if (p1sum == 71) {
            p1sum =89
        }
        if (p1sum == 24) {
            p1sum = 3
        }
        if (p1sum == 48) {
            p1sum = 12
        }
        if (p1sum == 45) {
            p1sum = 27
        }
        if (p1sum == 76) {
            p1sum = 38
        }
        if (p1sum == 88) {
            p1sum = 51
        }
        if (p1sum == 96) {
            p1sum = 74
        }
        
        sum = p1sum



    }

    if (psum == 'p2sum') {

        p2sum = p2sum + num

        if (p2sum > 100) {
            p2sum = p2sum - num
            // sum = p1sum
        }
        

        if (p2sum == 6) {
            p2sum = 25
        }
        if (p2sum == 19) {
            p2sum = 41
        }
        if (p2sum == 46) {
            p2sum = 68
        }
        if (p2sum == 56) {
            p2sum = 64
        }
        if (p2sum == 62) {
            p2sum = 98
        }
        if (p2sum == 71) {
            p2sum = 89
        }
        if (p2sum == 24) {
            p2sum = 3
        }
        if (p2sum == 48) {
            p2sum = 12
        }
        if (p2sum == 45) {
            p2sum = 27
        }
        if (p2sum == 76) {
            p2sum = 38
        }
        if (p2sum == 88) {
            p2sum = 51
        }
        if (p2sum == 96) {
            p2sum = 74
        }

        sum = p2sum



    }


    document.getElementById(`${player}`).style.transition = `linear all .5s`





    if (sum < 10) {

        document.getElementById(`${player}`).style.left = `${(sum - 1) * 62}px`
        document.getElementById(`${player}`).style.top = `${-0 * 62 - correction}px`


    }

    else if (sum == 100) {
        winSound.play()
        if (player == 'p1') {
            alert("Orange Won !!")
        }
        else if (player == 'p2') {
            alert("Blue Won !!")
        }
        location.reload()
    }

    else {

        numarr = Array.from(String(sum))
        n1 = eval(numarr.shift())
        n2 = eval(numarr.pop())
        // console.log(n1, n2)

        if (n1 % 2 != 0) {

            if (n2 == 0) {
                document.getElementById(`${player}`).style.left = `${(9) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {
                document.getElementById(`${player}`).style.left = `${(9 - (n2 - 1)) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`

            }

        }
        else if (n1 % 2 == 0) {
            if (n2 == 0) {

                document.getElementById(`${player}`).style.left = `${(0) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {

                document.getElementById(`${player}`).style.left = `${(n2 - 1) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`
            }

        }



    }
}


document.getElementById("diceBtn").addEventListener("click", function () {
    rollingSound.play()
    num = Math.floor(Math.random() * (6 - 1 + 1) + 1)
    document.getElementById("dice").innerText = num


    if (tog % 2 != 0) {
        document.getElementById('tog').innerText = "Orange's Turn : "
        play('p1', 'p1sum', 0, num)

    }

    else if (tog % 2 == 0) {
        document.getElementById('tog').innerText = "Blue's Turn : "

        play('p2', 'p2sum', 55, num)

    }

    tog = tog + 1




})