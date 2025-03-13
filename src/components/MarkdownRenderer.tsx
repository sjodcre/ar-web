import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { toast } from "sonner";


const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success("Copied to clipboard!", {
        description: "The code snippet has been copied successfully. 🚀",
        duration: 3000, // Toast stays for 3 seconds
    });
};

interface MarkdownRendererProps {
    filePath: string;
    variant?: "short" | "long"; // Optional variant for files with short/long versions
}

// const MarkdownRenderer: React.FC<{ filePath: string }> = ({ filePath }) => {
const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ filePath, variant }) => {

    const [markdownContent, setMarkdownContent] = useState("⌛ Loading content...");

    // useEffect(() => {
    //     console.log("filepath", filePath)
    //     // fetch(`/src/content/${filePath}.md`)
    //     fetch(`/src/content/${filePath}.md`)
    //         .then((res) => res.text())
    //         .then(setMarkdownContent)
    //         .catch(() => setMarkdownContent("⚠️ Error loading markdown file. Check file path."));
    // }, [filePath]);
    useEffect(() => {
        console.log("MarkdownRenderer fetching:", filePath);
    
        let fileToFetch = filePath;
        if (variant) {
            fileToFetch = `${filePath}-${variant}.md`;
        } else {
            fileToFetch = `${filePath}.md`; // Default if no variant is specified
        }
    
        fetch(`/src/content/${fileToFetch}`)
            .then((res) => {
                if (!res.ok) {
                    console.warn(`File not found: ${fileToFetch}, trying fallback: ${filePath}.md`);
                    return fetch(`/src/content/${filePath}.md`).then((fallbackRes) => {
                        if (!fallbackRes.ok) throw new Error("Fallback file not found");
                        return fallbackRes.text();
                    });
                }
                return res.text();
            })
            .then(setMarkdownContent)
            .catch(() => setMarkdownContent("⚠️ Error loading markdown file. Check file path."));
    }, [filePath, variant]);

    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
                // code({ node, inline, className, children, ...props }) {
                //   const match = /language-(\w+)/.exec(className || "");
                //   return !inline && match ? (
                //     <SyntaxHighlighter style={dracula} language={match[1]} PreTag="div" {...props}>
                //       {String(children).replace(/\n$/, "")}
                //     </SyntaxHighlighter>
                //   ) : (
                //     <code className="bg-gray-800 p-1 rounded" {...props}>
                //       {children}
                //     </code>
                //   );
                // },
                code({ node, inline, className, children, ...props }: { node: any; inline?: boolean; className?: string; children: React.ReactNode; }) {
                    const match = /language-(\w+)/.exec(className || "");
                    const codeText = String(children).replace(/\n$/, "");

                    return !inline && match ? (
                        <div className="relative group">
                            <button
                                className="absolute top-2 right-2 px-2 py-1 text-xs font-medium text-gray-200 bg-gray-700 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-gray-600"
                                onClick={() => copyToClipboard(codeText)}
                            >
                                📋 Copy
                            </button>
                            <SyntaxHighlighter
                                style={dracula}
                                language={match[1]}
                                PreTag="div"
                                className="rounded-lg border border-gray-700 overflow-hidden"
                                {...props}
                            >
                                {codeText}
                            </SyntaxHighlighter>
                        </div>
                    ) : (
                        <code className="bg-gray-800 p-1 rounded" {...props}>
                            {children}
                        </code>
                    );
                },
                table: ({ children }) => <table className="w-full border border-gray-700">{children}</table>,
                th: ({ children }) => <th className="border border-gray-600 bg-gray-800 px-4 py-2">{children}</th>,
                td: ({ children }) => <td className="border border-gray-600 px-4 py-2">{children}</td>,
            }}
        >
            {markdownContent}
        </ReactMarkdown>
    );
};

export default MarkdownRenderer;