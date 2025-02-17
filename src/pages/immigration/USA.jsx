import React from "react";
import { Link } from "react-router-dom";
import Sideform from "../../components/sideform/Sideform";

const USA = () => {
  return (
    <div className="immigration">
      <div className="bg-dark immigration-top"></div>
      <div className="container mt-md-5 mt-3">
        <div className="row">
          <div className="col-md-8">
            <h1>
              AN AUTHORIZED USA IMMIGRATION AND VISA CONSULTANCY SERVICES AGENCY
              IN DELHI NCR
            </h1>
            <p>
              We are the best immigration consultants for the United States in
              India. The United States visa consultants have all the appropriate
              certifications are available round the clock to help our clients
              through any issues. The team of immigration specialists and case
              managers are well trained and experienced in USA immigration
              process. They assist you in preparing the required documents that
              will maximize the chances of visa approval.
            </p>
            <p>
              The US has always been the top destination for immigration. People
              from all over the world apply for US visas as it can open multiple
              doors for immigrants. The US is acclaimed around the globe for the
              quality of life it provides. Higher salaries, better standard of
              living, good Labour laws and better education and training are
              some of the perks of living in the US.
            </p>
            <p>
              Universities like Harvard, Stanford, and other Ivy League schools
              attract many students from all over the world. US education is
              expensive but the degrees offer by US institutions is highly
              reputable. Also, students would be able to get better salaries if
              they complete their higher studies from a reputed US institution.
              When it comes to technology, US institutions have always been at
              the forefront. You’ll be able to learn the best and latest
              technologies from some of the best professors in the world.
            </p>
            <br />
            <h2>VISA APPLICATION PROCESS</h2>
            <p>
              There are a variety of US visas that a candidate can apply for.
              Here, we have mentioned some of the most applied for US visas for
              immigration. Once you have applied for your visa, if you qualify,
              you’ll be provided with a Green Card. A person who is possess a
              Green Card is a permanent resident of US.
            </p>
            <p>
              <strong>Employment Offer (H1-B):</strong>
            </p>
            <p>
              If you have an employment offer from a US employer, then you can
              file an application for a Green Card. In turn, the employer will
              have to sponsor you by filling in the I-140 Form. Though this
              visa, you’ll come to the US as a skilled worker. US EB-5 Visa: As
              the applicants of H1B visa have risen in the past few years, most
              candidates have started applying for a US EB-5 visa. For this
              visa, you need to invest a certain amount of money in a business
              based in the US. Applicants are allowed to live and work in the US
              while their application is being processed. This visa came into
              vogue this year and has far fewer applicants than H1B visa
              holders. Apart from these, there are special status jobs. If you
              are working in these jobs and have all the required credentials
              then you can easily get your Green Card. If you aren’t eligible
              for any of the aforementioned visa categories, then you can apply
              for Green Card Lottery Programs.
            </p>
            <br />
            <h2>VISA ELIGIBILITY CRITERIA</h2>
            <p>
              <strong>
                Eligibility and Requirements for the USA Different Visas from
                India
              </strong>
            </p>
            <p>
              For most visa categories, you need to fulfill the conditions
              mentioned below:
            </p>
            <ul>
              <li>
                Language Proficiency in English tested through tests like IELTS
                and TOEFL
              </li>
              <li>
                For visa categories in which candidates are nominated by
                employer, family member, institutions and so on, the document
                proving the nomination must be provided.
              </li>
              <li>
                You must have all the prerequisites for the visa category you
                are applying for. For instance, if you apply for a student visa,
                then you must be enrolled into an institution.
              </li>
              <li>
                Have enough funds to support self for a specified period of
                time.
              </li>
              <li>
                Character and health certificates proving your qualification
              </li>
            </ul>
            <br />
            <h2>WHY CHOOSE USA</h2>
            <p>
              <strong>
                Why is the USA Best Country to Immigration for Indians
              </strong>
            </p>
            <p>
              With good employment opportunities and a high standard of living,
              the United States is one of the most preferred countries in terms
              of liveability. The employers in the US offer a lot of perks to
              their employees and the universities have great infrastructure and
              facilities of research. Contact us for US visa services and US
              green cards. We have qualified and approved US visa consultants
              who can help you with US visas including, but not limited to:
            </p>
            <ul>
              <li>Work Visa</li>
              <li>Entrepreneur visa</li>
              <li>Travel Visa</li>
              <li>Family visa</li>
              <li>Dependent Visa</li>
              <li>Student Visa</li>
            </ul>
            <br />
            <p>
              <strong>Further, as a US visa consultancy, we will:</strong>
            </p>
            <ul>
              <li>
                Make sure to minimize the cost of the entire US visa application
                process
              </li>
              <li>
                Help you in getting everything including application forms,
                appointments and documents sorted out.
              </li>
              <li>Help you in preparing for Language Proficiency tests.</li>
              <li>
                Providing you with all the recent updates and notifications that
                may concern you.
              </li>
            </ul>
            <br />
            <h2>USA VISA BENEFITS</h2>
            <p>
              <strong>The Top Benefits of having USA Visa from India</strong>
            </p>
            <p>
              There are immense benefits of a US green card. A few of them have
              been listed below:
            </p>
            <ul>
              <li>Live, work and travel in the US</li>
              <li>File extension for stay</li>
              <li>
                File separate visa applications to bring dependents like
                children and spouse along with you
              </li>
              <li>Travel to and from the US</li>
              <li>Do part time work if circumstances demand it</li>
              <li>
                Apply for US citizenship after 5 or more years of holding a US
                green card
              </li>
            </ul>
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

export default USA;
