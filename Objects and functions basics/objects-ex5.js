// You have an array of objects that represents some restaurants across Europe, e.g.
const arr = [
  {
    id: 1,
    name: "Romania",
    city: [
      {
        id: 10,
        name: "Cluj",
        restaurants: [
          {
            id: 100,
            name: "Restaurant 1",
            rooms: [
              {
                id: 1000,
                name: "Room 1",
                numberOfTables: 32,
              },
              {
                id: 1001,
                name: "Room 2",
                numberOfTables: 10,
              },
              {
                id: 1002,
                name: "Room 3",
                numberOfTables: 5,
              },
            ],
          },
          {
            id: 101,
            name: "Restaurant 2",
            rooms: [
              {
                id: 1004,
                name: "Room 1",
                numberOfTables: 50,
              },
              {
                id: 1005,
                name: "Room 2",
                numberOfTables: 40,
              },
            ],
          },
        ],
      },
      {
        id: 11,
        name: "Timisoara",
        restaurants: [
          {
            id: 200,
            name: "Restaurant 1",
            rooms: [
              {
                id: 2000,
                name: "Room 1",
                numberOfTables: 22,
              },
              {
                id: 2001,
                name: "Room 2",
                numberOfTables: 33,
              },
              {
                id: 2002,
                name: "Room 3",
                numberOfTables: 44,
              },
            ],
          },
          {
            id: 201,
            name: "Restaurant 2",
            rooms: [
              {
                id: 2004,
                name: "Room 1",
                numberOfTables: 55,
              },
              {
                id: 2005,
                name: "Room 2",
                numberOfTables: 44,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Great Britain",
    city: [
      {
        id: 30,
        name: "London",
        restaurants: [
          {
            id: 300,
            name: "Restaurant 1",
            rooms: [
              {
                id: 3000,
                name: "Room 1",
                numberOfTables: 500,
              },
            ],
          },
          {
            id: 301,
            name: "Restaurant 2",
            rooms: [
              {
                id: 3004,
                name: "Room 1",
                numberOfTables: 66,
              },
              {
                id: 3005,
                name: "Room 2",
                numberOfTables: 40,
              },
            ],
          },
        ],
      },
      {
        id: 31,
        name: "Dublin",
        restaurants: [
          {
            id: 400,
            name: "Restaurant 1",
            rooms: [
              {
                id: 4000,
                name: "Room 1",
                numberOfTables: 420,
              },
              {
                id: 4001,
                name: "Room 2",
                numberOfTables: 330,
              },
              {
                id: 4002,
                name: "Room 3",
                numberOfTables: 440,
              },
            ],
          },
          {
            id: 401,
            name: "Restaurant 2",
            rooms: [
              {
                id: 4004,
                name: "Room 1",
                numberOfTables: 550,
              },
              {
                id: 4005,
                name: "Room 2",
                numberOfTables: 440,
              },
            ],
          },
        ],
      },
    ],
  },
];

// Create a function that console logs the number of tables of all cities for each country, in the following format:

// Country Romania --- City Cluj --- w number of tables
// Country Romania --- City Timisoara --- x number of tables
// Country Great Britain --- City London --- y number of tables
// Country Great Britain --- City Dublin --- z number of tables

function numberOfTables(arr) {
  let countryName = "";
  let cityName = "";
  for (let country of arr) {
    countryName = country.name;
    for (let city of country.city) {
      cityName = city.name;
      let sum = 0;
      for (let restaurants of city.restaurants) {
        for (let rooms of restaurants.rooms) {
          sum += rooms.numberOfTables;
        }
      }
      console.log(
        `Country ${countryName}---City ${cityName}---${sum} number of tables`
      );
    }
  }
}

numberOfTables(arr);
