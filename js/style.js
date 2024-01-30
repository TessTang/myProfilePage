$(document).ready(function () {


    //loading page
    $('.wrap').waitForImages(function () {
        $('.spinner').fadeOut();
    }, $.noop, true);

    //menu check
    $('.menu li').on('click', function() {
        $('#menuToggle').prop('checked', false);
    });


    //about me pantonbox
    setInterval(function () {
        $('.pantoneBox>div').toggleClass('xyz-out')
    }, 2000)


    //experience monster
    const intersectionObserver = new IntersectionObserver(
        (entries) => {
            if (entries[0].isIntersecting) {
                console.log('我進來了！');
                eyes()
            } else {
                console.log('我又出去了！');
                window.removeEventListener('mousemove', aaa)
            }
        }
    );
    intersectionObserver.observe(
        document.querySelector('.workOuter')
    );


    function aaa(e) {
        var eye1 = document.querySelector('.eye1 .black');
        var eye2 = document.querySelector('.eye2 .black');
        let x;
        let y;
        x = e.x / window.innerWidth;
        if (x > 0.6) {
            eye1.style.left = '45%';
            eye2.style.left = '45%';
        } else if (x < 0.4) {
            eye1.style.left = '10%';
            eye2.style.left = '10%';
        } else {
            eye1.style.left = '27%';
            eye2.style.left = '27%';
        }
        y = e.y - document.querySelector('.white').getBoundingClientRect().y - 20
        if (y > 40) {
            eye1.style.top = '45%';
            eye2.style.top = '45%';
        } else if (y < 0) {
            eye1.style.top = '5%';
            eye2.style.top = '5%';
        } else {
            eye1.style.top = '25%';
            eye2.style.top = '25%';
        }
    }

    function eyes() {
        window.addEventListener('mousemove', aaa)
    }



    //my project
    $(".code_slide").each(function () {
        $(this).hover(function () {
            $(this).find('.code_title').css({
                transform: 'rotate(0deg)',
                top: '15%'
            });
            $(this).find('.code_about').css({
                opacity: '1'
            });
        }, function () {
            $(this).find('.code_title').css({
                transform: 'rotate(90deg)',
                top: '30%'
            });
            $(this).find('.code_about').css({
                opacity: '0'
            });
        })
    });
});

//navbar weather

let weather = document.querySelector('.weather');
let weatherText1 = document.querySelector('.weatherContent>p:nth-child(1)');
let weatherText2 = document.querySelector('.weatherContent>p:nth-child(2)');
let weatherIcon = document.querySelector('.weatherIcon>i');
axios.get('https://opendata.cwa.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWA-597C3824-E686-49D7-A303-B0AD90B9092A&StationId=CAF010')
    .then((res) => {
        let weatherData = res.data.records.Station[0].WeatherElement;
        weatherText1.innerText = `${weatherData.Weather}`;
        weatherText2.innerText = `${weatherData.AirTemperature}°C`;
        if (weatherData.Weather.includes('雨')) {
            weatherIcon.classList.add('fa-cloud-rain')
        } else if (weatherData.Weather.includes('陰')) {
            weatherIcon.classList.add('fa-cloud', 'cloudy');
        } else if (weatherData.Weather.includes('多雲')) {
            weatherIcon.classList.add('fa-cloud');
        } else if (weatherData.Weather.includes('晴')) {
            weatherIcon.classList.add('fa-sun');
        } else (weather.style.display = 'none');
    }
    )
    .catch((err) => weather.style.display = 'none')

    // footer Hire me animate
    const typed = new Typed('.footerAnimate>span', {
        strings: [' HIRE ME!'],
        typeSpeed: 150,
        loop: true
    });


    ScrollReveal().reveal('.movein', { easing: 'ease-in' ,reset: true,distance: '20px',interval: 90,  origin: 'top'});