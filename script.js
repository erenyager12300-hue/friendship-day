let started = false;

function start(){

    if(started) return;

    started = true;

    // Hide welcome screen
    document.querySelector(".welcome").style.display="none";


    // Show all cards one by one
    let cards = document.querySelectorAll(".card, .final");

    cards.forEach((card,index)=>{

        setTimeout(()=>{

            card.classList.add("show");

            window.scrollTo({
                top: card.offsetTop,
                behavior:"smooth"
            });


        }, index * 3000);

    });


    // Start heart animation
    createHearts();

}




// Music button

function music(){

    let song = document.getElementById("song");

    if(song.paused){

        song.play();

        document.querySelector(".music").innerHTML=
        "⏸ Pause Music";

    }

    else{

        song.pause();

        document.querySelector(".music").innerHTML=
        "🎵 Play Music";

    }

}




// Floating hearts effect

function createHearts(){

    setInterval(()=>{


        let heart=document.createElement("div");

        heart.innerHTML=
        ["❤️","💖","💕","✨","🌸"][Math.floor(Math.random()*5)];


        heart.style.position="fixed";

        heart.style.left=
        Math.random()*100+"vw";


        heart.style.bottom="-20px";


        heart.style.fontSize=
        (20+Math.random()*30)+"px";


        heart.style.animation=
        "rise 5s linear";


        heart.style.zIndex="10";


        document.body.appendChild(heart);



        setTimeout(()=>{

            heart.remove();

        },5000);



    },400);


}




// Add floating animation

let style=document.createElement("style");

style.innerHTML=`

@keyframes rise{

0%{

transform:translateY(0) rotate(0deg);

opacity:1;

}


100%{

transform:translateY(-110vh) rotate(360deg);

opacity:0;

}

}

`;

document.head.appendChild(style);




// Welcome typing effect

let