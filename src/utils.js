const getImageUrl = (path) => {
  if (!path) {
    console.warn("❌ getImageUrl: No path provided.");
    return "/assets/default.png"; // Optional fallback image
  }

  return `/assets/${path}`;
};

export default getImageUrl;
