# Notes

(Running comments as I complete the test)

- pytest didn't find the existing test, so I added config for it in the server directory
- [node-sass is deprecated](https://www.npmjs.com/package/node-sass), so I swapped it for [sass](https://www.npmjs.com/package/sass)
- I added an `.nvmrc` file to pin the node version to `v16.14.0` used to build/run the project since I have multiple node versions installed. See [their GitHub repo](https://github.com/nvm-sh/nvm) for instructions on how to set it up, if needed 


## TODOs

- Style client to match design
  - A11y considerations on contrast
  - A11y considerations on images/logos
  - Font doesn't quite seem to match - especially noticeable in numbers
  - Review landmarks/navigation
  - Price section doesn't have a title, so goes straight into numbers without context
  - A11y considerations on +/- controls
  - Some minor spacing here and there
  - Skip nav
  - ~~Sections~~
  - Larger displays
  - Focus states
- Add basket functionality
  - Use cookies to persist basket
  - Create a basket page with list of items in basket
  - Limit quantity to sensible levels
  - Limit basket amount to sensible levels
- Load data dynamically from backend
  - What's before this page?
  - Create landing page with list of products? On click, open lightbulb?
