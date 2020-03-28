var mathNum = Math.floor((Math.random() * 10) + 1);


function randOut() {
    var num, out, img, defNum;
    num = document.getElementById('usernum').value;
    defNum = document.getElementById('usernum');
    out = document.getElementById('out');
    img = document.getElementById('img');
    if (isNaN(num) || num == '') {
        out.innerHTML = 'Введи число!!!';
        out.style.animation = 'jitter 2s';
        img.setAttribute('src', './img/sad.png');
        img.style.animation = 'anim 2s linear';
        setTimeout(function removeAnim() {
            img.style.animation = 'none';
            out.style.animation = 'none';
        }, 2500);
        defNum.value = '';
    } else {
        if (num == mathNum) {
            out.innerHTML = 'Молодец,ты угадал!!!';
            out.style.animation = 'yep 2s';
            img.setAttribute('src', './img/smiling.png');
            img.style.animation = "anim 2s linear";
            defNum.value = '';
        } else if (num < mathNum) {
            out.innerHTML = 'Введи число больше';
            out.style.animation = 'jitter 2s';
            img.setAttribute('src', './img/sad.png');
            img.style.animation = 'anim 2s linear';
            setTimeout(function removeAnim() {
                img.style.animation = 'none';
                out.style.animation = 'none';
            }, 2000);
            defNum.value = '';
        } else {
            out.innerHTML = 'Введи число меньше';
            out.style.animation = 'jitter 2s';
            img.setAttribute('src', './img/sad.png');
            img.style.animation = 'anim 2s linear';
            setTimeout(function removeAnim() {
                img.style.animation = 'none';
                out.style.animation = 'none';
            }, 2000);
            defNum.value = '';
        }
    }

}