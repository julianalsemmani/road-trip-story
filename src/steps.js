const steps = [
  {
    duration: 30,
    location: {
      title: "Hans Christian Andersen Museum",
      city: "Solvang, California",
      center: [34.5958017,-120.1390013],
      zoom: 15
    },
    song: {
      audio: "adeline.mp3",
      title: "Adeline",
      artist: "John-Robert",
      image: "adeline.jpg",
      startTime: 172
    },
    lyrics: [
      "Oh Adeline, off you go",
      "You were always raised to be a rolling stone",
      "Right before you left, wish I'd let you know",
      "That I have always adored you",
      "That I will always adore you",
      "Through all the people and places",
      "And lifetimes we pass through"
    ],
    media: {
      images: [
        "1.jpg",
        "2.jpg",
        "3.jpg"
      ]
    }
  },
  {
    duration: 40,
    location: {
      title: "Giovanni's Fish Market and Gallery",
      city: "Morro Bay, California",
      center: [35.367538, -120.854415],
      zoom: 15
    },
    song: {
      audio: "the corner.mp3",
      title: "The Corner",
      artist: "Dermot Kennedy",
      image: "outgrown.jpg",
      startTime: 21
    },
    lyrics: [
      "Take your heart out of your holster",
      "What if he never had to go?",
      "What if we never knew October?",
      "Would you run into the open?",
      "Would you take back all they told ya?",
      "Holding, waiting for something",
      "That'll keep you from the cold"
    ],
    media: {
      images: [
        "10.jpg",
        "11.jpg"
      ]
    }
  },
  {
    duration: 40,
    location: {
      title: "San Geronimo Pullout",
      city: "Cayucos, California",
      center: [35.449288, -120.926682],
      zoom: 15
    },
    song: {
      audio: "busyhead.mp3",
      title: "Busyhead",
      artist: "Noah Kahan",
      image: "busyhead.jpg",
      startTime: 1
    },
    lyrics: [
      "You're weak on the surface",
      "You speak when you're nervous",
      "And all the wrong words seem right in your head",
      "You can't stand the space in your bed",
      "So you shake in the darkness",
      "You break like an artist",
      "And all your big plans are small the next day"
    ],
    media: {
      images: [
        "12.jpg",
        "13.jpg",
        "14.jpg",
        "15.jpg",
        "16.jpg",
        "17.jpg",
        "18.jpg",
        "19.jpg",
        "20.jpg",
        "21.jpg",
        "22.jpg",
        "23.jpg",
        "24.jpg"
      ]
    }
  },
  {
    duration: 30,
    location: {
      title: "Willow Creek Beach Day Use",
      city: "Big Sur, California",
      center: [35.893003, -121.461266],
      zoom: 15
    },
    song: {
      audio: "little lion man.mp3",
      title: "Little Lion Man",
      artist: "Mumford & Sons",
      image: "little lion man.jpg",
      startTime: 28
    },
    lyrics: [
      "You'll never be what is in your heart",
      "Weep, little lion man",
      "You're not as brave as you were at the start",
      "Rate yourself and rake yourself",
      "Take all the courage you have left",
      "And waste it on fixing all the problems",
      "That you made in your own head"
    ],
    media: {
      images: [
        "25.jpg",
        "26.jpg",
        "27.jpg",
        "28.jpg",
        "29.jpg",
        "30.jpg",
        "31.jpg",
        "32.jpg",
        "33.jpg",
        "34.jpg"
      ]
    }
  },
  {
    duration: 30,
    location: {
      title: "Gamboa Point",
      city: "Big Sur, California",
      center: [36.049497, -121.590168],
      zoom: 15
    },
    song: {
      audio: "outgrown.mp3",
      title: "Outgrown",
      artist: "Dermot Kennedy",
      image: "outgrown.jpg",
      startTime: 74
    },
    lyrics: [
      "I'll just let go of love that others dream to capture",
      "I'll never know another feeling like your rapture",
      "I'm gonna go, I gotta be here in your absence",
      "Now this poem has ended",
      "I'll be all-out lonely,",
      "If you all outgrow me",
      "To know with all of this potential"
    ],
    media: {
      video: "1.mp4",
      images: [
        "4.jpg",
        "5.jpg",
        "6.jpg",
        "7.jpg",
        "8.jpg",
        "9.jpg"
      ]
    }
  },
  {
    duration: 30,
    location: {
      title: "Cabrillo Highway",
      city: "Monterey County, California",
      center: [36.091526, -121.618469],
      zoom: 15
    },
    song: {
      audio: "power over me.mp3",
      title: "Power Over Me",
      artist: "Dermot Kennedy",
      image: "power over me.jpg",
      startTime: 61
    },
    lyrics: [
      "Remember the lake in the moonlight?",
      "Remember you shivered and shone",
      "I'll never forget what you looked like",
      "On that night",
      "But I know that time's gonna take me",
      "I know that day's gonna come",
      "I just want the devil to hate me"
    ],
    media: {
      video: "2.mp4",
      images: [
        "35.jpg",
        "36.jpg",
        "37.jpg",
        "38.jpg",
        "39.jpg",
        "40.jpg",
        "41.jpg",
        "42.jpg"
      ]
    }
  },
  {
    duration: 30,
    location: {
      title: "Point Sur State Historic Park",
      city: "Monterey, California",
      center: [36.312770, -121.888273],
      zoom: 15
    },
    song: {
      audio: "vienna.mp3",
      title: "Vienna",
      artist: "Billy Joel",
      image: "vienna.jpg",
      startTime: 64
    },
    lyrics: [
      "Slow down, you're doin' fine",
      "You can't be everything you wanna be",
      "Before your time",
      "Although it's so romantic",
      "On the borderline tonight, tonight",
      "Too bad but it's the life you lead",
      "You're so ahead of yourself"
    ],
    media: {
      images: [
        "43.jpg",
        "44.jpg",
        "45.jpg",
        "46.jpg",
        "47.jpg",
        "48.jpg",
        "49.jpg",
        "50.jpg"
      ]
    }
  },
  {
    duration: 40,
    location: {
      title: "Garrapata State Park Bluff Trail",
      city: "Carmel-by-the-Sea, California",
      center: [36.4566858,-121.9241347],
      zoom: 15
    },
    song: {
      audio: "from eden.mp3",
      title: "From Eden",
      artist: "Hozier",
      image: "from eden.jpg",
      startTime: 31
    },
    lyrics: [
      "There's something tragic about you",
      "Something so magic about you",
      "Don't you agree?",
      "Babe",
      "There's something lonesome about you",
      "Something so wholesome about you",
      "Get closer to me"
    ],
    media: {
      images: [
        "51.jpg",
        "52.jpg",
        "53.jpg",
        "54.jpg",
        "55.jpg",
        "56.jpg",
        "57.jpg",
        "58.jpg",
        "59.jpg",
        "60.jpg",
        "61.jpg",
        "62.jpg",
        "63.jpg",
        "64.jpg"
      ]
    }
  },
  {
    duration: 30,
    location: {
      title: "Carmel Beach",
      city: "Carmel-by-the-Sea, California",
      center: [36.5517019,-121.9285234],
      zoom: 16
    },
    song: {
      audio: "just you and i.mp3",
      title: "Just You and I",
      artist: "Tom Walker",
      image: "just you and i.jpg",
      startTime: 32
    },
    lyrics: [
      "I'll pour my heart out through my mouth",
      "This year's been hard for us, no doubt",
      "Let's raise a glass to a better one",
      "Let all the things that we've overcome",
      "Bring hope to us 'cause",
      "Me and you, we can hold this out",
      "Only you understand how I'm feeling now, yeah"
    ],
    media: {
      images: [
        "65.jpg"
      ]
    }
  },
  {
    duration: 30,
    location: {
      title: "Cabrillo Highway",
      city: "Davenport, California",
      center: [37.064204, -122.253466],
      zoom: 15
    },
    song: {
      audio: "she.mp3",
      title: "She",
      artist: "dodie",
      image: "she.jpg",
      startTime: 131
    },
    lyrics: [
      "Cause even when she's next to me",
      "We could not be more far apart",
      "Cause she tastes like birthday cake, and storytime, and fall",
      "But to her I taste of nothing at all",
      "And she smells like lemongrass and sleep",
      "She tastes like apple juice and peach",
      "You would find her in a polaroid picture"
    ],
    media: {
      video: "3.mp4",
      images: [
        "66.jpg",
        "67.jpg",
        "68.jpg",
        "69.jpg"
      ]
    }
  },
  {
    duration: 30,
    location: {
      title: "Pelican Rock",
      city: "Davenport, California",
      center: [37.075310, -122.261823],
      zoom: 15
    },
    song: {
      audio: "power over me.mp3",
      title: "Power Over Me",
      artist: "Dermot Kennedy",
      image: "power over me.jpg",
      startTime: 39
    },
    lyrics: [
      "Everything I hold dear resides in those eyes",
      "You got that power over me",
      "My, my",
      "The only one I know, the only one on my mind",
      "You got that power over me",
      "(My, my)",
      "You got that power over me"
    ],
    media: {
      video: "4.mp4",
      images: [
        "70.jpg",
        "71.jpg",
        "72.jpg",
        "73.jpg",
        "74.jpg",
        "75.jpg",
        "76.jpg"
      ]
    }
  },
  {
    duration: 40,
    location: {
      title: "San Quentin State Prison",
      city: "San Quentin, California",
      center: [37.9386291,-122.4920359],
      zoom: 15
    },
    song: {
      audio: "the king.mp3",
      title: "The King",
      artist: "Sarah Kinsley",
      image: "the king.jpg",
      startTime: 25
    },
    lyrics: [
      "I built a time machine to see you again",
      "To hear your phone call, your voice down the hall",
      "The way we were back then",
      "We were dancing in the rain",
      "Our feet on the pavement",
      "You said I was your second head",
      "I knew exactly what you meant"
    ],
    media: {
      video: "6.mp4",
      images: [
        "78.jpg",
        "79.jpg",
        "80.jpg",
        "81.jpg"
      ]
    }
  },
  {
    duration: 30,
    location: {
      title: "Charles M. Schulz Museum and Research Center",
      city: "Santa Rosa, California",
      center: [38.460891, -122.735669],
      zoom: 15
    },
    song: {
      audio: "silk.mp3",
      title: "Silk",
      artist: "Giselle",
      image: "silk.jpg",
      startTime: 19
    },
    lyrics: [
      "You make my heart spin sorrow into silk",
      "You make me sleep like a young child with warm milk",
      "You held me tighter when I pushed you away",
      "You turn my sorrow into silk",
      "You turn my sorrow",
      "You make my heart spin sorrow into silk",
      "You make me sleep like a young child with warm milk"
    ],
    media: {
      images: [
        "82.jpg",
        "83.jpg",
        "84.jpg",
        "85.jpg"
      ]
    }
  },
  {
    duration: 30,
    location: {
      title: "Duncan's Landing Overlook",
      city: "Bodega Bay, California",
      center: [38.3949913,-123.0945395],
      zoom: 15
    },
    song: {
      audio: "people watching.mp3",
      title: "People Watching",
      artist: "Conan Gray",
      image: "people watching.jpg",
      startTime: 59
    },
    lyrics: [
      "But I wanna feel all that love and emotion",
      "Be that attached to the person I'm holding",
      "Someday, I'll be falling without caution",
      "But for now, I'm only people watching",
      "I'm only looking just to live through you vicariously",
      "I've never really been in love, not seriously",
      "I had a dream about a house behind a picket fence"
    ],
    media: {
      video: "7.mp4",
      images: [
        "86.jpg",
        "87.jpg",
        "88.jpg"
      ]
    }
  },
  {
    duration: 40,
    location: {
      title: "Goat Rock State Beach",
      city: "Jenner, California",
      center: [38.4418078,-123.1247433],
      zoom: 15
    },
    song: {
      audio: "busyhead.mp3",
      title: "Busyhead",
      artist: "Noah Kahan",
      image: "busyhead.jpg",
      startTime: 176
    },
    lyrics: [
      "And you can stare below into the abyss",
      "Find a home on the edge of it",
      "And be defined by its presence",
      "By its size and its message",
      "You can move along through the dark",
      "And when you wonder where you are",
      "You'll be proud of your weakness"
    ],
    media: {
      video: "8.mp4",
      images: [
        "89.jpg",
        "90.jpg",
        "91.jpg",
        "92.jpg",
        "93.jpg",
        "94.jpg",
        "95.jpg",
        "96.jpg",
        "97.jpg",
        "98.jpg"
      ]
    }
  },
  {
    duration: 30,
    location: {
      title: "Glass Beach",
      city: "Fort Bragg, California",
      center: [39.4519777,-123.813471],
      zoom: 15
    },
    song: {
      audio: "featherstone.mp3",
      title: "Featherstone",
      artist: "The Paper Kites",
      image: "featherstone.jpg",
      startTime: 154
    },
    lyrics: [
      "And we'll hate what we've lost but we'll love what we find",
      "And oh, I'm feeling fine, we've made it to the coastline",
      "And how much is art really worth",
      "Ooh, ooh, ooh ooh ooh",
      "Ooh, ooh, ooh ooh ooh",
      "Ooh, ooh, ooh ooh ooh",
      "Ooh, ooh, ooh ooh ooh"
    ],
    media: {
      video: "9.mp4",
      images: [
        "99.jpg",
        "100.jpg",
        "101.jpg",
        "102.jpg",
        "103.jpg",
        "104.jpg",
        "105.jpg",
        "106.jpg",
        "107.jpg"
      ]
    }
  },
  {
    duration: 30,
    location: {
      title: "Legend of Big Foot",
      city: "Garberville, California",
      center: [40.0339133,-123.7935677],
      zoom: 15
    },
    song: {
      audio: "little lion man.mp3",
      title: "Little Lion Man",
      artist: "Mumford & Sons",
      image: "little lion man.jpg",
      startTime: 80
    },
    lyrics: [
      "Tremble for yourself, my man",
      "You know that you have seen this all before",
      "Tremble, little lion man",
      "You'll never settle any of your scores",
      "Your grace is wasted in your face",
      "Your boldness stands alone among the wreck",
      "Now learn from your mother or else"
    ],
    media: {
      images: [
        "108.jpg",
        "109.jpg",
        "110.jpg"
      ]
    }
  },
  {
    duration: 30,
    location: {
      title: "Elk Prairie Campground",
      city: "Orick, California",
      center: [41.359295, -124.023715],
      zoom: 15
    },
    song: {
      audio: "the corner.mp3",
      title: "The Corner",
      artist: "Dermot Kennedy",
      image: "outgrown.jpg",
      startTime: 65
    },
    lyrics: [
      "So, just remember who you are",
      "How you were never one for folding",
      "How you never liked the corner",
      "How the dark don't even know ya",
      "Would you believe me in the car?",
      "What if I never dropped you home?",
      "What if we drove until the morning?"
    ],
    media: {
      images: [
        "111.jpg",
        "112.jpg",
        "113.jpg",
        "114.jpg",
        "115.jpg",
        "116.jpg",
        "117.jpg",
        "118.jpg"
      ]
    }
  },
  {
    duration: 30,
    location: {
      title: "Atlas Grove",
      city: "Orick, California",
      center: [41.3684072,-124.0178347],
      zoom: 15
    },
    song: {
      audio: "perfect places.mp3",
      title: "Perfect Places",
      artist: "Lorde",
      image: "perfect places.jpg",
      startTime: 197
    },
    lyrics: [
      "What the fuck are perfect places anyway?",
      "All the nights spent off our faces",
      "Trying to find these perfect places",
      "What the fuck are perfect places anyway?",
      "All the nights spent off our faces",
      "Trying to find these perfect places",
      "What the fuck are perfect places anyway?"
    ],
    media: {
      video: "10.mp4",
      images: [
        "119.jpg",
        "120.jpg",
        "121.jpg",
        "122.jpg",
        "123.jpg",
        "124.jpg",
        "125.jpg"
      ]
    }
  },
  {
    duration: 30,
    location: {
      title: "Trees of Mystery",
      city: "Klamath, California",
      center: [41.584849,-124.0882947],
      zoom: 15
    },
    song: {
      audio: "stay next to me.mp3",
      title: "Stay Next to Me",
      artist: "Quin XCII, Chelsea Cutler",
      image: "stay next to me.jpg",
      startTime: 42
    },
    lyrics: [
      "We should go somewhere",
      "You choose, I don't care",
      "As long as you're right here",
      "Stay next to me",
      "Yeah",
      "We can barely stand",
      "And we both don't know this band"
    ],
    media: {
      images: [
        "126.jpg",
        "127.jpg",
        "128.jpg",
        "129.jpg"
      ]
    }
  },
  {
    duration: 40,
    location: {
      title: "Redwood Highway",
      city: "Bertsch-Oceanview, California",
      center: [41.6949661,-124.1164153],
      zoom: 15
    },
    song: {
      audio: "like real people do.mp3",
      title: "Like Real People Do",
      artist: "Hozier",
      image: "like real people do.jpg",
      startTime: 19
    },
    lyrics: [
      "I had a thought, dear",
      "However scary",
      "About that night",
      "The bugs and the dirt",
      "Why were you digging?",
      "What did you bury",
      "Before those hands pulled me"
    ],
    media: {
      video: "11.mp4",
      images: [
        "130.jpg"
      ]
    }
  },
  {
    duration: 30,
    location: {
      title: "Crescent Beach",
      city: "Crescent City, California",
      center: [41.745094, -124.174649],
      zoom: 15
    },
    song: {
      audio: "outgrown.mp3",
      title: "Outgrown",
      artist: "Dermot Kennedy",
      image: "outgrown.jpg",
      startTime: 55
    },
    lyrics: [
      "I know every road I run down has a sundown",
      "That's the way it is",
      "So I try to chase those days and never catch them",
      "I'll try to walk the other way and learn detachment",
      "Raise the eyes you saved for me",
      "And all the laughter you used to hold me in",
      "I'll just let go of love that others dream to capture"
    ],
    media: {
      images: [
        "131.jpg",
        "132.jpg",
        "133.jpg",
        "134.jpg",
        "135.jpg",
        "136.jpg",
        "137.jpg",
        "138.jpg",
        "139.jpg",
        "140.jpg",
        "141.jpg"
      ]
    }
  },
  {
    duration: 30,
    location: {
      title: "Welcome to Oregon",
      city: "Curry County, Oregon",
      center: [41.998576, -124.208124],
      zoom: 15
    },
    song: {
      audio: "adeline.mp3",
      title: "Adeline",
      artist: "John-Robert",
      image: "adeline.jpg",
      startTime: 62
    },
    lyrics: [
      "And you were never one for doing what you were told",
      "Oh, how the good die young",
      "And if you're cold",
      "Then don't leave lonely",
      "I'll walk you home",
      "No, you don't have to love me, no",
      "Oh Adeline"
    ],
    media: {
      images: [
        "142.jpg"
      ]
    }
  }
];

export default steps;