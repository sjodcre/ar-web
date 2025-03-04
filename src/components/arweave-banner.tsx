import { useState, useEffect } from 'react';
import axios from 'axios';
import ArweaveLogo from '../assets/arweave-glyph-light.svg';


interface Highlight {
    title: string;
    link: string;
    media: string | null;
    body: string | null;
}

export default function ArweaveBanner() {
    const [highlights, setHighlights] = useState<Highlight[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [publicationDate, setPublicationDate] = useState('')


    useEffect(() => {
        const fetchHighlights = async () => {
            try {
                const response = await axios.get('/api/arweavehub/today');
                const parser = new DOMParser();
                const doc = parser.parseFromString(response.data, 'text/html');
                const topicWrappers = doc.querySelectorAll('.today-topic-wrapper'); // Corrected to use 'doc'
                const dateElement = doc.querySelector('.today-report__greetings .date');
                // const publicationDate = dateElement ? dateElement.textContent.trim() : 'Date not available';
                setPublicationDate(dateElement ? dateElement.textContent.trim() : 'Date not available')
                const fetchedHighlights: Highlight[] = Array.from(topicWrappers).map((wrapper) => {
                    const linkElement = wrapper.querySelector('a');
                    const titleElement = wrapper.querySelector('h3.today__text.header-3');
                    const bodyElement = wrapper.querySelector('p.today__text.body');
                    const mediaElement = wrapper.querySelector('.topic__media');

                    let mediaLink = null;
                    if (mediaElement) {
                        const videoElement = mediaElement.querySelector('video source');
                        const imageElement = mediaElement.querySelector('.topic__media-image');

                        if (videoElement) {
                            mediaLink = videoElement.getAttribute('src');
                        } else if (imageElement && imageElement instanceof HTMLElement) {
                            const backgroundImage = imageElement.style.backgroundImage;
                            mediaLink = backgroundImage.slice(5, -2);
                        }
                    }

                    console.log("link element", linkElement)

                    return {
                        title: titleElement?.textContent?.trim() || 'Untitled',
                        link: linkElement?.getAttribute('href') || '#',
                        media: mediaLink,
                        body: bodyElement?.textContent?.trim() || null,
                    };
                });

                setHighlights(fetchedHighlights);
            } catch (error) {
                console.error('Error fetching highlights:', error);
            }
        };

        fetchHighlights();
    }, []);


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % highlights.length);
        }, 5000); // Rotate every 5 seconds

        return () => clearInterval(interval);
    }, [highlights]);

    if (highlights.length === 0) {
        return null; // or a loading spinner
    }

    const currentHighlight = highlights[currentIndex];

    const renderDots = () => (
        // <div className="flex justify-center mt-2">
        //     {highlights.map((_, index) => (
        //         <button
        //             key={index}
        //             onClick={() => setCurrentIndex(index)}
        //             className={`w-3 h-3 mx-1 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-500'
        //                 }`}
        //             aria-label={`Go to slide ${index + 1}`}
        //         />
        //     ))}
        // </div>
        <div className="flex justify-center mt-2">
            {highlights.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`banner-nav-button w-3 h-3 mx-1 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-800'}`}
                />
            ))}
        </div>
    );

    // return (
    //     <>
    //         <div className="bg-black text-white p-2 rounded mb-4 flex items-center">
    //             <div className="flex-shrink-0 w-1/4 h-64 flex items-center justify-center bg-black"> {/* Placeholder for media */}
    //                 {currentHighlight.media ? (
    //                     currentHighlight.media.includes('.mp4') ? (
    //                         <video controls className="w-full h-auto max-h-64"> {/* Added max height for video */}
    //                             <source src={currentHighlight.media} type="video/mp4" />
    //                             Your browser does not support the video tag.
    //                         </video>
    //                     ) : (
    //                         <img src={currentHighlight.media} alt={currentHighlight.title} className="w-full h-auto max-h-64" />
    //                     )
    //                 ) : (
    //                     <span className="text-gray-500">No media available</span> // Placeholder text
    //                 )}
    //             </div>
    //             <div className="flex items-center mb-4">
    //                 <a href="https://arweavehub.com/today" target="_blank" rel="noopener noreferrer">
    //                     <img src={ArweaveLogo} alt="Arweave Logo" className="h-8 w-8 mr-2" />
    //                 </a>
    //                 <h2 className="text-xl font-bold">Arweave Today</h2>
    //             </div>
    //             <div className="ml-4 w-3/4"> {/* Adjusted width for text area */}
    //                 <a href={currentHighlight.link} target="_blank" rel="noopener noreferrer" className="text-lg font-bold">
    //                     {currentHighlight.title}
    //                 </a>
    //                 {currentHighlight.body && <p className="mt-1">{currentHighlight.body}</p>}
    //             </div>
    //         </div>
    //         <div>
    //             {/* Existing banner content */}
    //             {renderDots()}
    //         </div>
    //     </>
    // );
    return (
        <>
            <div className="bg-black text-white p-2 rounded mb-4">
                {/* Header Section */}
                {/* <div className="flex items-center mb-4">
                    <a href="https://arweavehub.com/today" target="_blank" rel="noopener noreferrer">
                        <img src={ArweaveLogo} alt="Arweave Logo" className="h-8 w-8 mr-2" />
                    </a>
                    <h2 className="text-xl font-bold">Arweave Today</h2>
                </div> */}

                <div className="flex items-center mb-4">
                    <a href="https://arweavehub.com/today" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <img src={ArweaveLogo} alt="Arweave Logo" className="h-8 w-8 mr-2" />
                        <h2 className="text-xl font-bold">Arweave Today</h2>
                    </a>
                    <span className="ml-4 text-gray-400">{publicationDate}</span>

                </div>
                {/* Banner Content */}
                <div className="flex items-center">
                    <div className="flex-shrink-0 w-1/4 h-64 flex items-center justify-center bg-black">
                        {currentHighlight.media ? (
                            currentHighlight.media.includes('.mp4') ? (
                                <video controls className="w-full h-auto max-h-64">
                                    <source src={currentHighlight.media} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            ) : (
                                <img src={currentHighlight.media} alt={currentHighlight.title} className="w-full h-auto max-h-64" />
                            )
                        ) : (
                            <span className="text-gray-500">No media available</span>
                        )}
                    </div>
                    <div className="ml-4 w-3/4">
                        <a href={currentHighlight.link} target="_blank" rel="noopener noreferrer" className="text-lg font-bold">
                            {currentHighlight.title}
                        </a>
                        {currentHighlight.body && <p className="mt-1">{currentHighlight.body}</p>}
                    </div>
                </div>
                {/* Attribution note */}
                <div className="mt-2 text-sm text-gray-400">
                    Content sourced from <a href="https://arweavehub.com/today" target="_blank" rel="noopener noreferrer" className="underline">Arweave Today</a>.
                </div>
            </div>
            <div>
                {renderDots()}
            </div>
        </>
    );

}
