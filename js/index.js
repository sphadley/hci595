var map;
target = [42.029549, -93.652079]
var currentLocation = "";
var badgeCount =1; 
var badges = [];

function onDragStart(event) 
{
    event.stopPropagation();
    event.dataTransfer.setData("text/html", event.target.id);
}

function onDragOver(event) 
{
    event.preventDefault();
}  

function onDrop(event) 
{
    event.preventDefault();
    var data=event.dataTransfer.getData("text/html");
    var nodeCopy = document.getElementById(data).cloneNode(true);
    nodeCopy.id = "badgeImage" + badgeCount; /* We cannot use the same ID */
    event.target.appendChild(nodeCopy);
    var imageSource = $('#badgeImage0').attr('src');
    badges.push(imageSource);
    localStorage.setItem("badges", JSON.stringify(badges));
    badgeCount++;
}

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
                $('#modalTitle').html('<h2>' + garden.Name + '</h2>');
                $('#questionDiv').html('<h3>' + garden.Puzzle.Question +'</h3>');
                optionString = "";
                for(var a in garden.Puzzle.Answers)
                {
                    var answer = garden.Puzzle.Answers[a];
                    var optionValue = a == garden.Puzzle.CorrectAnswer;
                    $('#badgeImage0').attr("src", garden.Puzzle.Badge);
                    optionString += '<div><input type="radio" name="puzzle" value="' + optionValue + '">' + answer +'</div>';
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
    $('#modalClose').click(()=>
    {
        $('#modal').css({'display': 'none'});
        $('#badgeDiv').css({'display': 'none'});

    })
    $('#checkButton').click(()=>
    {
        var puzzleAnswer =$('input[name="puzzle"]:checked').val();
        if(puzzleAnswer == 'true')
        {
            $('#badgeDiv').css({'display': 'block'});
        }
        else
        {
            $('#badgeDiv').css({'display': 'none'});
        }
    });

    var badgeImg = document.getElementById('badgeImage0');
    var badgeBar = document.getElementById('badgeBarBody');
    badgeImg.addEventListener('dragstart', onDragStart, false);
    badgeBar.addEventListener('dragover', onDragOver, false);
    badgeBar.addEventListener('drop', onDrop, false);

    storedBadges = JSON.parse(localStorage.getItem("badges"));
    if(storedBadges != null)
    {
        badges = storedBadges;
        for(b in badges)
        {
            var badge = badges[b];
            $('#badgeBarBody').append('<img class="badgeImage" id="badgeImage' + badgeCount + '" src="' + badge +'"/>');
            badgeCount++;
        }
    }


    map.on('locationfound', onLocationFound);
    lc.start();

});


