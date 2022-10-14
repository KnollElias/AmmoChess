// Inserting the Images
function insertImage() {

    document.querySelectorAll('.box').forEach(image => {

        var picture;
        switch (image.innerText) {
            case "Wammo":
                picture = "./assets/BACK";
                break;
            case "Bammo":
                picture = "./assets/FRONT";
                break;
            default:
                break;
        }



        if (image.innerText.length !== 0) {
            if (image.innerText == 'Wammo' || image.innerText == 'Bammo') {
                image.innerHTML = `${image.innerText} <img class='allimg allammo' src="${picture}.png" alt="">`
                image.style.cursor = 'pointer'


            }

            else {

                image.innerHTML = `${image.innerText} <img class='allimg' src="${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'
            }
        }
    })
}
insertImage()




function winRoutine() {
    //
}





function spawnMissingAmmos(missing) {
    if (document.getElementById('tog').innerText == "Front's Turn") {
        if (document.getElementById(`b105`).innerText == "")
            document.getElementById(`b105`).innerText = 'Wammo'
        else if (document.getElementById(`b104`).innerText == "")
                document.getElementById(`b104`).innerText = 'Wammo'
        else if (document.getElementById(`b103`).innerText == "")
                document.getElementById(`b103`).innerText = 'Wammo'
        else if (document.getElementById(`b102`).innerText == "")
                document.getElementById(`b102`).innerText = 'Wammo'
        else if (document.getElementById(`b101`).innerText == "")
                document.getElementById(`b101`).innerText = 'Wammo'
        else if (document.getElementById(`b205`).innerText == "")
                document.getElementById(`b205`).innerText = 'Wammo'
        else if (document.getElementById(`b204`).innerText == "")
                document.getElementById(`b204`).innerText = 'Wammo'
        else if (document.getElementById(`b203`).innerText == "")
                document.getElementById(`b203`).innerText = 'Wammo'
        else if (document.getElementById(`b202`).innerText == "")
                document.getElementById(`b202`).innerText = 'Wammo'
        else if (document.getElementById(`b201`).innerText == "")
                document.getElementById(`b201`).innerText = 'Wammo'
        else if (document.getElementById(`b305`).innerText == "")
                document.getElementById(`b305`).innerText = 'Wammo'
        
    }
    else if (document.getElementById('tog').innerText == "Back's Turn") {
        if (document.getElementById(`b1001`).innerText == "")
            document.getElementById(`b1001`).innerText = 'Bammo'        
        else if (document.getElementById(`b1002`).innerText == "")
                document.getElementById(`b1002`).innerText = 'Bammo'
        else if (document.getElementById(`b1003`).innerText == "")
                document.getElementById(`b1003`).innerText = 'Bammo'
        else if (document.getElementById(`b1004`).innerText == "")
                document.getElementById(`b1004`).innerText = 'Bammo'
        else if (document.getElementById(`b1005`).innerText == "")
                document.getElementById(`b1005`).innerText = 'Bammo'
        else if (document.getElementById(`b901`).innerText == "")
                document.getElementById(`b901`).innerText = 'Bammo'
        else if (document.getElementById(`b902`).innerText == "")
                document.getElementById(`b902`).innerText = 'Bammo'
        else if (document.getElementById(`b903`).innerText == "")
                document.getElementById(`b903`).innerText = 'Bammo'
        else if (document.getElementById(`b904`).innerText == "")
                document.getElementById(`b904`).innerText = 'Bammo'
        else if (document.getElementById(`b905`).innerText == "")
                document.getElementById(`b905`).innerText = 'Bammo'
        else if (document.getElementById(`b801`).innerText == "")
                document.getElementById(`b801`).innerText = 'Bammo'
    }
}

// Wammo = Back

function countAmmos() {

    var WammoCount = 0;
    var BammoCount = 0;

    var phase = 0;
    var parentDOM = document.getElementById("parent-id");
    var parentdomContent = parentDOM.innerHTML;

    BammoCount = parentdomContent.split("Bammo").length - 1;
    WammoCount = parentdomContent.split("Wammo").length - 1;

//     for (var index01 = 0; index01 < 10; index01++) {
//         phase++;
//         var testTarget = parentDOM.getElementsByClassName("divv")[index01]; // the first element, as we wanted
//         var actualRow = testTarget.innerHTML;
// alert(actualRow)
//         for (var index02 = 0; index02 < 5; index02++) {
//             var test02Target = actualRow.getElementsByClassName("box")[index02]; // the first element, as we wanted
//             var actualcontent = test02Target.innerHTML;
//             alert(test02Target)
//             if (actualcontent.startsWith("Wammo"))
//                 WammoCount++;
//             if (actualcontent.startsWith("Bammo"))
//                 BammoCount++;
//         }
//     }

    return (WammoCount + BammoCount);
}

function spawnNewAmmos() {

    var missing = countAmmos()

    if (missing <= 11) {
        spawnMissingAmmos(missing)
    }
}





//Coloring

function coloring() {
    const color = document.querySelectorAll('.box')

    var is_gray = true;
    color.forEach(color => {

        getId = color.id
        arr = Array.from(getId)
        arr.shift()
        aside = eval(arr.pop())
        aup = eval(arr.shift())
        a = aside + aup

        if (is_gray) {
            color.style.backgroundColor = 'rgb(40, 40, 40)'
        }
        if (!is_gray) {
            color.style.backgroundColor = 'rgb(80, 80, 80)'
        }
        is_gray = !is_gray;

    })
}
coloring()




//function to not remove the same team element

function reddish() {
    document.querySelectorAll('.box').forEach(i1 => {
        if (i1.style.backgroundColor == 'pink') {

            document.querySelectorAll('.box').forEach(i2 => {

                if (i2.style.backgroundColor == 'green' && i2.innerText.length !== 0) {


                    greenText = i2.innerText

                    pinkText = i1.innerText

                    pinkColor = ((Array.from(pinkText)).shift()).toString()
                    greenColor = ((Array.from(greenText)).shift()).toString()

                    getId = i2.id
                    arr = Array.from(getId)
                    arr.shift()
                    aside = eval(arr.pop())
                    aup = eval(arr.shift())
                    a = aside + aup
            
                    if (a % 2 == 0 && pinkColor == greenColor) {
                        i2.style.backgroundColor = 'rgb(240, 201, 150)'
                    }
                    if (a % 2 !== 0 && pinkColor == greenColor) {
                        i2.style.backgroundColor = 'rgb(100, 75, 43)'
                    }

                    // if (pinkColor == greenColor) {
                    //     i2.style.backgroundColor = 'rgb(253, 60, 60)'
                    // }
                }
            })
        }
    })
}










tog = 1

document.querySelectorAll('.box').forEach(item => {



    item.addEventListener('click', function () {

        // To delete the opposite element

        if (item.style.backgroundColor == 'green' && item.innerText.length == 0) {
            tog = tog + 1
        }

        else if (item.style.backgroundColor == 'green' && item.innerText.length !== 0) {

            document.querySelectorAll('.box').forEach(i => {
                if (i.style.backgroundColor == 'pink') {
                    pinkId = i.id
                    pinkText = i.innerText

                    document.getElementById(pinkId).innerText = ''
                    item.innerText = pinkText
                    coloring()
                    insertImage()
                    tog = tog + 1
                    
                }
            })
        }



        getId = item.id
        arr = Array.from(getId)
        arr.shift()
        aside = eval(arr.pop())
        arr.push('0')
        aup = eval(arr.join(''))
        a = aside + aup



        // Function to display the available paths for all pieces

        function whosTurn(toggle) {

            // Ammo

            if (item.innerText == `${toggle}ammo`) {
                item.style.backgroundColor = 'pink'

                //if  the player has space and the field is free
                if (aside < 5 && document.getElementById(`b${a + 1}`).innerText == '') {
                    document.getElementById(`b${a + 1}`).style.backgroundColor = 'green'

                }
                if (aside > 1 && document.getElementById(`b${a - 1}`).innerText == '') {

                    document.getElementById(`b${a - 1}`).style.backgroundColor = 'green'
                }
                
                // The player can't move backwards
                if (document.getElementById('tog').innerText == "Back's Turn") {
                    
                
                    if (aup < 1000 && document.getElementById(`b${a + 100}`).innerText == '') {
                        document.getElementById(`b${a + 100}`).style.backgroundColor = 'green'
                    }

                } else {

                    if (aup > 100 && document.getElementById(`b${a - 100}`).innerText == '') {
                        document.getElementById(`b${a - 100}`).style.backgroundColor = 'green'
                    }

                }


                //If opponent-player is diagonaly and you can eat him
                    if (document.getElementById(`b${a + 100 + 1}`).innerText != '')
                        if (document.getElementById('tog').innerText == "Back's Turn" && document.getElementById(`b${a + 100 + 1}`).innerText == "Bammo") {
                            document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'green'
                        }
                        if (document.getElementById('tog').innerText == "Front's Turn" && document.getElementById(`b${a + 100 + 1}`).innerText == "Wammo") {
                            document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'green'
                        }
                        
                    if (document.getElementById(`b${a + 100 - 1}`).innerText != '')
                        if (document.getElementById('tog').innerText == "Back's Turn" && document.getElementById(`b${a + 100 - 1}`).innerText == "Bammo") {
                            document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'green'
                        }
                        if (document.getElementById('tog').innerText == "Front's Turn" && document.getElementById(`b${a + 100 - 1}`).innerText == "Wammo") {
                            document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'green'
                        }


                    if (document.getElementById(`b${a - 100 + 1}`).innerText != '')
                        if (document.getElementById('tog').innerText == "Back's Turn" && document.getElementById(`b${a - 100 + 1}`).innerText == "Bammo") {
                            document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'green'
                        }
                        if (document.getElementById('tog').innerText == "Front's Turn" && document.getElementById(`b${a - 100 + 1}`).innerText == "Wammo") {
                            document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'green'
                        }


                    if (document.getElementById(`b${a - 100 - 1}`).innerText != '')
                        if (document.getElementById('tog').innerText == "Back's Turn" && document.getElementById(`b${a - 100 - 1}`).innerText == "Bammo") {
                            document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'green'
                        }
                        if (document.getElementById('tog').innerText == "Front's Turn" && document.getElementById(`b${a - 100 - 1}`).innerText == "Wammo") {
                            document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'green'
        }       }       }







        // Toggling the turn

        if (tog % 2 !== 0) {
            document.getElementById('tog').innerText = `Back's Turn`
            document.getElementById("togImage").src = "./assets/BACK.png";
            spawnNewAmmos()
            insertImage()
            whosTurn('W')
        }
        if (tog % 2 == 0) {
            document.getElementById('tog').innerText = `Front's Turn`
            document.getElementById("togImage").src = "./assets/FRONT.png";
            spawnNewAmmos()
            insertImage()
            whosTurn('B')
        }

        reddish()






//Sounds
 
function playSound(type) {
    switch(type) {
        case "boardTurn":
            const audio = new Audio("./assets/sounds/boardTurn.mp3");
            audio.play();
            break;
        default:
            break;
    }
}
setInterval(playSound, 1000)





        // winning()

        numOfKings = 0


        document.querySelectorAll('.box').forEach(win => {
            if (win.innerText == 'Wking' || win.innerText == 'Bking') {
                numOfKings += 1
            }

        })

        if (numOfKings == 1) {
            setTimeout(() => {
                // console.log(`${toggle}`)
                if (tog % 2 == 0) {
                    alert('Back Wins !!')
                    location.reload()
                }
                else if (tog % 2 !== 0) {
                    alert('Front Wins !!')
                    location.reload()
                }
            }, 100)
        }



    })

})







// Moving the element
document.querySelectorAll('.box').forEach(hathiTest => {

    hathiTest.addEventListener('click', function () {

        if (hathiTest.style.backgroundColor == 'pink') {

            pinkId = hathiTest.id
            pinkText = hathiTest.innerText

            document.querySelectorAll('.box').forEach(hathiTest2 => {

                hathiTest2.addEventListener('click', function () {
                    if (hathiTest2.style.backgroundColor == 'green' && hathiTest2.innerText.length == 0) {
                        document.getElementById(pinkId).innerText = ''
                        hathiTest2.innerText = pinkText
                        coloring()
                        insertImage()
                        
                        

                    }

                })
            })

        }

    })

})






// Prvents from selecting multiple elements
z = 0
document.querySelectorAll('.box').forEach(ee => {
    ee.addEventListener('click', function () {
        z = z + 1
        if (z % 2 == 0 && ee.style.backgroundColor !== 'green') {
            coloring()
        }
    })
})





