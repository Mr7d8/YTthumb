import { useState } from "react";
import AdSenseBanner from "./AdSenseBanner";

const Index = () => {
  const [videoURL, setVideoURL] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [showPreview, setShowPreview] = useState(false);

  const getYouTubeThumbnail = async (url) => {
    let regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    let match = url.match(regExp);

    if (match && match[1].length === 11) {
      const videoURL = match[1];
      const thumbnailBaseUrl = "http://img.youtube.com/vi/";

      const thumbnailUrl = `${thumbnailBaseUrl}${videoURL}/mqdefault.jpg`; // Default quality

      setShowPreview(true);
      setThumbnailUrl(thumbnailUrl);
      setVideoURL("");
    } else {
      setShowPreview(false);
      setThumbnailUrl("");
    }
  };

  const downloadImage = () => {
    if (thumbnailUrl) {
      const a = document.createElement("a");
      a.href = thumbnailUrl;
      a.download = "thumbnail.jpg"; // Specify the desired file name and extension

      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
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
          onClick={() => getYouTubeThumbnail(videoURL)}
        >
          Get Thumbnail
        </button>
        {showPreview && (
          <div className="mt-4 p-4 bg-white rounded">
            <img
              src={thumbnailUrl}
              alt="Thumbnail Preview"
              width={320}
              height={180}
            />
            <button
              className="btn-blue mt-2"
              onClick={downloadImage}
            >
              Download Thumbnail
            </button>
          </div>
        )}
      </div>
      {/* Include the Google AdSense banner component */}
      <AdSenseBanner />
    </div>
  );
};

export default Index;
