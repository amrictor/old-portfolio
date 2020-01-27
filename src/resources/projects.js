import hci from '../resources/CS464FinalReport.pdf'
import graphics from '../resources/anim1024.gif'
import carving from '../resources/carving.gif'
import brushonoff from '../resources/brushonoff.gif'
import brushsize from '../resources/brushsize.gif'
import rotate from '../resources/rotate.gif'
import game from '../resources/game.gif'
import trip_planner from '../resources/trip_planner.gif'
import poem1 from '../resources/poem1.png'
import poem2 from '../resources/poem2.png'
import congo from '../resources/congogameplay.gif'
import lyrics from '../resources/lyrics.gif'


const web = [     
        {
          'images': [lyrics],
          'title' : "Versed",
          'description' : 
              "A serverless web game designed for music lovers and lyric buffs. \
              Users are able to search for songs available through the Genius API \
              and add them to a customizable playlist which can be \"shuffled\", \
              presenting the user with an unknown song from the list and asking  \
              them to guess common words to figure out the song they are playing.",
          'github' : "https://github.com/amrictor/lyric-quiz",
          'preview' : "https://lyrics.amrictor.com"
        },
        {
          'images': [congo],
          'title' : "Congo Online",
          'description' : 
              "A full stack web game based on the chess variant \"Congo\". \
              Features a complete user registration system using a MySQL\
              database to store users, invites, and game history. Java server \
              is responsible for validating moves and handling client \
              communication via websockets. Developed alongside a team of five \
              using the Agile method for an Object Oriented Design course at CSU.",
          'github' : "https://github.com/cs414-byte-mechanics/cs414-f19-001-ByteMechanics",
          'preview' : "https://congo.amrictor.com"
        },
        {
            'images': [game],
            'title' : "Wordsmyth",
            'description' : 
                "Inspired by 1998 board game \"Wise or Otherwise\", a quote finishing web \
                game to play with a group. Users conduct turns simultaneously to guess at \
                and vote on real sayings from cultures around the world. Client-Server \
                communication using Java Websockets and a ReactJS front end.",
            'github' : "https://github.com/amrictor/portfolio/tree/master/server",
            'preview' : "https://wordsmyth.amrictor.com"
          },
          {
            'images': [trip_planner],
            'title' : "Trip Planner",
            'description' : 
                "A webpage and corresponding server used for trip planning. \
                Makes filtered queries to a database of airports around \
                the world, allowing user to design, visualize, and save \
                a trip with customizable optimization. Developed with a \
                team as part of the Software Engineering course offered at CSU.",
            'github' : "https://github.com/amrictor/trip-planner",
            'preview' : "https://trip-planner.amrictor.com"
          },

        ]

web.forEach((project)=>{
  project.images = project.images.map((item) =>  ({'src': item, 'caption': ""}))
});

const other = [
          {
            'images': [graphics],
            'title' : "Ray Tracing Rendering Engine",
            'description' : 
                "Recursive ray tracing engine written in C++ for producing images \
                and animations of 3D space, in user defined lighting and camera conditions, \
                containing spheres and .OBJ models to which scalar, rotational, \
                or transpositional transformations can be applied.",
            'github' : "https://github.com/amrictor/ray-tracer"
          },
          {
            'images': [carving, brushonoff, brushsize, rotate],
            'title' : "Subtractive Art in Virtual Reality",
            'description' : 
                "A program developed in Unity with C# to be used with an \
                Oculus Rift to carve in a voxel medium. Tested against \
                physical 3D art forms in a user study.",
            'github' : "https://github.com/csu-hci-projects/Subtractive_Art-v1.0",
            'paper' : hci
          },
          {
            'images': [poem1, poem2],
            'title' : "Linguistics and Text Prediction",
            'description' : 
                "Multiple approaches to generating text, specifically poetry, \
                based on thousands of samples found online. A look at neural \
                networks, Markov chains, and pre- and post- processing to filter \
                out undesirable outputs.",
            'github' : "https://github.com/amrictor/MachineLearningFinal",
            'paper' : "https://nbviewer.jupyter.org/github/amrictor/MachineLearningFinal/blob/master/FinalProject/RictorProjectReport.ipynb"
        }
    ]

  other.forEach((project)=>{
    project.images = project.images.map((item) =>  ({'src': item, 'caption': ""}))
  });

const nontech = [
  {
    'images': [poem1, poem2],
    'title' : "Untitled",
    'description' : 
        "Poetry manuscript documenting the 2013 Arapahoe High School \
        shooting and aftermath. ",
    // 'github' : "https://github.com/amrictor/MachineLearningFinal",
    // 'paper' : "https://nbviewer.jupyter.org/github/amrictor/MachineLearningFinal/blob/master/FinalProject/RictorProjectReport.ipynb"
},
]

// nontech.forEach((project)=>{
//   project.images = project.images.map((item) =>  ({'src': item, 'caption': ""}))
// });


export { web, other, nontech };