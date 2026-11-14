/**
 * Enable non-cropping 400px-wide thumbnails for PocketBase client logos.
 * Original uploaded files remain unchanged.
 *
 * PocketBase serves the original file until this migration is installed.
 * This avoids a broken image during the preview-only rollout.
 */
migrate((app) => {
  const collection = app.findCollectionByNameOrId("client_logos");
  const field = collection.fields.getByName("logo");
  if (!field || field.type !== "file") {
    throw new Error("Expected client_logos.logo to be a file field");
  }
  const original = Array.isArray(field.thumbs) ? field.thumbs : [];
  if (original.includes("400x0")) return;
  field.thumbs = [...original, "400x0"];
  app.save(collection);
});
