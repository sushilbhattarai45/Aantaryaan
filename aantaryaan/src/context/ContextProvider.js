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
      name: "Earth",
      tagLine:
        "Earth is the third planet from the Sun and the only astronomical object known to harbor life.",
      description:
        "Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29% of Earth's surface is land consisting of continents and islands. The remaining 71% is covered with water, mostly by oceans but also by lakes, rivers and other fresh water, which together constitute the hydrosphere.",
      image: "../planets/earth.png",
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
      name: "Earth",
      tagLine:
        "Earth is the third planet from the Sun and the only astronomical object known to harbor life.",
      description:
        "Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29% of Earth's surface is land consisting of continents and islands. The remaining 71% is covered with water, mostly by oceans but also by lakes, rivers and other fresh water, which together constitute the hydrosphere.",
      image: "../planets/earth.png",
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
  ];
  const activities = [
    {
      name: "Hiking at Olympus Mons",
      description:
        "Olympus Mons is a very large shield volcano on the planet Mars. It is located in the Tharsis region. The volcano has a height of nearly 22 km (13.6 mi or 72,000 ft) as measured by the Mars Orbiter Laser Altimeter (MOLA). Olympus Mons is about two and a half times Mount Everest's height above sea level. It is the tallest mountain in the Solar System.",
      image: "../planets/mars.png",
      planet: "Mars",
    },
    {
      name: "Hiking at Valles Marineris",
      description:
        "Valles Marineris (Latin for Mariner Valleys, named after the Mariner 9 Mars orbiter of 1971–72 which discovered it) is a system of canyons that runs along the Martian surface east of the Tharsis region. At more than 4,000 km (2,500 mi) long, 200 km (120 mi) wide and up to 7 km (23,000 ft) deep, the Valles Marineris rift system is one of the largest canyons of the Solar System, surpassed in length only by the rift valleys of Earth.",
      image: "../planets/mars.png",
      planet: "Mars",
    },
    {
      name: "Hiking at Olympus Mons",
      description:
        "Olympus Mons is a very large shield volcano on the planet Mars. It is located in the Tharsis region. The volcano has a height of nearly 22 km (13.6 mi or 72,000 ft) as measured by the Mars Orbiter Laser Altimeter (MOLA). Olympus Mons is about two and a half times Mount Everest's height above sea level. It is the tallest mountain in the Solar System.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Olympus_Mons_alt.jpg/1200px-Olympus_Mons_alt.jpg",
      planet: "Mars",
    },
    {
      name: "Hiking at Olympus Mons",
      description:
        "Olympus Mons is a very large shield volcano on the planet Mars. It is located in the Tharsis region. The volcano has a height of nearly 22 km (13.6 mi or 72,000 ft) as measured by the Mars Orbiter Laser Altimeter (MOLA). Olympus Mons is about two and a half times Mount Everest's height above sea level. It is the tallest mountain in the Solar System.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Olympus_Mons_alt.jpg/1200px-Olympus_Mons_alt.jpg",
      planet: "Mars",
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
