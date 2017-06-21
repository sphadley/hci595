var gardens = [
    {
        Name: "Ames Farmer's Market",
        GardenInfo:"The mission of Ames Farmer's Market is to bring people together from the surrounding area to enjoy the bounty of the locally grown produce, delicious baked goods and beautifully hand crafted items. If you would like more information, please visit amesmainstreetfarmersmarket.com or call 5155200702. ",
        Latlng : [42.024843, -93.615325],
        Marker : 'm1.png',
        Puzzle:
        {
            Question: "Ames Farmers Market is open from ___ to ___",
            Answers:
            [
                "May to October",
                "June to July",
                "June to August",

            ],
            CorrectAnswer: 0,
            Badge: "Badge1-1.png"

        },
        Gnome : {
            Name: "Gnome1",
            Image: "Gnome1.png"
        }
    },
    {
        Name: "Reiman Gardens",
        GardenInfo:"Reiman Gardens' mission is to educate, enchant, and inspire an appreciation of plants, butterflies, and the beauty of the natural world. If you would like more information, please visit reimangardens.com or call 5152942710.",
        Latlng : [42.010922, -93.638277],
        Marker : 'm2.png',
        Puzzle:
        {
            Question: "The 2017 theme for Reiman Gardens is ___.",
            Answers:
            [
                "Earth",
                "Water",
                "Fire",
            ],
            CorrectAnswer: 1, 
            Badge: "Badge2-1.png"
        },
        Gnome : {
            Name: "Gnome2",
            Image: "Gnome2.png"
        }
    },
    {
        Name: "SUV Center",
        GardenInfo:"The SUV Center's mission is to provide a space for SUV families to grow, tend, and share produce from their community garden. For more information, please call 5152945360. ",
        Latlng : [42.044653, -93.640029],
        Marker : 'm3.png',
        Puzzle:
        {
            Question: "SUV stands for...",
            Answers:
            [
                "Super&nbsp;Ultra&nbsp;Violets",
                "Schilletter&nbsp;and&nbsp;University&nbsp;Village",
                "Sport&nbsp;Utility&nbsp;Vehicle",
            ],
            CorrectAnswer: 1,
            Badge: "Badge3-1.png"
        },
        Gnome : {
            Name: "Gnome3",
            Image: "Gnome3.png"
        }
    },
    {
        Name: "Wheatsfield Cooperative",
        GardenInfo:"Wheatsfield Cooperative's Mission is to offer food, services and education to support the health of the environment and community. For more information, please visit wheatsfield.coop or call 5152324094.",
        Latlng : [42.025398, -93.621531],
        Marker : 'm4.png',
        Puzzle:
        {
            Question: "There are ___  local producers currently selling their products to Wheatsfield.",
            Answers:
            [
                "114",
                "50",
                "76",
            ],
            CorrectAnswer: 0,
            Badge: "Badge4-1.png"
        },
        Gnome : {
            Name: "Gnome4",
            Image: "Gnome4.png"
        }
    },
    {
        Name: "Food at First",
        GardenInfo:"Food at First's mission is to extend the growing season as well as providing more fresh food. For more information, please visit foodatfirst.wordpress.com or call 5153444357. ",
        Latlng : [42.026999, -93.617169],
        Marker : 'm4.png',
        Puzzle:
        {
            Question: "Anyone in ___ or older is welcome to sign up to volunteer at Food at First.",
            Answers:
            [
                "2nd grade",
                "5th grade",
                "9th grade",
            ],
            CorrectAnswer: 1,
            Badge: "Badge4-1.png"
        },
        Gnome : {
            Name: "Gnome4",
            Image: "Gnome4.png"
        }
    },
    {
        Name: "The Farm",
        GardenInfo:"The Farm's mission is to repurpose the thin strip of land along the railroad in Ames that was largely neglected and create a highly visible vegetable garden. For more information, please visit amescgc.com.",
        Latlng : [42.034757, -93.627525],
        Marker : 'm4.png',
        Puzzle:
        {
            Question: "The Farm is a garden that is beside ___.",
            Answers :
            [
                "The railroad",
                "Walmart",
                "Iowa State University",
            ],
            CorrectAnswer: 0,
            Badge: "Badge4-1.png"
        },
        Gnome : {
            Name: "Gnome4",
            Image: "Gnome4.png"
        }
    },
    {
        Name: "Beloit Garden",
        GardenInfo:"Beloit Garden's mission is to feed the 45 (average) children that live on our campus 24/7. For more information, please visit amescgc.com or call 5152327262.",
        Latlng : [42.035357, -93.626311],
        Marker : 'm4.png',
        Puzzle:
        {
            Question: "The Beloit Garden gives produce to…",
            Answers :
            [
                "Beloit's kitchen and Bethesda Food Pantry",
                "McDonald's",
                "Puppies",
            ],
            CorrectAnswer: 0,
            Badge: "Badge4-1.png"
        },
        Gnome : {
            Name: "Gnome4",
            Image: "Gnome4.png"
        }
    },
    {
        Name: "Blaze Pizza",
        GardenInfo:"Blaze Pizza's mission is to become one of the nation’s hottest restaurant concepts, with fans lining up each day for its custom-built pizzas, freshly made salads, house made lemonades and signature s’more pies. For more information, please visit blazepizza.com or call 5159183473.  ",
        Latlng : [42.022363, -93.647317],
        Marker : 'm4.png',
        Puzzle:
        {
            Question: "Blaze Pizza offers the option of ___ crust.",
            Answers :
            [
                "Chocolate",
                "Gluten-free",
                "Mint",
            ],
            CorrectAnswer: 1,
            Badge: "Badge4-1.png"
            },
        Gnome : {
            Name: "Gnome4",
            Image: "Gnome4.png"
        }
    },
    {
        Name: "The Cafe",
        GardenInfo:"The Cafe's mission is to interact with and buy directly from the people who grow produce -- local farmers, purveyors, and the community. For more information please visit thecafeames.com or call 5152920100. ",
        Latlng : [42.048824, -93.643675],
        Marker : 'm4.png',
        Puzzle:
        {
            Question: "The Cafe uses ___ produce",
            Answers: 
            [
                "National",
                "International",
                "Local",
            ],
            CorrectAnswer: 2,
            Badge: "Badge4-1.png"
            },
        Gnome : {
            Name: "Gnome4",
            Image: "Gnome4.png"
        }
    },
    {
        Name: "Ames Library",
        GardenInfo:"Ames Library's mission is to provide library services to the Ames Community members and surrounding neighbors and to offer children and teens a place to play games, read a book or flip through a favorite magazine, and hang with friends. For more information, please visit amespubliclibrary.org or call 5152395646.",
        Latlng : [42.026081, -93.612793],
        Marker : 'm4.png',
        Puzzle:
        {
            Question: "Ames Public Library has over ___ books about gardens",
            Answers :
            [
                "2,200",
                "5,500",
                "3,300",
            ],
            CorrectAnswer: 0,
            Badge: "Badge4-1.png"
        },
        Gnome : {
            Name: "Gnome4",
            Image: "Gnome4.png"
        }
    }
]
