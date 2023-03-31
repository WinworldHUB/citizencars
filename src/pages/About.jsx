import BGImageSection from "../components/BGImageSection";
import DefaultLayout from "../layouts/DefaultLayout";

const About = () => {
  return (
    <DefaultLayout isTopMarginRequired={true}>
      <BGImageSection imgSrc="assets/img/sections/bg-01.png">
        <div className="container pt-10">
          <div className="row g-0">
            <div className="col-md-5">
              <h1 className="display-1 text-dark-grey text-thin pb-5">
                About us
              </h1>
              <p
                className="text-primary border-primary border-bottom"
                style={{ maxWidth: "340px" }}
              >
                Name Here a pre-owned luxury car dealer deals with 24 brands
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Consequat vulputate diam
                leo gravida faucibus libero pharetra faucibus morbi. Mi magnis
                quisque ac lectus tristique massa. Eget ut pharetra sed justo id
                elit pellentesque. Blandit diam risus sed viverra turpis lacinia
                porttitor lobortis. Etiam faucibus vivamus quisque lectus
                tincidunt nullam leo egestas molestie. Diam velit tincidunt dis
                ut porta felis massa augue. In diam sit porttitor blandit
                pulvinar est turpis. Lorem ipsum dolor sit amet consectetur.
                Consequat vulputate diam leo gravida faucibus libero pharetra
                faucibus morbi. Mi magnis quisque ac lectus tristique massa.
                Eget ut pharetra sed justo id elit pellentesque. Blandit diam
                risus sed viverra turpis lacinia porttitor lobortis. Etiam
                faucibus vivamus quisque lectus tincidunt nullam leo egestas
                molestie. Diam velit tincidunt dis ut porta felis massa augue.
              </p>
            </div>
          </div>
        </div>
      </BGImageSection>
      <BGImageSection imgSrc="assets/img/sections/bg-02.jpg">
        <div className="container pt-10">
          <div className="row g-0">
            <div className="offset-md-7 col-md-5 text-end">
              <h1 className="display-1 text-dark-grey text-thin pb-5">
                Our Vision
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Consequat vulputate diam
                leo gravida faucibus libero pharetra faucibus morbi. Mi magnis
                quisque ac lectus tristique massa. Eget ut pharetra sed justo id
                elit pellentesque. Blandit diam risus. Lorem ipsum dolor sit
                amet consectetur. Consequat vulputate diam leo gravida faucibus
                libero pharetra faucibus morbi. Mi magnis quisque ac lectus
                tristique massa. Eget ut pharetra sed justo id elit
                pellentesque. Blandit diam risus
              </p>
              <button className="btn btn-primary rounded px-4">More</button>
            </div>
          </div>
        </div>
      </BGImageSection>
    </DefaultLayout>
  );
};

export default About;
