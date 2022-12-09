import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import { Footer } from "./components/Footer/Footer";

const App = () => {
  const users = [
    {
      name: "Адилет",
      lastName: "Алишеров",
      age: "18",
      id: "1",
    },
    {
      name: "Медина",
      lastName: "Алиева",
      age: "18",
      id: "2",
    },
    {
      name: "Каныкей",
      lastName: "Алишерова",
      age: "24",
      id: "3",
    },
    {
      name: "Зулфукар",
      lastName: "Амракулов",
      age: "19",
      id: "4",
    },
    {
      name: "Калыбек",
      lastName: "Асхатов ",
      age: "28",
      id: "5",
    },
    {
      name: "Канай",
      lastName: "Бакиров",
      age: "18",
      id: "6",
    },
    {
      name: "Самат",
      lastName: "Бердибеков ",
      age: "18",
      id: "7",
    },
    {
      name: " Нурсултан",
      lastName: "Джетыбаев ",
      age: "18",
      id: "8",
    },
    {
      name: "Элдос",
      lastName: "Жолболдуев",
      age: "17",
      id: "9",
    },
    {
      name: "Нурдан",
      lastName: "Кайыпов",
      age: "24",
      id: "10",
    },
    {
      name: "Альберт",
      lastName: "Камчыбеков",
      age: "22",
      id: "11",
    },
    {
      name: "Эртур",
      lastName: "Карыпов",
      age: "18",
      id: "12",
    },
  ];
  return (
    <div>
      <Header />
      {users.map((item) => {
        return (
          <Section
            name={item.name}
            lastName={item.lastName}
            age={item.age}
            id={item.id}
          />
        );
      })}

      <Footer />
    </div>
  );
};

export default App;
