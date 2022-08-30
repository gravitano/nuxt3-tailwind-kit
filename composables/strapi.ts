import { Image } from '~~/types';

export const getStrapiUrl = (image: Image) => {
  const config = useRuntimeConfig();

  return config.strapi.url + image.data.attributes.url;
};
