const initialstate = {
    data: [{
        img: "patient.jpg",
        name: "George Anderson",
        email: "tyroneroberts@adobe.com",
        date: "11 Nov 2019",
  
        time: "9:00 AM - 10:00 AM",
      },
      {
        img: "patient1.jpg",
        name: "Megan Bird",
        email: "tyroneroberts@adobe.com",
        date: "3 Nov 2019 ",
  
        time: "9:00 AM - 10:00 AM",
      },
      {
        img: "patient2.jpg",
        name: "Alvin Boykin",
        email: "tyroneroberts@adobe.com",
        date: "1 Nov 2019",
        time: "9:00 AM - 10:00 AM",
      },
      {
        img: "patient3.jpg",
        name: "Nicholas Hicks",
        email: "tyroneroberts@adobe.com",
        date: "08 April 2020 ",
        time: "9:00 AM - 10:00 AM",
      },
      {
        img: "patient4.jpg",
        name: "Nicholas Hicks",
        email: "tyroneroberts@adobe.com",
        date: "08 April 2020 ",
        time: "9:00 AM - 10:00 AM",
      },
      {
        img: "patient5.jpg",
        name: "Nicholas Hicks",
        email: "tyroneroberts@adobe.com",
        date: "08 April 2020 ",
        time: "9:00 AM - 10:00 AM",
      },]}
      const booking = (state = initialstate, action) => {
        switch (action.type) {
          case "BOOKING":
            return {
              ...state,
              booking: state.booking,
            };
            default:
            return state;
        }
      };
      export default booking;