$(document).ready(function () {
    // ========== Data Initialization ==========
    const airports = [
        "London Heathrow Terminal 1 (LHR-T1)",
        "London Heathrow Terminal 2 (LHR-T2)",
        "London Heathrow Terminal 3 (LHR-T3)",
        "London Heathrow Terminal 4 (LHR-T4)",
        "London Heathrow Terminal 5 (LHR-T5)",
        "London Gatwick North Terminal (LGW-N)",
        "London Gatwick South Terminal (LGW-S)",
        "Manchester Terminal 1 (MAN-T1) - SUSPENDED",
        "Manchester Terminal 2 (MAN-T2)",
        "Manchester Terminal 3 (MAN-T3)",
        "Edinburgh Airport (EDI)",
        "Birmingham Airport (BHX)",
        "Glasgow Airport (GLA)",
        "Bristol Airport (BRS)",
        "Belfast International (BFS)",
        "Belfast City George Best Airport (BHD)",
        "Newcastle Airport (NCL)",
        "London City Airport (LCY)",
        "Leeds Bradford Airport (LBA)",
        "Liverpool John Lennon (LPL)",
        "London Stansted Airport (STN)",
        "London Luton Airport (LTN)",
        "Aberdeen Airport (ABZ)",
        "Southampton Airport (SOU)",
        "East Midlands Airport (EMA)",
        "Cardiff Airport (CWL)",
        "Inverness Airport (INV)",
        "London Southend Airport (SEN)",
        "Exeter Airport (EXT)",
        "Norwich Airport (NWI)",
        "Doncaster Sheffield Airport (DSA)",
        "Humberside Airport (HUY)",
        "Durham Tees Valley Airport (MME)",
        "Isle of Man Airport (IOM)",
        "Jersey Airport (JER)",
        "Guernsey Airport (GCI)"
    ];    

    const hotels = [
        // London Heathrow
        "Sofitel London Heathrow - Terminal 5",
        "Hilton Garden Inn London Heathrow - Terminal 2 & 3",
        "Premier Inn London Heathrow - Bath Road",
        "Holiday Inn Express London Heathrow - Terminal 4",
        "Radisson Blu Edwardian Heathrow Hotel - London",
    
        // London Gatwick
        "Hilton London Gatwick - South Terminal",
        "Courtyard by Marriott London Gatwick - South Terminal",
        "Travelodge London Gatwick Airport - Central",
    
        // Manchester Airport
        "Clayton Hotel Manchester Airport - Near Terminals",
        "Radisson Blu Hotel Manchester Airport - Linked to Terminals",
        "DoubleTree by Hilton Hotel Manchester Airport",
        "Holiday Inn Manchester Airport - Wilmslow Road",
    
        // Edinburgh Airport
        "Hilton Edinburgh Airport - Near Terminal",
        "Moxy Edinburgh Airport - Walking Distance to Terminal",
    
        // Birmingham Airport
        "Hampton by Hilton Birmingham Airport - Solihull",
        "Novotel Birmingham Airport - Adjacent to Terminal",
        "Ibis Birmingham Airport - Budget-Friendly Stay",
    
        // Glasgow Airport
        "Holiday Inn Glasgow Airport - Opposite Terminal",
        "Courtyard by Marriott Glasgow Airport - Paisley",
        "Premier Inn Glasgow Airport - Affordable Comfort",
    
        // Bristol Airport
        "Hampton by Hilton Bristol Airport - On-Site Hotel",
        "Holiday Inn Bristol Airport - Langford Road",
    
        // Belfast
        "Malmaison Belfast - Luxury Boutique Hotel",
        "Titanic Hotel Belfast - Historical Experience",
        "AC Hotel by Marriott Belfast - Riverside Views",
    
        // Newcastle
        "Crowne Plaza Newcastle - Stephenson Quarter",
        "Maldron Hotel Newcastle - City Centre",
        "Jurys Inn Newcastle - Close to Train Station",
    
        // Leeds
        "Dakota Leeds - Luxury Stay in Leeds City Centre",
        "DoubleTree by Hilton Leeds - Granary Wharf",
        "Novotel Leeds Centre - Modern Comfort",
    
        // Stansted Airport
        "Radisson Blu Hotel London Stansted - Airport Connected",
        "Holiday Inn Express London Stansted - Near Terminal",
    
        // Luton Airport
        "Holiday Inn Express London Luton - Airport Park",
        "Hilton Garden Inn Luton North - Near Luton Town",
    
        // Aberdeen Airport
        "Mercure Aberdeen Airport Hotel - Modern Amenities",
    
        // Southampton Airport
        "Holiday Inn Southampton Airport - M3 Junction 7",
    
        // East Midlands Airport
        "Village Hotel Nottingham - Near East Midlands Airport",
    
        // Cardiff Airport
        "Celtic Manor Resort Cardiff - 5-Star Experience",
        "Holiday Inn Cardiff Airport - Convenient Stay",
    
        // Inverness Airport
        "Kingsmills Hotel Inverness - Historic Charm",
        "Holiday Inn Express Inverness - Budget-Friendly Stay",
    
        // Norwich Airport
        "Holiday Inn Norwich Airport - Near Terminal",
    
        // Doncaster Airport
        "Ramada by Wyndham Doncaster - Close to Terminal",
    
        // Other Famous Locations
        "The Ritz London - Iconic Luxury Hotel (London)",
        "The Savoy Hotel London - World-Renowned Service (London)",
        "The Langham London - Historic Elegance (London)",
        "The Balmoral Hotel - Overlooking Edinburgh Castle (Edinburgh)",
        "The Scotsman Hotel - Iconic Scottish Charm (Edinburgh)",
        "Old Course Hotel St Andrews - Near the Golf Course (St Andrews)",
        "Macdonald Rusacks Hotel - Overlooking St Andrews Golf (St Andrews)",
        "Grand Central Hotel - Heart of Glasgow City (Glasgow)",
        "The Principal York - Near York Railway Station (York)",
        "The Royal Crescent Hotel - Georgian Splendor (Bath)",
        "The Gainsborough Bath Spa - Luxury Spa Stay (Bath)",
        "Cliveden House Hotel - English Country House Charm (Berkshire)",
        "Chewton Glen Hotel - Luxury New Forest Retreat (New Forest)",
        "Lygon Arms Hotel - Iconic Cotswolds Stay (Broadway)",
        "Dormy House Hotel - Luxury Cotswolds Retreat (Broadway)",
        "Gravetye Manor - Historic Sussex Charm (West Sussex)",
        "Lucknam Park Hotel - Historic Retreat Near Bath (Chippenham)",
        "Bovey Castle - Countryside Elegance (Devon)",
        "Watergate Bay Hotel - Beachside Stay (Cornwall)",
        "The Scarlet Hotel - Eco-Luxury by the Sea (Cornwall)",
        "The Fife Arms - Artistic Scottish Hotel (Braemar)",
        "Hotel du Vin Birmingham - Boutique Stay in City Centre (Birmingham)",
        "Kimpton Clocktower Hotel - Grand Victorian Architecture (Manchester)"
    ];    

    // Tours and Packages
    const tours = [
        "London Highlights Tour", 
        "Scotland Adventure Tour",
        "Walse Adventure Tour",
        "Lake District Experience",
        "UK Grand Tour",
    ];

    // Pricing
    const pricing = {
        flights: { 
            economy: 100,
            business: 300,
            first: 500
        },
        hotels: { 
            single: 80,
            double: 120,
            suite: 250
        },
        chauffeur: { 
            standard: 50,
            executive: 100,
            luxury: 200,
            mpv: 150
        },
        tours: { 
            educational: 100,
            adventure: 150,
            luxury: 300
        }
    };    

    // ========== Populate Dropdowns ==========
    airports.forEach((airport) => {
        $('#departure-airport, #arrival-airport, #pickup-location').append(
            `<option value="${airport}">${airport}</option>`
        );
    });

    hotels.forEach((hotel) => {
        $('#hotel-name, #dropoff-location').append(`<option value="${hotel}">${hotel}</option>`);
    });

    tours.forEach((tour) => {
        $('#tour-destination').append(`<option value="${tour}">${tour}</option>`);
    });

    // ========== Global Variables ==========
    const selectedBookings = {
        flights: [], hotels: [], chauffeurs: [], tours: []
    };

    // ========== Utility Functions ==========
    // Validate form fields and highlight invalid ones
    function validateForm(formId) {
        let isValid = true;
        $(`#${formId} [required]`).each(function () {
            if (!$(this).val()) {
                $(this).addClass('is-invalid');
                isValid = false;
            } else {
                $(this).removeClass('is-invalid');
            }
        });
        return isValid;
    }

    // Reset a form to its initial state
    function resetForm(formId) {
        $(`#${formId}`)[0].reset();
        $(`#${formId} .form-check-input`).prop('checked', false);
        $(`#${formId} .is-invalid`).removeClass('is-invalid');
    }

    // Disable the selected departure airport from appearing in arrival options
    function disableArrivalAirport() {
        const selected = $('#departure-airport').val();
        $('#arrival-airport option').each(function () {
            $(this).prop('disabled', $(this).val() === selected);
        });
    }

    // Update the booking summary dynamically
    function updateSummary() {
        const summaryList = $('#summary-list');
        summaryList.empty();

        let totalCost = 0;

        // Flights
        selectedBookings.flights.forEach((flight, index) => {
            const flightCost = 100 * flight.adults + 50 * flight.children;
            totalCost += flightCost;

            summaryList.append(`
                <li class="list-group-item">
                    <strong>Flight:</strong> ${flight.departure} to ${flight.arrival}, ${flight.date} at ${flight.time}
                    (Cabin: ${flight.cabin}, Adults: ${flight.adults}, Children: ${flight.children})
                    ${flight.return ? `Return: ${flight.returnDate} at ${flight.returnTime}` : ''}
                    <span class="float-end">Price: £${flightCost}</span>
                    <button class="btn btn-sm btn-danger float-end remove-item" data-type="flights" data-index="${index}" style="margin-right: 10px;">X</button>
                </li>
            `);
        });

        // Hotels
        selectedBookings.hotels.forEach((hotel, index) => {
            const hotelCost = 100 * hotel.rooms;
            totalCost += hotelCost;

            summaryList.append(`
                <li class="list-group-item">
                    <strong>Hotel:</strong> ${hotel.name}, Check-in: ${hotel.checkin}, Check-out: ${hotel.checkout},
                    Rooms: ${hotel.rooms}, Guests: ${hotel.guests}, Extra: ${hotel.extra.join(", ")}
                    <span class="float-end">Price: £${hotelCost}</span>
                    <button class="btn btn-sm btn-danger float-end remove-item" data-type="hotels" data-index="${index}" style="margin-right: 10px;">X</button>
                </li>
            `);
        });

        // Chauffeurs
        selectedBookings.chauffeurs.forEach((chauffeur, index) => {
            const chauffeurCost = 50 * chauffeur.passengers;
            totalCost += chauffeurCost;

            summaryList.append(`
                <li class="list-group-item">
                    <strong>Chauffeur:</strong> ${chauffeur.pickup} to ${chauffeur.dropoff}, ${chauffeur.date} at ${chauffeur.time}
                    (Vehicle: ${chauffeur.vehicle}, Passengers: ${chauffeur.passengers}, Seats: ${chauffeur.seats.join(", ")})
                    ${chauffeur.return ? `Return: ${chauffeur.returnDate} at ${chauffeur.returnTime}` : ''}
                    <span class="float-end">Price: £${chauffeurCost}</span>
                    <button class="btn btn-sm btn-danger float-end remove-item" data-type="chauffeurs" data-index="${index}" style="margin-right: 10px;">X</button>
                </li>
            `);
        });

        // Tours
        selectedBookings.tours.forEach((tour, index) => {
            const tourPricing = {
                "London Highlights Tour": 100,
                "Scotland Adventure Tour": 150,
                "UK Grand Tour": 250,
                "Complete UK Experience": 300,
                "Walse Adventure Tour": 200,
                "Lake District Experience": 180
            };

            const tourCost = tourPricing[tour.destination] * tour.people;
            totalCost += tourCost;

            summaryList.append(`
                <li class="list-group-item">
                    <strong>Tour:</strong> ${tour.destination}, ${tour.date}, People: ${tour.people}, Type: ${tour.type}, Level: ${tour.level}
                    <span class="float-end">Price: £${tourCost}</span>
                    <button class="btn btn-sm btn-danger float-end remove-item" data-type="tours" data-index="${index}" style="margin-right: 10px;">X</button>
                </li>
            `);
        });

        // Display total cost
        summaryList.append(`
            <li class="list-group-item list-group-item-dark text-center">
                <strong>Total Cost: £${totalCost}</strong>
            </li>
        `);
    }

    // Utility: Generate random booking number
    function generateBookingNumber() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let bookingNumber = '';
        for (let i = 0; i < 7; i++) {
            bookingNumber += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return bookingNumber;
    }

    // Function to format booking summary
    function formatBookingSummary() {
        let summary = '';

        // Flights
        if (selectedBookings.flights.length > 0) {
            summary += '<strong>Flights:</strong><br>';
            selectedBookings.flights.forEach((flight, index) => {
                summary += `Flight ${index + 1}: ${flight.departure} to ${flight.arrival}, Date: ${flight.date}, Time: ${flight.time}, Cabin: ${flight.cabin}, Adults: ${flight.adults}, Children: ${flight.children}`;
                if (flight.return) {
                    summary += `, Return Date: ${flight.returnDate}, Return Time: ${flight.returnTime}`;
                }
                summary += '<br>';
            });
        }

        // Hotels
        if (selectedBookings.hotels.length > 0) {
            summary += '<strong>Hotels:</strong><br>';
            selectedBookings.hotels.forEach((hotel, index) => {
                summary += `Hotel ${index + 1}: ${hotel.name}, Check-in: ${hotel.checkin}, Check-out: ${hotel.checkout}, Rooms: ${hotel.rooms}, Guests: ${hotel.guests}`;
                if (hotel.extra.length > 0) {
                    summary += `, Extras: ${hotel.extra.join(', ')}`;
                }
                summary += '<br>';
            });
        }

        // Chauffeurs
        if (selectedBookings.chauffeurs.length > 0) {
            summary += '<strong>Chauffeurs:</strong><br>';
            selectedBookings.chauffeurs.forEach((chauffeur, index) => {
                summary += `Chauffeur ${index + 1}: From ${chauffeur.pickup} to ${chauffeur.dropoff}, Date: ${chauffeur.date}, Time: ${chauffeur.time}, Vehicle: ${chauffeur.vehicle}, Passengers: ${chauffeur.passengers}`;
                if (chauffeur.return) {
                    summary += `, Return Date: ${chauffeur.returnDate}, Return Time: ${chauffeur.returnTime}`;
                }
                summary += '<br>';
            });
        }

        // Tours
        if (selectedBookings.tours.length > 0) {
            summary += '<strong>Tours:</strong><br>';
            selectedBookings.tours.forEach((tour, index) => {
                summary += `Tour ${index + 1}: ${tour.destination}, Date: ${tour.date}, People: ${tour.people}, Type: ${tour.type}, Level: ${tour.level}<br>`;
            });
        }

        return summary || 'No bookings added yet.';
    }

    // ========== Popup Functions ==========
    function showPopup(message) {
        $('#popup-message .popup-content p').text(message);
        $('#popup-message').removeClass('d-none');
        $('#popup-overlay').removeClass('d-none');
    }

    function closePopup() {
        $('#popup-message').addClass('d-none');
        $('#popup-overlay').addClass('d-none');
    }

    // Attach close event to buttons and the close icon
    $('.close-popup, #add-more').on('click', closePopup);

    // Navigate to the booking summary from popup
    $('#popup-message').on('click', '.btn-primary', function () {
        closePopup();
        $(".nav-tabs button[data-bs-target='#summary-tab']").tab('show');
    });

    // ========== Add to Booking Buttons ==========
    // Add flight to booking
    $('#add-flight').on('click', function () {
        if (validateForm('flight-form')) {
            const cabinType = $('#cabin-type').val();
            const adults = parseInt($('#adults').val());
            const children = parseInt($('#children').val() || 0);
            const price = pricing.flights[cabinType] * (adults + children * 0.5);

            const flight = {
                departure: $('#departure-airport').val(),
                arrival: $('#arrival-airport').val(),
                date: $('#flight-date').val(),
                time: $('#flight-time').val(),
                cabin: cabinType,
                adults: adults,
                children: children,
                return: $('#add-return-flight').is(':checked'),
                returnDate: $('#return-date').val(),
                returnTime: $('#return-time').val(),
                price: price,
            };
            selectedBookings.flights.push(flight);
            updateSummary();
            showPopup(`Flight added! Price: £${price}`);
            resetForm('flight-form');
        }
    });

    // Add hotel to booking
    $('#add-hotel').on('click', function () {
        if (validateForm('hotel-form')) {
            const roomType = $('#room-type').val();
            const numRooms = parseInt($('#num-rooms').val());
            const price = pricing.hotels[roomType] * numRooms;

            const hotel = {
                name: $('#hotel-name').val(),
                checkin: $('#checkin-date').val(),
                checkout: $('#checkout-date').val(),
                rooms: numRooms,
                guests: $('#num-guests').val(),
                extra: [
                    $('#baby-cot').is(':checked') ? "Baby Cot" : null,
                    $('#extra-bed').is(':checked') ? "Extra Bed" : null,
                ].filter(Boolean),
                price: price,
            };
            selectedBookings.hotels.push(hotel);
            updateSummary();
            showPopup(`Hotel added! Price: £${price}`);
            resetForm('hotel-form');
        }
    });

    // Add chauffeur to booking
    $('#add-chauffeur').on('click', function () {
        if (validateForm('chauffeur-form')) {
            const vehicleType = $('#vehicle-type').val();
            const price = pricing.chauffeur[vehicleType];

            const chauffeur = {
                pickup: $('#pickup-location').val(),
                dropoff: $('#dropoff-location').val(),
                date: $('#chauffeur-date').val(),
                time: $('#chauffeur-time').val(),
                vehicle: vehicleType,
                passengers: $('#num-passengers').val(),
                seats: [
                    $('#child-seat').is(':checked') ? "Child Seat" : null,
                    $('#booster-seat').is(':checked') ? "Booster Seat" : null,
                ].filter(Boolean),
                return: $('#add-return-chauffeur').is(':checked'),
                returnDate: $('#return-chauffeur-date').val(),
                returnTime: $('#return-chauffeur-time').val(),
                price: price,
            };
            selectedBookings.chauffeurs.push(chauffeur);
            updateSummary();
            showPopup(`Chauffeur added! Price: £${price}`);
            resetForm('chauffeur-form');
        }
    });

    // Add tour to booking
    $('#add-tour').on('click', function () {
        if (validateForm('tour-form')) {
            const tourType = $('#tour-type').val();
            const numPeople = parseInt($('#tour-num-people').val());
            const price = pricing.tours[tourType] * numPeople;

            const tour = {
                destination: $('#tour-destination').val(),
                date: $('#tour-date').val(),
                people: numPeople,
                type: tourType,
                level: $('#tour-level').val(),
                price: price,
            };
            selectedBookings.tours.push(tour);
            updateSummary();
            showPopup(`Tour added! Price: £${price}`);
            resetForm('tour-form');
        }
    });

    // ========== Event Listeners ==========
    // Toggle return flight section
    $('#add-return-flight').on('change', function () {
        if ($(this).is(':checked')) {
            $('#return-flight-section').slideDown();
        } else {
            $('#return-flight-section').slideUp();
            $('#return-date, #return-time').val('');
        }
    });

        
    $('#book-journey').on('click', function () {
    $('#customer-info-modal').modal('show');
    });

    // Booking confirmation button handler
    $('#confirm-booking').on('click', function () {
        console.log(formatBookingSummary());
        const name = $('#customer-name').val().trim();
        const email = $('#customer-email').val().trim();
        const phone = $('#customer-phone').val().trim();
    
        // Validate form fields
        if (!name || !email || !phone) {
            alert('Please fill in all required fields.');
            return;
        }
    
        // Generate random booking number
        const bookingNumber = generateBookingNumber();
    
        // Format the booking summary
        const bookingSummary = formatBookingSummary();
        console.log("Generated Booking Summary:", bookingSummary);
    
        // Prepare email data
        const emailData = {
            customer_name: name,
            customer_email: email,
            customer_phone: phone,
            bookingSummary: formatBookingSummary(),
            booking_number: bookingNumber,
        };        
    
        // Send email using EmailJS
        emailjs.send("service_9fhnu4c", "template_ic8z6td", emailData)
            .then((response) => {
                if (response.status === 200) {
                    alert(`Booking confirmed! Your booking number is ${bookingNumber}. A confirmation email has been sent.`);
                    $('#customer-info-modal').modal('hide');
                    $('#customer-info-form')[0].reset(); // Reset the form
                    
                    // Refresh the page after a brief delay
                    setTimeout(() => {
                        location.reload();
                    }, 0);
                    
                } else {
                    alert("There was an issue sending the confirmation email. Please try again.");
                }
            })
            .catch((error) => {
                console.error("EmailJS Error:", error);
                alert("Failed to send confirmation email. Please try again later.");
            });
    });        

    // Toggle return chauffeur section
    $('#add-return-chauffeur').on('change', function () {
        if ($(this).is(':checked')) {
            $('#return-chauffeur-section').slideDown();
        } else {
            $('#return-chauffeur-section').slideUp();
            $('#return-chauffeur-date, #return-chauffeur-time').val('');
        }
    });

    // Disable arrival airport if it's selected as departure
    $('#departure-airport').on('change', disableArrivalAirport);

    // Remove item from summary
    $('#summary-list').on('click', '.remove-item', function () {
        const type = $(this).data('type');
        const index = $(this).data('index');
        selectedBookings[type].splice(index, 1);
        updateSummary();
    });
    
    // ========== MAP ==========
    // Google Maps instances
    let flightMap, chauffeurMap, hotelMap, flightDirectionsService, flightDirectionsRenderer, chauffeurDirectionsService, chauffeurDirectionsRenderer, hotelMarker;

    // Initialize Maps
    function initMaps() {
    // Flight Map
    flightMap = new google.maps.Map(document.getElementById("flight-map"), {
        center: { lat: 51.470020, lng: -0.454295 },
        zoom: 6,
    });
    flightDirectionsService = new google.maps.DirectionsService();
    flightDirectionsRenderer = new google.maps.DirectionsRenderer();
    flightDirectionsRenderer.setMap(flightMap);

    // Chauffeur Map
    chauffeurMap = new google.maps.Map(document.getElementById("chauffeur-map"), {
        center: { lat: 51.470020, lng: -0.454295 },
        zoom: 6,
    });
    chauffeurDirectionsService = new google.maps.DirectionsService();
    chauffeurDirectionsRenderer = new google.maps.DirectionsRenderer();
    chauffeurDirectionsRenderer.setMap(chauffeurMap);

    // Hotel Map
    hotelMap = new google.maps.Map(document.getElementById("hotel-map"), {
        center: { lat: 51.470020, lng: -0.454295 },
        zoom: 10,
    });
    hotelMarker = new google.maps.Marker({ map: hotelMap });
}

    // Show flight route
    function showFlightRoute(departure, arrival) {
    flightDirectionsService.route(
        {
            origin: departure,
            destination: arrival,
            travelMode: google.maps.TravelMode.DRIVING,
        },
        (response, status) => {
            if (status === "OK") {
                flightDirectionsRenderer.setDirections(response);
            } else {
                alert("Could not display flight route: " + status);
            }
        }
    );
}

    // Show chauffeur route
    function showChauffeurRoute(pickup, dropoff) {
    chauffeurDirectionsService.route(
        {
            origin: pickup,
            destination: dropoff,
            travelMode: google.maps.TravelMode.DRIVING,
        },
        (response, status) => {
            if (status === "OK") {
                chauffeurDirectionsRenderer.setDirections(response);
            } else {
                alert("Could not display chauffeur route: " + status);
            }
        }
    );
}

    // Show hotel location
    function showHotelLocation(hotelAddress) {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: hotelAddress }, (results, status) => {
        if (status === "OK") {
            hotelMap.setCenter(results[0].geometry.location);
            hotelMarker.setPosition(results[0].geometry.location);
        } else {
            alert("Could not find hotel location: " + status);
        }
    });
}

    // Attach change event listeners to dropdowns
    $(document).ready(function () {
    initMaps();

    // Flights: Update points and routes on selection
    $('#departure-airport').on('change', function () {
        const departure = $(this).val();
        if (departure) {
            const geocoder = new google.maps.Geocoder();
            geocoder.geocode({ address: departure }, (results, status) => {
                if (status === "OK") {
                    flightMap.setCenter(results[0].geometry.location);
                }
            });
        }
    });

    $('#arrival-airport').on('change', function () {
        const departure = $('#departure-airport').val();
        const arrival = $(this).val();
        if (departure && arrival) {
            showFlightRoute(departure, arrival);
        }
    });

    // Chauffeur: Update points and routes on selection
    $('#pickup-location').on('change', function () {
        const pickup = $(this).val();
        if (pickup) {
            const geocoder = new google.maps.Geocoder();
            geocoder.geocode({ address: pickup }, (results, status) => {
                if (status === "OK") {
                    chauffeurMap.setCenter(results[0].geometry.location);
                }
            });
        }
    });

    $('#dropoff-location').on('change', function () {
        const pickup = $('#pickup-location').val();
        const dropoff = $(this).val();
        if (pickup && dropoff) {
            showChauffeurRoute(pickup, dropoff);
        }
    });

    // Hotels: Show pin on hotel selection
    $('#hotel-name').on('change', function () {
        const hotel = $(this).val();
        if (hotel) {
            showHotelLocation(hotel);
        }
    });
});

    // Initialise maps on page load
    initMaps();
});