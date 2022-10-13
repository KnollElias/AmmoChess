// Inserting the Images
function insertImage() {

    document.querySelectorAll('.box').forEach(image => {

        let picture;
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




function spawnNewAmmo() {
    let WammoCount = 0;
    let BammoCount = 0;

    let phase = 0;

    let parentDOM = document.getElementById("parent-id");
    let test = parentDOM.getElementsByClassName("divv"); // a list of matching elements, *not* the element itself

    for (let index = 0; index < 10; index++) {
        phase++;
        let testTarget = parentDOM.getElementsByClassName("divv")[index]; // the first element, as we wanted

        let actualRow = testTarget.innerHTML;

        let test02 = actualRow.getElementsByClassName("box"); // a list of matching elements, *not* the element itself
        
                    alert(test02.innerHTML)

        
        for (let index02 = 0; index02 < 5; index02++) {
            let test02Target = parentDOM.getElementsByClassName("box")[index02]; // the first element, as we wanted

            let actualcontent = test02Target.innerHTML;

            if (actualcontent.startsWith("Wammo"))
                WammoCount++;
            if (actualcontent.startsWith("Bammo"))
                BammoCount++;



            
        }

        
    }
                            alert(`phase ${phase}
                            Wammo ${WammoCount}
        Bammo ${BammoCount}`)


    // const parentDOM = document.getElementById("parent-id");
    // const test = parentDOM.getElementsByClassName("divv"); // a list of matching elements, *not* the element itself

    // for (let index = 0; index < 10; index++) {
    //     const testTarget = parentDOM.getElementsByClassName("divv")[index]; // the first element, as we wanted

    //     const test = parentDOM.getElementsByClassName("box"); // a list of matching elements, *not* the element itself
        
        
        
    //     for (let index = 0; index < 5; index++) {
    //         const testTarget = parentDOM.getElementsByClassName("box")[index]; // the first element, as we wanted
    //         alert(testTarget.innerHTML); // <p class="test">hello world 2</p>

            
    //     }
        
    // }

        
}

setTimeout(() => {
    
    spawnNewAmmo()
}, 1000);





//Coloring

function coloring() {
    const color = document.querySelectorAll('.box')

    let is_gray = true;
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
            whosTurn('W')
        }
        if (tog % 2 == 0) {
            document.getElementById('tog').innerText = `Front's Turn`
            document.getElementById("togImage").src = "./assets/FRONT.png";
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





