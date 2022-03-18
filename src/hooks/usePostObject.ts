export const usePostObject = () => {
  const createObject = (dataType: string, data: any) => {
    let object;
    switch (dataType) {
      case "carPostData":
        object = {
          priceMax: data.priceMax,
          priceMin: data.priceMin,
          name: data.name,
          number: data.number,
          colors: data.colors,
          tank: data.tank,
          thumbnail: data.image.length && {
            size: data.image[0].size,
            originalname: data.image[0].name,
            mimetype: data.image[0].type,
            path: data.path,
          },

          description: data.description,
          categoryId: data.category.id,
        };
        break;

      default:
        break;
    }
    return object;
  };
  return createObject;
};
