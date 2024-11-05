import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="😚" color="green" />
      <Skill skill="HTML & CSS" emoji="😎" color="orangered" />
      <Skill skill="Javascript" emoji="😚" color="yellow" />
      <Skill skill="Web Design" emoji="🫡" color="blue" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
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
