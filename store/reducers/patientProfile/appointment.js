const initialstate = {
  data: [
    {
      img: "doctor-thumb-02.jpg",
      name: " Dr. Fred Ortego",
      field: "Cardiologist",
      date: "14 Nov 2019",
      time: "10.00 AM",
      booking: "12 Nov 2019",
      amount: "$160",
      followup: "16 Nov 2019",
      status: "Confirm",
    },
    {
      img: "doctor-thumb-02.jpg",
      name: " Dr. Fred Ortego",
      field: "Cardiologist",
      date: "14 Nov 2019",
      time: "10.00 AM",
      booking: "12 Nov 2019",
      amount: "$160",
      followup: "16 Nov 2019",
      status: "Confirm",
    },
    {
      img: "doctor-thumb-02.jpg",
      name: " Dr. Fred Ortego",
      field: "Cardiologist",
      date: "14 Nov 2019",
      time: "10.00 AM",
      booking: "12 Nov 2019",
      amount: "$160",
      followup: "16 Nov 2019",
      status: "Cancelled",
    },
    {
      img: "doctor-thumb-02.jpg",
      name: " Dr. Fred Ortego",
      field: "Cardiologist",
      date: "14 Nov 2019",
      time: "10.00 AM",
      booking: "12 Nov 2019",
      amount: "$160",
      followup: "16 Nov 2019",
      status: "Confirm",
    },
    {
      img: "doctor-thumb-02.jpg",
      name: " Dr. Fred Ortego",
      field: "Cardiologist",
      date: "14 Nov 2019",
      time: "10.00 AM",
      booking: "12 Nov 2019",
      amount: "$160",
      followup: "16 Nov 2019",
      status: "Cancelled",
    },
    {
      img: "doctor-thumb-02.jpg",
      name: " Dr. Fred Ortego",
      field: "Cardiologist",
      date: "14 Nov 2019",
      time: "10.00 AM",
      booking: "12 Nov 2019",
      amount: "$160",
      followup: "16 Nov 2019",
      status: "Confirm",
    },
    {
      img: "doctor-thumb-02.jpg",
      name: " Dr. Fred Ortego",
      field: "Cardiologist",
      date: "14 Nov 2019",
      time: "10.00 AM",
      booking: "12 Nov 2019",
      amount: "$160",
      followup: "16 Nov 2019",
      status: "Cancelled",
    }, {
        img: "doctor-thumb-02.jpg",
        name: " Dr. Fred Ortego",
        field: "Cardiologist",
        date: "14 Nov 2019",
        time: "10.00 AM",
        booking: "12 Nov 2019",
        amount: "$160",
        followup: "16 Nov 2019",
        status: "Pending",
      },
  ],
};

const patientProfile = (state = initialstate, action) => {
  switch (action.type) {
    case "PROFILE":
      return {
        ...state,
        profile: state.profile,
      };
    default:
      return state;
  }
};
export default patientProfile;
