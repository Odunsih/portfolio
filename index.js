AOS.init();


const compliment = () => {
    setTimeout(function thanks() {
        let popup = document.querySelector('.popup');
        popup.classList.add('pop')
        popup.classList.remove('popup')
        setTimeout(() => {
            popup.classList.remove('pop')
            popup.classList.add('popup')
        }, 2000);
    }, 2000);

}




