var map;
target = [42.029549, -93.652079]
var currentLocation = "";

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

function onLocationFound(e)
{
    for (g in gardens)
    {
        var garden = gardens[g];
        var dist = getDistance([e.latlng.lat, e.latlng.lng], gardens[g].Latlng);
        if(dist < 0.01)
        {
            if(currentLocation != garden.Name)
            {
                currentLocation = garden.Name;
                $('#modalTitle').html("<h2>" + garden.Name + "</h2>");
                $('#questionDiv').html(garden.Puzzle.Question);
                optionString = "";
                for(var a in garden.Puzzle.Answers)
                {
                    var answer = garden.Puzzle.Answers[a];
                    var optionValue = a == garden.Puzzle.CorrectAnswer;
                    optionString += '<label><input type="radio" name="puzzle" value="' + optionValue + '">' + answer +'</label>';
                }
                $('#optionDiv').html(optionString);
                $('#modal').css({'display': 'block'});
            }
            return;
        }
    }
    currentLocation = "";

}

$("document").ready(() =>
{
    var osm = L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }); 

    map =  L.map('map',
    {
       center: [41.577, -93.231], 
        zoom: 7,
        layers: [osm]
    });

    baseLayers = {"Open Street Map": osm};
    for (var g in gardens)
    {
        var m= L.marker(gardens[g].Latlng).addTo(map);
    }

    L.control.layers(baseLayers).addTo(map);
    var lc = L.control.locate(
        { 
            locateOptions: 
            {
                enableHighAccuracy: true
            }
        }).addTo(map);
    $('#showModal').click(() =>
    {
        $('#modal').css({'display': 'block'});
    })
    $('#modalClose').click(()=>
    {
        $('#modal').css({'display': 'none'});
    })
    $('#checkButton').click(()=>
    {
        var puzzleAnswer =$('input[name="puzzle"]:checked').val();
        if(puzzleAnswer == 'true')
        {
            alert('Good Job!');
        }
        else
        {
            alert('Try again!');
        }
    });
    map.on('locationfound', onLocationFound);
    lc.start();

});


