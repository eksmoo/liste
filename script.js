// Données des "Modules d'Acquisition Stratégique"
// Modifiez ou ajoutez vos projets/cadeaux ICI !

const wishlistItems = [
    {
        title: "Autocollants guitare :",
        description: "Optimisation visuelle du matériel instrumental sur manche ou corps de guitare, pour une personnalisation réversible.",
        image: "https://m.media-amazon.com/images/I/71lEl6XtO0L._AC_SX569_.jpg",
        link: "https://www.amazon.fr/PLIGREAT-Autocollants-Acoustique-Instrument-Fournitures/dp/B0CM8ZWHFN/ref=sr_1_10?__mk_fr_FR=ÅMÅŽÕÑ&crid=CM6QKPXJHFPY&dib=eyJ2IjoiMSJ9.eVXdQmmY15FO3h_InnsVh1U1WBFcMdqSwjmsxAUv0ieSeimJTWVTS84PT-_s5hKiMllYUb_TQfz1KxVGKCSaeoxKmHbYk5gqEO9evXJJOozD00s-g29YB3c3zZ_ItWkh7waxaydNg6L3OKjp2mZi5c0aWp3bHc9bgd5PgWFwznb0VtkR8hg3VoocBIrJjR-UVRE5zcqsTCAv7QJTGsQmKGwBoisH8yxsROHQcO8t41MTmnxO3HXa2B7kzX5KX9a3Mu-k0MBQQopeqy9yiVqXv6gvFS8mFaYLjqMAfNi35mU.jiqT4Ml2mzwfKwhvb9M1szpACLfYpUC0cuHIG6Sjp90&dib_tag=se&keywords=Stickers+Pour+Guitare+blues&qid=1765065587&sprefix=stickers+pour+guitare+blues%2Caps%2C73&sr=8-10",
        category: "Musique",
        budget: "~10 EUR",
        priority: "Moyenne",
        status: "En attente",
        icon: "fa-guitar"
    },
    {
        title:  "Sangle guitare Vintage :",
        description: "Amélioration ergonomique pour sessions prolongées. Sangle de guitare en cuir ou toile tressée, style 'vintage blues'. Robustesse et confort accrus sont requis.",
        image: "https://m.media-amazon.com/images/I/81ITISTd49L._AC_SX569_.jpg",
        link: "https://www.amazon.fr/Ernie-Ball-Guitare-jacquard-Blossom/dp/B0C76N3T93/ref=asc_df_B0C76N3T93?mcid=f6b8c2b604a93a2c8eaeb988aa741d67&tag=googshopfr-21&linkCode=df0&hvadid=701508078411&hvpos=&hvnetw=g&hvrand=5141710363803199632&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9056593&hvtargid=pla-2195742411257&psc=1&hvocijid=5141710363803199632-B0C76N3T93-&hvexpln=0",
        category: "Musique",
        budget: "~30 EUR",
        priority: "Haute",
        status: "Nécessaire",
        icon: "fa-music"
    },
    {
        title: "Lot Médiators Jazz III XL (1.5mm) :",
        description: "Outil de précision pour la performance instrumentale. Pack de médiators Dunlop Jazz III XL, épaisseur 1.5mm. Essentiel pour la vélocité et la clarté d'attaque.",
        image: "https://m.media-amazon.com/images/I/81xdMoskK4L._AC_SX569_.jpg",
        link: "https://www.amazon.fr/Jim-Dunlop-466p1-50-Tortex-Picks-12-pièces/dp/B079TF5YVH/ref=sr_1_5?dib=eyJ2IjoiMSJ9.7ngcqDIFwv223GMfWzTULL0PpLyynEvyJzrCDKS8ZmnY6-R0PchOErr-tu7OTX6b-IPTHKJgWMgMYRv3PIomRmjiHiVXw1ajdwqtUZ-5DJAIiC9o4E_N944a3D8czXCQJEJ8iR1DK1K92Gg1yEkbdZAn_xgZGDDXBvlqMi1afJOF_Yb489Y5W0fbzoKCgsY4WKPn0LYmDUpqo8NPvS4kSrxriwVHkgLH7ehOjFVvWLz5iuPJKODlKHyBASR2UpP8Mg7Y_bqIp0POqEjmK4FxpqYkXoRoH6w6HXU8zjJauZE.AHGFwuX-jyi8MIKM8_biIzXzdS229B19iqX7t9Jsu7I&dib_tag=se&keywords=dunlop%2Bjazz%2Biii%2Bxl&qid=1765065836&sr=8-5&th=1z",
        category: "Musique",
        budget: "~5-15 EUR",
        priority: "Haute",
        status: "Nécessaire",
        icon: "fa-hand-rock"
    },
    {
        title: "T-Shirt Compression Manches Longues :",
        description: "Équipement sportif. Maillot technique à manches longues pour gestion thermique et support musculaire.",
        image: "https://m.media-amazon.com/images/I/61lJoviB68L._AC_SX679_.jpg",
        link: "https://www.amazon.fr/LANBAOSI-Imitation-Manches-Longues-Protection/dp/B0CQM5J1T6/ref=sr_1_8?dib=eyJ2IjoiMSJ9.4WQlNxQ9ONTMKOv7TXrO_wb20wRALuuRMrmkx49N8rHrjDdnBwiBAmqfUNUQrq6aA0NPpdvasF9uPFdVmhWiv5U5Q6lYzMDGSHaxCY0zfCr4ofIF6sLTtz-nwP4wBcX2ZkZUT_Xh7Jl8vavDs5cP26nEx0fjJI-35ZRWstfiA9HZgaKtfbrQ-D6JO6DzrWeEJf9WZlHqbiIfXXMpRp84pplA-R2GWKzW0kkOrvL7qByfSgyKe-s6L0Vg5McS-k4Y2wls7zix2ggpnyJMP0Cl6_KgHlKr6uchqEJO_lEUDQE.jVe_igI8Vj9fNUugf7ZfTMqvqIhM_mLtJYEM63bPFmY&dib_tag=se&keywords=tshirt%2Bcompression%2Bhomme%2Bmanche%2Blongue&qid=1765066050&sr=8-8&th=1&psc=1",
        category: "Sport",
        budget: "30-60 EUR",
        priority: "Moyenne",
        status: "En attente",
        icon: "fa-running"
    },
    {
        title: "Pickguard Squier Strat HSS (Noir) :",
        description: "Maintenance et personnalisation du matériel. Plaque de protection (pickguard) pour Squier Stratocaster, configuration HSS.",
        image: "https://m.media-amazon.com/images/I/51-oPEbaaeL._AC_SX569_.jpg",
        link: "https://www.amazon.fr/Musiclily-Pickguard-électrique-Stratocaster-Standard/dp/B011O1A1U2/ref=sr_1_1?__mk_fr_FR=ÅMÅŽÕÑ&crid=2F3RHDSR1GO8I&dib=eyJ2IjoiMSJ9.bWLL4ExRbm0wVIke_SIpHE44fRxKCua9UdHx6ikbUnvigwkkiKomAzkVTnsumtxdVV6d80MLAKSQrfwMoZmFAfarn3vgJ8rDMHINSET-H8e6gFVWMcK4rRliIUoJMjogAfXAEAnwGudBYhrr1y6P4OwpswRElV7rFS2i4TB4NarSrxTaExnESZjqPgxW6NJNCCu7MFNgRRFFoFJ6t-lXvNgzZq2KFbQKVrsPf6glE9nCBPfTILrvAjBJaWHbzAURutftxRkebPOpvFwbP6Wfxf4fZ4hF8-FZZo3RqChvAAQ.9zkBmr1rX-UmP9huN8zKycZPyaL9eHm45DRS4mv4LmU&dib_tag=se&keywords=pickguard%2Bstratocaster%2Bsquier%2Bhss&qid=1765066280&sprefix=pickguard%2Bstratocaster%2Bsquier%2Bhss%2Caps%2C73&sr=8-1&th=1",
        category: "Musique",
        budget: "20-45 EUR",
        priority: "Moyenne",
        status: "Planifié",
        icon: "fa-screwdriver-wrench"
    },
    {
        title: "Sac de Couchage Trekking :",
        description: "Équipement d'expédition. Sac de couchage technique, léger et compact, pour environnements extérieurs. Indice de confort 0°C à 5°C.",
        image: "https://assets.militaria.pl/assets/Produkty/254052/Spiwor-Snugpak-Sleeper-Extreme-Olive-lewy-1024344-otwarty.jpg",
        link: "https://military.eu/fr/p/snugpak/sac-de-couchage-sleeper-extreme-gauche-snugpak-olive-254052",
        category: "Aventure",
        budget: "80 EUR et +",
        priority: "Haute",
        status: "Nécessaire",
        icon: "fa-campground"
    },
    {
        title: "Carte Cadeau Decathlon :",
        description: "Objectif : Trouver un sac à dos de randonnée adapté de 60-70L. Carte cadeau Decathlon pour flexibilité d'achat.",
        image: "https://s3.nexylan.net/dkt-prod/greetings_step_home_desktop/d0/05/b2d84c3c8a9dd9b467103eeff1d1.png",
        link: "https://carte-cadeau.decathlon.fr/fr_FR/",
        category: "Flexible",
        budget: "Montant Libre",
        priority: "Haute",
        status: "Nécessaire",
        icon: "fa-gift"
    },
     {
        title: "Cordes Guitare :",
        description: "Pack de cordes de rechange pour guitare électrique, objectif blues-jazz.",
        image: "https://m.media-amazon.com/images/I/81awhsmcq9L._AC_SX569_.jpg",
        link: "https://www.amazon.fr/DAddario-EXL115-Nickel-Wound-électriques/dp/B000HP0ND2/ref=asc_df_B000EENCQQ?mcid=aaca593d235f373f9e3f8d7725f9db3a&tag=googshopfr-21&linkCode=df0&hvadid=701508078417&hvpos=&hvnetw=g&hvrand=16107470287020116518&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9056593&hvtargid=pla-384987107235&hvocijid=16107470287020116518-B000EENCQQ-&hvexpln=0&th=1",
        category: "Flexible",
        budget: "Montant Libre",
        priority: "Haute",
        status: "Nécessaire",
        icon: "fa-gift"
    },
];

