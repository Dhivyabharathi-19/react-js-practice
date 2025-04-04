import "./App.css";
import styles from "./Style.module.css";
import Test from "./test.js";
import nature from "./image/nature.jpg";

function App() {
  const user = [
    {
      id: 1,
      name: "dhivya",
      role: "software developer",
      image: nature,
    },
    {
      id: 2,
      name: "sam",
      role: "fullstack developer",
      image: nature,
    },
    {
      id: 3,
      name: "deepi",
      role: "web developer",
      image: nature,
    },
  ];
  return (
    <div>
      <header className={styles.header}>
        <h2>STUDENT DETAILS</h2>
      </header>
      <div>
        {user.map((userdetail) => {
          return (
            <div>
              <Test
                key={userdetail.id}
                name={userdetail.name}
                role={userdetail.role}
                image={userdetail.image}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
