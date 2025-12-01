A simple project using JavaScript, and Node. Also, make it command-line (without IDE) if possible, so that I understand bare-metal

Great — here is a **very simple, bare-metal Node.js project** you can build **entirely from the command line**, using only:

* a folder
* Node
* npm
* a text editor (Notepad / VS Code if you like, but no IDE required)

This will teach you the fundamentals clearly.

---

# ✅ **Goal: Build a command-line Node.js project**

We will create a small CLI tool called **"greeter"** that:

```
node greet.js Jeetendra
→ Hello, Jeetendra!
```

Later, we can expand it into something more complex if you want.

---

# 🧱 STEP 1 — Create a folder

Open **Command Prompt** and run:

```cmd
mkdir greeter
cd greeter
```

---

# 📦 STEP 2 — Initialize npm (creates package.json)

```cmd
npm init -y
```

This creates a file:

```
package.json
```

This file:

* describes your project
* tracks dependencies
* defines scripts

It’s like `.pom` in Maven world, but much simpler.

---

# 📝 STEP 3 — Create Your JavaScript File

Create a file named `greet.js`.

If you want to use Notepad:

```cmd
notepad greet.js
```

Paste this code:

```js
// greet.js

// Get the 3rd command-line argument (0=node, 1=this file, 2=your input)
const name = process.argv[2];

// If no name provided
if (!name) {
  console.log("Usage: node greet.js <name>");
  process.exit(1);
}

// Print greeting
console.log(`Hello, ${name}!`);
```

Save and exit.

---

# 🏃 STEP 4 — Run the program

```
node greet.js Jeetendra
```

Output:

```
Hello, Jeetendra!
```

Try without a name:

```
node greet.js
```

You should see:

```
Usage: node greet.js <name>
```

---

# 🌱 STEP 5 — Installing a Package (Optional but important)

We’ll install a small npm package to show how it works.

Example: **colors** (adds colors to console output)

```cmd
npm install colors
```

This creates:

* `node_modules/` folder
* `package-lock.json`
* adds entry in `package.json`

Now modify `greet.js`:

```js
const colors = require("colors");
const name = process.argv[2];

if (!name) {
  console.log("Usage: node greet.js <name>".red);
  process.exit(1);
}

console.log(colors.green(`Hello, ${name}!`));
```

Run:

```
node greet.js World
```

---

# ⚙️ STEP 6 — Add an npm script (optional but common)

Edit `package.json` and add a script:

```json
"scripts": {
  "start": "node greet.js"
}
```

Now run:

```
npm start Jeetendra   ❌ ← won’t work like this
```

Because npm scripts don’t pass args directly.

Instead:

```
npm start -- Jeetendra
```

---

# 🎉 You Now Understand the Fundamentals

✔ How Node runs JavaScript files
✔ How npm initializes a project
✔ What `package.json` is
✔ What dependencies are
✔ How to run code from CLI
✔ How to read command-line arguments (`process.argv`)

This is bare-metal Node development — no frameworks, no IDE, no boilerplate.

---

# 🚀 Want to take the next step?

I can help you build:

* a **file-system project** (read/write files)
* a **small REST API** with Express
* a **CLI app published to npm**
* a **calculator**, **todo app**, or **markdown reader** using Node
* a **tiny local database project** (JSON-based DB)

Tell me which direction you want to go next.
