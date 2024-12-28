AOS.init();


const compliment = () => {

    setTimeout(function thanks() {
        let popup = document.querySelector('.popup');
        popup.classList.add('pop')
        popup.classList.remove('popup')
    }, 2000);
}
