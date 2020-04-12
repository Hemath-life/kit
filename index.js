var num = document.querySelectorAll(".drum").length;

// mouse event
for (let i = 0; i < num; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function (params)
     {
       var button = this.innerHTML;
       sound(button);
       pressanimation(button);
        
        }
    );
}
// KeyboardEvent

document.addEventListener("keypress",function (event) {
   sound(event.key);
   pressanimation(event.key);
})

function sound(key) {
    switch (key) {
        case 'w':
                var audio = new Audio('crash.mp3');
                audio.play();
                break;
        case 'a':
                var audio = new Audio('kick-bass.mp3');
                audio.play();
                break;
        case 's':
                var audio = new Audio('snare.mp3');
                audio.play();
                break;
        case 'd':
            var audio = new Audio('tom-1.mp3');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('tom-2.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('tom-3.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('tom-4.mp3');
            audio.play();
            break;


        default:
            break;
    }
    
}


function pressanimation(value) {
    var time = document.querySelector("."+value);
    time.classList.add('pressed');

    setTimeout(() => {
        time.classList.remove('pressed');
    }, 200);
}

// object
// constructure function

// var BellBoy = {
//     name:'henath',
//     age:19,
//     hasWorkPermit:true,
//     languages:['french','english']
// }
// var houseKeeper = {
//     name:"hemath",
//     age:19,
//     language:['tamil','english','hindi'],
//     cleningWorke:['bedRoom','kitchen']}
// // constructure function
// // function name must uppercase
// function BellBoy(name,age,hasWorkPermit,languages) {
//     this.name=name;
//     this.age=age;
//     this.hasWorkPermit=hasWorkPermit
//     this.languages=languages;

// }
// var bellBoy1 = new BellBoy("Hemath",19,true,['french','english']);

// console.log(typeof bellboy);