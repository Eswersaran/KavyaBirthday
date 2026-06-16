const age = document.getElementById("age");

if (age) {

    let changed = false;

    age.addEventListener("mouseenter", () => {

        if (changed) return;

        changed = true;

        age.style.transform = "scale(0.01)";
        age.style.opacity = "0";

        setTimeout(() => {

            age.innerText = "25 🎉";

            age.style.transform = "scale(1.2)";
            age.style.opacity = "1";

        }, 300);

    });

}


if(document.querySelector(".timeline")){

    function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize = (20 + Math.random()*20) + "px";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },6000);

}

setInterval(createHeart,1500);

document.addEventListener("mousemove", (e) => {

    document.querySelectorAll(".heart").forEach((heart) => {

        const rect = heart.getBoundingClientRect();

        const dx = e.clientX - (rect.left + rect.width/2);
        const dy = e.clientY - (rect.top + rect.height/2);

        const distance = Math.sqrt(dx*dx + dy*dy);

        if(distance < 80){

            heart.style.left = Math.random()*100 + "vw";

        }

    });

});


function createSpecialHeart(){
const wrapper = document.createElement("div");

wrapper.classList.add("specialWrapper");

const specialHeart = document.createElement("div");

specialHeart.classList.add("specialHeart");

specialHeart.innerHTML = "💛";

wrapper.appendChild(specialHeart);

wrapper.style.left = "50vw";

document.body.appendChild(wrapper);
specialHeart.addEventListener("click", ()=>{

    letter.style.display="flex";

});

}

setTimeout(createSpecialHeart, 6000);


const letter = document.getElementById("letter");






document.getElementById("closeBtn").addEventListener("click", ()=>{

    letter.style.display="none";

});

}



