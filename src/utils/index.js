const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
};

const getCurrentYear = () => {
    return new Date().getFullYear();
};

export { openInNewTab, getCurrentYear }