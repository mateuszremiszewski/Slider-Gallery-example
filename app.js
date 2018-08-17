$(document).ready(function () {

    let prev = $('#prevPicture');
    let next = $('#nextPicture');
    let imgs = $('li');
    let index = 0;

    //funkcja dla next button
    function nextSlide (){
        imgs.eq(index).addClass('hidden'); //dodaje display none
        imgs.eq(index).removeClass('active'); //usuwa display none (dla pierwszego slidera)


        if(index >= imgs.length -1){ //sprawdza czy dotarło się do ostatniego slidera
            index = -1 //jeśli tak to zmienia index na -1 , ponieważ zaraz nastąpi inkrementacja
        }
        index = ++index; //inkrementacja (tablica zaczyna liczyć elementy od indexu 0 stąd to -1 powyżej
        imgs.eq(index).removeClass('hidden'); //usuwamy klasę hidden żeby pokazać element
    }

    function prevSlide (){
        imgs.eq(index).addClass('hidden');
        imgs.eq(index).removeClass('active');
        if(index <= 0){
            index = imgs.length //tutaj już nie robimy -1 ponieważ zaraz natąpi dekrementacja i będzie ostatni element tablicy

        }
        index = --index ;
        imgs.eq(index).removeClass('hidden');
    }

    //event na left i right strzałki zmieniające slider

    $(window).on('keydown',function (event) {
        switch (event.which){
            case 39:
                nextSlide();
                break;
            case 37:
                prevSlide();
                break;
        }
    });

    //eventy na click
    next.on('click',function () {
        nextSlide();
        alert('try scroll or left/right arrows on keyboard')

    });

    prev.on('click',function () {
        prevSlide();
        alert('try scroll or left/right arrows on keyboard')
    });

    //event na scroll wheel poniewaz nie można się odnieść do wysokości window przy pomocy scrollTop(),
    //ponieważ 100vh
    $(window).on('wheel',function (event) {

       if(event.deltaY > 0){
           prevSlide();
       }else{
           nextSlide();
       }

    });

    //interwal na next button
    setInterval(function () {
        nextSlide();
    }, 5000);


});