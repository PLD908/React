import './App.css';
import Button from "./components/ui/cta/button";
import Cards from "./components/ui/cards";
import WelcomeUser from "./components/ui/WelcomeUser";

function App() {
  return (
    <div className="App">
      <WelcomeUser name={"Divine"} />
      <Button />
      <Cards image="./assets/images/job.jpg" name="Laura Pearson" job="Events Manager"/>
      <Cards image="./assets/images/job.jpg" name="Laura Pearson" job="Events Manager"/>
      <Cards image="./assets/images/job.jpg" name="Laura Pearson" job="Events Manager"/>
    </div>
  );
}

export default App;
