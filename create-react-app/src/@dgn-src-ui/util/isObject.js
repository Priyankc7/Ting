export default item => {
  return item && typeof item === "object" && !Array.isArray(item);
};
