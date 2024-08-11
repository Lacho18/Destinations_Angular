import Destination from './destinationStructure';

const destinations: Destination[] = [
  {
    id: 1,
    name: 'The Egyptian pyramids',
    location: {
      continent: 'Africa',
      country: 'Egypt',
      town: 'Cairo',
    },
    image:
      'https://media.istockphoto.com/id/177047347/photo/the-pyramids-of-giza.jpg?s=612x612&w=0&k=20&c=sNOn3ruKWcJD1bqi4AVgU7yNt7nChIA30oLfUfsZ4Ro=',
    moreImages: [
      'https://www.travelandleisure.com/thmb/U6Ts4f8fanbARIPQO9pEGzd8icA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/giza-pyramid-EGYPTSECRETS1016-617b2b1b23dd4fd38bc9f365af7235ab.jpg',
      'https://cdn-v2.theculturetrip.com/1200x675/wp-content/uploads/2017/06/africa-main.webp',
      'https://afar.brightspotcdn.com/dims4/default/9bb38bd/2147483647/strip/true/crop/2000x1061+0+14/resize/1440x764!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2F0f%2F2c%2F6f2efc02b5ba681dadbfa694f856%2Foriginal-egypt.jpg',
      'https://images.adsttc.com/media/images/64a2/cdae/cb9c/464f/a63a/9764/large_jpg/cairo-architecture-city-guide-exploring-the-unique-architectural-blend-of-historical-and-contemporary-in-egypts-bustling-capital_23.jpg?1688391095',
    ],
    themeColors: ['#7851A9', '#722F37'],
  },
  {
    id: 2,
    name: 'The Rome Colosseum',
    location: {
      continent: 'Europe',
      country: 'Italy',
      town: 'Rome',
    },
    image: 'https://m.media-amazon.com/images/I/81rlnVwZAeL.jpg',
    moreImages: [
      'https://www.jigsawsuk.co.uk/wp-content/uploads/2021/07/coliseum-sunrise-3000-pcs-high-quality-collection_l8KQ83n.jpg',
      'https://whc.unesco.org/uploads/thumbs/activity_875-1200-630-20220330134802.jpg',
      'https://cdn.britannica.com/82/195482-050-2373E635/Amalfi-Italy.jpg',
      'https://res.cloudinary.com/dtljonz0f/image/upload/f_auto/q_auto/v1/gc-v1/rome-and-vatican-pass/blog/coliseum-facts2.jpg',
    ],
    themeColors: ['#f5d142', '#f57e42'],
  },
  {
    id: 3,
    name: 'The Belogradchik rocks',
    location: {
      continent: 'Europe',
      country: 'Bulgaria',
      town: 'Belogradchik',
    },
    image:
      'https://freesofiatour.com/wp-content/uploads/2021/02/belogradchick-rocks-e1612861031735.jpg',
    moreImages: [
      'https://hotelmap.bg/uploads/images/gallery/c3e97c9115e913a131cb9e260a130c1b2f952232.jpg',
      'https://static.toiimg.com/photo/msid-87137761,width-96,height-65.cms',
      'https://www.balkantrails.com/wp-content/uploads/2024/05/Bulgaria-Travel-Guide-the-most-memorable-landmarks-and-must-see-destinations_BalkanTrails_2-1024x536.jpg',
      'https://www.vagabond.bg/sites/default/files/2021-04/strange%20rocks%20belogradchik.jpg',
    ],
    themeColors: ['#b6f542', '#f59c42'],
  },
  {
    id: 4,
    name: 'Osaka',
    location: {
      continent: 'Asia',
      country: 'Japan',
      town: 'Osaka',
    },
    image:
      'https://www.nomadasaurus.com/wp-content/uploads/2019/09/Things-to-Do-in-Osaka-Japan.jpg',
    moreImages: [
      'https://res.klook.com/image/upload/q_85/c_fill,w_650,h_345/v1674030135/blog/bnbtltnp5nqbdevfcbmn.jpg',
      'https://media.gadventures.com/media-server/cache/76/f5/76f5ac4e423593e9d9c2a06a22c166fb.jpg',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/97/39/7f/caption.jpg?w=1200&h=-1&s=1&cx=1920&cy=1080&chk=v1_f31158e4bb953d28a308',
      'https://www.agoda.com/wp-content/uploads/2018/10/City-guides_things-to-do-in-Osaka_Japan_Osaka-Castle_cherry-blossoms_sakura.jpg',
    ],
    themeColors: ['#f542ec', '#f54275'],
  },
];

export default destinations;
