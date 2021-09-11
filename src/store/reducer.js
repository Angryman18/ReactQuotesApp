const reducerState = {
  quotes: [],
  comments: []
};

const reducer = (state = reducerState, actions) => {
  switch (actions.type) {
    case "add":
      const obj = {
        id: actions.quote.id,
        title: actions.quote.title,
        desc: actions.quote.desc,
      };
      const quotesCopy = [...state.quotes];
      quotesCopy.unshift(obj);
      return { ...state, quotes: quotesCopy };
    case "addComment":
      const commentCopy = [...state.comments];
      commentCopy.unshift(actions.commentObj);
      return { ...state, comments: commentCopy };
    default:
      return state;
  }
};

export default reducer;
