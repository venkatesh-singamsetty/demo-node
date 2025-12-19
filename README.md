# node-sample

Minimal Node.js sample application demonstrating a tiny HTTP server
and a simple test script using Node's built-in `assert`.

**Prerequisites**

- Install Node.js (LTS recommended). Verify with:

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

**Files**

- `package.json` - project manifest with `start` and `test` scripts
- `index.js` - exports `greet(name)` and starts a small HTTP server when run directly
- `test/test.js` - simple test using Node's `assert`
