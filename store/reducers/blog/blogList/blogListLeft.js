const initialstate = {
  data: [
    {
      id: 1,
      img: "blog-01.jpg",
      title: "  Doccure – Making your clinic painless visit?",
      name: "Dr. Ruby Perrin",
      date: "4 Dec 2019",
      comment: "12 Comments",
      tips: "Health Tips",
      detail:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 2,
      img: "blog-01.jpg",
      title: "  Doccure – Making your clinic painless visit?",
      name: "Dr. Ruby Perrin",
      date: "4 Dec 2019",
      comment: "12 Comments",
      tips: "Health Tips",
      detail:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      img: "blog-01.jpg",
      title: "  Doccure – Making your clinic painless visit?",
      name: "Dr. Ruby Perrin",
      date: "4 Dec 2019",
      comment: "12 Comments",
      tips: "Health Tips",
      detail:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 4,
      img: "blog-01.jpg",
      title: "  Doccure – Making your clinic painless visit?",
      name: "Dr. Ruby Perrin",
      date: "4 Dec 2019",
      comment: "12 Comments",
      tips: "Health Tips",
      detail:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 5,
      img: "blog-01.jpg",
      title: "  Doccure – Making your clinic painless visit?",
      name: "Dr. Ruby Perrin",
      date: "4 Dec 2019",
      comment: "12 Comments",
      tips: "Health Tips",
      detail:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 6,
      img: "blog-01.jpg",
      title: "  Doccure – Making your clinic painless visit?",
      name: "Dr. Ruby Perrin",
      date: "4 Dec 2019",
      comment: "12 Comments",
      tips: "Health Tips",
      detail:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 7,
      img: "blog-01.jpg",
      title: "  Doccure – Making your clinic painless visit?",
      name: "Dr. Ruby Perrin",
      date: "4 Dec 2019",
      comment: "12 Comments",
      tips: "Health Tips",
      detail:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ],
};
const blogListLeft = (state = initialstate, action) => {
  switch (action.type) {
    case "BLOGLISTLEFT":
      return {
        ...state,
        blogListLeft: state.blogListLeft,
      };
    default:
      return state;
  }
};
export default blogListLeft;
