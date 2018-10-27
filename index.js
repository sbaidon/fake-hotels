/*
// hotel
{
    "id": "61c9665f-3c08-45ec-88d3-5029af3269c8", // uuid v4
    "name" "Developer-friendly hotel", // string
    "description": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.", // string
    "distance_to_venue": 800, // integer (in meters)
    "rating": 4.6, // float (0 - 5)
    "price_category": "medium", // string ['low', 'medium', 'high']
    // array of strings ['free_parking','free_wifi','pets','restaurant','gym','pool','spa']
    "amenities": ["free_parking", "free_wifi"],
    // array of strings (first url is considered to be the "main" image showing the hotel)
    "images": [
        "http://via.placeholder.com/140x100",
        "http://via.placeholder.com/100x140",
        "http://via.placeholder.com/140x140"
    ]
}

// room of a hotel
{
    "id": "bf2b9853-7cec-47bf-ba3d-3ba765061db7", // uuid v4
    "name": "Deluxe suite", // string
    "description": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.", // string
    "max_occupancy": 4, // integer (maximum amount of persons in this room)
    "price_in_usd": 78.90 // float (per night)
}
*/
const faker = require('faker');

function generateHotels(n) {
    return Array.from({ length: n }, () => {
        return {
            id: faker.random.uuid(),
            name: faker.name.findName(),
            description: faker.lorem.paragraph(10),
            distance_to_venue: faker.random.number(500000),
            price_category: faker.random.arrayElement(['low', 'medium', 'high']),
            rating: Number.parseFloat(faker.finance.amount(0, 5, 1)),
            amenities: [
              faker.random.arrayElement(['free_parking', 'free_wifi', 'pets']), 
              faker.random.arrayElement(['restaurant', 'gym', 'pool', 'spa']), 
            ],
            images: [
              faker.random.arrayElement(['/one.jpg', '/two.jpg', '/three.jpg', '/four.jpg', '/five.jpg', '/six.jpg']), 
            ],
            rooms: generateRooms(faker.random.number({ min: 2, max: 6 })),
        }
    })
}

function generateRooms(n) {
    return Array.from({ length: n }, () => {
        return {
            id: faker.random.uuid(),
            name: faker.name.findName(),
            description: faker.lorem.paragraph(10),
            max_occupancy: faker.random.number({ min: 1, max: 20 }),
            price_in_usd: Number.parseFloat(faker.finance.amount()),
        }
    })
}

module.exports = () => {
    return {
      hotels: generateHotels(6)
    }
}

