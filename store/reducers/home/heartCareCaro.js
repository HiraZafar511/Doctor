const initialstate = {
  data: [
    {
      img: "specialities-01.png",
      category: "SURGERY",
      title: "Heart Surgery",
      body:
        "Lorem Ipsum is simply dummy text the printing and typesetting industry.",
    },
    {
      img: "specialities-01.png",
      category: "SURGERY",
      title: "Heart Surgery",
      body:
        "Lorem Ipsum is simply dummy text the printing and typesetting industry.",
    },
    {
      img: "specialities-01.png",
      category: "SURGERY",
      title: "Heart Surgery",
      body:
        "Lorem Ipsum is simply dummy text the printing and typesetting industry.",
    },
    {
      img: "specialities-01.png",
      category: "SURGERY",
      title: "Heart Surgery",
      body:
        "Lorem Ipsum is simply dummy text the printing and typesetting industry.",
    },
  ],
};

const heartCareCaro = (state = initialstate, action) => {
  console.log(action);
  switch (action.type) {
    case "HEARTCARE":
      return {
        ...state,
        care: action.care,
      };

    default:
      return state;
  }
};
export default heartCareCaro;
