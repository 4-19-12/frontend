let currentMarkerIndex = 0;
let markers = [];
var map,
main = new google.maps.LatLng(59.93480230754103, 30.31670901899369),
filial1 = new google.maps.LatLng(59.917468451237895, 30.351544908186895)
filial2 = new google.maps.LatLng(59.92068627326487, 30.342196946919127),
filial3 = new google.maps.LatLng(59.92187702315421, 30.330719321684928),
filial4 = new google.maps.LatLng(59.91322668010556, 30.343098102555295),
filial5 = new google.maps.LatLng(59.93869357013321, 30.32311413415997);
filial6 = new google.maps.LatLng(59.93199312604811, 30.316967767939694);

function moveToMarker(index) {
    if (index >= 0 && index < markers.length) {
        map.panTo(markers[index].getPosition());
    }
}

function initMap() {

	map = new google.maps.Map(document.getElementById("map"), {
		center: {lat: 59.93480230754103, lng:  30.31670901899369},
		zoom: 12.5,
		disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.HYBRID,
        styles: [
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#212121"
                }
              ]
            },
            {
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#212121"
                }
              ]
            },
            {
              "featureType": "administrative",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#757575"
                },
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "administrative.country",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "administrative.locality",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#bdbdbd"
                }
              ]
            },
            {
              "featureType": "poi",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#181818"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#1b1b1b"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#2c2c2c"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#8a8a8a"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#373737"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#3c3c3c"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.highway.controlled_access",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#4e4e4e"
                }
              ]
            },
            {
              "featureType": "road.local",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "featureType": "transit",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "transit",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#000000"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#3d3d3d"
                }
              ]
            }
          ]
    });

    var circles_icon_main = {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 9,
        fillColor: "#ff69b4",
        strokeWeight: 4,
        strokeColor: "#FFF",
        fillOpacity: 1,
        optimized:false
    };
    var circles_icon_filial = {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 9,
      fillColor: "#87ceeb",
      strokeWeight: 4,
      strokeColor: "#FFF",
      fillOpacity: 1,
      optimized:false
  };

    // Markers

    var marker1 = new google.maps.Marker({
        position: main,
        map: map,
        icon: circles_icon_main,
        animation: google.maps.Animation.DROP,
    });
    markers.push(marker1);

    var marker2 = new google.maps.Marker({
        position: filial1,
        map: map,
        icon: circles_icon_filial,
        animation: google.maps.Animation.DROP,
    });
    markers.push(marker2);

    var marker3 = new google.maps.Marker({
        position: filial2,
        map: map,
        icon: circles_icon_filial,
        animation: google.maps.Animation.DROP,
    });
    markers.push(marker3);

    var marker4 = new google.maps.Marker({
        position: filial3 ,
        map: map,
        icon: circles_icon_filial,
        animation: google.maps.Animation.DROP,
    });
    markers.push(marker4);

    var marker5 = new google.maps.Marker({
        position: filial4,
        map: map,
        icon: circles_icon_filial,
        animation: google.maps.Animation.DROP,
    });
    markers.push(marker5);

    var marker6 = new google.maps.Marker({
        position: filial5,
        map: map,
        icon: circles_icon_filial,
        animation: google.maps.Animation.DROP,
    });
    markers.push(marker6);

    var marker7 = new google.maps.Marker({
      position: filial6,
      map: map,
      icon: circles_icon_filial,
      animation: google.maps.Animation.DROP,
  });
  markers.push(marker7);

    markers.forEach((marker, index) => {
        marker.addListener("click", function() {

          currentMarkerIndex = (index + 1) % markers.length;
          moveToMarker(currentMarkerIndex);
        });
    });
    



};

initMap()


