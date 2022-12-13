import { FadeIn } from "../components/Animations";
import { WorkGridItem } from "../components/GridItem";
import weatherApp from "../public/images/works/weather-app.png";
import todo from "../public/images/works/todo.png";
import Container from "../components/Container";

const Works = () => {
  return (
    <Container title="Works - Qu1etboy">
      <FadeIn>
        <div className="flex flex-1 flex-col justify-center items-center mt-12">
          <h1 className="text-3xl font-bold mb-20">My Works</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
            <WorkGridItem
              title="Weather App"
              thumbnail={weatherApp}
              url="https://weather.qu1etboy.vercel.app/"
            >
              A simple Weather App built using NextJS and Tailwind CSS
            </WorkGridItem>
            <WorkGridItem
              title="Todo App"
              thumbnail={todo}
              url="https://react-todo-list-app-mu.vercel.app/"
            >
              A simple Todo App that can add and remove your task.
            </WorkGridItem>
          </div>
        </div>
      </FadeIn>
    </Container>
  );
};

export default Works;
