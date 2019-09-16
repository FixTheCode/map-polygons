var poly;

function initMap() {
var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
    center: {lat: 51.1878, lng: -0.5979},
    mapTypeId: 'terrain'
  });

  var redCoords = [
    {lat: 51.1880, lng: -0.5985},
    {lat: 51.1876, lng: -0.5981},
    {lat: 51.1879, lng: -0.5969},
    {lat: 51.1883, lng: -0.5973}
  ];

  // Construct a draggable polygon
  poly = new google.maps.Polygon({
    map: map,
    paths: redCoords,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    draggable: true,
    editable: true,
    geodesic: false
  });

  //map.addListener('click', showCoordinates);
}

// display coordinates of the polygon on the web page
function showCoordinates(str) {
    var vertices = poly.getPath();
    str='';
    for (var i =0; i < vertices.getLength(); i++) {
      var xy = vertices.getAt(i);
      str += xy.lat() + ',' + xy.lng() + '\n';
    }   
    return str;
  }