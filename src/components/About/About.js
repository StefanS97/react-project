import CustomTitle from "../UI/CustomTitle";

const About = () => {
  return (
    <section>
      <CustomTitle title="About us!" />
      <div className="centered">
        <div className="about-details">
          <img
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="companyImage"
            className="about-image"
          />
          <article className="article">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
            reiciendis beatae maxime commodi omnis quisquam molestiae pariatur
            est nam nulla, sit harum aliquam, obcaecati neque iusto iure non
            laborum porro optio iste fuga voluptate doloremque! Asperiores iure
            laborum facilis cupiditate impedit, eligendi quia ipsum hic optio
            aliquid libero nobis. Rerum et deserunt unde repellendus id
            provident ipsam ab perspiciatis velit quas nostrum ipsum, dolorum
            iure magni mollitia eos eveniet quisquam aperiam quidem quo
            asperiores recusandae?
          </article>
        </div>
        <article className="article">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          magni tempora fuga aliquid exercitationem ipsam omnis deserunt numquam
          nobis debitis quibusdam dolor blanditiis at, illum pariatur. Dolorem
          libero reiciendis quaerat omnis sed exercitationem doloribus fugit,
          veritatis quod eligendi! Sint ex aut optio, est voluptatem ipsum
          facilis qui omnis aliquid obcaecati temporibus laudantium nemo
          consequatur reprehenderit dicta porro expedita iure repellendus
          laborum dignissimos libero sunt totam! Tenetur vel perferendis
          nesciunt deleniti ab sunt ut aspernatur voluptatum, aut vitae
          exercitationem iure sed in quisquam maxime beatae atque ipsa quae est
          tempore nihil? Consectetur maxime ipsum soluta. Provident cum
          aspernatur harum velit deserunt.
        </article>
      </div>
    </section>
  );
};

export default About;
