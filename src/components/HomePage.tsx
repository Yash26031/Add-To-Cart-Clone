import { FC, memo } from "react";
import { Link } from "react-router-dom";

type HomePageProps = {};

const HomePage: FC<HomePageProps> = (props) => {
  return (
    <>
      <h1>HOME PAGE</h1>
    </>
  );
};

HomePage.defaultProps = {};

export default memo(HomePage);
