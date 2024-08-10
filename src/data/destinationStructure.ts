interface Destination {
    id: Number,
    name: String,
    location: {
        continent: string,
        country: string,
        town: string,
    },
    image: string,
    themeColors?: [string, string]
}

export default Destination;