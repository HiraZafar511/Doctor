const initialstate = {
  data: [
    {
      img: "doctor-01.jpg",
      name: "Dr. Ruby Perrin",
      detail: "MDS - Periodontology and Oral Implantology, BDS",
      rating: "(17)",
      loc: "Florida, USA",
      date: "Available on Fri, 22 Mar",
      fee: " $300 - $1000",
    },
    {
      img: "doctor-01.jpg",
      name: "Dr. Ruby Perrin",
      detail: "MDS - Periodontology and Oral Implantology, BDS",
      rating: "(14)",
      loc: "Florida, USA",
      date: "Available on Fri, 22 Mar",
      fee: " $300 - $1000",
    },
    {
      img: "doctor-01.jpg",
      name: "Dr. Ruby Perrin",
      detail: "MDS - Periodontology and Oral Implantology, BDS",
      rating: "(18)",
      loc: "Florida, USA",
      date: "Available on Fri, 22 Mar",
      fee: " $300 - $1000",
    },
    {
      img: "doctor-01.jpg",
      name: "Dr. Ruby Perrin",
      detail: "MDS - Periodontology and Oral Implantology, BDS",
      rating: "(16)",
      loc: "Florida, USA",
      date: "Available on Fri, 22 Mar",
      fee: " $300 - $1000",
    },
    {
      img: "doctor-01.jpg",
      name: "Dr. Ruby Perrin",
      detail: "MDS - Periodontology and Oral Implantology, BDS",
      rating: "(30)",
      loc: "Florida, USA",
      date: "Available on Fri, 22 Mar",
      fee: " $300 - $1000",
    },
    {
      img: "doctor-01.jpg",
      name: "Dr. Ruby Perrin",
      detail: "MDS - Periodontology and Oral Implantology, BDS",
      rating: "(20)",
      loc: "Florida, USA",
      date: "Available on Fri, 22 Mar",
      fee: " $300 - $1000",
    },
  ],
};

const mapgrid = (state = initialstate, action) => {
  switch (action.type) {
    case "MAPGRID":
      return {
        ...state,
        mapgrid: state.mapgrid,
      };
    default:
      return state;
  }
};
export default mapgrid;
