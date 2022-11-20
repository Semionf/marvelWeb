import "./App.css";
import { CardComponent } from "./components/CardComponent/cardComponent";
import { HadderComponent } from "./components/HadderComponent/hadderComponent";
let header = {
  imageUrl: "/images/marvel.jpg",
  title: "Lorem ipsum dolor sit",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing",
};
let card = [
  {
    imageUrl: "/images/spider-man.jpg",
    title: "Lorem, ipsum dolor.",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi excepturi quae incidunt ad pariatur ducimus.",
  },
  {
    imageUrl: "/images/bat-man.jpg",
    title: "Lorem, ipsum dolor.",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi excepturi quae incidunt ad pariatur ducimus.",
  },
  {
    imageUrl: "/images/iron-man.jpg",
    title: "Lorem, ipsum dolor.",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi excepturi quae incidunt ad pariatur ducimus.",
  },
];
export const App = () => {
  return (
    <div className="container">
      <HadderComponent
        path={header.imageUrl}
        title={header.title}
        description={header.description}
      ></HadderComponent>
      {card.map((m) => {
        return (
          <CardComponent
            path={m.imageUrl}
            title={m.title}
            description={m.description}
          />
        );
      })}
    </div>
  );
};
