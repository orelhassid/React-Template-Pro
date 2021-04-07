export const makeSlug = (string) => {
  if (typeof string !== "string") return new Error("Slug is not a string");
  return string
    .toLowerCase()
    .replace(/-+/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
};

export default {
  makeSlug,
};
