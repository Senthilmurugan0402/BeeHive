import { Fragment, useEffect } from "react";
import { Collapse, Dropdown, initTE } from "tw-elements";
import { useNavigate } from "react-router-dom";
import { PageLinks } from "../../common/appData/Constants";
import NavBar from "../../common/components/navigation/NavBar";
import NewsFeed from "./NewsFeed";

const Home: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    initTE({ Collapse, Dropdown });
  }, []);
  return (
    <Fragment>
      <NavBar />
      <NewsFeed />
    </Fragment>
  );
};

export default Home;
