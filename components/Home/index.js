import Appointment from "./Appointment";
import Intro from "./intro";
import HeartCare from "./HeartcareCaro/Care";
import Archieve from "./Archieve";
import Team from "./Personalized/Team";
import Test from "./Testimmonial/Test";
import ChooseSol from "./ChooseSol";
import Blog from "./blog";

import styles from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <Intro />
      <Appointment />
      <HeartCare />
      <Archieve />
      <Team />
      <Test />
      <ChooseSol />
      <Blog />
    </div>
  );
};

export default Home;
