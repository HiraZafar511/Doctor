const initialstate = {
  data: [
    {
      img: "doctor-thumb-02.jpg",
      name: " Dr. Fred Ortego",
      field: "Cardiologist",
      date: "14 Nov 2019",
      id: "#MR-0010",
      des: "Cardiologist Filling",
      attachment: "Cardiologist-test.pdf",
    },
    {
      img: "doctor-thumb-02.jpg",
      name: " Dr. Fred Ortego",
      field: "Cardiologist",
      date: "14 Nov 2019",
      id: "#MR-0010",
      des: "Cardiologist Filling",
      attachment: "Cardiologist-test.pdf",
    },
    {
      img: "doctor-thumb-02.jpg",
      name: " Dr. Fred Ortego",
      field: "Cardiologist",
      date: "14 Nov 2019",
      id: "#MR-0010",
      des: "Cardiologist Filling",
      attachment: "Cardiologist-test.pdf",
    },
    {
      img: "doctor-thumb-02.jpg",
      name: " Dr. Fred Ortego",
      field: "Cardiologist",
      date: "14 Nov 2019",
      id: "#MR-0010",
      des: "Cardiologist Filling",
      attachment: "Cardiologist-test.pdf",
    },
    {
      img: "doctor-thumb-02.jpg",
      name: " Dr. Fred Ortego",
      field: "Cardiologist",
      date: "14 Nov 2019",
      id: "#MR-0010",
      des: "Cardiologist Filling",
      attachment: "Cardiologist-test.pdf",
    },
    {
      img: "doctor-thumb-02.jpg",
      name: " Dr. Fred Ortego",
      field: "Cardiologist",
      date: "14 Nov 2019",
      id: "#MR-0010",
      des: "Cardiologist Filling",
      attachment: "Cardiologist-test.pdf",
    },
    {
      img: "doctor-thumb-02.jpg",
      name: " Dr. Fred Ortego",
      field: "Cardiologist",
      date: "14 Nov 2019",
      id: "#MR-0010",
      des: "Cardiologist Filling",
      attachment: "Cardiologist-test.pdf",
    },
    {
      img: "doctor-thumb-02.jpg",
      name: " Dr. Fred Ortego",
      field: "Cardiologist",
      date: "14 Nov 2019",
      id: "#MR-0010",
      des: "Cardiologist Filling",
      attachment: "Cardiologist-test.pdf",
    },
  ],
};

const medicalRecord = (state = initialstate, action) => {
  switch (action.type) {
    case "RECORD":
      return {
        ...state,
        record: state.record,
      };
    default:
      return state;
  }
};
export default medicalRecord;
