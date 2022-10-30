

let initialstate = {
    PreferedHotels : [
        {
            id: 1,
            title: 'El Mouradi Gammarth',
            href: '#',
            category: { name: 'Tunisia-Gammarth', href: '#' },
            imageUrl:
              'https://images.trvl-media.com/hotels/2000000/1510000/1507700/1507626/54e3d373.jpg?impolicy=resizecrop&rw=1200&ra=fit',
            images : [
            'https://images.trvl-media.com/hotels/2000000/1510000/1507700/1507626/54e3d373.jpg?impolicy=resizecrop&rw=1200&ra=fit',
            "https://images.trvl-media.com/hotels/2000000/1510000/1507700/1507626/d1b12f5f.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            "https://images.trvl-media.com/hotels/2000000/1510000/1507700/1507626/3d8e9f54.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            "https://images.trvl-media.com/hotels/2000000/1510000/1507700/1507626/01cb1007.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            "https://images.trvl-media.com/hotels/2000000/1510000/1507700/1507626/4c134ad4.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            "https://images.trvl-media.com/hotels/2000000/1510000/1507700/1507626/b4f6c278.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            "https://images.trvl-media.com/hotels/2000000/1510000/1507700/1507626/44a1cbe5.jpg?impolicy=resizecrop&rw=1200&ra=fit"
            ],
            preview:
              'El Mouradi Gammarth offers a private beach where you can enjoy the shade from a beach umbrella or relax on a sunlounger. The outdoor pool and indoor pool provide fun for everyone, while guests in the mood for pampering can visit the spa to indulge in massages, body wraps and aromatherapy. Les Rosiers, one of 2 restaurants, serves breakfast, lunch and dinner. Other features of this luxurious hotel include a free kid\'s club, a poolside bar and a health club. The pool and breakfast get good marks from fellow travellers.', 
            stars : 5,
            notes:[
                {
                    name: "Alan Walker",
                    feedback : "Great central location I stayed at Hotel Arthur for a night, really enjoyed its location in the city centre where everything is within walking distance. The staff was very helpful, breakfast really delicious, and the room nice. I appreciated the luggage room option as well."
                },
                {
                    name: "Kamel Romdhani",
                    feedback : "Nice jazz-evening in Hotel Arthur's restaurant Room was just for my needs for this type of \"staycation. Suprisingly fun jazz evening with good tapas table and nice wines. Hotels location is perfect and breakfast really ok with warm dishes and good coffee. What else do you need?"
                },
                {
                    name: "Adem Saidi",
                    feedback : "The hotel room was clean, nice and spacious. Breakfast offered with a wide variety of food. The staff were friendly and helpful. The location is just perfect for a walk around the city centre."
                }
            ]
        },
        {
            id: 2,
            title: 'La Badira',
            href: '#',
            category: { name: 'Tunisia-Hammamet', href: '#' },
            imageUrl:
              'https://cf.bstatic.com/xdata/images/hotel/max1024x768/42192660.jpg?k=40f891f673734e72c33716c940f28911439d312bc3357c03e59dfee65a2d28e7&o=&hp=1',
            images:[
                'https://cf.bstatic.com/xdata/images/hotel/max1024x768/42192660.jpg?k=40f891f673734e72c33716c940f28911439d312bc3357c03e59dfee65a2d28e7&o=&hp=1',
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/75881056.jpg?k=5ae83fc38270b09384307c99fd41d7e497b79c73e54d7c2538f011d18c011d3d&o=&hp=1",
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/37141586.jpg?k=16a46f099c68e02205afb63eae59a5889198334099c5b85a1a63e030fe5596d7&o=&hp=1",
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/223956241.jpg?k=5db1570e99e84084774c30d55be284d67e20443fa6137984ee2d534c1b941da0&o=&hp=1",
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/42192678.jpg?k=b0a73450e5abd472534e0471457d1bffb1749da1d596ebee7771376eb9d8eaca&o=&hp=1",
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/223955877.jpg?k=5303c473558fb51994479f66ff026e4311f1f97bef246ec32b724aeb8ffd9d90&o=&hp=1"
            ],
             preview:
              'You\'re eligible for a Genius discount at La Badira - Adult Only! To save at this property, all you have to do is to reserve.Offering 3 outdoor pools and a private beach access, La Badira - Adult Only is located in Hammamet. Free WiFi access is available.Each room here will provide you with a TV, satellite channels, air conditioning and a terrace. They include a minibar and a safety deposit box. Private bathroom also comes with bathrobes. You can enjoy sea view and pool view from the room from the balcony.A buffet breakfast is served each morning at Zahilah restaurant. Guests can enjoy local cuisine at the Adra restaurant.',
            stars: 4,
            notes:[
                {
                    name: "Mohamed",
                    feedback : "One of the best hotels in Tunisia. Thanks for all the staff for the warm reception!"
                },
                {
                    name: "Mouez",
                    feedback : "The sea was amazing. The team was quite welcoming."
                },
                
            ]
        },
          {
            id: 3,
            title: 'Hasdrubal Prestige',
            href: '#',
            category: { name: 'Tunisia-Djerba', href: '#' },
            imageUrl:
              'https://cf.bstatic.com/xdata/images/hotel/max1024x768/239908167.jpg?k=c85e455dd96e75283994d69027c234f03dcec2bfa8ac928f9109ca253902cc30&o=&hp=1',
            images:[
                'https://cf.bstatic.com/xdata/images/hotel/max1024x768/42192660.jpg?k=40f891f673734e72c33716c940f28911439d312bc3357c03e59dfee65a2d28e7&o=&hp=1',
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/75881056.jpg?k=5ae83fc38270b09384307c99fd41d7e497b79c73e54d7c2538f011d18c011d3d&o=&hp=1",
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/37141586.jpg?k=16a46f099c68e02205afb63eae59a5889198334099c5b85a1a63e030fe5596d7&o=&hp=1",
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/223956241.jpg?k=5db1570e99e84084774c30d55be284d67e20443fa6137984ee2d534c1b941da0&o=&hp=1",
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/42192678.jpg?k=b0a73450e5abd472534e0471457d1bffb1749da1d596ebee7771376eb9d8eaca&o=&hp=1",
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/223955877.jpg?k=5303c473558fb51994479f66ff026e4311f1f97bef246ec32b724aeb8ffd9d90&o=&hp=1"
            ],
            preview:
              'You\'re eligible for a Genius discount at Hasdrubal Prestige Djerba! To save at this property, all you have to do is reserve. Situated on the Sidi Mahrez beach in Djerba, The Hasdrubal Prestige Thalassa & Spa Djerba offers luxurious 5-star accommodation, a spa and free Wi-Fi. Rooms at the Hasdrubal Prestige are air-conditioned and have flat-screen TV. They also include a bedroom and a lounge that opens out onto a terrace or balcony.',
            stars: 4,
            notes:[
                {
                    name: "Mohamed",
                    feedback : "One of the best hotels in Tunisia. Thanks for all the staff for the warm reception!"
                },
                {
                    name: "Mouez",
                    feedback : "The sea was amazing. The team was quite welcoming."
                },
                  
            ]
        },
    ],
    PreferedDestinations : [
        {
            id : 1,
            name : "Dubai",
            imageUrl : "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTnavcE0R1cW9vbZSJU9A_92W41dYEqmnQRVz51osw9lq-dYLXMRz2uqIIL1LrWzvQN",
            country : "United Arab Emirates",
            note : "Dubai is the most populous city in the United Arab Emirates (UAE) and the capital of the Emirate of Dubai.",
            rating : 5,
        },
        {
            id : 2,
            name : "Mallorca",
            imageUrl : "https://a.cdn-hotels.com/gdcs/production88/d1205/9bd85b85-3eb0-45b3-8f13-35ab0355dff0.jpg?impolicy=fcrop&w=800&h=533&q=medium",
            country : "Spain",
            note : "Mallorca (Majorca) is one of Spain's Balearic Islands in the Mediterranean. It's known for beach resorts, sheltered coves, limestone mountains and Roman and Moorish remains.",
            rating : 5,
        },
        {
            id : 3,
            name : "Cairo",
            imageUrl : "https://cdn.britannica.com/46/189746-050-C790AE3F/Skyline-Cairo.jpg",
            country : "Egypt",
            note : "Cairo, Egypt’s sprawling capital, is set on the Nile River. At its heart is Tahrir Square and the vast Egyptian Museum, a trove of antiquities including royal mummies and gilded King Tutankhamun artifacts.",
            rating : 5,
        },
        {
            id : 3,
            name : "Rhodes",
            imageUrl : "https://media.mitsishotels.com/uploads/2020/06/rhodes-lindos-shutterstock-381824248-wxga.jpg",
            country : "Greece",
            note : "Rhodes, the largest of Greece’s Dodecanese islands, is known for its beach resorts, ancient ruins and remnants of its occupation by the Knights of St. John during the Crusades.",
            rating : 5,
        },
        {
            id : 4,
            name : "Tulum",
            imageUrl : "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSoCeUlCrwYRTZB3UXaJ_OtIHaWiFpOP8HTPWE9OeCYvTOq22wuJyN4HftmAZMoqzr2",
            country : "Mexico",
            note : "Tulum is a town on the Caribbean coastline of Mexico’s Yucatán Peninsula. It’s known for its beaches and well-preserved ruins of an ancient Mayan port city.",
            rating : 5,
        },
        {
            id : 5,
            name : "Dubrovnik",
            imageUrl : "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTbQzH5gEg41XJhOYhrNdGe2csjzY2G1cgXeZN-VFUktcP76vHeE5SOX5t22lBiqTc5",
            country : "Croatia",
            note : "Dubrovnik is a city in southern Croatia fronting the Adriatic Sea. It's known for its distinctive Old Town, encircled with massive stone walls completed in the 16th century.",
            rating : 5,
        },
        {
            id : 6,
            name : "Ibiza",
            imageUrl : "https://onestep4ward.com/wp-content/uploads/2011/01/Destino-Ibiza-Pacha.jpg",
            country : "Spain",
            note : "Ibiza is one of the Balearic islands, an archipelago of Spain in the Mediterranean Sea. It's well known for the lively nightlife in Ibiza Town and Sant Antoni, where major European nightclubs have summer outposts.",
            rating : 5,
        },
        {
            id : 7,
            name : "Natal",
            imageUrl : "https://content.r9cdn.net/rimg/dimg/d0/e0/70c053fb-city-18483-177d8507914.jpg?width=1366&height=768&xhint=2185&yhint=1527&crop=true",
            country : "Brazil",
            note : "Natal is the capital city of the state of Rio Grande do Norte, on Brazil's northeastern tip. It's known for its extensive coastal sand dunes and star-shaped Forte dos Reis Magos, a 16th-century Portuguese fortress at the mouth of the Potengi River.",
            rating : 4.5,
        },
        {
            id : 8,
            name : "Arusha",
            imageUrl : "https://t3.ftcdn.net/jpg/04/94/96/90/360_F_494969068_hRXuOS2Ol1c2VVFjyXwEAb5GYBwEr2Rf.jpg",
            country : "Tanzania",
            note : "Arusha is a city in East Africa's Tanzania, located at the base of volcanic Mt. Meru. It's a gateway to safari destinations and to Africa's highest peak, 5,895m Mt. Kilimanjaro, lying some 100 kilometers northeast.",
            rating : 4,
        }
    ]
}

export const BookingReducer = (state = initialstate , action) =>{

    const {type , payload} = action;

    switch(type){


        default: return state;

    }
}