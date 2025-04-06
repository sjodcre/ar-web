# Building a CRUD App on Arweave's AO with BetterIDEa

## 1. Backend Setup with BetterIDEa IDE

This section walks you through setting up the backend for your CRUD application on [AO by Arweave](https://ao.arweave.dev) using the [BetterIDEa IDE](https://ide.betteridea.dev/).

### 1.1 Create New Project with SQLite Module
1. Open BetterIDEa IDE.
2. Create a new project.
3. Ensure the **SQLite module** is selected during project setup.

### 1.2 What is a Module in AO?
Modules in AO are **prebuilt libraries** that can be loaded to extend your process with specific functionality like databases, logging, or networking. They can be used to **spin up a new process** with specific behaviors.

- Modules are key building blocks in AO's composable compute model.
- They can be injected into new processes at runtime for flexible, modular development.

References:
- [Modules Overview – AO Cookbook](https://cookbook_ao.g8way.io/guides/aos/intro.html#modules)
- [Processes and Modules – AO Concepts](https://cookbook_ao.g8way.io/concepts/processes.html)

### 1.3 Using APM to Install Packages

#### 1.3.1 What is APM?
**APM (AO Package Manager)** is the official package manager for AO, similar to npm or pip. It allows developers to install, manage, and update reusable packages in AO.

- APM (on Arweave): Package publishing and management system.
- APM (on AO): Facilitates installation of modular components in your AO compute environment.

Visit: [APM Docs](https://apm.betteridea.dev)

#### 1.3.2 Load APM Blueprint in Terminal
```bash title="load-blueprint-apm.sh" description="Loads the APM blueprint to make package installation commands available."
.load-blueprint apm
```

#### 1.3.3 Update APM
```lua title="update-apm.lua" description="Ensures your APM is on the latest version."
apm.update()
```

#### 1.3.4 Install DbAdmin Package
```lua title="install-dbadmin.lua" description="Installs the @rakis/DbAdmin package for managing SQLite."
apm.install("@rakis/DbAdmin")
```

### 1.4 Define the CRUD Logic

Copy each code block into your AO environment and click the **green run button** on the left side of each cell.

#### 1.4.1 Initialize SQLite and DbAdmin

Add this as the **first code cell** before creating tables or adding handlers:

```lua title="init-db.lua" description="Initialize SQLite in-memory database and create a DbAdmin instance."
local sqlite3 = require("lsqlite3")
local dbAdmin = require("@rakis/DbAdmin")

-- Open an in-memory database
db = sqlite3.open_memory()

-- Create a DbAdmin instance
admin = dbAdmin.new(db)
```

#### 1.4.2 Create the `Posts` Table
```lua title="create-posts-table.lua" description="Creates the Posts table if it doesn't already exist."
local POSTS = [[
  CREATE TABLE IF NOT EXISTS Posts (
    AutoID INTEGER PRIMARY KEY AUTOINCREMENT,
    Title TEXT NOT NULL,
    Body TEXT NOT NULL,
    Timestamp INTEGER NOT NULL
  );
]]

db:exec(POSTS)
return admin:tables()
```

#### 1.4.3 CRUD Handlers

**Handlers** in AO are event-driven functions that listen to incoming messages in the process inbox. When a message arrives with an `Action` tag that matches a handler name, the respective function is executed.

Think of handlers like **API endpoints** in traditional Web2 backend systems. Just like a `POST /create` route in Express.js would trigger a controller to insert a record into a database, an AO handler listens for `Create-Post` actions and runs logic to insert into the SQLite table.

More on this: [AO Cookbook – Inbox and Handlers](https://cookbook_ao.g8way.io/guides/aos/inbox-and-handlers.html#what-are-handlers)

```lua title="post-handlers.lua" description="CRUD Handlers for communicating with the database."
Handlers.add("Create-Post", "Create-Post", function(msg)
  local title = msg.Tags["Title"]
  local body = msg.Tags["Body"]
  local timestamp = tonumber(msg.Timestamp)
  print("Saving new data")
  admin:apply([[INSERT INTO Posts (Title, Body, Timestamp) VALUES (?, ?, ?)]], { title, body, timestamp })
  msg.reply({ Action = "Create-Post", Data = "Success" })
end)

Handlers.add("Read-Posts", "Read-Posts", function(msg)
  local posts = admin:exec([[SELECT * FROM Posts ORDER BY Timestamp DESC;]])
  msg.reply({ Action = "Posts", Data = require('json').encode(posts) })
end)

Handlers.add("Update-Post", "Update-Post", function(msg)
  local id = tonumber(msg.Tags.AutoID)
  local title = msg.Tags.Title
  local body = msg.Tags.Body
  admin:apply([[UPDATE Posts SET Title = ?, Body = ? WHERE AutoID = ?]], { title, body, id })
  msg.reply({ Action = "UpdatePost", Data = "Updated" })
end)

Handlers.add("Delete-Post", "Delete-Post", function(msg)
  local id = tonumber(msg.Tags.AutoID)
  admin:apply("DELETE FROM Posts WHERE AutoID = ?", { id })
  msg.reply({ Action = "DeletePost", Data = "Deleted" })
end)
```

### 1.5 Test CRUD Operations via Terminal
Run these commands directly in the **terminal**, and view the output in the **Inbox**.

#### 1.5.1 Create Post
```lua title="create-post-test.lua" description="Test creating a post via AO Send command."
Send({Target = ao.id, Action = "Create-Post", Title = "title 7", Body = "hello 7"})
```

#### 1.5.2 Read Posts
```lua title="read-posts-test.lua" description="Test reading all posts from the database."
Send({Target = ao.id, Action = "Read-Posts"})
```

#### 1.5.3 Update Post
```lua title="update-post-test.lua" description="Test updating a post with AutoID = 3."
Send({Target = ao.id, Action = "Update-Post", AutoID = "3", Title = "test update", Body = "change ittt"})
```

#### 1.5.4 Delete Post
```lua title="delete-post-test.lua" description="Test deleting a post with AutoID = 11."
Send({Target = ao.id, Action = "Delete-Post", AutoID = "11"})
```

### 1.6 exec vs apply vs select (DbAdmin)

- **exec**: Executes a SQL query and **returns results** (e.g., SELECT).
- **apply**: Executes a SQL query **without returning results** (e.g., INSERT, UPDATE, DELETE).
- **select**: Alias or wrapper for executing queries that return data.

Full reference: [DbAdmin Package Documentation](https://apm.betteridea.dev/pkg?id=@rakis/DbAdmin)

---

## 2. Frontend Setup with React + Vite + TypeScript

This section walks through building a frontend to interact with the AO CRUD backend.

### 2.1 Create the React Project

```bash title="create-project.sh" description="Scaffold a new Vite React + TypeScript project."
npm create vite@latest ao-posts-ui -- --template react-ts
cd ao-posts-ui
npm install
```

### 2.2 Install Required Packages

```bash title="install-dependencies.sh" description="Install TailwindCSS, AO Connect SDK, and React Router DOM."
npm install tailwindcss @tailwindcss/vite @permaweb/aoconnect react-router-dom
```

> ⚠️ Follow the TailwindCSS v4 setup guide for Vite here: https://tailwindcss.com/docs/installation/using-vite

- In `src/index.css`, keep only:
  ```css title="index.css" description="Keep only the Tailwind import line."
  @import "tailwindcss";
  ```

- You may remove default CSS from `index.css` and `App.css`.

---

### 2.3 Wallet Signing

To send messages on AO, transactions must be signed.  
We're using the quickest method by accessing the `arweaveWallet` global object.

> 🔐 For cleaner wallet integration, consider:
> - [Arweave Wallet Kit GitHub](https://github.com/labscommunity/arweave-wallet-kit)
> - [Arweave Wallet Kit Docs](https://docs.arweavekit.com/)

---

### 2.4 Add Config File

**Path**: `src/shared/config/aoConfig.ts`

You can find your AO process ID in the **bottom-right corner of the BetterIDEa IDE**

```ts title="aoConfig.ts" description="AO process ID and reusable action tag sets."
export const processId = "YOUR PROCESS ID";

export const TAGS = {
    READ: [{ name: "Action", value: "Read-Posts" }],
    CREATE: [{ name: "Action", value: "Create-Post" }],
    UPDATE: [{ name: "Action", value: "Update-Post" }],
    DELETE: [{ name: "Action", value: "Delete-Post" }],
};
```

---

### 2.5 Create the Main CRUD Page

**Path**: `src/pages/CrudPage.tsx`

<details>
<summary>View Code</summary>

```tsx title="CrudPage.tsx" description="Displays all posts and allows creating, deleting, and redirecting to update form."
import { useEffect, useState } from "react";
import { message, result, dryrun, createDataItemSigner } from "@permaweb/aoconnect";
import { processId, TAGS } from "../shared/config/aoConfig";

type Post = {
    id: number;
    title: string;
    body: string;
    timestamp: number;
};

export default function CrudPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    useEffect(() => {
        fetchPosts();
    }, []);

    const handleUpdateRedirect = (id: number) => {
        window.location.href = `/edit/${id}`; // go to update page
    };

    const handleDeletePost = async (id: number) => {
        if (!window.confirm("Are you sure you want to delete this post?")) return;

        try {
            const res = await message({
                process: processId,
                tags: [...TAGS.DELETE, { name: "AutoID", value: id.toString() }],
                signer: createDataItemSigner((globalThis as any).arweaveWallet),
                data: "",
            });

            await result({ process: processId, message: res });
            fetchPosts();
        } catch (err) {
            console.error("Failed to delete post:", err);
        }
    };

    const fetchPosts = async () => {
        try {
            const response = await dryrun({ process: processId, tags: TAGS.READ });

            const rawData = JSON.parse(response.Messages?.[0]?.Data || "[]");

            const formatted: Post[] = rawData.map((item: any) => ({
                id: item.AutoID,
                title: item.Title,
                body: item.Body,
                timestamp: item.Timestamp,
            }));

            setPosts(formatted);
        } catch (err) {
            console.error("Failed to fetch posts:", err);
        }
    };

    const addPost = async () => {
        if (!title.trim() || !body.trim()) return;

        try {
            const res = await message({
                process: processId,
                tags: [...TAGS.CREATE, { name: "Title", value: title }, { name: "Body", value: body }],
                signer: createDataItemSigner((globalThis as any).arweaveWallet),
                data: "",
            });

            await result({ process: processId, message: res });
            setTitle("");
            setBody("");
            fetchPosts();
        } catch (err) {
            console.error("Failed to add post:", err);
        }
    };

    return (
        <div className="p-6 text-white bg-zinc-900 min-h-screen">
            <h1 className="text-2xl font-bold mb-6">📦 Posts</h1>

            <div className="grid gap-3 mb-4">
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Post Title"
                    className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded text-white"
                />
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="Post Body"
                    rows={4}
                    className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded text-white resize-none"
                />
                <button
                    onClick={addPost}
                    className="w-fit px-4 py-2 bg-green-600 hover:bg-green-700 rounded text-white"
                >
                    Add Post
                </button>
            </div>

            <div className="space-y-4">
                {posts.length === 0 ? (
                    <p className="text-zinc-400">No posts yet.</p>
                ) : (
                    posts.map((post) => (
                        <div key={post.id} className="bg-zinc-800 border border-zinc-700 rounded p-4">
                            <h2 className="font-semibold text-lg mb-1">{post.title}</h2>
                            <p className="text-sm text-zinc-400">{post.body}</p>
                            <p className="text-xs text-zinc-500 mt-2">
                                {new Date(post.timestamp).toLocaleString()}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-3">
                                <button
                                    onClick={() => handleUpdateRedirect(post.id)}
                                    className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded"
                                >
                                    Update
                                </button>
                                <button
                                    onClick={() => handleDeletePost(post.id)}
                                    className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-sm rounded"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
```

</details>

---

### 2.6 Create the Edit Post Page

**Path**: `src/pages/edit/[id].tsx`

<details>
<summary>View Code</summary>

```tsx title="EditPostPage.tsx" description="Edit a specific post by fetching its data and submitting updates."
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { dryrun, message, result, createDataItemSigner } from "@permaweb/aoconnect";
import { processId, TAGS } from "../../shared/config/aoConfig";


export default function EditPostPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    if (id) fetchPostById(id);
  }, [id]);

  const fetchPostById = async (postId: string) => {
    const dryrunResponse = await dryrun({
      process: processId,
      tags: TAGS.READ,
    });

    const data = JSON.parse(dryrunResponse.Messages[0].Data || "[]");
    const post = data.find((p: any) => p.AutoID.toString() === postId);

    if (post) {
      setTitle(post.Title);
      setBody(post.Body);
    }
  };

  const updatePost = async () => {

    if (!id) return;

    const msgRes = await message({
      process: processId,
      tags: [
        ...TAGS.UPDATE,
        { name: "AutoID", value: id },
        { name: "Title", value: title },
        { name: "Body", value: body },
      ],
      signer: createDataItemSigner((globalThis as any).arweaveWallet),
      data: "",
    });

    const updateResult = await result({ process: processId, message: msgRes });

    console.log("Update  successfully", updateResult);
    console.log(updateResult.Messages[0].Data);

    alert("Post updated!");
    navigate("/"); // back to list
  };

  return (
    <div className="p-6 bg-zinc-900 min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-6">Edit Post</h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full px-4 py-2 mb-4 bg-zinc-800 border border-zinc-700 rounded"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Body"
        rows={6}
        className="w-full px-4 py-2 mb-4 bg-zinc-800 border border-zinc-700 rounded resize-none"
      />
      <button
        onClick={updatePost}
        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
      >
        Save Changes
      </button>
    </div>
  );
}
```

</details>

---

### 2.7 Configure Routing

**Path**: `src/App.tsx`

```tsx title="App.tsx" description="Sets up React Router DOM routes for CRUD and Edit pages."
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CrudPage from './pages/CrudPage'
import EditPostPage from './pages/edit/[id]'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CrudPage />} />
        <Route path="/edit/:id" element={<EditPostPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
```

---

✅ You’re now ready to run the frontend with:

```bash
npm run dev
```

