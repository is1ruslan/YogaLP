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

    let deadline = '2024-01-01',
        deadLineDate = Date.parse(deadline),
        hours = document.querySelector('.hours'),
        minutes = document.querySelector('.minutes'),
        seconds = document.querySelector('.seconds');

        function updateClock () {
            let now = Date.now();

            if (deadLineDate - now > 0) {
                hours.textContent = addZero(Math.floor(((deadLineDate - now)/1000/60/60)));
                minutes.textContent = addZero(Math.floor(((deadLineDate - now)/1000/60) % 60));
                seconds.textContent = addZero(Math.floor(((deadLineDate - now)/1000) % 60));
            } else {
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        };

        function addZero (time) {
            if (time <= 9) {
                return '0' + time;
            } else 
            return time;
        }

        setInterval(updateClock, 1000);
    

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



    //form

    document.addEventListener('submit', function (event) {
        if (event.target.classList.contains('form-button')) {
            event.preventDefault();

        let formData = new FormData(this);

        fetch('server.php', {
            method: 'POST',
            body: formData
        })
        //.then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
        };
    });


    //modal window

    let more = document.querySelector('.more-button'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

        document.addEventListener('click', function (event) {
            if (event.target.classList.contains('more-button')) {
                overlay.classList.add('more-splash');
                overlay.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });

        close.addEventListener('click', function () {
            more.classList.remove('more-splash');
            overlay.style.display = 'none';
            document.body.style.overflow = '';
        })     
});