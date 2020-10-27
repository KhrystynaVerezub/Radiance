
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    var thumbnail = document.getElementsByClassName("thumbnail");
    var hero = document.getElementById("hero");

    var backgroundImg = new Array(
    "images/bg1.png",
    "images/bg2.png",
    "images/bg3.png",
    "images/bg4.png",
    "images/bg5.png",
    );

    // включает кликабельность боковой стрелки и переключает картинки
    let i = 0;
    next.onclick = function(){

        if (i < 4) {
            hero.style.backgroundImage = 'url("'+backgroundImg[i+1]+'")';
        // чтоб срабатывало нажатие не только 1 раз. Для стрелки Вперед
             thumbnail[i+1].classList.add("active");
             thumbnail[i].classList.remove("active");
             i++;
        }
    }


    prev.onclick = function(){

    if (i > 0) {
        hero.style.backgroundImage = 'url("'+backgroundImg[i-1]+'")';
    // для стрелочки Назад
            thumbnail[i-1].classList.add("active");
            thumbnail[i].classList.remove("active");
        i--;
    }
}