const container = document.getElementById('wishlist-container');

// Fonction pour créer la structure HTML d'une carte de "module"
function createGiftCard(item) {
    const card = document.createElement('div');
    card.classList.add('gift-card');
    
    // Détermine la classe du badge de priorité
    let priorityClass = 'badge-priority-medium'; // Par défaut
    if (item.priority === 'Haute' || item.priority === 'Critique') {
        priorityClass = 'badge-priority-high';
    } else if (item.priority === 'Moyenne') {
        priorityClass = 'badge-priority-medium';
    }
    
    // Contenu HTML pour la carte
    card.innerHTML = `
        <div class="gift-image-container">
            <img src="${item.image}" alt="Module ${item.title}">
            <span class="status-overlay">${item.status.toUpperCase()}</span>
        </div>
        <div class="gift-content">
            <h2><i class="fas ${item.icon}"></i> ${item.title}</h2>
            
            <div class="badges-container">
                <span class="badge badge-category">${item.category}</span>
                <span class="badge ${priorityClass}">Priorité : ${item.priority}</span>
                <span class="badge badge-budget">Budget : ${item.budget}</span>
            </div>
            
            <p>${item.description}</p>
            <a href="${item.link}" target="_blank" class="gift-link">
                <i class="fas fa-external-link-alt"></i> Le lien juste ici !
            </a>
        </div>
    `;

    return card;
}

// Génère et affiche les cartes de module
wishlistItems.forEach(item => {
    const cardElement = createGiftCard(item);
    container.appendChild(cardElement);
});