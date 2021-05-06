"use strict"
window.onload = function() {
    const Parallax = document.querySelector('.parallax');
    if (Parallax) {

        const content = document.querySelector('.parallax__container');
        const clouds = document.querySelector('.images-parallax__clouds');
        const mountains = document.querySelector('.images-parallax__mountains');
        const human = document.querySelector('.images-parallax__human');

        //Коэффициенты
        const forClouds = 40;
        const forMountains = 20;
        const forHuman = 10;

        // Множитель

        const speed = 0.06;

        //переменные

        let positionX = 0,
            positionY = 0;
        let coordXprocent = 0,
            coordYprocent = 0;

        function setMouseParallaxStyle() {

            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;

            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);

            //Установка стилей
            // clouds.style.cssText = `transform: translate (${positionX / forClouds}%,${positionY / forClouds}%);`;
            // mountains.style.cssText = `transform: translate (${positionX / forMountains}%,${positionY / forMountains}%);`;
            // human.style.cssText = `transform: translate (${positionX / forHuman}%,${positionY / forHuman}%);`;

            clouds.style.transform = `translate(${positionX / forClouds}%, ${positionY / forClouds}%)`;
            mountains.style.transform = `translate(${positionX / forMountains}%, ${positionY / forMountains}%)`;
            human.style.transform = `translate(${positionX / forHuman}%, ${positionY / forHuman}%)`;
            //  clouds.style.transform = `translatex(${positionX / forClouds}%)`;

            requestAnimationFrame(setMouseParallaxStyle);

        }
        setMouseParallaxStyle();

        Parallax.addEventListener("mousemove", function(e) {

            const parallaxWidth = Parallax.offsetWidth;
            const parallaxHeight = Parallax.offsetHeight;

            const coordX = e.pageX - parallaxWidth / 2;
            const coordY = e.pageY - parallaxHeight / 2;

            coordXprocent = coordX / parallaxWidth * 100;
            coordYprocent = coordY / parallaxHeight * 100;

        });


    }

}