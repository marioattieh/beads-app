import { useParams } from "react-router";

const Home = () => {
  const { id } = useParams();
  return (
    <div>
      <div>{id}</div>
    </div>
  );
};

export default Home;
