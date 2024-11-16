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
        "Manchester Terminal 1 (MAN-T1)",
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

    const tours = [
        "London Highlights Tour", "Scotland Adventure Tour",
        "UK Grand Tour", "Complete UK Experience"
    ];

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

        // Flights
        selectedBookings.flights.forEach((flight, index) => {
            summaryList.append(`
                <li class="list-group-item">
                    <strong>Flight:</strong> ${flight.departure} to ${flight.arrival}, ${flight.date} at ${flight.time}
                    (Cabin: ${flight.cabin}, Adults: ${flight.adults}, Children: ${flight.children})
                    ${flight.return ? `Return: ${flight.returnDate} at ${flight.returnTime}` : ''}
                    <button class="btn btn-sm btn-danger float-end remove-item" data-type="flights" data-index="${index}">X</button>
                </li>
            `);
        });

        // Hotels
        selectedBookings.hotels.forEach((hotel, index) => {
            summaryList.append(`
                <li class="list-group-item">
                    <strong>Hotel:</strong> ${hotel.name}, Check-in: ${hotel.checkin}, Check-out: ${hotel.checkout},
                    Rooms: ${hotel.rooms}, Guests: ${hotel.guests}, Extra: ${hotel.extra.join(", ")}
                    <button class="btn btn-sm btn-danger float-end remove-item" data-type="hotels" data-index="${index}">X</button>
                </li>
            `);
        });

        // Chauffeurs
        selectedBookings.chauffeurs.forEach((chauffeur, index) => {
            summaryList.append(`
                <li class="list-group-item">
                    <strong>Chauffeur:</strong> ${chauffeur.pickup} to ${chauffeur.dropoff}, ${chauffeur.date} at ${chauffeur.time}
                    (Vehicle: ${chauffeur.vehicle}, Passengers: ${chauffeur.passengers}, Seats: ${chauffeur.seats.join(", ")})
                    ${chauffeur.return ? `Return: ${chauffeur.returnDate} at ${chauffeur.returnTime}` : ''}
                    <button class="btn btn-sm btn-danger float-end remove-item" data-type="chauffeurs" data-index="${index}">X</button>
                </li>
            `);
        });

        // Tours
        selectedBookings.tours.forEach((tour, index) => {
            summaryList.append(`
                <li class="list-group-item">
                    <strong>Tour:</strong> ${tour.destination}, ${tour.date}, People: ${tour.people}, Type: ${tour.type}, Level: ${tour.level}
                    <button class="btn btn-sm btn-danger float-end remove-item" data-type="tours" data-index="${index}">X</button>
                </li>
            `);
        });
    }

    // ========== Popup Functions ==========
    function showPopup(message) {
        $('#popup-message .popup-content p').text(message);
        $('#popup-message').removeClass('d-none');
        $('#popup-overlay').removeClass('d-none'); // Show overlay
    }

    function closePopup() {
        $('#popup-message').addClass('d-none');
        $('#popup-overlay').addClass('d-none'); // Hide overlay
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
            const flight = {
                departure: $('#departure-airport').val(),
                arrival: $('#arrival-airport').val(),
                date: $('#flight-date').val(),
                time: $('#flight-time').val(),
                cabin: $('#cabin-type').val(),
                adults: $('#adults').val(),
                children: $('#children').val() || 0,
                return: $('#add-return-flight').is(':checked'),
                returnDate: $('#return-date').val(),
                returnTime: $('#return-time').val()
            };
            selectedBookings.flights.push(flight);
            updateSummary();
            showPopup('Flight added to booking summary!');
            resetForm('flight-form');
        }
    });

    // Add hotel to booking
    $('#add-hotel').on('click', function () {
        if (validateForm('hotel-form')) {
            const hotel = {
                name: $('#hotel-name').val(),
                checkin: $('#checkin-date').val(),
                checkout: $('#checkout-date').val(),
                rooms: $('#num-rooms').val(),
                guests: $('#num-guests').val(),
                extra: [
                    $('#baby-cot').is(':checked') ? "Baby Cot" : null,
                    $('#extra-bed').is(':checked') ? "Extra Bed" : null
                ].filter(Boolean)
            };
            selectedBookings.hotels.push(hotel);
            updateSummary();
            showPopup('Hotel added to booking summary!');
            resetForm('hotel-form');
        }
    });

    // Add chauffeur to booking
    $('#add-chauffeur').on('click', function () {
        if (validateForm('chauffeur-form')) {
            const chauffeur = {
                pickup: $('#pickup-location').val(),
                dropoff: $('#dropoff-location').val(),
                date: $('#chauffeur-date').val(),
                time: $('#chauffeur-time').val(),
                vehicle: $('#vehicle-type').val(),
                passengers: $('#num-passengers').val(),
                seats: [
                    $('#child-seat').is(':checked') ? "Child Seat" : null,
                    $('#booster-seat').is(':checked') ? "Booster Seat" : null
                ].filter(Boolean),
                return: $('#add-return-chauffeur').is(':checked'),
                returnDate: $('#return-chauffeur-date').val(),
                returnTime: $('#return-chauffeur-time').val()
            };
            selectedBookings.chauffeurs.push(chauffeur);
            updateSummary();
            showPopup('Chauffeur added to booking summary!');
            resetForm('chauffeur-form');
        }
    });

    // Add tour to booking
    $('#add-tour').on('click', function () {
        if (validateForm('tour-form')) {
            const tour = {
                destination: $('#tour-destination').val(),
                date: $('#tour-date').val(),
                people: $('#tour-num-people').val(),
                type: $('#tour-type').val(),
                level: $('#tour-level').val()
            };
            selectedBookings.tours.push(tour);
            updateSummary();
            showPopup('Tour added to booking summary!');
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
});
