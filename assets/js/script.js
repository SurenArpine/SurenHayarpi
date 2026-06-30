AOS.init()

var tempMusic = ''
music = document.querySelector('.music')
if (tempMusic) {
    music.src = tempMusic
}

function mulai() {
    window.scrollTo(0 ,0)

    var soundDoor = document.querySelector('.sound-door')
    soundDoor.play()

    var doorSection = $('#door-section')
    var doors = document.querySelectorAll('.door')
    doors.forEach(function(door,index) {
        var direction = (index === 0) ? -1 : 1
        door.style.transform = 'rotateY( ' + (10 * direction) + 'deg)'
    })

    setTimeout(function (){
        music.play()
        doorSection.css ('transform', 'scale(6)')
    }, 1000)

    setTimeout(function(){
        doorSection.css('opacity', 0)
        $('body').removeClass('overflow-hidden')
        $('body').addClass('transition')
        doorSection.css('display', 'none')
    }, 1000)
}



var isPlaying = true

function toggleMusic(event) {
    event.preventDefault()

    const musicButton = document.getElementById('music-button')

    if(isPlaying){
        musicButton.innerHTML = '<i class="fas fa-fw fa-pause"></i>'
        musicButton.classList.remove('rotate')
        musicButton.style.transform = 'translateY(0)'
        music.pause()
    }else{
        musicButton.innerHTML = '<i class="fas fa-fw fa-compact-disc"></i>'
        musicButton.classList.add('rotate')
        music.play()
    }

    isPlaying = !isPlaying
}

var countdownDate = new Date("July 24, 2026 10:00:00").getTime()
// var countdownDate = new Date("Jun 13, 2026 21:8:00").getTime()

var x = setInterval(function (){
    var now = new Date().getTime()

    var distance = countdownDate - now

    var days = Math.floor(distance / (1000 * 60 * 60 * 24))
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((distance % (1000 * 60)) / 1000)

    document.getElementById('countdown-wedding').innerHTML = `
        <div class="col-lg-1 col-3"><div class="text-center p-2 rounded text-light"><h2>${days}</h2>Օր</div></div>
        <div class="col-lg-1 col-3"><div class="text-center p-2 rounded text-light"><h2>${hours}</h2>Ժամ</div></div>
        <div class="col-lg-1 col-3"><div class="text-center p-2 rounded text-light"><h2>${minutes}</h2>Րոպե</div></div>
        <div class="col-lg-1 col-3"><div class="text-center p-2 rounded text-light"><h2>${seconds}</h2>Վայրկյան</div></div>
    `
    if (distance < 0) {
        clearInterval(x)
        document.getElementById('countdown-wedding').innerHTML = "<span class'text-center p-3 rounded text-white text-light m-2'><h2>Բարի ժամանց 🤍</h2></span>"
    }
}, 1000)

const urlParams = new URLSearchParams(window.location.search)
const panggilan = urlParams.get('p')
const nama = urlParams.get('n')
const nameSambutan = document.querySelector('#nama-sambutan')
namaSambutan.innerText = `${panggilan} ${nama},`


