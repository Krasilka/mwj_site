const collectionsSliderJSON = `
[
    {
        "id": "rough-perfection",
        "title": "ROUGH PERFECTION",
        "image": "rough-collect-slider.jpg",
        "description": "This is your Service description. Use this space to describe what the service entails, benefits for users and any other important information."
    },
    {
        "id": "gone-wild",
        "title": "GONE WILD",
        "image": "gonewild-collect-slider.jpg",
        "description": "This is your Service description. Use this space to describe what the service entails, benefits for users and any other important information."
    },
    {
        "id": "the-glow",
        "title": "THE GLOW",
        "image": "glow-collect-slider.jpg",
        "description": "This is your Service description. Use this space to describe what the service entails, benefits for users and any other important information."
    },
    {
        "id": "liquid",
        "title": "LIQUID",
        "image": "liquid-collect-slider.jpg",
        "description": "This is your Service description. Use this space to describe what the service entails, benefits for users and any other important information."
    },
    {
        "id": "the-sequence",
        "title": "THE SEQUENCE",
        "image": "sequence-collect-slider.jpg",
        "description": "This is your Service description. Use this space to describe what the service entails, benefits for users and any other important information."
    },
    {
        "id": "sensual",
        "title": "SENSUAL",
        "image": "sensual-collect-slider.jpg",
        "description": "This is your Service description. Use this space to describe what the service entails, benefits for users and any other important information."
    }
]
`;

function renderCollections (collections) {
    const sliderContainer = document.querySelector(".collections-slider-container");

    sliderContainer.innerHTML = '';

    for (const slider of collections) {
        sliderContainer.innerHTML += `
            <div class="carousel-item">
            <div class="slider-article" id="${slider.id}">
                <img src="img/slider/${slider.image}" class="d-block" alt="${slider.title}" width="100">
                            <div class="collection-info">
                                <h4>${slider.title}</h4>
                                <p>${slider.description}</p>
                                <form method="get" action="shop.html">
                                    <button class="shop-now btn btn-dark" type="submit" value="Shop now">Shop now</button>
                                </form>
                            </div>
                        </div>
                    </div>`
    }
}

renderCollections(JSON.parse(collectionsSliderJSON));

const slideArticle = document.querySelector(".carousel-item");
slideArticle.classList.add('active');



