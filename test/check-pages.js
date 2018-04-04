let chai      = require("chai");
let chaiHttp  = require("chai-http");
let expect    = chai.expect;
chai.use(chaiHttp);

// We are using time to generate a unique value we can use to burst through caches.
let random = new Date().getTime();

let pagesToCheck = [
  // Test some key URLs for 200s
  'https://tahititourisme.org/',
  'https://tahititourisme.com/',
  'https://tahititourisme.fr/fr-fr/sejours-vacances/sejours-petite-hotellerie-familiale/',
  'https://tahititourisme.com/en-us/vacation-packages/',
  'https://tahititourisme.fr/fr-fr/sejours-vacances/',
  'https://tahititourisme.fr/fr-fr/iles/hebergements/',
  'https://tahititourisme.com/en-us/island/',
  'https://tahititourisme.com/en-us/travel-planner/book-your-tahiti-vacation/',
  'https://tahititourisme.com/en-us/island/places-to-stay/'
];

describe('Check key pages for 200s', () => {
  pagesToCheck.map((item) => {
    return it(item, function(done) {
        this.timeout(50000);
        chai.request(item)
        .get('/?' + random)
        .end((error, response) => {
          expect(response).to.have.status(200);
          done();
        })
    });
  });
});
