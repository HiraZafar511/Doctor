const initialstate = {
  data: [
    {
      img: "patient.jpg",
      name: "George Anderson",
      id: "P0016",
      loc: "Alabama, USA",
      num: "+1 952 001 8563",
      age: "38 Years, Male",
      blood: "AB+",
    },
    {
      img: "patient.jpg",
      name: "George Anderson",
      id: "P0016",
      loc: "Alabama, USA",
      num: "+1 952 001 8563",
      age: "38 Years, Male",
      blood: "AB+",
    },
    {
      img: "patient.jpg",
      name: "George Anderson",
      id: "P0016",
      loc: "Alabama, USA",
      num: "+1 952 001 8563",
      age: "38 Years, Male",
      blood: "AB+",
    },
    {
      img: "patient.jpg",
      name: "George Anderson",
      id: "P0016",
      loc: "Alabama, USA",
      num: "+1 952 001 8563",
      age: "38 Years, Male",
      blood: "AB+",
    },
    {
      img: "patient.jpg",
      name: "George Anderson",
      id: "P0016",
      loc: "Alabama, USA",
      num: "+1 952 001 8563",
      age: "38 Years, Male",
      blood: "AB+",
    },
    {
      img: "patient.jpg",
      name: "George Anderson",
      id: "P0016",
      loc: "Alabama, USA",
      num: "+1 952 001 8563",
      age: "38 Years, Male",
      blood: "AB+",
    },
  ],
};

const patientlist = (state = initialstate, action) => {
  switch (action.type) {
    case "PATIENT":
      return {
        ...state,
        patient: state.patient,
      };
    default:
      return state;
  }
};
export default patientlist;
