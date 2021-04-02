const initialstate = {
  data: [
    {
      img: "patient.jpg",
      name: "George Anderson",
      detail: "14 Nov 2019, 10.00 AM",
      state: "Newyork, United States",
      email: "richard@example.com",
      num: "+1 923 782 4575",
    },
    {
      img: "patient1.jpg",
      name: "Megan Bird ",
      detail: "12 Nov 2019, 5.00 PM",
      state: "North Carolina, United States",
      email: "charlenereed@example.com",
      num: "+1 828 632 9170",
    },
    {
      img: "patient2.jpg",
      name: "Alvin Boykin",
      detail: "14 Nov 2019, 10.00 AM",
      state: "Newyork, United States",
      email: "richard@example.com",
      num: "+1 923 782 4575",
    },
    {
      img: "patient3.jpg",
      name: "Nicholas Hicks",
      detail: "14 Nov 2019, 10.00 AM",
      state: "Newyork, United States",
      email: "richard@example.com",
      num: "+1 923 782 4575",
    },
    {
      img: "patient4.jpg",
      name: "Sherri McCarthy",
      detail: "14 Nov 2019, 10.00 AM",
      state: "Newyork, United States",
      email: "richard@example.com",
      num: "+1 923 782 4575",
    },
    {
      img: "patient5.jpg",
      name: "Roger Loyd",
      detail: "14 Nov 2019, 10.00 AM",
      state: "Newyork, United States",
      email: "richard@example.com",
      num: "+1 923 782 4575",
    },
    {
      img: "patient6.jpg",
      name: "Francis Giordano",
      detail: "14 Nov 2019, 10.00 AM",
      state: "Newyork, United States",
      email: "richard@example.com",
      num: "+1 923 782 4575",
    },
    {
      img: "patient7.jpg",
      name: "Kate Mason",
      detail: "14 Nov 2019, 10.00 AM",
      state: "Newyork, United States",
      email: "richard@example.com",
      num: "+1 923 782 4575",
    },
    {
      img: "patient8.jpg",
      name: "George Anderson",
      detail: "14 Nov 2019, 10.00 AM",
      state: "Newyork, United States",
      email: "richard@example.com",
      num: "+1 923 782 4575",
    },
    {
      img: "patient9.jpg",
      name: "Glenn Johnson",
      detail: "14 Nov 2019, 10.00 AM",
      state: "Newyork, United States",
      email: "richard@example.com",
      num: "+1 923 782 4575",
    },
    {
      img: "patient10.jpg",
      name: "Monty Smith",
      detail: "14 Nov 2019, 10.00 AM",
      state: "Newyork, United States",
      email: "richard@example.com",
      num: "+1 923 782 4575",
    },
  ],
};
const appointment = (state = initialstate, action) => {
    switch (action.type) {
      case "APPOINTMENT":
        return {
          ...state,
          appointment: state.appointment,
        };
        default:
        return state;
    }
  };
  export default appointment;