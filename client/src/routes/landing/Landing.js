import Footer from "../../components/footer/Footer";

const Landing = ({ message }) => {
  return (
    <div>
      <h1>{message}</h1>
      <Footer 
        author={"Jorge Antonio Fernandez"}
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      />
    </div>
  );
};

export default Landing;
