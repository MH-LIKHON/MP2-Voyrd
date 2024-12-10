// ========== Data Initialisation ==========
// UK cities and it's attractuion places database
const cityAttractions = {
    London: [
        {
            name: "Big Ben",
            description: "Big Ben is the nickname for the Great Bell of the clock at the north end of the Palace of Westminster.",
            link: "https://en.wikipedia.org/wiki/Big_Ben"
        },
        {
            name: "London Eye",
            description: "The London Eye is a giant Ferris wheel on the South Bank of the River Thames.",
            link: "https://en.wikipedia.org/wiki/London_Eye"
        },
        {
            name: "Tower of London",
            description: "A historic castle located on the north bank of the River Thames, famous for housing the Crown Jewels.",
            link: "https://en.wikipedia.org/wiki/Tower_of_London"
        },
        {
            name: "British Museum",
            description: "This museum houses a vast collection of world art and artifacts spanning over two million years of history.",
            link: "https://en.wikipedia.org/wiki/British_Museum"
        },
        {
            name: "Buckingham Palace",
            description: "The official residence of the monarch, known for its grandeur and the Changing of the Guard ceremony.",
            link: "https://en.wikipedia.org/wiki/Buckingham_Palace"
        }
    ],

    Manchester: [
        {
            name: "Old Trafford",
            description: "The iconic home stadium of Manchester United Football Club, offering immersive guided tours.",
            link: "https://en.wikipedia.org/wiki/Old_Trafford"
        },
        {
            name: "Science and Industry Museum",
            description: "Explore Manchester’s industrial and scientific achievements at this fascinating museum.",
            link: "https://en.wikipedia.org/wiki/Science_and_Industry_Museum"
        },
        {
            name: "Manchester Art Gallery",
            description: "This gallery features one of the UK’s finest collections of fine and decorative art.",
            link: "https://en.wikipedia.org/wiki/Manchester_Art_Gallery"
        },
        {
            name: "Heaton Park",
            description: "A sprawling park offering scenic walking trails, a boating lake, and activities for visitors of all ages.",
            link: "https://en.wikipedia.org/wiki/Heaton_Park"
        },
        {
            name: "John Rylands Library",
            description: "A neo-Gothic masterpiece housing a significant collection of rare books and manuscripts.",
            link: "https://en.wikipedia.org/wiki/John_Rylands_Library"
        }
    ],

    Edinburgh: [
        {
            name: "Edinburgh Castle",
            description: "Perched atop Castle Rock, this iconic fortress offers breathtaking views and historical exhibits.",
            link: "https://en.wikipedia.org/wiki/Edinburgh_Castle"
        },
        {
            name: "Arthur's Seat",
            description: "An extinct volcano providing one of the best vantage points in Edinburgh, perfect for hiking.",
            link: "https://en.wikipedia.org/wiki/Arthur%27s_Seat,_Edinburgh"
        },
        {
            name: "Holyrood Palace",
            description: "The official residence of the British monarch in Scotland, with stunning gardens and royal apartments.",
            link: "https://en.wikipedia.org/wiki/Holyrood_Palace"
        },
        {
            name: "Royal Mile",
            description: "This historic street connects Edinburgh Castle to Holyrood Palace, lined with shops and landmarks.",
            link: "https://en.wikipedia.org/wiki/Royal_Mile"
        },
        {
            name: "National Museum of Scotland",
            description: "A treasure trove of Scottish history, culture, and science with extensive collections.",
            link: "https://en.wikipedia.org/wiki/National_Museum_of_Scotland"
        }
    ],

    York: [
        {
            name: "York Minster",
            description: "One of the largest Gothic cathedrals in Northern Europe, known for its magnificent stained glass windows.",
            link: "https://en.wikipedia.org/wiki/York_Minster"
        },
        {
            name: "Clifford's Tower",
            description: "A historic tower offering panoramic views of the city, with a rich history as a mint and prison.",
            link: "https://en.wikipedia.org/wiki/Clifford%27s_Tower"
        },
        {
            name: "The Shambles",
            description: "A medieval street famous for its timber-framed buildings and unique charm.",
            link: "https://en.wikipedia.org/wiki/The_Shambles"
        },
        {
            name: "York Castle Museum",
            description: "An interactive museum showcasing the city’s history through recreated streets and exhibits.",
            link: "https://en.wikipedia.org/wiki/York_Castle_Museum"
        },
        {
            name: "National Railway Museum",
            description: "The largest railway museum in the world, featuring iconic locomotives and interactive exhibits.",
            link: "https://en.wikipedia.org/wiki/National_Railway_Museum"
        }
    ],

    Cardiff: [
        {
            name: "Cardiff Castle",
            description: "A historic castle with over 2,000 years of history, featuring Roman walls, Norman keeps, and Victorian interiors.",
            link: "https://en.wikipedia.org/wiki/Cardiff_Castle"
        },
        {
            name: "Principality Stadium",
            description: "A state-of-the-art sports and entertainment venue, hosting rugby, football, and major concerts.",
            link: "https://en.wikipedia.org/wiki/Principality_Stadium"
        },
        {
            name: "Cardiff Bay",
            description: "A vibrant waterfront area with restaurants, shops, and attractions like the Wales Millennium Centre.",
            link: "https://en.wikipedia.org/wiki/Cardiff_Bay"
        },
        {
            name: "National Museum Cardiff",
            description: "A museum and gallery showcasing Welsh art, natural history, and archaeology.",
            link: "https://en.wikipedia.org/wiki/National_Museum_Cardiff"
        },
        {
            name: "Bute Park",
            description: "A green oasis in the heart of the city, perfect for picnics, cycling, and scenic walks.",
            link: "https://en.wikipedia.org/wiki/Bute_Park"
        }
    ],

    Brighton: [
        { 
            name: "Brighton Pier", 
            description: "A classic seaside pier with arcades, rides, and food stalls, offering fun for all ages and stunning sea views.", 
            link: "https://en.wikipedia.org/wiki/Brighton_Marine_Palace_and_Pier"
        },
        { 
            name: "Royal Pavilion", 
            description: "An exotic palace built as a seaside retreat for King George IV, known for its stunning architecture and interiors.", 
            link: "https://en.wikipedia.org/wiki/Royal_Pavilion"
        },
        { 
            name: "Brighton Beach", 
            description: "A pebbled beach perfect for sunbathing, swimming, and enjoying the vibrant atmosphere of Brighton's seafront.", 
            link: "https://en.wikipedia.org/wiki/Brighton_beach"
        },
        { 
            name: "The Lanes", 
            description: "A maze of narrow streets filled with quirky shops, cafes, and vintage stores, perfect for exploration.", 
            link: "https://en.wikipedia.org/wiki/The_Lanes,_Brighton"
        },
        { 
            name: "British Airways i360", 
            description: "A futuristic observation tower offering breathtaking views of the coastline and surrounding areas.", 
            link: "https://en.wikipedia.org/wiki/British_Airways_i360"
        },
    ],

    Aberdeen: [
        { 
            name: "Dunnottar Castle", 
            description: "A dramatic clifftop fortress with a rich history, offering spectacular views of the North Sea.", 
            link: "https://en.wikipedia.org/wiki/Dunnottar_Castle"
        },
        { 
            name: "Aberdeen Maritime Museum", 
            description: "A museum detailing Aberdeen's relationship with the sea, including exhibits on oil exploration and shipping.", 
            link: "https://en.wikipedia.org/wiki/Aberdeen_Maritime_Museum"
        },
        { 
            name: "Union Terrace Gardens", 
            description: "A tranquil green space in the heart of Aberdeen, perfect for picnics and relaxation.", 
            link: "https://en.wikipedia.org/wiki/Union_Terrace_Gardens"
        },
        { 
            name: "Codonas Amusement Park", 
            description: "A family-friendly amusement park with rides, arcades, and attractions for all ages.", 
            link: "https://en.wikipedia.org/wiki/Codona%27s_Amusement_Park"
        },
        { 
            name: "Footdee (Fittie)", 
            description: "A charming and historic fishing village with unique cottages and picturesque streets.", 
            link: "https://en.wikipedia.org/wiki/Footdee"
        },
    ],

    Inverness: [
        { 
            name: "Loch Ness", 
            description: "World-famous freshwater lake known for its stunning scenery and the legend of the Loch Ness Monster.", 
            link: "https://en.wikipedia.org/wiki/Loch_Ness"
        },
        { 
            name: "Inverness Castle", 
            description: "A picturesque castle overlooking the River Ness, offering historical exhibits and beautiful views.", 
            link: "https://en.wikipedia.org/wiki/Inverness_Castle"
        },
        { 
            name: "Culloden Battlefield", 
            description: "The site of the last battle fought on British soil, now a visitor center dedicated to the Jacobite uprising.", 
            link: "https://en.wikipedia.org/wiki/Battle_of_Culloden"
        },
        { 
            name: "River Ness and Islands", 
            description: "A peaceful series of walking paths along the River Ness, with charming islands to explore.", 
            link: "https://en.wikipedia.org/wiki/River_Ness"
        },
        { 
            name: "Clava Cairns", 
            description: "Ancient burial sites dating back to the Bronze Age, offering a glimpse into Scotland's prehistoric past.", 
            link: "https://en.wikipedia.org/wiki/Clava_cairn"
        },
    ],

    Dundee: [
        { 
            name: "V&A Dundee", 
            description: "Scotland’s first design museum, showcasing innovative and inspiring exhibitions.", 
            link: "https://en.wikipedia.org/wiki/V%26A_Dundee"
        },
        { 
            name: "Discovery Point", 
            description: "A museum focused on the history of the RRS Discovery, the ship used by Scott and Shackleton for Antarctic exploration.", 
            link: "https://en.wikipedia.org/wiki/RRS_Discovery"
        },
        { 
            name: "Broughty Castle Museum", 
            description: "A 15th-century coastal fort housing displays on Dundee's maritime history and local wildlife.", 
            link: "https://en.wikipedia.org/wiki/Broughty_Castle"
        },
        { 
            name: "The McManus", 
            description: "An art gallery and museum celebrating Dundee’s cultural and artistic heritage.", 
            link: "https://en.wikipedia.org/wiki/McManus_Galleries"
        },
        { 
            name: "Dundee Law", 
            description: "An extinct volcano offering panoramic views of the city and surrounding landscapes.", 
            link: "https://en.wikipedia.org/wiki/Dundee_Law"
        },
    ],

    Nottingham: [
        { 
            name: "Nottingham Castle", 
            description: "A historic castle with an art gallery and museum, linked to the legend of Robin Hood.", 
            link: "https://en.wikipedia.org/wiki/Nottingham_Castle"
        },
        { 
            name: "City of Caves", 
            description: "An underground network of sandstone caves offering a unique glimpse into Nottingham's history.", 
            link: "https://en.wikipedia.org/wiki/City_of_Caves"
        },
        { 
            name: "Wollaton Hall and Deer Park", 
            description: "A stunning Elizabethan mansion set in expansive parkland with roaming deer.", 
            link: "https://en.wikipedia.org/wiki/Wollaton_Hall"
        },
        { 
            name: "The National Justice Museum", 
            description: "A museum exploring the history of crime and punishment in the UK.", 
            link: "https://en.wikipedia.org/wiki/National_Justice_Museum"
        },
        { 
            name: "Sherwood Forest", 
            description: "The legendary home of Robin Hood, featuring ancient oak trees and woodland trails.", 
            link: "https://en.wikipedia.org/wiki/Sherwood_Forest"
        },
    ],

    Bristol: [
        { 
            name: "Clifton Suspension Bridge", 
            description: "An iconic landmark of engineering, the Clifton Suspension Bridge spans the Avon Gorge and offers breathtaking views of the surrounding countryside.", 
            link: "https://en.wikipedia.org/wiki/Clifton_Suspension_Bridge"
        },
        { 
            name: "Bristol Zoo Gardens", 
            description: "One of the oldest zoos in the world, Bristol Zoo Gardens is home to a variety of exotic and endangered species.", 
            link: "https://en.wikipedia.org/wiki/Bristol_Zoo"
        },
        { 
            name: "SS Great Britain", 
            description: "A historic steamship designed by Isambard Kingdom Brunel, now serving as a floating museum.", 
            link: "https://en.wikipedia.org/wiki/SS_Great_Britain"
        },
        { 
            name: "Bristol Museum and Art Gallery", 
            description: "Showcasing a diverse range of artifacts, art, and natural history exhibits.", 
            link: "https://en.wikipedia.org/wiki/Bristol_Museum_and_Art_Gallery"
        },
        { 
            name: "Banksy Street Art", 
            description: "Explore iconic street art by the legendary artist Banksy, scattered throughout Bristol.", 
            link: "https://en.wikipedia.org/wiki/Banksy"
        },
    ],

    Liverpool: [
        { 
            name: "The Beatles Story", 
            description: "An immersive museum dedicated to the history and legacy of The Beatles.", 
            link: "https://en.wikipedia.org/wiki/The_Beatles_Story"
        },
        { 
            name: "Liverpool Cathedral", 
            description: "The largest cathedral in Britain, known for its stunning architecture and serene ambiance.", 
            link: "https://en.wikipedia.org/wiki/Liverpool_Cathedral"
        },
        { 
            name: "Albert Dock", 
            description: "A UNESCO World Heritage Site with museums, galleries, and restaurants.", 
            link: "https://en.wikipedia.org/wiki/Albert_Dock"
        },
        { 
            name: "Anfield Stadium", 
            description: "The home of Liverpool FC, offering tours and a museum for football enthusiasts.", 
            link: "https://en.wikipedia.org/wiki/Anfield"
        },
        { 
            name: "Walker Art Gallery", 
            description: "Known as the 'National Gallery of the North,' featuring a stunning art collection.", 
            link: "https://en.wikipedia.org/wiki/Walker_Art_Gallery"
        },
    ],

    Birmingham: [
        { 
            name: "Cadbury World", 
            description: "A paradise for chocolate lovers, offering interactive exhibits and tastings.", 
            link: "https://en.wikipedia.org/wiki/Cadbury_World"
        },
        { 
            name: "Birmingham Museum and Art Gallery", 
            description: "Renowned for its collection of Pre-Raphaelite art and displays of Birmingham's history.", 
            link: "https://en.wikipedia.org/wiki/Birmingham_Museum_and_Art_Gallery"
        },
        { 
            name: "Bullring & Grand Central", 
            description: "A vibrant shopping and dining hub in the heart of Birmingham.", 
            link: "https://en.wikipedia.org/wiki/Bullring,_Birmingham"
        },
        { 
            name: "Library of Birmingham", 
            description: "A modern masterpiece featuring rooftop gardens and extensive cultural exhibitions.", 
            link: "https://en.wikipedia.org/wiki/Library_of_Birmingham"
        },
        { 
            name: "National SEA LIFE Centre", 
            description: "An underwater adventure showcasing marine life in an immersive environment.", 
            link: "https://en.wikipedia.org/wiki/National_Sea_Life_Centre"
        },
    ],

    Glasgow: [
        { 
            name: "Kelvingrove Art Gallery and Museum", 
            description: "An iconic museum featuring an extensive collection of art and artifacts.", 
            link: "https://en.wikipedia.org/wiki/Kelvingrove_Art_Gallery_and_Museum"
        },
        { 
            name: "Glasgow Cathedral", 
            description: "A stunning example of medieval Gothic architecture in the heart of Glasgow.", 
            link: "https://en.wikipedia.org/wiki/Glasgow_Cathedral"
        },
        { 
            name: "George Square", 
            description: "The central hub of Glasgow, surrounded by beautiful Victorian buildings.", 
            link: "https://en.wikipedia.org/wiki/George_Square"
        },
        { 
            name: "The Riverside Museum", 
            description: "A modern museum dedicated to the history of transport and technology.", 
            link: "https://en.wikipedia.org/wiki/Riverside_Museum"
        },
        { 
            name: "Glasgow Botanic Gardens", 
            description: "A serene escape featuring beautiful glasshouses and exotic plants.", 
            link: "https://en.wikipedia.org/wiki/Glasgow_Botanic_Gardens"
        },
    ],

    Bath: [
        { 
            name: "Roman Baths", 
            description: "A historical site showcasing the bathing complex of Roman Britain.", 
            link: "https://en.wikipedia.org/wiki/Roman_Baths_(Bath)"
        },
        { 
            name: "Bath Abbey", 
            description: "A magnificent Gothic church with stunning architecture.", 
            link: "https://en.wikipedia.org/wiki/Bath_Abbey"
        },
        { 
            name: "The Royal Crescent", 
            description: "A row of Georgian houses forming a sweeping crescent, a symbol of Bath’s grandeur.", 
            link: "https://en.wikipedia.org/wiki/Royal_Crescent"
        },
        { 
            name: "Pulteney Bridge", 
            description: "A unique bridge lined with shops, one of the most beautiful in the world.", 
            link: "https://en.wikipedia.org/wiki/Pulteney_Bridge"
        },
        { 
            name: "Thermae Bath Spa", 
            description: "A modern spa offering access to naturally warm, mineral-rich waters.", 
            link: "https://en.wikipedia.org/wiki/Thermae_Bath_Spa"
        },
    ],

    Cambridge: [
        { 
            name: "University of Cambridge", 
            description: "One of the world’s most prestigious universities, known for its historic colleges.", 
            link: "https://en.wikipedia.org/wiki/University_of_Cambridge"
        },
        { 
            name: "King's College Chapel", 
            description: "A masterpiece of Gothic architecture, renowned for its stained glass windows.", 
            link: "https://en.wikipedia.org/wiki/King%27s_College_Chapel,_Cambridge"
        },
        { 
            name: "Fitzwilliam Museum", 
            description: "An art and antiquities museum with extensive collections spanning centuries.", 
            link: "https://en.wikipedia.org/wiki/Fitzwilliam_Museum"
        },
        { 
            name: "River Cam", 
            description: "Offering picturesque views and punting experiences along the historic colleges.", 
            link: "https://en.wikipedia.org/wiki/River_Cam"
        },
        { 
            name: "The Backs", 
            description: "Landscaped gardens and green spaces along the River Cam, perfect for walks.", 
            link: "https://en.wikipedia.org/wiki/The_Backs"
        },
    ],

    Oxford: [
        { 
            name: "University of Oxford", 
            description: "The oldest university in the English-speaking world, known for academic excellence.", 
            link: "https://en.wikipedia.org/wiki/University_of_Oxford"
        },
        { 
            name: "Bodleian Library", 
            description: "One of Europe’s oldest libraries, with a strikingly beautiful reading room.", 
            link: "https://en.wikipedia.org/wiki/Bodleian_Library"
        },
        { 
            name: "Ashmolean Museum", 
            description: "The world's first university museum, featuring art and archaeology collections.", 
            link: "https://en.wikipedia.org/wiki/Ashmolean_Museum"
        },
        { 
            name: "Radcliffe Camera", 
            description: "An iconic circular building symbolizing Oxford’s scholarly heritage.", 
            link: "https://en.wikipedia.org/wiki/Radcliffe_Camera"
        },
        { 
            name: "Christ Church Cathedral", 
            description: "A blend of college and cathedral, featuring stunning interiors.", 
            link: "https://en.wikipedia.org/wiki/Christ_Church,_Oxford"
        },
    ],

    Belfast: [
        { 
            name: "Titanic Belfast", 
            description: "An award-winning visitor attraction showcasing the history of the Titanic, built in Belfast.", 
            link: "https://en.wikipedia.org/wiki/Titanic_Belfast"
        },
        { 
            name: "Giant's Causeway", 
            description: "A UNESCO World Heritage Site featuring over 40,000 interlocking basalt columns formed by volcanic activity.", 
            link: "https://en.wikipedia.org/wiki/Giant%27s_Causeway"
        },
        { 
            name: "Belfast Castle", 
            description: "A historic castle offering panoramic views of Belfast and a rich heritage.", 
            link: "https://en.wikipedia.org/wiki/Belfast_Castle"
        },
        { 
            name: "St. George's Market", 
            description: "One of Belfast’s oldest attractions, known for its vibrant mix of local produce and live music.", 
            link: "https://en.wikipedia.org/wiki/St_George%27s_Market"
        },
        { 
            name: "Ulster Museum", 
            description: "A museum showcasing art, history, and natural science, located in Belfast’s Botanic Gardens.", 
            link: "https://en.wikipedia.org/wiki/Ulster_Museum"
        },
    ],

    Newcastle: [
        { 
            name: "Tyne Bridge", 
            description: "An iconic symbol of Newcastle, spanning the River Tyne with stunning views.", 
            link: "https://en.wikipedia.org/wiki/Tyne_Bridge"
        },
        { 
            name: "Newcastle Castle", 
            description: "A medieval fortress that offers a glimpse into the city's history and panoramic views from its tower.", 
            link: "https://en.wikipedia.org/wiki/Newcastle_Castle"
        },
        { 
            name: "Angel of the North", 
            description: "A contemporary sculpture symbolizing strength and resilience, towering at 20 meters tall.", 
            link: "https://en.wikipedia.org/wiki/Angel_of_the_North"
        },
        { 
            name: "Baltic Centre for Contemporary Art", 
            description: "A cutting-edge gallery housed in a former flour mill, showcasing contemporary art.", 
            link: "https://en.wikipedia.org/wiki/BALTIC_Centre_for_Contemporary_Art"
        },
        { 
            name: "St. Nicholas Cathedral", 
            description: "A historic cathedral with stunning Gothic architecture and a welcoming ambiance.", 
            link: "https://en.wikipedia.org/wiki/Newcastle_Cathedral"
        },
    ],

    Leeds: [
        { 
            name: "Royal Armouries Museum", 
            description: "Home to a world-class collection of arms and armor, spanning centuries of history.", 
            link: "https://en.wikipedia.org/wiki/Royal_Armouries_Museum"
        },
        { 
            name: "Kirkstall Abbey", 
            description: "A medieval monastery with scenic surroundings and rich history.", 
            link: "https://en.wikipedia.org/wiki/Kirkstall_Abbey"
        },
        { 
            name: "Leeds Art Gallery", 
            description: "A premier destination for art lovers, featuring British and international works.", 
            link: "https://en.wikipedia.org/wiki/Leeds_Art_Gallery"
        },
        { 
            name: "Harewood House", 
            description: "A grand estate featuring exquisite art collections and beautifully landscaped gardens.", 
            link: "https://en.wikipedia.org/wiki/Harewood_House"
        },
        { 
            name: "Roundhay Park", 
            description: "One of Europe’s largest city parks, offering lakes, gardens, and family-friendly activities.", 
            link: "https://en.wikipedia.org/wiki/Roundhay_Park"
        },
    ],

    Cornwall: [
        { 
            name: "St Michael's Mount", 
            description: "A stunning tidal island crowned by a medieval church and castle.", 
            link: "https://en.wikipedia.org/wiki/St_Michael%27s_Mount"
        },
        { 
            name: "Eden Project", 
            description: "A global garden in futuristic biomes, showcasing diverse ecosystems and sustainability.", 
            link: "https://en.wikipedia.org/wiki/Eden_Project"
        },
        { 
            name: "Minack Theatre", 
            description: "A dramatic open-air theatre carved into cliffs overlooking the Atlantic Ocean.", 
            link: "https://en.wikipedia.org/wiki/Minack_Theatre"
        },
        { 
            name: "Land's End", 
            description: "The westernmost point of mainland England, offering breathtaking coastal views.", 
            link: "https://en.wikipedia.org/wiki/Land%27s_End"
        },
        { 
            name: "Tintagel Castle", 
            description: "A historic site associated with the legend of King Arthur, perched on the rugged Cornish coast.", 
            link: "https://en.wikipedia.org/wiki/Tintagel_Castle"
        },
    ]
};

