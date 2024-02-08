document.addEventListener('DOMContentLoaded', function () {
    let listings = JSON.parse(localStorage.getItem('listings')) || [
        {
            id: 1,
            name: "Beautiful Castle",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Vivamus id rutrum mauris. Praesent hendrerit accumsan viverra.
            Vivamus id rutrum mauris. Praesent hendrerit accumsan viverra.`,
            price: 899,
            currency: '$',
            location: {
                city: 'Barcelona',
                country: 'Spain'
            },
            image: 'images/card-1.jpeg'
        },
        {
            id: 2,
            name: "Office Studio",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Vivamus id rutrum mauris. Praesent hendrerit accumsan viverra.
            Vivamus id rutrum mauris. Praesent hendrerit accumsan viverra.`,
            price: 1119,
            currency: '$',
            location: {
                city: 'London',
                country: 'UK'
            },
            image: 'images/card-2.jpeg'
        },
        {
            id: 3,
            name: "Cozy 5 Stars Apartment",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Vivamus id rutrum mauris. Praesent hendrerit accumsan viverra.
            Vivamus id rutrum mauris. Praesent hendrerit accumsan viverra.`,
            price: 459,
            currency: '$',
            location: {
                city: 'Rome',
                country: 'Italy'
            },
            image: 'images/card-3.jpeg'
        },
    ];

    function saveListingsToLocalStorage() {
        localStorage.setItem('listings', JSON.stringify(listings));
    }

    function renderListings() {
        let cardsContainer = document.querySelector('.cards');
        cardsContainer.innerHTML = '';

        listings.forEach(listing => {
            let cardWrapper = document.createElement('div');
            cardWrapper.classList.add('card-wraper');

            let card = document.createElement('div');
            card.classList.add('card');

            let cardHovered = document.createElement('div');
            cardHovered.classList.add('card-hovered');

            let imgHover = document.createElement('div');
            imgHover.classList.add('img-hover');

            let img = document.createElement('img');
            img.src = listing.image;
            img.alt = 'Image of card';

            let cardIcons = document.createElement('div');
            cardIcons.classList.add('card-icons');

            let viewButton = createIconButton('burst_mode', 'View', function () {
                alert('You clicked the view button... nothing to do here!!');
            });

            let editButton = document.createElement('span');
            editButton.classList.add('header-icon', 'tooltip-hover', 'edit');
            editButton.title = 'Edit';
            editButton.dataset.tooltip = 'Edit';
            editButton.innerHTML = '<span class="material-icons">edit</span>';
            editButton.addEventListener('click', function () {
                makeEditable(cardTitleSpan);
                makeEditable(cardParagraf);
                makeEditable(priceSpan);
                makeEditable(locationSpan);
            });

            let deleteButton = document.createElement('span');
            deleteButton.classList.add('header-icon', 'tooltip-hover', 'close');
            deleteButton.title = 'Delete';
            deleteButton.dataset.tooltip = 'Delete';
            deleteButton.innerHTML = '<span class="material-icons">close</span>';
            deleteButton.addEventListener('click', function () {
                let confirmDelete = confirm;
                if (confirmDelete) {
                    listings = listings.filter(item => item.id !== listing.id);
                    renderListings();
                    saveListingsToLocalStorage();
                }
            });

            cardIcons.appendChild(viewButton);
            cardIcons.appendChild(editButton);
            cardIcons.appendChild(deleteButton);

            imgHover.appendChild(img);
            imgHover.appendChild(cardIcons);

            cardHovered.appendChild(imgHover);

            let cardInfo = document.createElement('div');
            cardInfo.classList.add('card-info');

            let cardTitleSpan = createEditableElement('span', 'card-title', listing.name);
            let cardParagraf = createEditableElement('span', 'card-paragraf', listing.description);

            let separator = document.createElement('div');
            separator.classList.add('separator');

            let bottomContent = document.createElement('div');
            bottomContent.classList.add('bottom-content');

            let priceSpan = createEditableElement('div', 'price', `${listing.price}${listing.currency}/night`);
            let locationSpan = createEditableElement('div', 'location', `${listing.location.city}, ${listing.location.country}`);

            cardInfo.appendChild(cardTitleSpan);
            cardInfo.appendChild(cardParagraf);

            bottomContent.appendChild(priceSpan);
            bottomContent.appendChild(locationSpan);

            card.appendChild(cardHovered);
            card.appendChild(cardInfo);
            card.appendChild(separator);
            card.appendChild(bottomContent);
            cardWrapper.appendChild(card);
            cardsContainer.appendChild(cardWrapper);
        });
    }

    function createEditableElement(tagName, className, textContent) {
        let element = document.createElement(tagName);
        element.classList.add(className);
        element.contentEditable = false;
        element.textContent = textContent;
        element.addEventListener('click', function () {
            makeEditable(element);
        });
        return element;
    }

    function makeEditable(element) {
        element.contentEditable = true;
        element.focus();

        element.addEventListener('blur', function () {
            element.contentEditable = false;
            let newText = element.textContent.trim();
            if (newText !== '') {
                if (element.classList.contains('card-title')) {
                    listings.find(item => item.id === listing.id).name = newText;
                } else if (element.classList.contains('card-paragraf')) {
                    listings.find(item => item.id === listing.id).description = newText;
                } else if (element.classList.contains('price')) {
                    let newPrice = parseFloat(newText);
                    if (!isNaN(newPrice)) {
                        listings.find(item => item.id === listing.id).price = newPrice;
                    }
                } else if (element.classList.contains('location')) {
                    let [newCity, newCountry] = newText.split(',').map(item => item.trim());
                    listings.find(item => item.id === listing.id).location.city = newCity;
                    listings.find(item => item.id === listing.id).location.country = newCountry;
                }

                saveListingsToLocalStorage();
                renderListings();
            }
        });

        element.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                element.blur();
            }
        });
    }

    function createIconButton(iconName, tooltip, clickHandler) {
        let button = document.createElement('span');
        button.classList.add('header-icon', 'tooltip-hover');
        button.title = tooltip;
        button.dataset.tooltip = tooltip;
        button.innerHTML = `<span class="material-icons">${iconName}</span>`;
        if (clickHandler) {
            button.addEventListener('click', clickHandler);
        }
        return button;
    }

    window.addEventListener('click', function (event) {
        let modal = document.getElementById('editModal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    let closeModalButton = document.querySelector('.close');
    closeModalButton.addEventListener('click', function () {
        let modal = document.getElementById('editModal');
        modal.style.display = 'none';
    });

    renderListings();
});
