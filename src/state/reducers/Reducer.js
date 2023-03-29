const data = [
  { id: 1, title: "Title 1", desc: "This is desc for title 1" },
  { id: 2, title: "Title 2", desc: "This is desc for title 2" },
  { id: 3, title: "Title 3", desc: "This is desc for title 3" },
  { id: 4, title: "Title 4", desc: "This is desc for title 4" },
  { id: 5, title: "Title 5", desc: "This is desc for title 5" },
];

export const trelloReducer = (state = [...data], action) => {
  switch (action.type) {
    case "DELETE":
      const dlteData = state.filter((card) => card.id != action.payload);
      return dlteData;
    default:
      return state;
  }
};
