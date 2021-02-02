export const getImageSrc = image => {
  let src = '';
  if (image.urls !== undefined) {
    src = image.urls.small !== undefined ? image.urls.small : '';
  }
  return src;
};
