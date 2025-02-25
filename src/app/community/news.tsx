import { useState, useEffect } from "react";
import axios from "axios";

type NewsCategory = "ALL" | "CLABS" | "AR.IO";

interface NewsItem {
    date: string;
    image: string;
    title?: string;
    link?: string;
    description?: string;
}

export default function News() {
    const [activeCategory, setActiveCategory] = useState<NewsCategory>("ALL");
    const [newsItems, setNewsItems] = useState<NewsItem[]>([]);

    const categories: NewsCategory[] = ["ALL", "CLABS", "AR.IO"];

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get("/api/communitylabs/blog-category/news");
                // console.log("data", response.data);
                const parser = new DOMParser();
                const doc = parser.parseFromString(response.data, "text/html");
                console.log("doc", doc);
                // console.log(doc.documentElement.outerHTML)

                const articles = doc.querySelectorAll(".blog_item"); // Adjust if needed
                console.log("articles", articles);
                // Assuming each blog post is wrapped in <article>

                const extractedNews: NewsItem[] = Array.from(articles).map((article) => {
                    const titleElement = article.querySelector("h2");
                    // const linkElement = article.querySelector("a.blog_title-link");
                    const linkElement = article.querySelector("a");

                    const imageElement = article.querySelector("img.blog_image");
                    const dateElement = article.querySelector(".text-size-small.text-weight-semibold.text-inline");
                    const descriptionElement = article.querySelector(".text-size-regular.text-style-2lines");

                    let link = linkElement ? linkElement.getAttribute("href") || "#" : "#";
                    if (linkElement) {
                        let href = linkElement.getAttribute("href") || "#";
                        link = href.startsWith("http") ? href : `https://www.communitylabs.com${href}`;
                    }

                    console.log("link", link);


                    return {
                        title: titleElement ? titleElement.textContent?.trim() : "Untitled",
                        link: link,
                        // link: linkElement ? `https://www.communitylabs.com${linkElement.getAttribute("href")}` : "#",
                        date: dateElement ? dateElement.textContent?.trim() : "Unknown Date",
                        image: imageElement ? imageElement.getAttribute("src") || "/placeholder.svg" : "/placeholder.svg",
                        description: descriptionElement ? descriptionElement.textContent?.trim() : "No description available.",
                    };
                });

                setNewsItems(extractedNews);
            } catch (error) {
                console.error("Error fetching news:", error);
            }
        };

        fetchNews();
    }, []);

    return (
        <div className="min-h-screen bg-black">
            <main className="container mx-auto px-4 py-8">
                {/* Categories */}
                <div className="flex flex-wrap gap-4 mb-8">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm ${activeCategory === category ? "bg-purple-500 text-white" : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* News Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsItems.map((item, index) => (
                        <div key={index} className="group cursor-pointer">
                            {/* <div className="relative overflow-hidden rounded-lg mb-4">
                                <img
                                    src={item.image}
                                    alt={item.title || "News"}
                                    className="w-full h-48 object-cover transform transition-transform group-hover:scale-105"
                                />
                            </div> */}
                            <div className="text-gray-400 text-sm mb-2">{item.date}</div>
                            {/* <h3 className="text-white text-lg font-semibold group-hover:text-purple-400">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              </h3> */}
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="block group">
                                <div className="group cursor-pointer">
                                    <div className="relative overflow-hidden rounded-lg mb-4">
                                        <img
                                            src={item.image}
                                            alt={item.title || "News"}
                                            className="w-full h-48 object-cover transform transition-transform group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="text-gray-400 text-sm mb-2">{item.date}</div>
                                    <h3 className="text-white text-lg font-semibold group-hover:text-purple-400">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400">{item.description.length > 150 ? item.description.slice(0, 150) + '...' : item.description}</p>
                                </div>
                            </a>
                            {/* <p className="text-gray-400">{item.description}</p> */}
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
