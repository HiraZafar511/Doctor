const initialstate = {
  tags: [
    {
      tag: "Children",
    },
    {
      tag: "Disease",
    },
    {
      tag: "Appointment",
    },
    {
      tag: "Booking",
    },
    {
      tag: "Kids",
    },
    {
      tag: "Health",
    },
    {
      tag: "Family",
    },
    {
      tag: "Tips",
    },
    {
      tag: "Shedule",
    },
    {
      tag: "Treatment",
    },
    {
      tag: "Dr",
    },
    {
      tag: "Clinic",
    },
    {
      tag: "Online",
    },
    {
      tag: "Health Care",
    },
    {
      tag: "Consulting",
    },
    {
      tag: "Doctors",
    },
    {
      tag: "Cardiologist",
    },
    {
      tag: "Cardiologistss",
    },
    {
      tag: "Specialist",
    },
    {
      tag: "Doccure",
    },
  ],

  categories: [
    {
      item: "Cardiology",
      num: "(62)",
    },
    {
      item: "Health Care",
      num: "(27)",
    },
    {
      item: "Nutritions",
      num: "(41)",
    },
    {
      item: "Health Tips",
      num: "(44)",
    },
    {
      item: "Medical Research",
      num: "(62)",
    },
    {
      item: "Health Treatment",
      num: "(07)",
    },
  ],
  data: [
    {
      img: "blog-thumb-01.jpg",
      title: "Doccure – Making your clinic painless visit?",
      date: "4 Dec 2019",
    },
    {
      img: "blog-thumb-01.jpg",
      title: "Doccure – Making your clinic painless visit?",
      date: "4 Dec 2019",
    },
    {
      img: "blog-thumb-01.jpg",
      title: "Doccure – Making your clinic painless visit?",
      date: "4 Dec 2019",
    },
    {
      img: "blog-thumb-01.jpg",
      title: "Doccure – Making your clinic painless visit?",
      date: "4 Dec 2019",
    },
    {
      img: "blog-thumb-01.jpg",
      title: "Doccure – Making your clinic painless visit?",
      date: "4 Dec 2019",
    },
  ],
};
const blogList = (state = initialstate, action) => {
  switch (action.type) {
    case "APPOINTMENT":
      return {
        ...state,
        blogList: state.blogList,
      };
    default:
      return state;
  }
};
export default blogList;
