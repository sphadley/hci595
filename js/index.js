var map;
target = [42.029549, -93.652079]

function getDistance(coord1, coord2)
{
    var from = 
    {
        'type': 'Feature',
        'properties': {},
        'geometry': 
        {
            'type': 'Point',
            'coordinates': coord1
        }
    };
    var to = 
    {
        'type': 'Feature',
        'properties': {},
        'geometry':
        {
            'type': 'Point',
            'coordinates': coord2
        }
    };
    var units = 'miles';

    var points = 
    {
        'type': 'FeatureCollection',
        'features': [from, to]
    };

    var distance = turf.distance(from, to, units);
    return distance
}

function onLocationFound(e) {
    //getDistance([personMarker._latlng.lat, personMarker._latlng.lng], [ltlng.lat, ltlng.lng]);
    var dist = getDistance([e.latlng.lat, e.latlng.lng], target) 
    if(dist < 0.01)
    {
        window.alert(dist + " miles away!");
    }

}

$("document").ready(() => {
    var osm = L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }); 

    map =  L.map('map', {
       center: [41.577, -93.231], 
        zoom: 7,
        layers: [osm]
    });

    baseLayers = {
        "Open Street Map": osm
    };

    var marker = L.marker(target).addTo(map);

    L.control.layers(baseLayers).addTo(map);
    var lc = L.control.locate({ 
            locateOptions: {
                enableHighAccuracy: true
            }
        }).addTo(map);
    map.on('locationfound', onLocationFound);
    lc.start();
});


