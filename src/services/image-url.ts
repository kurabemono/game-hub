const getCroppedImageUrl = (url: string) => {
  if (!url) return "";
  const searchString = "media/";
  const index = url.indexOf(searchString) + searchString.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
