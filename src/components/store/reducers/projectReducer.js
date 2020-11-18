const initialState = {
  projects: [
    {
      id: 1,
      title: "Never Give up 1",
      content:
        "1. Life is all about accepting challenges and never giving up. Life for your family, your siblings",
    },
    {
      id: 2,
      title: "Never Give up 2",
      content:
        "2. Life is all about accepting challenges and never giving up. Life for your family, your siblings",
    },
    {
      id: 3,
      title: "Never Give up 3",
      content:
        "3. Life is all about accepting challenges and never giving up. Life for your family, your siblings",
    },
  ],
};

const projectReducer = (state = initialState, action) => {
  return state;
};

export default projectReducer;
