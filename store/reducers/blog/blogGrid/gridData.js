const initialstate = {
  data: [
    {
      id: "1",
      img: "blog-01.jpg",
      img1: "doctor-thumb-01.jpg",
      name: "Dr. Ruby Perrin",
      date: "4 Dec 2019",
      title: "Doccure – Making your clinic painless visit?",
      detail:
        "   Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.",
    },
    {
      id: "2",
      img: "blog-02.jpg",
      img1: "doctor-thumb-01.jpg",
      name: "Dr. Ruby Perrin",
      date: "5 Dec 2019",
      title: "Doccure – Making your clinic painless visit?",
      detail:
        "   Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.",
    },
    {
      id: "3",
      img: "blog-03.jpg",
      img1: "doctor-thumb-01.jpg",
      name: "Dr. Ruby Perrin",
      date: "6 Dec 2019",
      title: "Doccure – Making your clinic painless visit?",
      detail:
        "   Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.",
    },
    {
      id: "4",
      img: "blog-04.jpg",
      img1: "doctor-thumb-01.jpg",
      name: "Dr. Ruby Perrin",
      date: "7 Dec 2019",
      title: "Doccure – Making your clinic painless visit?",
      detail:
        "   Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.",
    },
    {
      id: "5",
      img: "blog-05.jpg",
      img1: "doctor-thumb-01.jpg",
      name: "Dr. Ruby Perrin",
      date: "8 Dec 2019",
      title: "Doccure – Making your clinic painless visit?",
      detail:
        "   Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.",
    },
    {
      id: "6",
      img: "blog-06.jpg",
      img1: "doctor-thumb-01.jpg",
      name: "Dr. Ruby Perrin",
      date: "9 Dec 2019",
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
