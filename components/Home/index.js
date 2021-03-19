import Appointment from "./Appointment";
import Intro from "./intro";
import HeartCare from "./HeartCare";
import Archieve from "./Archieve";
import Team from "./Personalized/Team";
import Test from "./Testimmonial/Test";
import ChooseSol from "./ChooseSol";
import Blog from "./blog";
import Kp from "./Kp";

const Home = () => {
  return (
    <div>
      <Intro />
      <Appointment />
      <Kp />
      <Archieve />
      <Team />
      <Test />
      <ChooseSol />
      <Blog />
    </div>
  );
};

export default Home;
