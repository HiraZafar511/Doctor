const initialstate = {
  profileData: "",
};
const profile = (state = initialstate, action) => {
  switch (action.type) {
    case "APPOINTMENT":
      return {
        ...state,
        profile: state.profile,
      };
    default:
      return state;
  }
};
export default profile;
