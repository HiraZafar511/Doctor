const initialstate = {
  data: [
    {
      img: "doctor-thumb-02.jpg",
      name: "Dr. Fred Ortego",
      pers: "Prescription 1",
      field: "Cardiologist",
      date: "14 Nov 2019",
    },
    {
      img: "doctor-thumb-02.jpg",
      name: "Dr. Fred Ortego",
      pers: "Prescription 2",
      field: "Cardiologist",
      date: "14 Nov 2019",
    },
    {
      img: "doctor-thumb-02.jpg",
      name: "Dr. Fred Ortego",
      pers: "Prescription 3",
      field: "Cardiologist",
      date: "14 Nov 2019",
    },
    {
      img: "doctor-thumb-02.jpg",
      name: "Dr. Fred Ortego",
      pers: "Prescription 4",
      field: "Cardiologist",
      date: "14 Nov 2019",
    },
    {
      img: "doctor-thumb-02.jpg",
      name: "Dr. Fred Ortego",
      pers: "Prescription 5",
      field: "Cardiologist",
      date: "14 Nov 2019",
    },
    {
      img: "doctor-thumb-02.jpg",
      name: "Dr. Fred Ortego",
      pers: "Prescription 6",
      field: "Cardiologist",
      date: "14 Nov 2019",
    },
    {
      img: "doctor-thumb-02.jpg",
      name: "Dr. Fred Ortego",
      pers: "Prescription 7",
      field: "Cardiologist",
      date: "14 Nov 2019",
    },
    {
      img: "doctor-thumb-02.jpg",
      name: "Dr. Fred Ortego",
      pers: "Prescription 8",
      field: "Cardiologist",
      date: "14 Nov 2019",
    },
  ],
};

const prescription = (state = initialstate, action) => {
  switch (action.type) {
    case "PRESCRIPTION":
      return {
        ...state,
        prescription: state.prescription,
      };
    default:
      return state;
  }
};
export default prescription;
