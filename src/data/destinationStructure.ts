interface Destination {
    id: Number,
    name: String,
    location: {
        continent: string,
        country: string,
        town: string,
    },
    image: string
}

export default Destination;