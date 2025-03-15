import { useEffect, useState } from "react";
import Fuse from "fuse.js";
import { SearchItem } from "@/lib/search-index";
import { useNavigate } from "react-router-dom";

const SearchFn = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  // const [searchData, setSearchData] = useState<SearchItem[]>([]);
  const [fuse, setFuse] = useState<Fuse<SearchItem> | null>(null); // ✅ Declare state for Fuse
  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await initializeSearchIndex();
  //     setSearchData(data);
  //     console.log("searchdata", data);
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const indexResponse = await fetch("/fuse-index.json");
        const dataResponse = await fetch("/fuse-data.json");
  
        if (!indexResponse.ok || !dataResponse.ok) throw new Error("Missing search index file");
  
        const indexJson = await indexResponse.json();
        const searchDataJson = await dataResponse.json();
  
        console.log("✅ Loaded search index from fuse-index.json");
  
        const fuseIndex = Fuse.parseIndex<SearchItem>(indexJson);
        // setSearchData(searchDataJson);
        setFuse(new Fuse<SearchItem>(searchDataJson, { keys: ["title", "content"], threshold: 0.1 }, fuseIndex));
      } catch (error) {
        console.warn("⚠️ Could not load index file. Make sure `generateSearchIndex.ts` has been run.");
      }
    };
  
    fetchData();
  }, []);
  
  

  // const fuse = new Fuse(searchData, {
  //   keys: ["title", "content"], // Full-text search
  //   threshold: 0.1, // Fuzzy matching
  //   includeScore: true,
  //   minMatchCharLength: 2, // Only match after 2+ characters
  // });

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery(value);

    if (value.trim() === "") {
      setResults([]);
      return;
    }

    const searchResults = fuse.search(value).map(result => result.item);
    console.log("Search Results for:", value, searchResults);
    setResults(searchResults);
  };

  const handleSelect = (path: string) => {
    navigate(path);
    setQuery("");
    setResults([]);
  };

  const highlightSearch = (text: string, query: string) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(regex, "<strong class='text-blue-500'>$1</strong>");
  };

  const stripHtml = (html: string) => {
    return html
      .replace(/<[^>]*>/g, '') // Remove all HTML tags
      .replace(/\|/g, '')       // Remove table pipes (`|`)
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1 ($2)') // Convert Markdown links to "Text (URL)"
      .trim();
  };

  return (
    <div className="relative w-full max-w-lg">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search documentation..."
        className="w-full p-2 text-white border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {results.length > 0 && (
        <ul className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded shadow-lg max-h-64 overflow-y-auto z-50">
          {results.map((item, index) => (
            <li
              key={index}
              onClick={() => handleSelect(item.path)}
              className="p-2 text-black hover:bg-gray-200 cursor-pointer"
            >
              <strong>{item.title}</strong>
              <p className="text-xs text-gray-500" dangerouslySetInnerHTML={{ __html: highlightSearch(stripHtml(item.content), query) }} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchFn;
