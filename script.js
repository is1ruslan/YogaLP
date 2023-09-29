window.addEventListener('DOMContentLoaded', function () {


    //show program content

    let headerNames = document.querySelector('.header-names'),
        secondBlockNames = document.querySelectorAll('.second-block-names'),
        programs = document.querySelectorAll('.program');

    
    function hideProgram (a) {
        for (let i = a; i < programs.length; i++) {
            programs[i].classList.remove('show');
            programs[i].classList.add('hide');
        }
    };

    hideProgram(1);

    function showProgram (b) {
        if (programs[b].classList.contains('hide')) {
            programs[b].classList.remove('hide');
            programs[b].classList.add('show');
        }
    };

    headerNames.addEventListener('click', function (event) {

        for (let i = 0; i < secondBlockNames.length; i++) {
            if (event.target == secondBlockNames[i]) {
                hideProgram(0);
                showProgram(i);
                break;
            }
        }
    });


    //timer

    let deadline = '2024-03-19',
        hours = document.querySelector('.hours'),
        minutes = document.querySelector('.minutes'),
        seconds = document.querySelector('.seconds');

    

    //slider 

    let sliderPhoto = document.querySelectorAll('.slider-photo'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dots = document.querySelector('.dots'),
        dot = document.querySelectorAll('.dot');

    function showPhoto (c) {
        sliderPhoto.forEach((photo) => photo.classList.add('hide'));
        sliderPhoto.forEach((photo) => photo.classList.remove('show'));
        dot.forEach((elem) => elem.classList.remove('active'));
        sliderPhoto[c].classList.remove('hide');
        sliderPhoto[c].classList.add('show');
        dot[c].classList.add('active');
    };

    showPhoto(0);

    prev.addEventListener('click', function () {
        for (let i = 0; i < sliderPhoto.length; i++) {
            if (sliderPhoto[i].classList.contains('show')) {
                if (i-1 < 0) {
                    i = sliderPhoto.length;
                }
                showPhoto(i-1);
                break;
            }
        } 
    });

    next.addEventListener('click', function () {
        for (let i = 0; i < sliderPhoto.length; i++) {
            if (sliderPhoto[i].classList.contains('show')) {
                if (i+1 > 3) {
                    i = -1;
                }
                showPhoto(i+1);
                break;
            }
        } 
    });

    dots.addEventListener('click', function (event) {
        for (i = 0; i < dot.length; i++) {
            if (event.target == dot[i]) {
                //dot.forEach((element) => element.classList.remove('active'));
                //dot[i].classList.add('active');
                showPhoto(i);
            }
        }
    });



    //calculator

    let peoples = document.getElementsByTagName('input')[0],
        vacantionDays = document.getElementsByTagName('input')[1],
        total = document.querySelector('#total'),
        place = document.getElementById('select'),
        count = 0;

    function countTotal () {
        if (peoples.value && vacantionDays.value) {
            count = (Number(peoples.value) * 2000 + Number(vacantionDays.value) * 5000);
            total.textContent = count;
        }
    }

    peoples.addEventListener('input', function () {
        countTotal();
    });

    vacantionDays.addEventListener('input', function () {
        countTotal();
    });
    

    place.addEventListener('change', function () {
        if (peoples.value && vacantionDays.value) {
            count = (Number(peoples.value) * 2000 + Number(vacantionDays.value) * 5000) * this.value;
            total.textContent = count;
        }
    });
});