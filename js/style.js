ymaps.ready(init); 
    var myMap,
        myPlacemark1;

    function init(){ 
        myMap = new ymaps.Map("map", {
        center: [53.950486, 27.716491],
        zoom: 16
    });
        
    myMap.controls
        .remove('rulerControl')
        .remove('trafficControl')
        .remove('searchControl')
        .remove('geolocationControl');//работа с кнопками навигации
        
    myMap.behaviors.disable([
        'drag',
        'scrollZoom'
    ]);//отключает действия, прокрутка итд
        
    myPin = new ymaps.GeoObjectCollection({}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/yellow-pointer.png',
        iconImageSize: [60, 64],
        iconImageOffset: [-15, -65]
    });    
        
    myPlacemark1 = new ymaps.Placemark([53.950486, 27.716491], {
        balloonContentHeader: '<img src="img/icons/icon-balloon.jpg" alt="" class="logo-balloon"><span class="map-header-balloon">Наш офис;)</span>',
        balloonContentBody: 'Здесь мы работаем',
        balloonContentFooter: '+375(29)8764819',
        hintContent: 'Здесь я живу и работаю'
    });
        
    myPin.add(myPlacemark1);
    myMap.geoObjects.add(myPin);
       

}