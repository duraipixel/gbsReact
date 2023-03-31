const openInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const getCurrentYear = () => {
  return new Date().getFullYear();
};
const scrollToTop = () => {
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
};

export { openInNewTab, getCurrentYear, scrollToTop };
