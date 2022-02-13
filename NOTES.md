# README!

This was fun! I have left below a long list of TODOs, I wouldn't consider this app "done". Time as ran away a little, and this is as far as I got.  
I don't mind continuing if needed, otherwise hopefully this is enough to show what I can do.

To run the app:
- Start the server following the instructions provided in the README
  - Don't forget to run migrations and adding data to the DB
  - This should start the server on port 8000
- Start the client
  - `cd octopus/client && npm install && npm start`
  - As mentioned below, the app was built using node `v16.14.0`. Results might vary with other node versions (at least major versions!)
  - As mentioned below I ended up using `npm` rather than `yarn` - also because that's what I'm more used to

The app will load on port 3000 (http://localhost:3000). The app is set up to proxy requests to the server (see `proxy` in `client/package.json`). This is because "in the real world" I'd imagine the UI and server living under the same domain and avoid CORS complications.

For reference, I've taken a full-page screenshot of the latest version of the app, and saved it in `DesignMatch.png`.

## Notes

(Running comments as I complete the test)

- pytest didn't find the existing test, so I added config for it in the server directory
- [node-sass is deprecated](https://www.npmjs.com/package/node-sass), so I swapped it for [sass](https://www.npmjs.com/package/sass)
- I added an `.nvmrc` file to pin the node version to `v16.14.0` used to build/run the project since I have multiple node versions installed. See [their GitHub repo](https://github.com/nvm-sh/nvm) for instructions on how to set it up, if needed 
- I updated all libraries in the client since they were quite outdated and had known vulnerabilities
- Now that the client fetches data from the server, both need to be running in order for the app to work

## TODOs

- ~~Style client to match design~~
  - A11y considerations on contrast
    - Quantity + power is not contrasty enough
    - Some button labels
    - The link on the basket page (and styling the button there too) 
  - Should the Octopus Logo send the user somewhere?
  - Font doesn't quite seem to match - especially noticeable in numbers
  - Review landmarks/navigation
  - ~~Price section doesn't have a title, so goes straight into numbers without context~~
  - A11y considerations on +/- controls
    - Would replace these controls with something like [an accessible listbox](https://reach.tech/listbox)
  - Some minor spacing here and there
  - Skip nav
  - ~~Sections~~
  - Larger displays
    - Not terrible but could use with the usual fitting in the central column
    - Probably also put more sections side to side
  - Focus states
    - Not sure if they are contrast-y enough
- ~~Add basket functionality~~
  - ~~Use cookies to persist basket~~
  - ~~Create a basket page with ability to clear basket~~
  - Create a basket page with list of items in basket, probably total price, checkout
  - ~~Limit quantity to sensible levels~~
  - Limit basket amount to sensible levels
    - How many items in the basket before they should get in touch for a bulk order?
    - This means adding logic to the 'add to basket' functionality to throw errors after a while, for the product page to catch and show
- ~~Load data dynamically from backend~~
  - Improve loading state and error components
    - Loading page is really just a placeholder and needs more thought
  - What's before this page?
    - There should be a products list page which fetches all products from the backend, displays them paginated, each links to the product page
- Typescript
- Script to start client+server at the same time
