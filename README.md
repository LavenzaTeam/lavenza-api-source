# Lavenza API

Here is the source of the Lavenza API, these YAML files are compiled into JSON and used as data for the "API".
In the future I plan on creating an actual REST API for this, but for now, when the website goes live, you'll be able to use something like `fetch(url);` in NodeJS to get the entire JSON file.
Below is an example of how you will be able to use the "API" in its current state.

```js
let fetch = require("node-fetch");
let fetchedData = fetch("url");
let res = await fetchedData.json();

console.log(res.persona.arsene);
```

As stated above, in the future, I plan on creating an actual REST API so that you only get the data that you need instead of the whole file, but this will do for now.