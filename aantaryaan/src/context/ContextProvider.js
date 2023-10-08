import React from "react";

const AppContext = React.createContext({});
const ContextProvider = ({ children }) => {
  const planets = [
    {
      name: "Mercury",
      tagLine:
        "The smallest planet in our solar system and nearest to the Sun.",
      description:
        "Mercury is the smallest planet in our solar system. It’s just a little bigger than Earth’s moon. It is the closest planet to the sun, but it’s actually not the hottest. Venus is hotter.",
      image: "../planets/Mercury.png",
      faqs: [
        {
          question: "What is my Nmae?",
          answer: "React is a JavaScript library for building user interfaces.",
        },
        {
          question: "How do I install React?",
          answer:
            'You can install React using the "create-react-app" command or by adding it to an existing project using npm or yarn.',
        },
        {
          question: "What is JSX?",
          answer:
            "JSX is a syntax extension for JavaScript used by React to describe what the UI should look like.",
        },
      ],
    },
    {
      name: "Venus",
      tagLine:
        "Venus is the second planet from the Sun and the third brightest object in Earth's sky after the Sun and Moon.",
      description:
        "Venus is the second planet from the Sun and the third brightest object in Earth's sky after the Sun and Moon. It is sometimes referred to as the sister planet to Earth, because their size and mass are so similar. Venus is also the closest planet to Earth. ",
      image: "../planets/Venus.png",
      activities: [
        {
          name: "Hiking at Olympus Mons",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: "../planets/Venus.png",
          planet: "Venus",
          id: 21,
        },
        {
          name: "Olympiad",
          description: "Lorem ipSushil is in Olympiad uisquam, voluptatum.",
          image: "../planets/Mars.png",
          planet: "Venus",
          id: 22,
        },
      ],

      faqs: [
        {
          question: "What is React?",
          answer: "React is a JavaScript library for building user interfaces.",
        },
        {
          question: "How do I install React?",
          answer:
            'You can install React using the "create-react-app" command or by adding it to an existing project using npm or yarn.',
        },
        {
          question: "What is JSX?",
          answer:
            "JSX is a syntax extension for JavaScript used by React to describe what the UI should look like.",
        },
      ],
    },

    {
      name: "Mars",
      tagLine: "Mars is also known as the red planet.  ",
      description: " ",
      image: "../planets/Mars.png",
      faqs: [
        {
          question: "Do we need oxygen cylinders?",
          answer:
            "Yes, oxygen cylinders are necessary because of the absence of an atmosphere on the Moon, which means there is no readily available oxygen in the lunar environment. As a result, space explorers are unable to breathe the Moon's natural air, necessitating the need to bring their own oxygen supply.",
        },
        {
          question: "Can we capture the photographs?",
          answer:
            "Yes, space travelers can capture the pictures if they want to. ",
        },
        {
          question:
            "What precautions do we need  from the extreme temperatures on the celestial bodies?",
          answer:
            "Space travelers  wear specially designed spacesuits that provide thermal insulation to protect them from the celestial bodies’ extreme temperature variations.",
        },
      ],
    },
    {
      name: "Jupiter",
      tagLine:
        "Jupiter is the biggest planet in the Solar system, also known as the king of solar system. ",
      description: " ",
      image: "../planets/Jupiter.png",
      faqs: [
        {
          question:
            "What are the places we need to stop during our trip to Jupiter?",
          answer:
            "We will stop at the Moon and Mars during our voyage of Jupiter.",
        },
        {
          question:
            "What precautions do we need  from the extreme temperatures on the celestial bodies?",
          answer:
            "Space travelers  wear specially designed spacesuits that provide thermal insulation to protect them from the celestial bodies’ extreme temperature variations.",
        },

        {
          question: "What do we eat  during our travels?",
          answer:
            "Space travelers will  eat specially prepared space food, including freeze-dried meals, rehydratable foods, and packaged snacks.",
        },
      ],
    },
    {
      name: "Saturn",
      tagLine:
        "Saturn is second largest planet of our solar system.It is also known as jewel of the solar system ",
      description: " ",
      image: "../planets/Saturn.png",
      faqs: [
        {
          question: "Which places are the stations for our travel?",
          answer:
            "The space station for our voyage to jewel are Moon, Mars and  Europa",
        },
        {
          question:
            "What precautions do we need  from the extreme temperatures during travel?",
          answer:
            "Travelers will  wear specially designed spacesuits that provide thermal insulation to protect them from the space’s  extreme temperature variations.",
        },
        {
          question: "Do we actually go to the planet Saturn?",
          answer:
            "No, we will not exactly go to Planet Saturn. Since it is a gas giant it is not possible to go to Saturn's surface. However, we will be able to enjoy the view of the Saturn’s view ",
        },
      ],
    },
    {
      name: "Uranus",
      tagLine:
        "Also known as blue planet, Uranus is third biggest and second farthest planet of solar system",
      description: " ",
      image: "../planets/Uranus.png",
      faqs: [
        {
          question: "Will we go to the planet Uranus?",
          answer:
            "No, we will not exactly go to Planet Uranus. However, we will be able to catch a glimpse of it.",
        },
        {
          question:
            "What precautions do we need  from the extreme temperatures during travel?",
          answer:
            "Travelers will  wear specially designed spacesuits that provide thermal insulation to protect them from the space’s  extreme temperature variations.",
        },
      ],
    },
    {
      name: "Neptune",
      tagLine: "Neptune is the farthest planet of the solar system. ",
      description: " ",
      image: "../planets/Neptune.png",
      faqs: [
        {
          question: "Will we go to the planet Neptune?",
          answer:
            "No, it is not  not exactly possible to go to Planet Neptune at present moment. However, we will be able to catch a glimpse of it.",
        },
      ],
    },
    {
      name: "Titan",
      tagLine:
        "Titan is Saturn's largest moon and second largest moon in whole Solar system",
      description: " ",
      image: "../planets/Saturn.png",
      faqs: [
        {
          question: "Which places are the stations for our travel?",
          answer:
            "The space station for our voyage to jewel are Moon, Mars and Europa",
        },
        {
          question: "Do we exactly land on Titan?",
          answer:
            "Yes, we will not only land at Titan but also explore some wonders of Titan such as Dune of Titan, Titan’s ice volcano, Methane lake of Titan ",
        },
        {
          question: "What do we eat  during our travels?",
          answer:
            "Space travelers will  eat specially prepared space food, including freeze-dried meals, rehydratable foods, and packaged snacks.",
        },
      ],
    },
    {
      name: "Europa",
      tagLine: "Europa is the closest planet to revolve around Jupiter.",
      image: "../planets/Europa.png",
      faqs: [
        {
          question: "Which places are the stations for our travel?",
          answer: "The space station for our voyage to jewel are Moon and Mars",
        },
        {
          question: "Do we exactly land on Europa?",
          answer:
            "Yes, we will not only land on Europa but also explore some wonders of the Europa planet.",
        },
        {
          question: "What do we eat  during our travels?",
          answer:
            "Space travelers will  eat specially prepared space food, including freeze-dried meals, rehydratable foods, and packaged snacks.",
        },
      ],
    },
  ];

  const activities = [
    {
      name: "HNepals Mons",
      description:
        "Olympus Mons is a very large shield volcano on the planet Mars. It is located in the Tharsis region. The volcano has a height of nearly 22 km (13.6 mi or 72,000 ft) as measured by the Mars Orbiter Laser Altimeter (MOLA). Olympus Mons is about two and a half times Mount Everest's height above sea level. It is the tallest mountain in the Solar System.",
      image: "../planets/mars.png",
      planet: "Mars",
    },
    {
      name: "Hiking neris",
      description:
        "Valles Marineris (Latin for Mariner Valleys, named after the Mariner 9 Mars orbiter of 1971–72 which discovered it) is a system of canyons that runs along the Martian surface east of the Tharsis region. At more than 4,000 km (2,500 mi) long, 200 km (120 mi) wide and up to 7 km (23,000 ft) deep, the Valles Marineris rift system is one of the largest canyons of the Solar System, surpassed in length only by the rift valleys of Earth.",
      image: "../planets/mars.png",
      planet: "Mercury",
    },
    {
      name: "Ram Sahrm",
      description:
        "Olympus Mons is a very large shield volcano on the planet Mars. It is located in the Tharsis region. The volcano has a height of nearly 22 km (13.6 mi or 72,000 ft) as measured by the Mars Orbiter Laser Altimeter (MOLA). Olympus Mons is about two and a half times Mount Everest's height above sea level. It is the tallest mountain in the Solar System.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Olympus_Mons_alt.jpg/1200px-Olympus_Mons_alt.jpg",
      planet: "Venus",
    },
    {
      name: "Sushil nhatata",
      description:
        "Olympus Mons is a very large shield volcano on the planet Mars. It is located in the Tharsis region. The volcano has a height of nearly 22 km (13.6 mi or 72,000 ft) as measured by the Mars Orbiter Laser Altimeter (MOLA). Olympus Mons is about two and a half times Mount Everest's height above sea level. It is the tallest mountain in the Solar System.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Olympus_Mons_alt.jpg/1200px-Olympus_Mons_alt.jpg",
      planet: "Mercury",
    },
  ];
  return (
    <AppContext.Provider value={{ planets, activities }}>
      {children}
    </AppContext.Provider>
  );
};
export { AppContext };
export default ContextProvider;
