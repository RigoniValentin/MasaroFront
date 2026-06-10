import { useState } from "react";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";
import YouTube from "react-youtube";

const videos = [
  { id: "VOa5Bhrq8M8", orientation: "horizontal" as const },
  { id: "FJY5pV8jJ34" },
  { id: "aZmpU2cz5BI" },
  { id: "6oREIVNqKtw" },
  { id: "JciGnQtSvtQ" },
  { id: "yqtMv535EFg" },
  { id: "f-Yi_1bjqpQ" },
];

const Videos = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section
      id="videos"
      className="relative py-20 sm:py-28 bg-gradient-to-br from-white via-[#ecfdf5] to-[#f0fdfa] overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-masaro-teal/6 rounded-full blur-3xl translate-x-1/3 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-masaro-green/6 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto section-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-masaro-teal/10 text-masaro-teal text-sm font-semibold uppercase tracking-wider mb-4">
            Videos
          </span>
          <h2 className="section-title text-masaro-dark mb-4">
            Mirá Nuestro <span className="gradient-text">Trabajo</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Videos que muestran nuestro compromiso con la excelencia en cada
            servicio que realizamos.
          </p>
        </motion.div>

        {/* Video Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-lg shadow-gray-200/60 border border-gray-100 hover:border-masaro-teal/30 hover:shadow-masaro-teal/10 transition-all duration-500"
            >
              {/* Thumbnail */}
              <div
                className={`relative cursor-pointer overflow-hidden ${
                  video.orientation === "horizontal" ? "aspect-video" : "aspect-[9/16]"
                }`}
                onClick={() => setActiveVideo(video.id)}
              >
                <img
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={
                    video.orientation === "horizontal"
                      ? "Miniatura de video horizontal de MASARO"
                      : "Miniatura de video de YouTube Shorts de MASARO"
                  }
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                  }}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-all duration-500 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-masaro-teal/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-masaro-teal/30">
                    <Play className="w-7 h-7 text-white ml-1" fill="white" />
                  </div>
                </div>
              </div>


            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Player Modal */}
      {activeVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-4 right-4 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 25 }}
            className={`w-full rounded-2xl overflow-hidden ${
              videos.find((video) => video.id === activeVideo)?.orientation === "horizontal"
                ? "max-w-4xl aspect-video"
                : "max-w-sm aspect-[9/16]"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <YouTube
              videoId={activeVideo}
              opts={{
                width: "100%",
                height: "100%",
                playerVars: {
                  autoplay: 1,
                  modestbranding: 1,
                  rel: 0,
                },
              }}
              className="w-full h-full"
              iframeClassName="w-full h-full"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Videos;
