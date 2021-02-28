# Library Boilerplate

Simple NPM library boilerplate with Typescript, Jest and Github Worflows.

## Commands

- **yarn build**: Build the library and generate TS types.
- **yarn dev**: Start Jest in watch mode.
- **yarn test**: Single test pass.
- **yarn format**: Format the code using prettier.

## CI Workflow

### Feature Branch PR

Create a feature branch off of the `main` branch, make your changes and use `git cz` to commit your changes. To get started with commitizen check out https://www.npmjs.com/package/commitizen.

Creating a PR will run lint, and test CI, along with attempting to publish a pre-release of your changes. A pre-release package will only be published if the following conditions are met:

- Your PR updates the package.json version
- Version is not already published
- Your updated version matches `{SEMVER}-beta.{VERSION}`

For example, `1.2.3-beta.0` would represent the first prerelease version of PR 12 that would attempt to be published by the CI pipeline. If the version already exists, publish will be skipped until the prerelease version has been updated again to `1.2.3-beta.1`.

### Production Release

Merging your PR to `main` will not trigger a release, instead it will open or update a PR that contains relevant changelog updates since the last production release.

This PR acts as a queue of work that will be release in the next deployment, as well as manages bumping the semantic version to the appropriate new version based on the commit messages.

Once you are ready to release, just merge this auto-generated PR back to `main` and a release will be triggered for the new version number.
