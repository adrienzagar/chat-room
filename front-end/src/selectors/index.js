/* eslint-disable import/prefer-default-export */
// les selectors traite le state ou une partie du state et retourne un résultat
export const getMaxId = (items) => {
  // Generation d'un id unique
  // © Coco
  // const id = new Date().getTime();

  const ids = items.map((item) => item.id);
  const maxId = Math.max(...ids);

  return maxId + 1;
};
