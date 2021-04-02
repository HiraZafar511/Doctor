const initialstate = {
  data: [
    {
      img: "patient.jpg",
      name: "Joseph Butler",
      illness: "Heart Implant",
      body:
        " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem",
    },
    {
      img: "patient1.jpg",
      name: "Ana Butler",
      illness: "Heart Implant",
      body:
        " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem",
    },
    {
      img: "patient2.jpg",
      name: "Ami Smith",
      illness: "Heart Implant",
      body:
        " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem",
    },
    {
      img: "patient5.jpg",
      name: "James Smith",
      illness: "Heart Implant",
      body:
        " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem",
    },
  ],
};

const testimonial = (state = initialstate, action) => {
  console.log(action);
  switch (action.type) {
    case "TESTIMONIAL":
      return {
        ...state,
        testimonial:state.testimonial,
      };
      default:
        return state;
    }
  
};
export default testimonial;

