export const deleteCard = (id) => {
  return {
    type: "DELETE",
    payload: id,
  };
};
