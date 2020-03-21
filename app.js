var mathNum = Math.floor((Math.random() * 10) + 1);
console.log(mathNum);

function randOut() {
    var num, out, img;
    num = document.getElementById('usernum').value;
    out = document.getElementById('out');
    img = document.getElementById('img');
    if (isNaN(num)) {
        out.innerHTML = 'Введи число!!!';
        img.setAttribute('src', './img/sad.png');
        img.style.animation = "anim 2s linear";
        setTimeout(function removeAnim() {
            img.style.animation = "none";
        }, 2000);
    } else {
        if (num == mathNum) {
            out.innerHTML = 'Молодец,ты угадал!!!'
            img.setAttribute('src', './img/smiling.png');
            img.style.animation = "anim 2s linear";
        } else if (num < mathNum) {
            out.innerHTML = 'Введи число больше';
            img.setAttribute('src', './img/sad.png');
            img.style.animation = "anim 2s linear";
            setTimeout(function removeAnim() {
                img.style.animation = "none";
            }, 2000);
        } else {
            out.innerHTML = 'Введи число меньше';
            img.setAttribute('src', './img/sad.png');
            img.style.animation = "anim 2s linear";
            setTimeout(function removeAnim() {
                img.style.animation = "none";
                num.value === ' ';
                console.log(num);
            }, 2000);
        }
    };
}