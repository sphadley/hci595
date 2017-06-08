var map;


$("document").ready(() => {
    var osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
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

    L.control.layers(baseLayers).addTo(map);
    var lc = L.control.locate().addTo(map);
    lc.start();
});


