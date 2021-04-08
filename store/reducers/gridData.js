const initialstate = {
  data: [
    {
      img: "blog-01.jpg",
      img1: "doctor-thumb-01.jpg",
      name: "Dr. Ruby Perrin",
      date: "4 Dec 2019",
      title: "Doccure – Making your clinic painless visit?",
      detail:
        "   Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.",
    },
    {
        img: "blog-01.jpg",
        img1: "doctor-thumb-01.jpg",
        name: "Dr. Ruby Perrin",
        date: "4 Dec 2019",
        title: "Doccure – Making your clinic painless visit?",
        detail:
          "   Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.",
    },
    {
        img: "blog-01.jpg",
        img1: "doctor-thumb-01.jpg",
        name: "Dr. Ruby Perrin",
        date: "4 Dec 2019",
        title: "Doccure – Making your clinic painless visit?",
        detail:
          "   Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.",
    },
    {
        img: "blog-01.jpg",
        img1: "doctor-thumb-01.jpg",
        name: "Dr. Ruby Perrin",
        date: "4 Dec 2019",
        title: "Doccure – Making your clinic painless visit?",
        detail:
          "   Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.",
    },
    {
        img: "blog-01.jpg",
        img1: "doctor-thumb-01.jpg",
        name: "Dr. Ruby Perrin",
        date: "4 Dec 2019",
        title: "Doccure – Making your clinic painless visit?",
        detail:
          "   Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.",
    },
    {
        img: "blog-01.jpg",
        img1: "doctor-thumb-01.jpg",
        name: "Dr. Ruby Perrin",
        date: "4 Dec 2019",
        title: "Doccure – Making your clinic painless visit?",
        detail:
          "   Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.",
    },
  ],
};

const gridData = (state = initialstate, action) => {
  switch (action.type) {
    case "GRIDDATA":
      return {
        ...state,
        gridData: state.gridData,
      };
    default:
      return state;
  }
};
export default gridData;
