const initialstate = {
  data: [
    {
      img: "patient.jpg",
      name: "George Anderson",
      id: "#PT0016",
      date: "11 Nov 2019",
      time: "10.00 AM",
      purpose: "General",
      type: "New Patient",
      pay: "$150",
    },
    {
      img: "patient1.jpg",
      name: "Megan Bird",
      id: "#PT0001",
      date: "3 Nov 2019 ",
      time: "11.00 AM",
      purpose: "General",
      type: "Old Patient",
      pay: "$200",
    },
    {
      img: "patient2.jpg",
      name: "Alvin Boykin",
      id: "#PT0002",
      date: "1 Nov 2019",
      time: "1.00 PM",
      purpose: "General",
      type: "New Patient",
      pay: "$75",
    },
    {
      img: "patient3.jpg",
      name: "Nicholas Hicks",
      id: "#PT0003",
      date: "30 Oct 2019 ",
      time: "9.00 AM",
      purpose: "General",
      type: "Old Patient",
      pay: "$100",
    },
    {
      img: "patient4.jpg",
      name: "Nicholas Hicks",
      id: "#PT0003",
      date: "30 Oct 2019 ",
      time: "9.00 AM",
      purpose: "General",
      type: "Old Patient",
      pay: "$100",
    },
    {
      img: "patient5.jpg",
      name: "Nicholas Hicks",
      id: "#PT0003",
      date: "30 Oct 2019 ",
      time: "9.00 AM",
      purpose: "General",
      type: "Old Patient",
      pay: "$100",
    },
  ],
};

const dashboard = (state = initialstate, action) => {
  switch (action.type) {
    case "DASHBOARD":
      return {
        ...state,
        dashboard: state.dashboard,
      };
      default:
      return state;
  }
};
export default dashboard;

