import React from "react";

const Home = (props) => {
  return (
    <div className="home">
      <div
        className={
          "homeWrapper " +
          (window.location.hostname === "www.vistabiomed.com"
            ? "exclude"
            : "include")
        }
      >
        <h3>Welcome to VISTA BIOMED DRUG STORE L.L.C</h3>
        <h4>
          Dubai: VISTA BIOMED DRUG STORE L.L.C is one of the upcoming suppliers
          in Medical Equipment & Medical Disposable Products – Dubai, UAE
        </h4>

        <p>
          Vista Biomed DRUG STORE L.L.C (VBM) was established in 2010 in India
          and has developed rapidly to be one of the leading suppliers in
          medical equipment and medical disposable products in U.A.E. and the
          neighboring regions.
        </p>

        <p>
          VISTA BIOMED DRUG STORE L.L.C primarily distributes products related
          to Gastroenterology Pulmonology, Interventional Radiology, Urology and
          IVF.
        </p>
        <p>
          VISTA BIOMED DRUG STORE L.L.C prides itself on being able to provide a
          totally flexible service tailored to meet the differing and demanding
          needs of its customers with the focus on product quality and service
          complemented by competitive pricing.
        </p>
        <h3>CEO'S MESSAGE</h3>
        <p>
          Dear Visitor, VISTA BIOMED DRUG STORE LLC is a well reputed Medical
          Supplies Company based in United Arab Emirates built on a distinct
          vision. It is driven by a set of great values, which is amply
          reflected in every aspect of our business. Since its inception in
          early 2010, VBM has grown to be a leading supplier of a wide range of
          medical consumables. Its powerful presence in the market is supported
          by our well-wishers and loyal customer base. Our commitment to care
          and excellence is reflected in our core values and belief. They give
          us the impetus to strive for excellence. They are the driving force
          behind everything we do. We continuously endeavor to provide better
          products and service. We envisage VBM as an enduring world-class
          company engaged in the distribution of superb quality Medical Supplies
          affordable to everyone who seeks a quality-value balance. We will
          continually endeavor to be a socially responsible company. 
        </p>
        <p>
          Thank you for your interest in VISTA BIOMED Drugstore LLC Dubai. We
          look forward the opportunity to serve you.
        </p>
        <p>REJI SOMNATH</p>
        <p>VBM LLC</p>
        <h3>ABOUT US</h3>
        <h4>OUR MISSION</h4>
        <ul>
          <li>
            Persistently trying hard to make VBM a globally recognized
            healthcare company by focusing stringently on the core values on
            which our foundation is built.
          </li>
          <li>
            Not just fulfill, but excel customer expectations by endowing
            unparalleled customer support.
          </li>
          <li>Deploy state-of-the-art and superior technologies, always.</li>
          <li>
            Uphold the ethical values that make our business sector special.
          </li>
          <li>
            Safeguard the rights and privileges of our investors and employees.
          </li>
          <li>
            Remain responsive to societal and environmental concerns by
            concentrating on sustainable growth.
          </li>
        </ul>
        <p>
          One of the distinctive and defining aspects of VBM is that we have
          specialized in medical products for a long time and hence we have been
          able to keep up our relationship with suppliers and industry experts.
          We have managed to provide the best medical consumables to our
          customers and also in maintaining reliable partners as providers; the
          company has grown to become a pioneer in medical supplies distribution
          services in the U.A.E.
        </p>

        <h4>OUR VISION</h4>
        <p>
          To become a respected brand name and to be recognized as industries
          best provider of quality medical supplies at very affordable prices
          along with maintaining high deliverable standards.
        </p>
        <ul>
          <li>
            Honesty: Our Company is established with a strong foundation of
            honesty towards humanity.
          </li>
          <li>
            Respect: We try to earn respect by primarily respecting others.
          </li>
          <li>
            Excellence: We have a very strong commitment towards excellence and
            we strive to improve our work every single day.
          </li>
          <li>
            Positive: We stay positive and enforce that feeling on our clients
            which is very essential for being successful.
          </li>
          <li>
            On Time: Being in the medical supplies, we understand the value of
            time and we work towards assuring timely supplies and maintaining
            swift communications with our clients. Aspire to become the global
            industry leader by providing innovative, practical and affordable
            healthcare solutions that would significantly improve people's life
            across the world.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
