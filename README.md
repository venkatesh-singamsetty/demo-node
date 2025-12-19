# demo-node

This is a minimal example project to demonstrate Node.js development workflow - a starting point for learning or testing.
- **Main module**: `index.js` exports a `greet(name)` function
- **HTTP server**: Returns "Hello, world!" when accessed via browser or curl
- **Configurable port**: Defaults to port 3000, configurable via `PORT` environment variable
- **Tests**: Unit tests verify that `greet()` works correctly using Node's built-in `assert`

## Project Structure

```
demo-node/
├── index.js         # Main application with HTTP server
├── package.json     # Project manifest with scripts
├── package-lock.json # Dependency lock file (commit this)
└── test/
    └── test.js      # Unit tests
```

**Prerequisites**

- Install Node.js (LTS recommended). Verify with:

Tested with:
- Node.js: `v24.12.0`
- npm: `11.6.2`

```bash
node --version
npm --version
```

**Install dependencies**

This project uses only the Node.js standard library. To install (no-op when no dependencies):

```bash
npm install
```

**Run tests**

```bash
npm test
```

**Start the application**

```bash
npm start
```

The server listens on port `3000` by default. Set `PORT` to change it, e.g. `PORT=4000 npm start`.
