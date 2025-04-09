# Understanding Handlers in AO Lua Processes

In the Actor-Oriented (AO) computing paradigm on the Arweave network, `handlers` are essential constructs that define how processes respond to incoming messages. They enable AO processes to manage and execute logic based on pattern matching, facilitating responsive and autonomous decentralized programs.

---

## 🔄 What Are Handlers?

A **handler** in AO is a function that gets executed when a message matching a specific pattern arrives in a process's inbox.

Handlers follow this format:

```lua title="basic-handler.lua" description="A simple AO message handler that reacts to incoming messages with a specific tag."
Handlers.add(
  "HelloHandler",
  { Action = "SayHello" },
  function(msg)
    print("Hello from AO!")
  end
)
```

---

## 🧩 Pattern Matching

Handlers trigger when an incoming message matches a defined pattern. Patterns can be:

- **Exact Tag Match**:  
  ```lua
  { Action = "Start" }
  ```

- **Wildcard `_` Match**:  
  Matches any value:  
  ```lua
  { User = "_" }
  ```

- **Lua Pattern Match**:  
  Like regex:  
  ```lua
  { Amount = "%d+" }
  ```

- **Function-based Match**:  
  Custom logic:  
  ```lua
  { Status = function(v) return v == "done" end }
  ```

---

## 🧠 Multi-Pattern Handlers with Resolvers

You can define multiple reactions in one handler using *resolvers*:

```lua title="multi-pattern.lua" description="Handler that responds differently based on the Status tag."
Handlers.add(
  "StatusResponder",
  { Action = "Status" },
  {
    [{ Status = "Ready" }] = function(msg)
      print("🚀 Ready to launch!")
    end,
    [{ Status = "Waiting" }] = function(msg)
      print("⏳ Still waiting...")
    end,
    [{ Status = "_" }] = function(msg)
      print("🤔 Unknown status.")
    end
  }
)
```

---

## 💡 Real-Life Analogy

Think of a handler as a **mailroom sorter**.  
Each message is like a letter. Handlers open only the letters they care about — based on the tags ("To", "Action", etc.) — and reply accordingly.

---

## 🛠️ Common Use Cases

- Event-based automation  
- Chat bots  
- Task processors  
- Smart contracts on AO  
- Reactive agents or services

---

## 📖 More Resources

- [AO Cookbook: What Are Handlers?](https://cookbook_ao.g8way.io/references/handlers.html)
- [AO Concepts: Messages & Tags](https://cookbook_ao.g8way.io/concepts/messages.html)

---

> 🧪 To try it out:  
> Use [BetterIDEa](https://ide.betteridea.dev/) and define a new AO process with a handler.  
> Then send it messages from the terminal using `Send({ ... })`.