// ========== Populate City Cards ==========
function populateCities() {
    const $cityContainer = $("#cityCardsContainer");
    $.each(cityAttractions, function (city) {
        const cityCard = `
            <div class="col">
                <div class="card city-card" data-city="${city}">
                    <img src="assets/images/${city.toLowerCase()}.1.jpg" class="card-img-top" alt="${city}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${city}</h5>
                    </div>
                </div>
            </div>
        `;
        $cityContainer.append(cityCard);
    });
}

// ========== Populate Modal ==========
function populateCityModal(city) {
    const attractions = cityAttractions[city];
    const $modalTitle = $("#modalTitle");
    const $modalBody = $("#modalBody");

    // Update Modal Title
    $modalTitle.text(`${city} Attractions`);

    // Clear Previous Modal Content
    $modalBody.empty();

    // Add Attractions
    attractions.forEach(attraction => {
        const attractionItem = `
            <div class="mb-3">
                <h5>${attraction.name}</h5>
                <p>${attraction.description}</p>
                <a href="${attraction.link}" target="_blank" class="btn btn-primary btn-sm">Learn More</a>
            </div>
        `;
        $modalBody.append(attractionItem);
    });

    // Show Modal
    $("#cityAttractionsModal").modal("show");
}

// ========== Initialize ==========
$(document).ready(function () {
    populateCities();

    // Handle City Card Clicks
    $("#cityCardsContainer").on("click", ".city-card", function () {
        const city = $(this).data("city");
        if (cityAttractions[city]) {
            populateCityModal(city);
        } else {
            console.error(`City data not found for: ${city}`);
        }
    });
});