const initialstate = {
  data: [
    {
      img: "patient.jpg",
      name: "George Anderson",
      id: "#PT0016",
      date: "11 Nov 2019",
      invoice: "#INV-0010",
      pay: "$150",
    },
    {
        img: "patient.jpg",
        name: "George Anderson",
        id: "#PT0016",
        date: "11 Nov 2019",
        invoice: "#INV-0010",
        pay: "$150",
    },
    {
        img: "patient.jpg",
        name: "George Anderson",
        id: "#PT0016",
        date: "11 Nov 2019",
        invoice: "#INV-0010",
        pay: "$150",
    },
    {
        img: "patient.jpg",
        name: "George Anderson",
        id: "#PT0016",
        date: "11 Nov 2019",
        invoice: "#INV-0010",
        pay: "$150",
    },
    {
        img: "patient.jpg",
        name: "George Anderson",
        id: "#PT0016",
        date: "11 Nov 2019",
        invoice: "#INV-0010",
        pay: "$150",
    },
    {
        img: "patient.jpg",
        name: "George Anderson",
        id: "#PT0016",
        date: "11 Nov 2019",
        invoice: "#INV-0010",
        pay: "$150",
    },
  ],
};

const invoices = (state = initialstate, action) => {
  switch (action.type) {
    case "INVOICES":
      return {
        ...state,
        invoices: state.invoices,
      };
    default:
      return state;
  }
};
export default invoices;
