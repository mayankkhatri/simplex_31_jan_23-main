import React from 'react';
import { Link } from 'react-router-dom';
import Sideform from '../../components/sideform/Sideform';

const HongKong = () => {
  return (
    <div className='immigration'>
      <div className="bg-dark immigration-top"></div>
      <div className="container mt-md-5 mt-3">
        <div className="row">
          <div className="col-md-8">
            <h1>BEST HONG KONG IMMIGRATION AND VISA CONSULTANTS IN DELHI NCR, INDIA</h1>
            <p>Our Consultancy are the best Hong Kong immigration consultants in Delhi. Whether you wish to holiday in Hong Kong or move there we are here to help. Applying for a Hong Kong visa can be a tedious process. You have to be aware of multiple details of the immigration process. Our consultants are professionals that are experts in this domain. With in-depth knowledge of the requirements for visas, we provide support and professional advice every step of the way. We understand that you expect more from consultants than just some help filling forms. </p>
            {/* <p>As a leading Hong Kong immigration consultancy services agency, we ensure quality checks from our side. Each application and document is verified multiple times. After the verification process, we file all the paperwork. Once the application for a Hong Kong visa or immigration program is filed, we provide regular updates to our clients. We will also help you in finding the appropriate program through which you’ll more likely receive your visa. Our agents will be available to you throughout and even after the application process has consummated. Further, you can even get the breakdown of costs involved in the entire process.</p> */}
            <br />
            <h2>WHY HONG KONG</h2>
            <p><strong>TOP REASONS WHY CHOOSE HONG KONG TO IMMIGRATION</strong></p>
            <p>Hong Kong is one of the biggest hubs for banking and finance in the world. All major multinationals have offices here. Hong Kong also has some of the highest salaries in the world making it a popular destination for Indians. If you decide to study in Hong Kong you can take advantage of the many companies that have offices there to get a job.</p>
            <p>Though the city has the highest density of skyscrapers in the world, almost 40% of Hong Kong has protected national parks. The beautiful beaches and scenic view make the city an excellent place to call home.</p>
            <br />
            <h2>VISA TYPES</h2>
            <p>There are many types of visas for Hong Kong. You should know which one you want to apply for before starting the application process. We can help you to make this decision.</p>
            <p><strong>Hong Kong Visit visa: </strong>If you wish to go to Hong Kong for a holiday or to visit family or friends you need a visit visa.</p>
            <p><strong>Hong Kong Student Visa: </strong>If you have got admission in a college or university in Hong Kong you can apply for a student visa.</p>
            <p><strong>Hong Kong Work Visa: </strong>There are many companies in Hong Kong that hire expats. This is the visa you can apply for if you have an offer from a company.</p>
            {/* <p><strong>Hong Kong Investment visa: </strong>IF you are a self-employed person looking to move to Hong Kong you can apply for this visa.</p> */}
            <p><strong>Hong Kong Dependent visa: </strong>This is a visa for families, children and parents of people living in Hong Kong.</p>
            {/* <p><strong>Hong Kong Training visa: </strong>If you wish to get a training in Hong Kong you can apply for this visa.</p> */}
            {/* <p><strong>Hong Kong Domestic help visa: </strong>Domestic help can obtain visas but have to live in their employer’s home.</p> */}
            <p><strong>Hong Kong Permanent residency: </strong>If you have lived continuously in Hong Kong for seven years then you are entitled to a permanent residence visa.</p>
            <br />
            <h2>VISA REQUIREMENTS</h2>
            <p><strong>ELIGIBILITY REQUIREMENTS</strong></p>
            <p>These are the requirements needed to apply for a work permit in Hong Kong:</p>
            <ul>
              <li>You must have an employment letter from a company in Hong Kong</li>
              <li>You need to show necessary skills and qualifications</li>
              <li>The skills should match the job</li>
              <li>You must not have a criminal record</li>
              <li>You have graduated from an educational institution in Hong Kong less than six months ago</li>
            </ul>
            <br />
            <p><strong>REQUIRED DOCUMENTS</strong></p>
            <p>The documents required for a Hong Kong work visa are:</p>
            <ul>
              <li>An complete application with your details</li>
              <li>A copy of the registration certificate of the company</li>
              <li>A copy of an invitation letter from the company</li>
              <li>A cover letter with your name, current designation, journey expenses and schedule of stay</li>
              <li>A copy of your financial statements</li>
              <li>A copy of your flight itinerary</li>
              <li>Copies of the first and last page of your passport</li>
            </ul>
            <br />
            <h2>APPLICATION PROCESS</h2>
            <p><strong>APPLICATION PROCESS FOR HONG KONG IMMIGRATION AND VISA FROM INDIA</strong></p>
            <p>You can submit an application either at a Chinese embassy or consulate or online at the Honk Kong government’s official website. You will be notified if your application is successful by the computer once you have submitted it and will receive a PAR Notification Slip. Before you sign it make sure to check all the data is correct.</p>
            <p>With the number of forms and documents to fill and the strict guidelines, applying for a visa can be a stressful process. We offer you a stress-free application experience. With our team of experts we will guide you through each step of the process and give you practical tips to adjust to the new country.</p>
            <p>If you need more information about our immigration services, please don't hesitate to reach out to us. You can send an email to
              <Link to="mailto:info@simplex-immigration.com"> info@simplex-immigration.com</Link>, and one of our experts will get back to you promptly. Alternatively, you can call us directly at
              <Link to="tel:+91-9971223202"> +91-9971223202 </Link> to speak with an expert and get answers to any questions or concerns you may have. Let us help guide you through the immigration process and make it as seamless as possible.</p>

          </div>

          <div className="col-md-4">
            <Sideform />
          </div>

        </div>
      </div>
    </div>
  )
}

export default HongKong