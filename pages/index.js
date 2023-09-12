import React, { useState } from "react";
import AdSenseBanner from "./AdSenseBanner";

const Index = () => {
  const [videoURL, setVideoURL] = useState("");
  const [thumbnails, setThumbnails] = useState([]);

  const options = [
    { resolution: "HD (1280x720)", code: "maxresdefault" },
    { resolution: "SD (640x480)", code: "sddefault" },
    { resolution: "Normal (480x360)", code: "hqdefault" },
    { resolution: "Medium (320x180)", code: "mqdefault" },
    { resolution: "Low (120x90)", code: "default" },
  ];

  const getYouTubeThumbnails = (url) => {
    let regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    let match = url.match(regExp);

    if (match && match[1].length === 11) {
      const videoURL = match[1];
      const thumbnailBaseUrl = "http://img.youtube.com/vi/";

      const thumbnails = options.map((option) => ({
        resolution: option.resolution,
        url: `${thumbnailBaseUrl}${videoURL}/${option.code}.jpg`,
      }));

      setThumbnails(thumbnails);
      setVideoURL("");
    } else {
      setThumbnails([]);
    }
  };

  const openImageInNewTab = (url) => {
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.download = "thumbnail.jpg"; // Specify the desired file name and extension
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Free Youtube Thumbnail Downloader
        </h1>
        <p className="text-gray-600">
          Download for FREE high-quality thumbnails from YouTube videos,
          seamlessly just copy and paste the URL.
        </p>
      </header>
      <div className="text-center">
        <input
          type="text"
          className="w-full md:w-1/2 px-4 py-2 border rounded"
          placeholder="Enter YouTube URL"
          value={videoURL}
          onChange={(e) => setVideoURL(e.target.value)}
        />
        <button
          className="btn-blue mt-2"
          onClick={() => getYouTubeThumbnails(videoURL)}
        >
          Get Thumbnails
        </button>
        {thumbnails.length > 0 && (
          <div className="mt-4 p-4 bg-white rounded">
            {thumbnails.map((thumbnail, index) => (
              <div key={index}>
                <img
                  src={thumbnail.url}
                  alt={`Thumbnail ${thumbnail.resolution}`}
                  style={{ width: "320px", height: "180px", objectFit: "cover" }}
                />
                <button
                  className="btn-blue mt-2"
                  onClick={() => openImageInNewTab(thumbnail.url)}
                >
                  Download {thumbnail.resolution}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Include the Google AdSense banner component */}
      <AdSenseBanner />
    </div>
  );
};

export default Index;
