import cb from '../../Image/coxsbazar.png'
import sj from '../../Image/Sajek.png'
import sb from '../../Image/sundorbon.png'
import sm from '../../Image/Sreemongol.png'

import cbh1 from '../../Image/royaltulip.jpg'
import cbh2 from '../../Image/saymon.jpeg'
import cbh3 from '../../Image/coxtoday.jpg'

import smh1 from '../../Image/Balishira.jpg'
import smh2 from '../../Image/Inn.jpg'
import smh3 from '../../Image/Jungle.jpg'

import sjh1 from '../../Image/rungrang.jpg'
import sjh2 from '../../Image/laxman.jpg'
import sjh3 from '../../Image/meghpunji.jpg'

import sbh1 from '../../Image/sundarban1.jpg'
import sbh2 from '../../Image/sundarban2.jpg'
import sbh3 from '../../Image/sundarban3.jpg'


const destinationData =
    [
        {
            key: 'CB',
            name: "COX'S BAZAR",
            description: "Cox's Bazar (Bengali: কক্সবাজার, pronounced [kɔksbadʒaɾ]) is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it is infamous for the largest refugee camp in the world. It is located 150 km (93 mi) south of the divisional headquarter city of Chittagong",
            details: "Cox's Bazar (Bengali: কক্সবাজার, pronounced [kɔksbadʒaɾ]) is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it is infamous for the largest refugee camp in the world. It is located 150 km (93 mi) south of the divisional headquarter city of Chittagong",
            image: cb,
            hotels: [
                {
                    id:"CBH1",
                    name: "Hotel Sea Crown",
                    place: "Jaliapalong, Inani, Ukhia, Cox's Bazar, 4750 Cox's Bazar, Bangladesh",
                    details:"Hotel Sea Crown",
                    image: cbh1,
                    rating: 4.6,
                    ratingUser:90,
                    price:80,
                    
                },
                {
                    id:"CBH2",
                    name: "Sayeman Beach Resort",
                    place: "Marine Drive, Road, Cox's Bazar 4700",
                    details:"Sayeman Beach Resort",
                    image: cbh2,
                    rating: 4.9,
                    ratingUser:87,
                    price:120,
                },
                {
                    id:"CBH3",
                    name: "Hotel The Cox Today",
                    place: "Plot-7, Road-02 Hotel Motel Zone, Kolatoly Road Cox's Bazar, Bangladesh",
                    details:"Hotel The Cox Today",
                    image: cbh3,
                    rating: 4.7,
                    ratingUser:78,
                    price:95,
                }
            ],
        },
        {
            key: 'SB',
            name: "Sundarbans",
            description: "The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh.",
            details: "The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh. It comprises closed and open mangrove forests, agriculturally used land, mudflats and barren land, and is intersected by multiple tidal streams and channels.",
            image: sb,
            hotels: [
                {
                    id:"SBH1",
                    name: "Hotel Royal Int",
                    place: "Khulna, Bangladesh",
                    details:"",
                    image: sbh1,
                    rating: 4.9,
                    ratingUser:15,
                    price:20,
                    
                },
                {
                    id:"SBH2",
                    name: "Hotel City In",
                    place: "Khulna, Bangladesh",
                    details:"",
                    image: sbh2,
                    rating: 4.7,
                    ratingUser:27,
                    price:25,
                },
                {
                    id:"SBH3",
                    name: "Hotel Sundarban",
                    place: "Sundarban, Bangladesh",
                    details:"",
                    image: sbh3,
                    rating: 4.1,
                    ratingUser:38,
                    price:45,
                }
            ],
        },
        {
            key: 'SJ',
            name: "SAJEK",
            description: "The name of Sajek Valley came from the Sajek River that originates from Karnafuli river. The Sajek river works as a border between Bangladesh and India.",
            details: "The name of Sajek Valley came from the Sajek River that originates from Karnafuli river. The Sajek river works as a border between Bangladesh and India. Sajek is a union located in the north of Chittagong Hill Tracts. It's under Baghaichori Upazila in Rangamati hill district, it is situated 67 kilometres (42 mi) north-east from Khagrachhari town and 95 kilometres (59 mi) north from Rangamati city. The border of Bangladesh and Mizoram of India is 8 kilometres (5.0 mi) east from Sajek.",
            image: sj,
            hotels: [
                {
                    id:"SJH1",
                    name: "Resort RungRang",
                    place: "Sajek Valley, Bangladesh",
                    details:"",
                    image: sjh1,
                    rating: 4.5,
                    ratingUser:180,
                    price:62,
                    
                },
                {
                    id:"SJH2",
                    name: "Laxman Cottage",
                    place: "Sajek Valley, Bangladesh",
                    details:"",
                    image: sjh2,
                    rating: 4.2,
                    ratingUser:167,
                    price:57,
                },
                {
                    id:"SJH3",
                    name: "Megh Punji",
                    place: "Sajek Valley, Bangladesh",
                    details:"",
                    image: sjh3,
                    rating: 4.8,
                    ratingUser:188,
                    price:67,
                }
            ],
        },
        {
            key: 'SM',
            name: "SREEMANGAL",
            description: "It is said the name Sreemangal (or Srimangal) is named after Sri Das and Mangal Das; two brothers who settled on the banks of the Hail Haor.[2] A copper plate of Raja Marundanath from the 11th century was found in Kalapur. During an excavation at Lamua, an ancient statue of Ananta Narayan was dug out. In 1454, the Nirmai Shiva Bari was built and still stands today.",
            details: "It is said the name Sreemangal (or Srimangal) is named after Sri Das and Mangal Das; two brothers who settled on the banks of the Hail Haor.[2] A copper plate of Raja Marundanath from the 11th century was found in Kalapur. During an excavation at Lamua, an ancient statue of Ananta Narayan was dug out. In 1454, the Nirmai Shiva Bari was built and still stands today. Srimangal thana was established in 1912. The central town later became a pourashava in 1935. In 1963, two peasants were killed by police officers which kicked off the Balishira peasant riots. During the Bangladesh Liberation War of 1971, the Pakistani army reached Srimangal on 30 April setting houses on fire and committing atrocities against women. The East Pakistan Rifles camp and Wapda office premises were among the two mass killing sites. Two mass graves remain in Bharaura with a memorial in North Bharaura.",
            image: sm,
            hotels: [
                {
                    id:"SMH1",
                    name: "Balishira Resort Ltd.",
                    place: "Sreemangal, Bangladesh",
                    details:"",
                    image: smh1,
                    rating: 3.9,
                    ratingUser:38,
                    price:35,
                    
                },
                {
                    id:"SMH2",
                    name: "Sreemangal Inn Hotel & Restauran",
                    place: "Sreemangal, Bangladesh",
                    details:"",
                    image: smh2,
                    rating: 4.2,
                    ratingUser:52,
                    price:20,
                },
                {
                    id:"SMH3",
                    name: "Jungle cottage",
                    place: "Sreemangal, Bangladesh",
                    details:"",
                    image: smh3,
                    rating: 4.5,
                    ratingUser:48,
                    price:55,
                }
            ],
        }
    ]

export default destinationData;