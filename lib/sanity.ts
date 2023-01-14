import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";
import { sanityConfig } from "./sanity-config";

const client = createClient(sanityConfig);

export const imageBuilder = imageUrlBuilder(client);

export const urlForImage = (source) =>
  imageBuilder.image(source).auto("format").fit("max");
