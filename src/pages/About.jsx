import BGImageSection from "../components/BGImageSection";
import DefaultLayout from "../layouts/DefaultLayout";

const About = () => {
  return (
    <DefaultLayout isTopMarginRequired={true}>
      <BGImageSection imgSrc="assets/img/sections/bg-01.png">
        <div className="container pt-10">
          <div className="row g-0">
            <div className="col-12">
              <h1 className="display-1 text-grey text-thin">About us</h1>
            </div>
          </div>
        </div>
      </BGImageSection>
    </DefaultLayout>
  );
};

export default About;
