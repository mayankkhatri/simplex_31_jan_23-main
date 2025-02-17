import React from "react";
import { Link } from "react-router-dom";
import Sideform from "../../components/sideform/Sideform";

const Canadaentry = () => {
  return (
    <div className="immigration">
      <div className="bg-dark immigration-top"></div>
      <div className="container mt-md-5 mt-3">
        <div className="row">
          <div className="col-md-8">
            {/* <h2 style={{color: 'rgba(255, 73, 72, 1)'}}>All you need to know about the Canada Express Entry program</h2> */}
            <h1 style={{ color: "rgba(255, 73, 72, 1)" }}>
              All About Canada Immigration
            </h1>
            <p>
              Migration to Canada is now an easy affair, and with the Canada
              Express Entry system you can live and work in Canada for a long
              period of time. Every skilled professional looking for lucrative
              job opportunities applies for permanent residency under one of the
              federal economic immigration programs namely Federal Skilled
              Worker Program, Federal Skilled Trades Program, and Canada
              Experience Class.
            </p>
            <p>
              Launched in 2015, the Canada express entry is basically an online
              immigration system which manages skilled workers applications for
              permanent residence to Canada. It is designed as a competitive
              immigration system that ranks all the qualified applicants against
              one another and then sending them an Invitation to Apply for
              securing a permanent residence Canada status.
            </p>
            <h2>What is Express Entry system?</h2>
            <p>
              Canada express entry or EEP can be defined as a fast track
              immigration pathway to gain permanent residency for skilled
              professionals. Under this system applicants are ranked against one
              another based on the selection factors of age, work experience,
              educational qualifications, proficiency in English or French
              language, as well as additional factors like arranged employment
              and a genuine intention to live and economically establish
              themselves in any one of the Canadian provinces.
            </p>
            <h2>How does Canada Immigration Express Entry Work?</h2>
            <p>
              <strong>STEP 1 -</strong> This involves you to fill out an online
              express entry form with details of nationality, age, language
              ability, family members, education qualifications, work experience
              as well as details on any job offer.
            </p>
            <p>
              <strong>STEP 2 -</strong> Just keep all your documents like
              language tests ready to ensure that you are eligible for Canada
              Express entry. Once the application is filed in the pool the
              applicant is issued an Express Entry Profile number and Job Seeker
              Validation code. Using both, the candidate can build their resume
              their resume in the Canada Job bank.
            </p>
            <p>
              <strong>STEP 3 -</strong> After doing all the formalities you will
              be ranked in the Express Entry pool using the points-based system.
              This score will be based on the information provided by you in the
              profile.
            </p>
            <p>
              <strong>STEP 4 -</strong> The highest scoring candidates are send
              an Invitation to apply for permanent residence. If send an ITA,
              you will have 90 days within which you will be required to submit
              your application.
            </p>
            <h2>Canada Express Entry Eligibility</h2>
            <p>
              For you to be eligible to apply for express entry you will be
              required to score a minimum of 67 Canada express entry points
              based on the factors of age, education qualifications, work
              experience, whether you have a valid job offer, English and/or
              French language skills as well as adaptability how well you’re
              likely to settle here. These scores are out of 100 based on the
              point’s assessment grid.
            </p>
            <p>
              Your points will be granted based on how well you fare based on
              these six selection factors to assess eligibility of any of the
              three chief economic federal programs.
            </p>
            {/* <h2>Take Help from Express Entry points Calculator?</h2>
        <p>To get an idea whether or not you are eligible to apply to any of the federal economic immigration programs, ensure that you get an idea of your score. This idea you can get by doing a score tally on the Canada PR points calculator based on the above mentioned selection factors. Every two weeks, draws are held by the IRCC to select applicants with the highest CRS scores.</p>
        <p>Even if you seek more information about <strong>Canada Express Entry</strong>you can write an email on one of the most experienced immigration consultants will get in touch with you to help you out with your questions and concerns or you can also choose to call us on +91-8595338595 or directly interact with the expert through our Live Chat window.</p> */}
            <p>
              If you need more information about our immigration services,
              please don't hesitate to reach out to us. You can send an email to
              <Link to="mailto:info@simpleximmigration.com">
                {" "}
                info@simpleximmigration.com
              </Link>
              , and one of our experts will get back to you promptly.
              Alternatively, you can call us directly at
              <Link to="tel:+91-9971223202"> +91-9971223202 </Link> to speak
              with an expert and get answers to any questions or concerns you
              may have. Let us help guide you through the immigration process
              and make it as seamless as possible.
            </p>
          </div>

          <div className="col-md-4">
            <Sideform />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Canadaentry;
