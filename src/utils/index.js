const openInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const getCurrentYear = () => {
  return new Date().getFullYear();
};
const scrollToTop = () => {
  window.scroll(0, 0);
};

export { openInNewTab, getCurrentYear, scrollToTop };
