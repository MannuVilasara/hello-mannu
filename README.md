# hello-mannu

A beautiful CLI tool to introduce Manu.

## Installation

```bash
npm install -g hello-mannu
```

Or run locally:

```bash
npx hello-mannu
```

## Usage

```bash
hello-mannu
```

This will display a colorful introduction with ASCII art and contact links.

## Publishing

This project uses GitHub Actions to automatically publish to NPM on new releases.

### Setup for Publishing

1. Create a GitHub repository and push this code.
2. Go to your NPM account and generate an access token.
3. In your GitHub repository settings, add a secret named `NPM_TOKEN` with the token value.
4. Create a new release on GitHub to trigger the publish workflow.

## Development

- Clone the repo
- Run `npm install`
- Edit `bin/hello-mannu.js` to customize
- Test with `npx hello-mannu`
