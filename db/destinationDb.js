const destinations = [
    {   
        id:1,
        countryName:"Canada",
        citiesName:['Ottawa', 'Montreal', 'Quebec'],
        attentionCard:"../img/tm-img-07.jpg",
        price: 1999 ,
        description:"Visit Canada's capital, move on to Montreal, and lastly Quebec",
        detailedDescription: "Day 1 Arrive Toronto (2 Nights) Canada's multi-cultural metropolis of Toronto launches your journey across Eastern Canada. Relax after your journey, then meet your Travel Director and fellow travellers for a Welcome Reception this evening.Day 2 Niagara Falls Sightseeing. Day 3 Toronto – Kingston Day 6 Quebec City Sightseeing. Day 8 Montreal Sightseeing.",
        img:"img/tm-img-07.jpg",
        days: 14,
        show:true,
        availableDates: ['15 May','15 Jul','15 Aug','15 Sep', '15 Nov', '15 Dec'],
        continent:1,
    },
    {
        id:2,
        countryName:"America",
        citiesName:["New York", "Las Vegas","Orlando", "San Francisco"],
        attentionCard:"../img/tm-img-06.jpg",
        price: 2600 ,
        description:"Visit Canada's capital, move on to Montreal, and lastly Quebec",
        detailedDescription: "Day 1 arrive New York City, take a bite of the Big Apple and you'll wish you'd had more, as the vision and passion of this vibrant city inspires you to believe your dreams really will come true. Day 2 and 3, New York and Washington. Celebrate the proud heritage of a nation as you view the memorials and monuments that have made Washington famous. Journey into the rural back roads of Pennsylvania's Lancaster County with a Local Specialist today, immersing yourself in the traditional agricultural lifestyle of the Amish and the Mennonites, who live much the same they did when they first settled here over 200 years ago. ",
        img:"img/tm-img-06.jpg",
        days: 12,
        show:true,
        availableDates: ['15 May','15 Jul','15 Aug','15 Sep', '15 Oct', '15 Nov'],
        continent:1,
    },
    {
        id:3,
        countryName:"Mexico",
        citiesName:["Kingston", "Morant Bay", "Ocho Rios"],
        attentionCard:"../img/tm-img-05.jpg",
        price: 2090 ,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, laudantium.",
        detailedDescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique suscipit iste dolor reiciendis. Placeat, voluptas repellendus. Neque modi perspiciatis aperiam ex ab repellat autem. Porro amet nemo ipsum consequuntur dolores!',
        img:"img/tm-img-05.jpg",
        days:10,
        show:true,
        availableDates: ['13 Feb','5 Mar','19 Aug', '7 Sep', '15 Nov'],
        continent:1,
    },
    {
        id:4,
        countryName:"Cuba & Costa Rica",
        citiesName:["Havana", "Cayo Santa Maria", "Capitolio", "Pura Vida", "Cuba Libre"],
        attentionCard:"../img/tm-img-04.jpg",
        price: 2090 ,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, laudantium.",
        detailedDescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique suscipit iste dolor reiciendis. Placeat, voluptas repellendus. Neque modi perspiciatis aperiam ex ab repellat autem. Porro amet nemo ipsum consequuntur dolores!',
        img:"img/tm-img-04.jpg",
        days:11,
        show:true,
        availableDates: ['13 Feb','5 Mar','19 Aug', '7 Sep', '15 Nov'],
        continent:1,
    },
    {
        id:5,
        countryName:"Puerto Rico",
        citiesName:["Casa Bacardi", "San Juan", "Adjuntas"],
        attentionCard:"../img/tm-img-03.jpg",
        price: 1990 ,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, laudantium.",
        detailedDescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique suscipit iste dolor reiciendis. Placeat, voluptas repellendus. Neque modi perspiciatis aperiam ex ab repellat autem. Porro amet nemo ipsum consequuntur dolores!',
        img:"img/tm-img-03.jpg",
        days:11,
        show:true,
        availableDates: ['11 Feb','15 Apr','20 Sep', '7 Oct', '1 Dec'],
        continent:1,
    },
    {
        id:6,
        countryName:"Brazil, Argentina & Chile",
        citiesName:["Rio de Janeiro", "Buenos Aires","Andes","Santiago"],
        attentionCard:"../img/tm-img-07.jpg",
        price: 2600 ,
        description:"Fly to Rio de Janeiro for a 3 night stay. Spend 3 nights in gloriously elegant Buenos Aires. Spend 3 nights in Andes. Spend 3 more nights in Santiago, before flying home.",
        detailedDescription:"See both the Brazilian and Argentine sides of majestic, magnificent Iguazu Falls. See the Christ the Redeemer statue atop Corcovado. End a tour of Rio with a visit to Sugar Loaf Mountain. Explore the Argentine capital. Fly to famous wine-producing Mendoza and visit two wineries. An unforgettable day crossing the Andes to the Chilean capital, Santiago. Experience Santiago as the locals do on a fascinating tour. Spend a day beside the Pacific Ocean, discovering UNESCO-listed Valparaiso and garden-city Vina del Mar. 12 nights' bed and breakfast hotel accommodation, plus two nights on the aircraft. All internal flights and transportation included. Return flight to Singapore. Fully experienced tour managers",
        img:"img/tm-img-07.jpg",
        days: 14,
        show:true,
        availableDates: ['9 Mar','18 May', '21 Sep'],
        continent:2,
    },
    {
        id:7,
        countryName:"Colombia",
        citiesName:["Bogota", "Zipaquira", "Pereira", "Salento", "Cocora Valley", "Filandia", "Medellin", "Guatape", "Peñol", "Cartagena"],
        attentionCard:"../img/tm-img-04.jpg",
        price: 1990 ,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, laudantium.",
        detailedDescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique suscipit iste dolor reiciendis. Placeat, voluptas repellendus. Neque modi perspiciatis aperiam ex ab repellat autem. Porro amet nemo ipsum consequuntur dolores!',
        img:"img/tm-img-04.jpg",
        days:9,
        show:true,
        availableDates: ['3 Feb','5 May','19 Jul', '7 Aug', '15 Dec'],
        continent:2,
    },
    {
        id:8,
        countryName:"Ecuador & Galapagos",
        citiesName:["Quito", "Mindo","Santa Cruz Island"," San Cristóbal Island","Otavalo"],
        attentionCard:"../img/tm-img-02.jpg",
        price: 2600 ,
        description:"Spend 3 nights in Quito. 1 nights in Mindo. Fly to the Galapagos, and spend 3 nights in Santa Cruz. 2 nights in San Cristóbal. Lastly, back to Quito for a night before flying home to Singapore.",
        detailedDescription:"12 nights in 3 and 4-star hotels plus 2 nights in flight. 29 meals:  12 breakfasts, 11 lunches, 6 dinners. Specialist Local Guide. All internal transportation and flights. Return flights to Singapore.",
        img:"img/tm-img-02.jpg",
        days: 14,
        show:true,
        availableDates: ['23 Aug','13 Sep','18 Oct','15 Nov'],
        continent:2,
    },
    {
        id:9,
        countryName:"Bolivia",
        citiesName:["Santa Cruz de la Sierra", "Sucre", "Potosi", "Uyuni", "La Paz"],
        attentionCard:"../img/tm-img-01.jpg",
        price: 4700 ,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae maxime molestias veniam rem, quaerat dolor nobis odio. Debitis, tenetur id molestias, illum officia esse quaerat.",
        detailedDescription:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus quod quas eveniet eligendi unde enim odit ullam debitis fugiat numquam voluptas praesentium molestiae, vel aut ducimus voluptate! Officia maxime soluta perspiciatis vel voluptatibus tenetur. Ut nemo modi vel voluptatum quos sapiente deserunt, officia laudantium earum!",
        img:"img/tm-img-01.jpg",
        days: 14,
        show:true,
        availableDates: ['23 Aug','13 Sep','18 Oct','15 Nov'],
        continent:2,
    },
    {
        id:10,
        countryName:"Guyana",
        citiesName:["Potaro River", "Georgetown", "Iwokrama"],
        attentionCard:"../img/tm-img-05.jpg",
        price: 3300 ,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae maxime molestias veniam rem, quaerat dolor nobis odio. Debitis, tenetur id molestias, illum officia esse quaerat.",
        detailedDescription:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus quod quas eveniet eligendi unde enim odit ullam debitis fugiat numquam voluptas praesentium molestiae, vel aut ducimus voluptate! Officia maxime soluta perspiciatis vel voluptatibus tenetur. Ut nemo modi vel voluptatum quos sapiente deserunt, officia laudantium earum!",
        img:"img/tm-img-05.jpg",
        days: 8,
        show:true,
        availableDates: ['23 Aug','13 Sep','18 Oct','15 Nov'],
        continent:2,
    },
    {
        id:11,
        countryName:"Netherlands & Belgium",
        citiesName:["Amsterdam", "Rotterdam", "Brussels", "Brugge"],
        attentionCard:"../img/tm-img-01.jpg",
        price: 2840 ,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae maxime molestias veniam rem, quaerat dolor nobis odio. Debitis, tenetur id molestias, illum officia esse quaerat.",
        detailedDescription:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus quod quas eveniet eligendi unde enim odit ullam debitis fugiat numquam voluptas praesentium molestiae, vel aut ducimus voluptate! Officia maxime soluta perspiciatis vel voluptatibus tenetur. Ut nemo modi vel voluptatum quos sapiente deserunt, officia laudantium earum!",
        img:"img/tm-img-01.jpg",
        days: 8,
        show:true,
        availableDates: ['23 Aug','13 Sep','18 Oct','15 Nov'],
        continent:3,
    },
    {
        id:12,
        countryName:"Czechia, Poland & Slovakia",
        citiesName:["Prague","Brno", "Warsaw", "Lodz", "Bratislava","Kosice"],
        attentionCard:"../img/tm-img-02.jpg",
        price: 2450 ,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae maxime molestias veniam rem, quaerat dolor nobis odio. Debitis, tenetur id molestias, illum officia esse quaerat.",
        detailedDescription:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus quod quas eveniet eligendi unde enim odit ullam debitis fugiat numquam voluptas praesentium molestiae, vel aut ducimus voluptate! Officia maxime soluta perspiciatis vel voluptatibus tenetur. Ut nemo modi vel voluptatum quos sapiente deserunt, officia laudantium earum!",
        img:"img/tm-img-02.jpg",
        days: 10,
        show:true,
        availableDates: ['23 Aug','13 Sep','18 Oct','15 Nov'],
        continent:3,
    },
    {
        id:13,
        countryName:"Scotland, Ireland, England & France",
        citiesName:["Edinburgh", "Glasgow", "Dublin", "Belfast", "London","Paris", "Montpellier"],
        attentionCard:"../img/tm-img-03.jpg",
        price: 3900 ,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae maxime molestias veniam rem, quaerat dolor nobis odio. Debitis, tenetur id molestias, illum officia esse quaerat.",
        detailedDescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique suscipit iste dolor reiciendis. Placeat, voluptas repellendus. Neque modi perspiciatis aperiam ex ab repellat autem. Porro amet nemo ipsum consequuntur dolores!',
        img:"img/tm-img-03.jpg",
        days: 12,
        show:true,
        availableDates: ['01 Apr','15 Jun','15 Jul','15 Sep', '01 Oct'],
        continent:3,
    },
    {
        id:14,
        countryName:"Spain, Portugal, & Italy",
        citiesName:["Lisbon", "Porto", "Madrid", "Valencia", "Rome","Florence", "Milan","Zurich","Zermatt","Lucerne"],
        attentionCard:"../img/tm-img-06.jpg",
        price: 5900 ,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, tenetur id molestias, illum officia esse quaerat.",
        detailedDescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique suscipit iste dolor reiciendis. Placeat, voluptas repellendus. Neque modi perspiciatis aperiam ex ab repellat autem. Porro amet nemo ipsum consequuntur dolores!',
        img:"img/tm-img-06.jpg",
        days: 15,
        show:true,
        availableDates: ['01 Mar','15 Apr','17 Jun','1 Aug', '10 Sep'],
        continent:3,
    },
    {
        id:15,
        countryName:"Scotland, Ireland, England & France",
        citiesName:["Edinburgh", "Glasgow", "Dublin", "Belfast", "London","Paris", "Montpellier"],
        attentionCard:"../img/tm-img-04.jpg",
        price: 2600 ,
        description:"Visit Canada's capital, move on to Montreal, and lastly Quebec",
        detailedDescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique suscipit iste dolor reiciendis. Placeat, voluptas repellendus. Neque modi perspiciatis aperiam ex ab repellat autem. Porro amet nemo ipsum consequuntur dolores!',
        img:"img/tm-img-04.jpg",
        days: 11,
        show:true,
        availableDates: ['01 Mar','15 Apr','17 Jun','1 Aug', '10 Sep'],
        continent:3,
    },
    {
        id:16,
        countryName:"Japan",
        citiesName:["Tokyo", "Sapporo", "Osaka"],
        attentionCard:"../img/tm-img-07.jpg",
        price: 2100 ,
        description:"Visit Canada's capital, move on to Montreal, and lastly Quebec",
        detailedDescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique suscipit iste dolor reiciendis. Placeat, voluptas repellendus. Neque modi perspiciatis aperiam ex ab repellat autem. Porro amet nemo ipsum consequuntur dolores!',
        img:"img/tm-img-07.jpg",
        days:5,
        show:true,
        availableDates: ['15 Apr','15 Jun','15 Aug', '15 Oct', '15 Dec'],
        continent:4,
    },
    {
        id:17,
        countryName:"Thailand & Vietnam",
        citiesName:["Bankok", "Hanoi"],
        attentionCard:"../img/tm-img-03.jpg",
        price: 1100 ,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, laudantium.",
        detailedDescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique suscipit iste dolor reiciendis. Placeat, voluptas repellendus. Neque modi perspiciatis aperiam ex ab repellat autem. Porro amet nemo ipsum consequuntur dolores!',
        img:"img/tm-img-03.jpg",
        days:5,
        show:true,
        availableDates: ['15 Jan','15 Feb','15 Aug', '15 Oct', '15 Dec'],
        continent:4,
    },
    {
        id:18,
        countryName:"Malaysia",
        citiesName:["Melaka", "Kuala Lumpur", "Ipoh", "Penang"],
        attentionCard:"../img/tm-img-02.jpg",
        price: 990 ,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, laudantium.",
        detailedDescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique suscipit iste dolor reiciendis. Placeat, voluptas repellendus. Neque modi perspiciatis aperiam ex ab repellat autem. Porro amet nemo ipsum consequuntur dolores!',
        img:"img/tm-img-02.jpg",
        days:5,
        show:true,
        availableDates: ['15 Jan','15 Mar','15 Apr', '15 Jul', '15 Dec'],
        continent:4,
    },
    {
        id:19,
        countryName:"Philippines",
        citiesName:["Manila", "Cebu", "Luzon"],
        attentionCard:"../img/tm-img-01.jpg",
        price: 1199 ,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, laudantium.",
        detailedDescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique suscipit iste dolor reiciendis. Placeat, voluptas repellendus. Neque modi perspiciatis aperiam ex ab repellat autem. Porro amet nemo ipsum consequuntur dolores!',
        img:"img/tm-img-01.jpg",
        days:5,
        show:true,
        availableDates: ['15 Jan','15 Apr', '15 Jun', '15 Sep', '15 Dec'],
        continent:4,
    },
    {
        id:20,
        countryName:"Cambodia & Myanmar",
        citiesName:["Phnom Penh", "Naypyitaw", "Yangon"],
        attentionCard:"../img/tm-img-05.jpg",
        price: 990 ,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, laudantium.",
        detailedDescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique suscipit iste dolor reiciendis. Placeat, voluptas repellendus. Neque modi perspiciatis aperiam ex ab repellat autem. Porro amet nemo ipsum consequuntur dolores!',
        img:"img/tm-img-05.jpg",
        days:5,
        show:true,
        availableDates: ['3 Jan','6 Mar','1 May', '15 Aug', '15 Nov'],
        continent:4,
    },
    {
        id:21,
        countryName:"South Africa & Nigeria",
        citiesName:["Cape Town", "Ddo","Oudtshoom", "Lagos","Abuja"],
        attentionCard:"../img/tm-img-02.jpg",
        price: 1990 ,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, laudantium.",
        detailedDescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique suscipit iste dolor reiciendis. Placeat, voluptas repellendus. Neque modi perspiciatis aperiam ex ab repellat autem. Porro amet nemo ipsum consequuntur dolores!',
        img:"img/tm-img-02.jpg",
        days:9,
        show:true,
        availableDates: ['27 Feb','1 Apr','2 Jul', '15 Aug', '15 Oct'],
        continent:5,
    },
    {
        id:22,
        countryName:"Egypt, Libya & Algeria",
        citiesName:["Cairo", "Great Sphinx of Giza", "Sabha", "Tripoli", "Algiers","Tipaza"],
        attentionCard:"../img/tm-img-04.jpg",
        price: 2790 ,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, laudantium.",
        detailedDescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique suscipit iste dolor reiciendis. Placeat, voluptas repellendus. Neque modi perspiciatis aperiam ex ab repellat autem. Porro amet nemo ipsum consequuntur dolores!',
        img:"img/tm-img-04.jpg",
        days:8,
        show:true,
        availableDates: ['27 Feb','1 Apr','2 Jul', '15 Aug', '15 Oct'],
        continent:5,
    },
    {
        id:23,
        countryName:"Mozambique & Madagascar",
        citiesName:["Tofo", "Vilanculos", "Bazaruto Island", "Antananarivo", "Bekopaka","Morondava"],
        attentionCard:"../img/tm-img-06.jpg",
        price: 2890 ,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, laudantium.",
        detailedDescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique suscipit iste dolor reiciendis. Placeat, voluptas repellendus. Neque modi perspiciatis aperiam ex ab repellat autem. Porro amet nemo ipsum consequuntur dolores!',
        img:"img/tm-img-06.jpg",
        days:9,
        show:true,
        availableDates: ['27 Feb','1 Apr','2 Jul', '15 Aug', '15 Oct'],
        continent:5,
    },
    {
        id:24,
        countryName:"Kenya, Ethiopia, & Eritrea",
        citiesName:["Nairobi", "Tsavo National Park", "Mekele", "Axum", "Asmara","Keren"],
        attentionCard:"../img/tm-img-07.jpg",
        price: 2890 ,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, laudantium.",
        detailedDescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique suscipit iste dolor reiciendis. Placeat, voluptas repellendus. Neque modi perspiciatis aperiam ex ab repellat autem. Porro amet nemo ipsum consequuntur dolores!',
        img:"img/tm-img-07.jpg",
        days:10,
        show:true,
        availableDates: ['27 Feb','01 Apr','02 Jun', '15 Aug', '15 Oct'],
        continent:5,
    },
    {
        id:25,
        countryName:"Namibia, Botswana & Zimbabwe",
        citiesName:["Swakopmundi", "Kamanjab", "Etosha National Park", "Ghanzi", "Gweta","Victoria Falls"],
        attentionCard:"../img/tm-img-01.jpg",
        price: 3090 ,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, laudantium.",
        detailedDescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique suscipit iste dolor reiciendis. Placeat, voluptas repellendus. Neque modi perspiciatis aperiam ex ab repellat autem. Porro amet nemo ipsum consequuntur dolores!',
        img:"img/tm-img-01.jpg",
        days:11,
        show:true,
        availableDates: ['23 Feb','06 Mar','02 Jun', '30 Jul', '25 Sep'],
        continent:5,
    },
    {
        id:26,
        countryName:"Australia",
        citiesName:["Broome", "Darwin", "Fitzroy Crossing", "Halls Creek", "Katherine", "Kununurra", "Lake Argyle", "Port Hedland"],
        attentionCard:"../img/tm-img-01.jpg",
        price: 1590 ,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, laudantium.",
        detailedDescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique suscipit iste dolor reiciendis. Placeat, voluptas repellendus. Neque modi perspiciatis aperiam ex ab repellat autem. Porro amet nemo ipsum consequuntur dolores!',
        img:"img/tm-img-01.jpg",
        days:9,
        show:true,
        availableDates: ['23 Feb','06 Mar','02 Jun', '30 Jul', '25 Sep'],
        continent:6,
    },
    {
        id:27,
        countryName:"Australia",
        citiesName:["Elizabeth Town", "Freycinet", "Launceston TAS", "Port Arthur", "Strahan"],
        attentionCard:"../img/tm-img-02.jpg",
        price: 1300 ,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, laudantium.",
        detailedDescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique suscipit iste dolor reiciendis. Placeat, voluptas repellendus. Neque modi perspiciatis aperiam ex ab repellat autem. Porro amet nemo ipsum consequuntur dolores!',
        img:"img/tm-img-02.jpg",
        days:8,
        show:true,
        availableDates: ['23 Feb','06 Mar','02 Jun', '30 Jul', '25 Sep'],
        continent:6,
    },
    {
        id:28,
        countryName:"New Zealand",
        citiesName:["Auckland", "Rotorua", "Murupara", "Taupo"],
        attentionCard:"../img/tm-img-03.jpg",
        price: 1700 ,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, laudantium.",
        detailedDescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique suscipit iste dolor reiciendis. Placeat, voluptas repellendus. Neque modi perspiciatis aperiam ex ab repellat autem. Porro amet nemo ipsum consequuntur dolores!',
        img:"img/tm-img-03.jpg",
        days:7,
        show:true,
        availableDates: ['23 Feb','06 Mar','02 Jun', '30 Jul', '25 Sep'],
        continent:6,
    },
    {
        id:29,
        countryName:"New Zealand",
        citiesName:["Franz Josef", "Queenstown", "Mt Cook", "Christchurch"],
        attentionCard:"../img/tm-img-04.jpg",
        price: 1490 ,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, laudantium.",
        detailedDescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique suscipit iste dolor reiciendis. Placeat, voluptas repellendus. Neque modi perspiciatis aperiam ex ab repellat autem. Porro amet nemo ipsum consequuntur dolores!',
        img:"img/tm-img-04.jpg",
        days:7,
        show:true,
        availableDates: ['23 Feb','06 Mar','02 Jun', '30 Jul', '25 Sep'],
        continent:6,
    },
    {
        id:30,
        countryName:"New Zealand",
        citiesName:["Auckland", "Rotorua", "Franz Josef", "Christchurch", "Queenstown", "Fiorland National Park"],
        attentionCard:"../img/tm-img-05.jpg",
        price: 2300 ,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, laudantium.",
        detailedDescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique suscipit iste dolor reiciendis. Placeat, voluptas repellendus. Neque modi perspiciatis aperiam ex ab repellat autem. Porro amet nemo ipsum consequuntur dolores!',
        img:"img/tm-img-05.jpg",
        days:11,
        show:true,
        availableDates: ['23 Feb','06 Mar','02 Jun', '30 Jul', '25 Sep'],
        continent:6,
    },
    {
        id:31,
        countryName:"Antartica",
        citiesName:["Ushuaia", "South Shetland Islands", "Antartic Peninsula"],
        attentionCard:"../img/tm-img-04.jpg",
        price: 5100 ,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, laudantium.",
        detailedDescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique suscipit iste dolor reiciendis. Placeat, voluptas repellendus. Neque modi perspiciatis aperiam ex ab repellat autem. Porro amet nemo ipsum consequuntur dolores!',
        img:"img/tm-img-04.jpg",
        days:11,
        show:true,
        availableDates: ['02 Nov','02 Dec','02 Jan', '01 Mar'],
        continent:7,
    },
    {
        id:32,
        countryName:"Antartica",
        citiesName:["Ushuaia", "Drake Passage", "Antartic Peninsula"],
        attentionCard:"../img/tm-img-06.jpg",
        price: 4300 ,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, laudantium.",
        detailedDescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique suscipit iste dolor reiciendis. Placeat, voluptas repellendus. Neque modi perspiciatis aperiam ex ab repellat autem. Porro amet nemo ipsum consequuntur dolores!',
        img:"img/tm-img-06.jpg",
        days:13,
        show:true,
        availableDates: ['02 Nov','02 Dec','02 Jan', '01 Mar'],
        continent:7,
    },
    {
        id:33,
        countryName:"Antartica",
        citiesName:["Ushuaia", "Drake Passage", "Antartic Peninsula", "Antartic Circle", "South Shetland Islands"],
        attentionCard:"../img/tm-img-05.jpg",
        price: 4300 ,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, laudantium.",
        detailedDescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique suscipit iste dolor reiciendis. Placeat, voluptas repellendus. Neque modi perspiciatis aperiam ex ab repellat autem. Porro amet nemo ipsum consequuntur dolores!',
        img:"img/tm-img-05.jpg",
        days:13,
        show:true,
        availableDates: ['02 Nov','02 Dec','02 Jan', '01 Mar'],
        continent:7,
    },
    {
        id:34,
        countryName:"Antartica",
        citiesName:["Ushuaia", "Elephant Island", "South Georgia", "Falkland Islands"],
        attentionCard:"../img/tm-img-07.jpg",
        price: 7300 ,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, laudantium.",
        detailedDescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique suscipit iste dolor reiciendis. Placeat, voluptas repellendus. Neque modi perspiciatis aperiam ex ab repellat autem. Porro amet nemo ipsum consequuntur dolores!',
        img:"img/tm-img-07.jpg",
        days:18,
        show:true,
        availableDates: ['02 Nov','02 Dec','02 Jan', '01 Mar'],
        continent:7,
    },
]

export default destinations;