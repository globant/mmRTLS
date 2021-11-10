# rtls-control-server
This is the REST API to manage the models related to the mmRTLS project, it handles 7 different controllers:

- Beacon Controller: in charge of managing the beacon position, transmission power and its mac address
- File Upload/Download Controller: in charge of managing binary artifacts such as the map image
- Map Controller: in charge of managing the map image, position and size
- NavDev Controller: in charge of the navigation device information
- NavDevPositionController / Position Controller: In charge of the navigation device positions

## First use:

After following the install procedure, it's required to initialize or migrate a database, for such is required to execute the following command.

Local execution mode
``` yarn migrate ```

dockerized execution mode
```  docker exec -it docker_mmrtls-rest_1 yarn migrate ```

Where docker_mmrtls-rest_1 is the name of your docker rest container

This application is generated using [LoopBack 4 CLI](https://loopback.io/doc/en/lb4/Command-line-interface.html) with the
[initial project layout](https://loopback.io/doc/en/lb4/Loopback-application-layout.html).

## Install dependencies

By default, dependencies were installed when this application was generated.
Whenever dependencies in `package.json` are changed, run the following command:

```sh
yarn install
```

## Run the application

```sh
yarn start
```

You can also run `node .` to skip the build step.

Open http://127.0.0.1:3000 in your browser.

## Rebuild the project

To incrementally build the project:

```sh
yarn run build
```

To force a full build by cleaning up cached artifacts:

```sh
yarn run rebuild
```

## Fix code style and formatting issues

```sh
yarn run lint
```

To automatically fix such issues:

```sh
yarn run lint:fix
```

## Other useful commands

- `yarn run migrate`: Migrate database schemas for models
- `yarn run openapi-spec`: Generate OpenAPI spec into a file
- `yarn run docker:build`: Build a Docker image for this application
- `yarn run docker:run`: Run this application inside a Docker container

## Tests

```sh
yarn test
```

## What's next

Please check out [LoopBack 4 documentation](https://loopback.io/doc/en/lb4/) to
understand how you can continue to add features to this application.

[![LoopBack](https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)
