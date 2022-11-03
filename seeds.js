
const mongoose = require("mongoose");
const Influencer = require('./models/influencer')

mongoose.connect("mongodb://localhost:27017/EasyAd");

const db = mongoose.connection;
db.on("error", console.error.bind(console, " fsd error:")); // check Q&A lecture "Camground Model Basics"
db.once("open", () => {
  console.log("Database connected");
});



const makeRecords = async()=>{
    
    const inf3 = new Influencer({
        name: "Ahmed Saad",
        age: 23,
        gender: 'male',
        field: 'Game',
        nationality: 'Saudi Arabia',
        Desc: 'play Fortnite, pubg, and anything',
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=600&q=60",
        platform: ['YouTube'],
        location: 'Saudi Arabia, Jeddah',
        followers: 2000000,
        rangeOfCost: 9000,
        availableDates: ['6-12-2022','10-12-2022','15-12-2022','16-12-2022','24-12-2022'],
        accounts: ['youtube.com/c/ahmed_saad'],
    })
    await inf3.save()
    const inf4 = new Influencer({
        name: "Saeed Yassin",
        age: 29,
        gender: 'male',
        field: 'Tech',
        nationality: 'Sudan',
        Desc: 'reviews for mobiles and PCs',
        image: "https://images.unsplash.com/photo-1534493872551-856c2bb2279f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=600&q=60",
        platform: ['Snapchat', 'YouTube'],
        location: 'Saudi Arabia, Riyad',
        followers: 200000,
        rangeOfCost: 4000,
        availableDates: ['10-12-2022','12-12-2022','16-12-2022','18-12-2022','20-12-2022'],
        accounts: ['youtube.com/c/s_yassin', 'snapchat.com/odd/s_yassin'],
    })
    await inf4.save()
    const inf5 = new Influencer({
        name: "Mohammed Sami",
        age: 25,
        gender: 'male',
        field: 'Car',
        nationality: 'Sumalya',
        Desc: 'all cars news',
        image: "https://images.unsplash.com/photo-1523478016374-2a27cc521718?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=600&q=60",
        platform: ['Snapchat'],
        location: 'Saudi Arabia, Jeddah',
        followers: 100000,
        rangeOfCost: 2500,
        availableDates: ['1-12-2022','5-12-2022','7-12-2022','19-12-2022','24-12-2022'],
        accounts: ['youtube.com/c/mo_sami'],
    })
    await inf5.save()
    const inf6 = new Influencer({
        name: "Mohammed Ali",
        age: 31,
        gender: 'male',
        field: 'Tech',
        nationality: 'Egypt',
        Desc: 'tech news',
        image: "https://images.unsplash.com/flagged/photo-1572262107271-baad9a8c8709?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI4fHxwZXJzb258ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
        platform: ['Instagram', 'Tiktok'],
        location: 'Saudi Arabia, Jeddah',
        followers: 700000,
        rangeOfCost: 5500,
        availableDates: ['1-12-2022','2-12-2022','3-12-2022','9-12-2022','20-12-2022'],
        accounts: ['instagram.com/mohammedali', 'tiktok.com/@mohammedali'],
    })
    await inf6.save()
    const inf7 = new Influencer({
        name: "Moteb Fahad",
        age: 31,
        gender: 'male',
        field: 'Rap',
        nationality: 'Saudi Arabia',
        Desc: 'I will diss anyone in fornt of me',
        image: "https://images.unsplash.com/photo-1584518969469-c2d99c7760a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI2fHxwZXJzb258ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
        platform: ['Instagram', 'YouTube'],
        location: 'Saudi Arabia, Jeddah',
        followers: 800000,
        rangeOfCost: 6000,
        availableDates: ['2-12-2022','10-12-2022','11-12-2022','19-12-2022','20-12-2022'],
        accounts: ['instagram.com/motebdiss', 'instagram.com/motebdiss'],
    })
    await inf7.save()
    const inf8 = new Influencer({
        name: "Salem AlHassan",
        age: 23,
        gender: 'male',
        field: 'Business',
        nationality: 'Yemen',
        Desc: 'I will explain how I got to this level of wealth',
        image: "https://images.unsplash.com/photo-1592961495487-805c73c22198?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        platform: ['Instagram'],
        location: 'Yemen, Sanaa',
        followers: 378000,
        rangeOfCost: 2500,
        availableDates: ['1-11-2022','10-11-2022','20-11-2022','1-12-2022','10-12-2022','20-12-2022'],
        accounts: ['instagram.com/Salom_alhas159'],
    })
    await inf8.save()
    const inf9 = new Influencer({
        name: "Muthanna Al Marwani",
        age: 33,
        gender: 'male',
        field: 'Sport',
        nationality: 'Saudi Arabia',
        Desc: 'Captain of the Saudi Al Ittihad Basketball Club and Saudi national basketball team player',
        image: "https://www.sbl.sa/storage/images/77741d865166a8f945cc3f68bdcda181.jpg",
        platform: ['Snapchat'],
        location: 'Saudi Arabia, Jeddah',
        followers: 120000,
        rangeOfCost: 1750,
        availableDates: ['1-11-2022','7-11-2022','14-11-2022','19-11-2022','24-11-2022','29-11-2022'],
        accounts: ['snapchat.com/odd/Mo_almarwani6'],
    })
    await inf9.save()
    const inf10 = new Influencer({
        name: "Sarah Johnson",
        age: 51,
        gender: 'female',
        field: 'Fashion',
        nationality: 'Iraq',
        Desc: 'Love clothes, Love Fashion',
        image: "https://images.unsplash.com/photo-1603837849995-fe12ee2a906e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        platform: ['Instagram','Snapchat'],
        location: 'Saudi Arabia, Riyadh',
        followers: 732100,
        rangeOfCost: 10000,
        availableDates: ['1-11-2022','2-11-2022','7-11-2022','8-11-2022','15-11-2022','16-11-2022'],
        accounts: ['snapchat.com/odd/British_nurse', 'instagram.com/British_nurse'],
            })
    await inf10.save()
    const inf11 = new Influencer({
        name: "Roshni Khan",
        age: 42,
        gender: 'female',
        field: 'Tech',
        nationality: 'Indian',
        Desc: "Tech Desc",
        image: "https://images.unsplash.com/photo-1598601982231-6646b0c3a5ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        platform: ['YouTube'],
        location: 'Kuwait, Hawally',
        followers: 420000,
        rangeOfCost: 1500,
        availableDates: ['1-11-2022','2-11-2022','3-11-2022','4-11-2022'],
        accounts: ['youtube.com/c/R_Khan1'],
    })
    await inf11.save()
    const inf12 = new Influencer({
        name: "Jassim Al Mal",
        age: 28,
        gender: 'male',
        field: 'Song',
        nationality: 'Kuwaiti',
        Desc: 'I will create a song for you that thousands of people will like',
        platform: ['Tiktok'],
        image: "https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        location: 'Kuwaiti, Kuwait',
        followers: 500000,
        rangeOfCost: 400,
        availableDates: ['1-11-2022','15-11-2022','28-11-2022'],
        accounts: ['tiktok.com/@Jassim_Almal_123'],
    })
    await inf12.save()
    const inf13 = new Influencer({
        name: "Hassan Al Haydos",
        age: 31,
        gender: 'male',
        field: 'Sport',
        nationality: 'Qatar',
        Desc: 'I am always ready to create magic ads for you as I make goals for attackers',
        platform: ['Twitter'],
        image: "https://images.unsplash.com/photo-1661678730712-13b11a07ec5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
        location: 'Qatar, Doha',
        followers: 242000,
        rangeOfCost: 3000,
        availableDates: ['27-11-2022','28-11-2022','29-11-2022'],
        accounts: ['twitter.com/hassanalhaydos'],
    })
    await inf13.save()
    const inf14 = new Influencer({
        name: "Samira Al-Serafy",
        age: 16,
        gender: 'female',
        field: 'Photographic',
        nationality: 'Bahraini',
        Desc: 'I create attractive and wonderful ads in international ways',
        platform: ['Tiktok','Instagram'],
        image: "https://images.unsplash.com/photo-1485964793191-d70862c81ea8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        location: 'Bahrain, Manama',
        followers: 70000,
        rangeOfCost: 420,
        availableDates: ['1-11-2022','2-11-2022','3-11-2022','4-11-2022','5-11-2022'],
        accounts: ['tiktok.com/@SamiraSerf1','instagram.com/SamiraSerf1'],
    })
    await inf14.save()
    const inf15 = new Influencer({
        name: "Hanan Malibari",
        age: 38,
        gender: 'female',
        field: 'Health',
        nationality: 'Saudi Arabia',
        Desc: 'I am a doctor specializing in plastic surgery and a content maker on Snapchat',
        platform: ['Snapchat'],
        image: "https://images.unsplash.com/photo-1635862626416-ed76c1b25919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=887&q=80",
        location: 'Saudi Arabia, Makkah',
        followers: 490000,
        rangeOfCost: 1100,
        availableDates: ['4-11-2022','5-11-2022','11-11-2022','13-11-2022','19-11-2022','20-11-2022'],
        accounts: ['snapchat.com/odd/Hanan_Malibari'],
    })
    await inf15.save()
    const inf16 = new Influencer({
        name: "Mona Belhamer",
        age: 29,
        gender: 'female',
        field: 'TV',
        nationality: 'Saudi Arabia',
        Desc: 'I am an actress of several famous Arab films and a content maker for Facebook',
        platform: ['Facebook'],
        image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        location: 'Saudi Arabia, Al-Qassim',
        followers: 1200000,
        rangeOfCost: 24000,
        availableDates: ['10-11-2022','11-11-2022','12-11-2022','13-11-2022','14-11-2022'],
        accounts: ['facebook.com/m_belhamer1'],
    })
    await inf16.save()
    const inf17 = new Influencer({
        name: "Mustafa Hassanein",
        age: 31,
        gender: 'male',
        field: 'Comdey',
        nationality: 'Egypt',
        Desc: 'A theater actor in Egypt, an Egyptian film actor, and an advertising actor',
        platform: ['Tiktok'],
        image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        location: 'Oman, Muscat',
        followers: 9500000,
        rangeOfCost: 14000,
        availableDates: ['19-11-2022','20-11-2022'],
        accounts: ['tiktok.com/@Mustafa_Hsn2'],
    })
    await inf17.save()
    const inf18 = new Influencer({
        name: "Salman AlSalim",
        age: 28,
        gender: 'male',
        field: 'Game',
        nationality: 'Saudi Arabia',
        Desc: 'playing games since i was 9 years old, love playing and streaming, dream to be the most famous gamer in the world.',
        platform: ['YouTube','Facebook','Instagram'],
        image: "https://images.unsplash.com/photo-1559969143-b2defc6419fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtZXJ8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        location: 'Saudi Arabia, Madinah',
        followers: 80000,
        rangeOfCost: 390,
        availableDates: ['1-11-2022','2-11-2022','3-11-2022','4-11-2022','5-11-2022'],
        accounts: ['youtube.com/salmanalsalim','facebook.com/AlSalim_Sal11','Instagram.com/AlSalim_Sal11'],
    })
    await inf18.save()
    const inf19 = new Influencer({
        name: "Tala Al Mansoori",
        age: 30,
        gender: 'female',
        field: 'Beauty',
        nationality: 'Yemen',
        Desc: 'A make-up artist for more than 8 years, and I beautify many actresses with magic',
        platform: ['Snapchat'],
        image: "https://images.unsplash.com/photo-1610067762007-1ca5a93f72b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        location: 'Saudi Arabia, Jeddah',
        followers: 46200,
        rangeOfCost: 400,
        availableDates: ['2-11-2022','3-11-2022','26-11-2022','27-11-2022'],
        accounts: ['snapchat.com/Makeup_Tala'],
    })
    await inf19.save()
    const inf20 = new Influencer({
        name: "Soha Al-Abrash",
        age: 22,
        gender: 'female',
        field: 'artist',
        nationality: 'China',
        Desc: 'artist for an multiple international museums and artist for couple of local companies',
        platform: ['Tiktok'],
        image: "https://images.unsplash.com/photo-1524117074681-31bd4de22ad3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        location: 'Bahrain, Muharraq',
        followers: 3000000,
        rangeOfCost: 15000,
        availableDates: ['13-11-2022','14-11-2022','15-11-2022'],
        accounts: ['tiktok.com/@Soha_Artist'],
    })
    await inf20.save()
    const inf21 = new Influencer({
        name: "Abdulilah Sonbol",
        age: 34,
        gender: 'male',
        field: 'artist',
        nationality: 'Saudi Arabia',
        Desc: 'loved cooking and eating from the start of my life, known as food lover and maker!, love to help people finding their ideal meal.',
        platform: ['Twitter','YouTube'],
        image: "https://images.unsplash.com/photo-1663214024947-ed6879b08658?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        location: 'Saudi Arabia, Hail',
        followers: 1400000,
        rangeOfCost: 800,
        availableDates: ['1-11-2022','4-11-2022','8-11-2022','12-11-2022','16-11-2022','20-11-2022','24-11-2022'],
        accounts: ['twitter.com/Abdo_Sonbol','youtube.com/snobol'],
    })
    await inf21.save()
    const inf22 = new Influencer({
        name: "Asaad AlNasser",
        age: 36,
        gender: 'male',
        field: 'Singer',
        nationality: 'Lebanon',
        Desc: 'An Arab singer for many concerts in the Gulf countries and a commercial singer for many large companies',
        platform: ['Tiktok','Facebook'],
        image: "https://images.unsplash.com/photo-1495582575459-2eac77721458?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHNpbmdlcnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
        location: 'United Arab Emirates, Dubai',
        followers: 3000000,
        rangeOfCost: 50000,
        availableDates: ['10-11-2022','20-11-2022','30-11-2022'],
        accounts: ['tiktok.com/@Asaad_AlNasser','facebook.com/Asaad_AlNasser'],
    })
    await inf22.save()
    // const inf = new Influencer({
       
    // })
    // await inf.save()
    // const inf = new Influencer({
       
    // })
    // await inf.save()
    
} 
makeRecords()