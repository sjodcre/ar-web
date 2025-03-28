# 📦 Setting Up AOS (AO Operating System)

AOS (AO Operating System) is the command-line interface (CLI) and runtime environment for **AO: The Hyper Parallel Computer**. It allows developers to build and interact with AO processes (similar to smart contracts) and leverage AO’s decentralized compute model.

---

## 🚀 1. Prerequisites

Before installing **AOS**, ensure you have the following dependencies installed:

- [NodeJS](https://nodejs.org/) **v20+**  
- [Yarn](https://yarnpkg.com/) (for development purposes)  
- [Docker](https://www.docker.com/) (for advanced development)  

---

## 🔧 2. Installing AOS

To install **AOS**, run the following command:

```sh
npm i -g https://get_ao.g8way.io && aos
```

🔹 **Note:**  
After running `aos` for the first time, it installs itself on your machine.  
Next time, you can simply run:

```sh
aos
```

---

## 🛠️ 3. Setting Up AOS for Development

If you want to build AOS from source or modify it, follow these steps:

```sh
git clone https://github.com/permaweb/aos.git
cd aos
yarn
yarn build
yarn start
```

---

## ⚡ 4. Running AOS Processes

In AOS, **Processes** are like smart contracts that execute code. You can create and interact with these processes using the CLI.

### **4.1 Creating a New Process**
To create a new AO Process:

```sh
aos new myProcess
```

### **4.2 Running a Process**
Once a process is created, you can start interacting with it by running:

```sh
aos myProcess
```

---

## 🔥 5. Using AOS Command-Line Flags

AOS supports various flags to customize how a process runs:

| **Flag**                | **Description** |
|-------------------------|---------------|
| `--relay [Relay URL]`   | Enables payment processing via HyperBEAM relay |
| `--cron [Interval]`     | Executes the process at specified intervals (e.g., `10-minutes`, `5-hours`, `10-blocks`) |
| `--get-blueprints [dir]` | Loads predefined **Lua scripts** (blueprints) into the process |
| `--load [luaFile]`      | Loads a Lua script from a local file |
| `--sqlite`              | Uses SQLite module for local storage within AOS |
| `--tag-name [name]` `--tag-value [value]` | Adds metadata tags to the process |

Example usage:

```sh
aos myProcess --cron 5-minutes --load ./script.lua
```

---

## 📜 6. Deploying a Process with Boot Scripts

AOS allows you to **auto-run Lua scripts** when a process starts. You can do this by setting the `On-Boot` tag.

#### **Using a local script:**
```sh
aos boottest --tag-name="On-Boot" --tag-value="Data" --data=./startup.lua
```

#### **Using a stored script from Arweave:**
```sh
aos boottest --tag-name="On-Boot" --tag-value="arweavetxid"
```

---

## 🏗️ 7. Advanced AOS Development

### **7.1 Setting Up AOS for Advanced Development**
For custom module development, run:

```sh
curl -L https://install_ao.g8way.io | bash
```

Then follow the installation instructions.

### **7.2 Building the AOS WASM Module**
If you're modifying the AOS runtime, you may need to rebuild the WebAssembly (WASM) module:

```sh
cd process
docker run -v .:/src p3rmaw3b/aos-sqlite:0.0.0 emcc-lua
yarn
yarn test
yarn deploy-sqlite
```

After deploying, copy the **module ID** and update your `package.json` or `README.md`.

---

## 🔗 8. Useful Links & Documentation

- 📖 [AO Compute Documentation](https://cookbook_ao.g8way.io/)  
- 🔗 [AOS GitHub Repository](https://github.com/permaweb/aos)  
- 💡 [Understanding AO Compute](https://arweave.org/)  

---

### 🎉 Now you are ready to run **AOS** and start building decentralized applications using **AO: The Hyper Parallel Computer!** 🚀
