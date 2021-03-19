import { useState } from "react";
import TeamPro from "./TeamPro";

const Team = () => {
  const [team, setTeam] = useState([
    {
      num: "01",
      img: "icon1.png",
      title1: " Personalized",
      title2: " Healthcare",
    },
    { num: "02", img: "icon2.png", title1: " Professional", title2: " Team" },
    { num: "03", img: "icon3.png", title1: " Regularly", title2: " checkup" },
    { num: "04", img: "icon4.png", title1: " Latest", title2: " Technology" },
  ]);
  return (
    <div class="feature-list">
      <div class="container">
        <div class="row">
          {team.map((item, key) => (
            <div class="col-12 col-md-6 col-lg-3">
              <TeamPro item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
