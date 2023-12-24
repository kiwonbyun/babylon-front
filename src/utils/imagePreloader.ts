const imagePreloader = (srcArr: string[]) => {
  srcArr?.forEach((imgSrc) => {
    const imagePreloader = new Image();
    imagePreloader.src = imgSrc;
  });
};
export default imagePreloader;
