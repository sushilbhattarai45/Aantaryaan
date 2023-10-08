import React from "react";

const AppContext = React.createContext({});
const ContextProvider = ({ children }) => {
  const flipImg = [
    {
      name: "Mercury",
      image: [
        "../Comic/mercury/1.png",
        "../Comic/mercury/2.png",
        "../Comic/mercury/3.png",
        "../Comic/mercury/4.png",
        "../Comic/mercury/5.png",
        "../Comic/mercury/6.png",
        "../Comic/mercury/7.png",
        "../Comic/mercury/8.png",
        "../Comic/mercury/9.png",
        "../Comic/mercury/10.png",
        "../Comic/mercury/11.png",
        "../Comic/mercury/12.png",
      ],
      page: 12,
    },
    {
      name: "Venus",
      image: [
        "../Comic/venus/1.png",
        "../Comic/venus/2.png",
        "../Comic/venus/3.png",
        "../Comic/venus/4.png",
        "../Comic/venus/5.png",
        "../Comic/venus/6.png",
        "../Comic/venus/7.png",
        "../Comic/venus/8.png",
        "../Comic/venus/9.png",
      ],
      page: 9,
    },
    {
      name: "Mars",
      image: [
        "../Comic/mars/1.png",
        "../Comic/mars/2.png",
        "../Comic/mars/3.png",
        "../Comic/mars/4.png",
        "../Comic/mars/5.png",
        "../Comic/mars/6.png",
        "../Comic/mars/7.png",
        "../Comic/mars/8.png",
        "../Comic/mars/9.png",
      ],
      page: 9,
    },

    {
      name: "Jupiter",
      image: [
        "../Comic/jupiter/1.png",
        "../Comic/jupiter/2.png",
        "../Comic/jupiter/3.png",
        "../Comic/jupiter/4.png",
        "../Comic/jupiter/5.png",
        "../Comic/jupiter/6.png",
        "../Comic/jupiter/7.png",
        "../Comic/jupiter/8.png",
        "../Comic/jupiter/9.png",
        "../Comic/jupiter/10.png",
        "../Comic/jupiter/11.png",
        "../Comic/jupiter/12.png",
        "../Comic/jupiter/13.png",
        "../Comic/jupiter/14.png",
        "../Comic/jupiter/15.png",
      ],
      page: 15,
    },
    {
      name: "Europia",
      image: [
        "../Comic/europia/1.png",
        "../Comic/europia/2.png",
        "../Comic/europia/3.png",
        "../Comic/europia/4.png",
        "../Comic/europia/5.png",
        "../Comic/europia/6.png",
        "../Comic/europia/7.png",
        "../Comic/europia/8.png",
        "../Comic/europia/9.png",
        "../Comic/europia/10.png",
        "../Comic/europia/11.png",
      ],
      page: 11,
    },
    {
      name: "Titan",
      image: [
        "../Comic/titan/1.png",
        "../Comic/titan/2.png",
        "../Comic/titan/3.png",
        "../Comic/titan/4.png",
        "../Comic/titan/5.png",
        "../Comic/titan/6.png",
        "../Comic/titan/7.png",
        "../Comic/titan/8.png",
        "../Comic/titan/9.png",
        "../Comic/titan/10.png",
        "../Comic/titan/11.png",
        "../Comic/titan/12.png",
        "../Comic/titan/13.png",
        "../Comic/titan/14.png",
        "../Comic/titan/15.png",
      ],
      page: 15,
    },
    {
      name: "Saturn",
      image: [
        "../Comic/saturn/1.png",
        "../Comic/saturn/2.png",
        "../Comic/saturn/3.png",
        "../Comic/saturn/4.png",
        "../Comic/saturn/5.png",
        "../Comic/saturn/6.png",
        "../Comic/saturn/7.png",
      ],
      page: 7,
    },
    {
      name: "Neptune",
      image: [
        "../Comic/neptune/1.png",
        "../Comic/neptune/2.png",
        "../Comic/neptune/3.png",
        "../Comic/neptune/4.png",
        "../Comic/neptune/5.png",
        "../Comic/neptune/6.png",
        "../Comic/neptune/7.png",
        "../Comic/neptune/8.png",
        "../Comic/neptune/9.png",
        "../Comic/neptune/10.png",
        "../Comic/neptune/11.png",
      ],
      page: 11,
    },
    {
      name: "Uranus",
      image: [
        "../Comic/uranus/1.png",
        "../Comic/uranus/2.png",
        "../Comic/uranus/3.png",
        "../Comic/uranus/4.png",
        "../Comic/uranus/5.png",
        "../Comic/uranus/6.png",
        "../Comic/uranus/7.png",
        "../Comic/uranus/8.png",
        "../Comic/uranus/9.png",
        "../Comic/uranus/10.png",
        "../Comic/uranus/11.png",
        "../Comic/uranus/12.png",
        "../Comic/uranus/13.png",
      ],
      page: 13,
    },
  ];

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
      name: "Red Spot Viewing",
      description:
        "Space tourists can view the mystical red spot of Jupiter. The space tourists who are interested in adventure will love to see this red sport area. The great red spot  is a giant hurricane on Jupiter that has been going for hundreds of years. The red spot is so gigantic that it can fit 3 earths within the spot. ",
      image: "./activities/Jupiter/redspot.png",
      planet: "Jupiter",
    },

    {
      name: "Ring Exploration",
      description:
        "Space explorers  could venture out onto Saturn's magnificent ring system using advanced spacecraft and suits. They could navigate through the icy particles, collect samples, and marvel at the breathtaking views of the rings. ",
      image: "./activities/Saturn/Saturnrings.png",
      planet: "Saturn",
    },
    {
      name: "Astronomical Observations",
      description:
        "Space explorers  could venture out onto Saturn's magnificent ring system using advanced spacecraft and suits. They could navigate through the icy particles, collect samples, and marvel at the breathtaking views of the rings. ",
      image: "./Saturn/Saturnrings.png",
      planet: "Saturn",
    },
    {
      name: "Eco-tourism to Titan",
      description:
        "Space explorers  could venture out onto Saturn's magnificent ring system using advanced spacecraft and suits. They could navigate through the icy particles, collect samples, and marvel at the breathtaking views of the rings. ",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Olympus_Mons_alt.jpg/1200px-Olympus_Mons_alt.jpg",
      planet: "Saturn",
    },
    {
      name: "Great dune fields",
      description:
        "The great dune fields are 30 storeys tall and can be hundreds of miles in length. The great dune of titan puts the great dune of Africa to shame due to its size. Titan’s great dune aren’t made up of regular sand. The grains are hydrocarbon polymers like tiny chips of plastics rather than rock. ",
      image: "./activities/titan/greatdune.png",
      planet: "Titan",
    },

    {
      name: "Mount Olympus",
      description:
        " Olympus Mons is the tallest volcano in the solar system. It stands as a colossal geological feature on the Martian surface, reaching a height of approximately 72,000 feet (21.9 kilometres), which is nearly three times the height of Mount Everest, Earth's tallest mountain. This massive shield volcano is an intriguing landmark on Mars, and its vast size is a testament to the planet's unique geological history",
      image: "./activities/mars/Mountolympus.png",
      planet: "Moon",
    },
  ];
  return (
    <AppContext.Provider value={{ planets, activities, flipImg }}>
      {children}
    </AppContext.Provider>
  );
};
export { AppContext };
export default ContextProvider;
