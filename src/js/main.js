const informations = {
  name: 'pokémon',
  id: '@pokemon_company',
  post: 9,
  follower: 8934876,
  follow: 83,
  description: 'Official Instagram for The Pokémon Company International! For all things TCG ➡️ @pokemontcg',
  galerie: [
    'pokemon-picture-1.jpg',
    'pokemon-picture-2.jpg',
    'pokemon-picture-3.jpg',
    'pokemon-picture-4.jpg',
    'pokemon-picture-5.jpg',
    'pokemon-picture-6.jpg',
    'pokemon-picture-7.jpg',
    'pokemon-picture-8.jpg',
    'pokemon-picture-9.jpg',
  ]
}

function getName() {
  document.querySelector('.name').innerHTML = informations.name;
}

function getAccountsNumbersInformation() {
  const posts = document.querySelectorAll('.followers p');
  
  posts.forEach(function(item) {
    item.querySelector('.number').innerHTML = informations[item.className];
  })
}

function getId() {
  document.querySelector('.id').innerHTML = informations.id;
}

function getDescription () {
  document.querySelector('.description').innerHTML = informations.description;
}

function getGaleriesImage() {
  const pictureDom = document.querySelectorAll('.galerie div img');
  
  pictureDom.forEach(function(img, index) {
    img.src = `./src/img/${informations.galerie[index]}`;
  });
}

getId();
getName();
getAccountsNumbersInformation();
getDescription();
getGaleriesImage();