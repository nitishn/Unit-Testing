# Unit Testing

So, unit testing can be fun. Let's make it fun.

Get started with...
```
npm install
```

Next, install mocha globally (or not, your preference). Mocha is a testing platform which makes things easier to unit test than writing from scratch.
```
npm install mocha --global
```

Now you're ready to cook with JS. Run the following to run all tests in your test folder:

```
    ~/projects/unit-tests(master) » mocha test


  Check key pages for 200s
    ✓ https://tahititourisme.org/ (849ms)
    ✓ https://tahititourisme.com/ (697ms)
    ✓ https://tahititourisme.fr/fr-fr/sejours-vacances/sejours-petite-hotellerie-familiale/ (1177ms)
    ✓ https://tahititourisme.com/en-us/vacation-packages/ (1239ms)
    ✓ https://tahititourisme.fr/fr-fr/sejours-vacances/ (1529ms)
    ✓ https://tahititourisme.fr/fr-fr/iles/hebergements/ (1050ms)
    ✓ https://tahititourisme.com/en-us/island/ (894ms)
    ✓ https://tahititourisme.com/en-us/travel-planner/book-your-tahiti-vacation/ (1149ms)
    ✓ https://tahititourisme.com/en-us/island/places-to-stay/ (1097ms)


  9 passing (10s)
```

Or you can target tests individually
```
mocha test/testfile.js
```
