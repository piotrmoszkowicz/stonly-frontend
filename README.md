# stonly-frontend [![Build Status](https://travis-ci.com/piotrmoszkowicz/stonly-frontend.svg?token=xekqxJ6rqHWZ9UVWqDYR&branch=master)](https://travis-ci.com/piotrmoszkowicz/stonly-frontend)

Recruitment task for Stonly.

## Requirements

Following stuff must be installed in order to make app work correctly:

* [Node.js](https://nodejs.org) version 10.15.3

## Tasks

Task                     | Description
-----                    | -----------
`build`                  | Compiles app and makes ready for prod environment
`dev`                    | Serves develop version of the app
`check`                  | `npm run lint && npm run test:e2e-headless`
`lint`                   | Reformats and checks for code style rules
`test:unit`              | Runs unit tests (none of them are there)
`test:e2e`               | Runs e2e test
`test:e2e-headless`      | Runs e2e test in headless mode
