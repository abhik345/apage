import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Title from "./components/Title";
import SubmitTaskButton from "./components/SubmitTaskButton";
import SubTitle from "./components/SubTitle";
import Card from "./components/Card";
import card from "./components/cardL.svg";
import Card1 from "./components/Cards/Crad1";

function App() {
  return (
    <div className="App">
      <div>
        <NavigationBar />
        <Title />
        <SubmitTaskButton />
        <SubTitle />
      </div>
      <div className="complete-card">
        <Card
          title="Technical Project Management"
          image={card}
          description="Description: Story of Alignment Scope of Agility Specific Accountable Staggering Approach"
        />
        <Card1 />
      </div>
    </div>
  );
}

export default App;
