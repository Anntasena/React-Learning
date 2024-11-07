import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="avatar.jpg" alt="Wallpaper" />;
}

function Intro() {
  return (
    <div>
      <h1>Wallpaper Desktop</h1>
      <p>
        Latar layar, hiasan latar, atau latar belakang (juga dikenal sebagai
        wallpaper, latar layar desktop, latar belakang desktop, gambar desktop,
        atau citra desktop di komputer) adalah gambar digital (foto, gambar,
        dll.) yang digunakan sebagai latar belakang hiasan antarmuka pengguna
        grafis di layar komputer.
      </p>
    </div>
  );
}

function SkillList() {
  const allSkill = skills;
  // const skillDes = allSkill.map((skill) => console.log(skill.skill));

  return (
    <div className="skill-list">
      {allSkill.map((skills) => (
        <Skill skillObj={skills} key={skills.skill} />
      ))}
    </div>
  );
}

function Skill({ skillObj }) {
  console.log(skillObj);
  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.skill}</span>
      <span>
        {skillObj.level === "advanced" && "😎"}
        {skillObj.level === "intermediate" && "👍"}
        {skillObj.level === "beginner" && "🫡"}
      </span>
    </div>
  );
}

//-----------
// RENDER APP
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
