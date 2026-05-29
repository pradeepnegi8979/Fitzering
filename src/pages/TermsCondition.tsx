import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import '../styles/TermsCondition.css';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';

export const TermsConditon: React.FC = () => {
  return (
    <Fragment>
      <Header/>
    <article className="terms-conditions-view" id="terms-and-conditions-document">
      <Container className="terms-container">
        {/* Page Title & Header Information */}
        <header className="terms-document-header text-center mb-5">
          <h1 className="terms-main-title">Terms and Conditions</h1>
          <p className="terms-last-updated">Last updated: November 18, 2024</p>
        </header>

        {/* Introduction Section */}
        <section className="terms-section-block mb-5">
          <p className="terms-paragraph">
           We, Fitonclick FZE, and our affiliate, subsidiary and parent companies (collectively, “Fitze”, “us”, “we” or “our”) are excited to provide you with the use of our website, applications, content, and platform (the “Service”). These Terms and Conditions form a legally binding agreement between you and Fitze in relation to your use of the Service. By using the Service or by registering an account for the Service, you expressly understand and agree to be bound by these Terms and Conditions, our Privacy Policy, any additional guidelines provided, and any future amendments of the above mentioned (collectively, the “Agreement”).
          </p>
        </section>

        {/* 1. Acceptance of Terms */}
        <section className="terms-section-block mb-5">
          <h2 className="terms-part-title text-uppercase">Your Use </h2>
          <p className="terms-paragraph">
            The Fitze Services are intended for anyone over the age of eighteen (18). However, if you are between thirteen (13) to seventeen (17) years of age, you may only access and/or use any of the Services with the consent of your parent or guardian. Subscription to the Service is not valid in those jurisdictions where the Service is prohibited by law or by our policies. By using our Service, you represent and warrant that you have the right, authority and capacity to enter into this Agreement and that you abide by all of the terms and conditions of this Agreement.
          </p>
        </section>

        {/* 2. Eligibility */}
        <section className="terms-section-block mb-5">
          <h2 className="terms-part-title text-uppercase">Services</h2>
          <p className="terms-paragraph">Fitze shall offer the following services through the Fitze app, with the objective of facilitating a rewarding and engaging fitness experience: 
         </p>
         <p><b>Fitze Coins:</b> Fitze extends the provision of one Fitze coin to users for every 1000 steps completed. These Fitze coins are eligible for redemption against rewards and jackpots, as cataloged on the Fitze app’s marketplace.</p>
         <p><b>Rewards:</b> Fitze grants its users access to a curated selection of promotional offers and discounts, which are exclusively accessible to Fitze users, and which are made available by a limited number of select UAE brands. </p>
        <p><b>Jackpots:</b> Fitze hosts jackpots on the app to amplify user engagement and incentivize fitness achievements. The jackpots are conducted in three categories- weekly, monthly and annual jackpots. </p>
        <p><b>Steps Challenges:</b> Fitze organizes and conducts steps challenges, inviting users to partake in these challenges to bolster their motivation. Users are additionally afforded the opportunity to access leaderboards, allowing for friendly competition with fellow participants. </p>
        <p><b>In-app Social Feed:</b> Fitze users are encouraged to actively engage with other users on the app through the social feed, thereby enabling the sharing of personal fitness achievements and participation in discussions relating to fitness and general well-being. </p>
        <p><b>Fitze PRO: </b>Fitze PRO represents a subscription-based service, wherein users, for a recurring monthly or annual fee, gain access to an array of enhanced features. These features encompass the privilege to earn Fitze coins at a rate three times the standard, exclusive rewards, limitless steps challenges, and participation in weekly, monthly, and annual jackpots, offering exciting giveaways.</p>
        <p><b>Corporate Module:</b> Fitze introduces a dedicated corporate module, thoughtfully designed for businesses to facilitate the organization of fitness challenges and wellness programs for their employees. This feature is tailored to enhance team engagement and promote the overall well-being of employees. </p>
        </section>

        {/* 3. Account Registration & Security */}
        <section className="terms-section-block mb-5">
          <h2 className="terms-part-title text-uppercase">Privacy</h2>
          <p className="terms-paragraph">
            The Fitze Privacy Policy (“Privacy Policy”) serves as an integral part of this Agreement. Please ensure to carefully review and read the Privacy Policy for details relating to the collection, use, and disclosure of your personal information. <a href="https://www.fitze.ae/privacy-policy/">https://www.fitze.ae/privacy-policy/</a></p>
          
        </section>
        <section className="terms-section-block mb-5">
          <h2 className="terms-part-title text-uppercase">Changes to the Terms</h2>
          <p className="terms-paragraph">We may, in our sole discretion, edit, modify, add, or remove any part of this Agreement at any time without providing prior notice to you. Please ensure to periodically check our website for any changes to the Agreement. Any modifications to the Agreement shall be effective immediately for all new and existing users. By your continued use of the Service, you explicitly agree to any such changes. </p>
        </section>
        <section className="terms-section-block mb-5">
          <h2 className="terms-part-title text-uppercase">Pricing</h2>
          <p className="terms-paragraph">We endeavor to accurately provide all prices on our Service. We reserve the right to refuse or cancel purchases where we provide an incorrect price or provide you with the wrong information. All prices may be changed without providing any prior notice. The prices are per person, unless mentioned otherwise.</p>
        </section>
        
        
        
        {/* 4. Tracking, Steps & Fitness Data Calibration */}
        <section className="terms-section-block mb-5">
          <h4>Payments</h4>
          <h2 className="terms-part-title text-uppercase">General</h2>
          <p className="terms-paragraph">
            You agree to pay Fitze for all charges at the agreed upon prices for any use of the Service by you or other persons using your account, and you authorize Fitze to charge your chosen payment provider (your “Payment Method“) for the use of the Service. We reserve the right to correct any errors or mistakes that we make in relation to your payment, even if we have received payment. However, if it is a mistake on our side, we endeavor to rectify it as soon as possible. 


          </p>
          
        </section>
        <section className="terms-section-block mb-5">
          <h2 className="terms-part-title text-uppercase">Payment Method </h2>
          <p className="terms-paragraph">Payment for your use of the Service shall be based on your Payment Method and shall be governed by a separate agreement between you and your choice of Payment Method. In the scenario where we do not receive payment from your chosen Payment Method, you explicitly agree to immediately pay all amounts due to Fitze; otherwise, we reserve the right to suspend or terminate your access to the Service(s). </p>
        </section>
        <section className="terms-section-block mb-5">
          <h2 className="terms-part-title text-uppercase">Accuracy of Information</h2>
          <p className="terms-paragraph">You unequivocally agree to inform us in the scenario where your payment method has been cancelled, or in the scenario where you have become aware of a potential breach of your Payment Method, or of the unauthorized use or disclosure of your access to the Service.</p>
        </section>
        {/* 5. Coins, Streak Points, and Vouchers (Rewards) */}
        <section className="terms-section-block mb-5">
          <h2 className="terms-part-title text-uppercase">Recurring Billing</h2>
          <p className="terms-paragraph">By agreeing to this Agreement, you accept that you may be charged on a recurring basis, and you accept complete responsibility for all charges. We reserve the right to make periodic charges, without further authorization from you, until you provide prior written notice to us that you have terminated this authorization or wish to change your Payment Method. Such notice shall only be deemed effective upon our confirmation that your Payment Method has been changed. 
          </p>
          <p className="terms-paragraph">
            All virtual coins, points, and items awarded are completely non-transferable, possess absolutely no cash/monetary value, and cannot be redeemed for fiat currency or exchanged outside of the application ecosystem.
          </p>
          <p className="terms-paragraph">
            Vouchers, promo codes, discounts, and items redeemed from our brand partners are governed by each partner's respective terms and conditions. Fitze is not responsible for partner availability, voucher invalidity, product defects, or failure of brand systems to honor redeemed credentials.
          </p>
        </section>
        <section className="terms-section-block mb-5">
          <h2 className="terms-part-title text-uppercase">Reaffirmation of Authorization</h2>
          <p className="terms-paragraph">
            By your non-termination or continued use of the Service, you authorize us to charge your Payment Method. We reserve the right to submit those charges for payment and you will be responsible for such charges. This does not waive Fitze’s right to seek payment directly from you. Your charges may be payable in advance, in arrears, per usage, or as otherwise described on the applicable payment screen. </p>
        </section>
        {/* 6. Prohibited Activities & Account Termination */}
        <section className="terms-section-block mb-5">
          <h2 className="terms-part-title text-uppercase">Refunds</h2>
          <p className="terms-paragraph">Fitze does not provide refunds for use of the Service or for subscriptions of our Services. If you terminate your subscription, you may use it until the end of your then-current term; your subscription will not be renewed after your then-current term expires.</p>
        </section>
        <section className="terms-section-block mb-5">
          <h2 className="terms-part-title text-uppercase">Free Trials and Other Promotions </h2>
          <p className="terms-paragraph"> Any free trial or other promotion must be used within the specified time of the trial. You must choose to terminate your access to the feature or service before the end of the trial period in order to avoid being charged the applicable fee and/or put on a follow up subscription plan as communicated to you during the signup process to the free trial or promo. If you terminate access prior to the end of the trial period and are inadvertently charged a fee, please contact Fitze support to have the charges reversed. 
           </p>
        </section> 
        <section className="terms-section-block mb-5">
          <h2 className="terms-part-title text-uppercase">Account Security</h2>
          <p className="terms-paragraph">You are responsible for maintaining the confidentiality of the username and password that you use to register for and use the Service. You agree to (a) immediately notify Fitze of any unauthorized use of your username or password or any other breach of security, and (b) ensure that you exit from your account at the end of each session. Fitze will not be liable for any loss or damage arising from your failure to comply with this provision. We shall endeavor to keep a high level of security of all our data; however, in the scenario where the data held by Fitze is stolen and/or leaked, we shall not be held liable in any way or form. You should use caution when accessing your account from a public or shared computer so that others are not able to view or record your password or other personal information. You may not share your account with any other person.</p>
        </section>  
        <section className="terms-section-block mb-5">
          <h2 className="terms-part-title text-uppercase">Usage Data </h2>
          <p className="terms-paragraph">We are gathering fitness data from our app globally, and we are sharing it with governments and private companies. By using our app, you agree to renounce any rights to the data they generate unless we contact you with a new agreement. </p>
        </section>      
   <section className="terms-section-block mb-5">
          <h2 className="terms-part-title text-uppercase">Proprietary Rights </h2>
          <p className="terms-paragraph">Fitze, and its licensors, own and retain all proprietary rights in the Service. The Service contains content, visual interfaces, interactive features, information, graphics, design, compilation, computer code, products, software, services and other elements of the Service (the “Fitze Materials”) that are protected by copyright, trade dress, patent, and trademark laws, international conventions, and other relevant intellectual property and proprietary rights, and applicable laws. Except for that information which is in the public domain or for which you have been given express written permission, you may not copy, modify, publish, transmit, distribute, license, perform, display, or sell any Fitze Materials. Fitze retains all rights not expressly granted in this Agreement. You shall not acquire any right, title or interest to the Service or Fitze Materials, except for the limited license rights set forth in this Agreement.  </p>
        </section>
        <section className="terms-section-block mb-5">
          <h2 className="terms-part-title text-uppercase">User Profile </h2>
          <p className="terms-paragraph">All information you include in your user profile, including without limitation the information provided in relation to your Payment Method, must be accurate, current and complete. If information provided to Fitze, or another User, subsequently becomes inaccurate, misleading or false, you will promptly notify Fitze of such change. </p>
        </section>
        <section className="terms-section-block mb-5">
          <h2 className="terms-part-title text-uppercase">Prohibited Activities</h2>
          <p className="terms-paragraph">Fitze reserves the right to investigate and terminate your subscription if you have misused the Service, or behaved in a way which could be regarded as inappropriate or whose conduct is unlawful or illegal. The following is a partial list of the type of actions that you may not engage in with respect to the Service: </p>
           <ul>
            <li>You will not use the Service for any purpose that is unlawful or prohibited by this Agreement. </li>
            <li>You will not impersonate any person or entity. </li>
            <li>You will not “stalk” or otherwise harass any Fitze employee, member, user, or Specialist. </li>
            <li>You will not express or imply that any statements you make are endorsed by Fitze without our explicit prior written consent. </li>
            <li>You will not use any robot, spider, site search/retrieval application, or other manual or automatic device or process to retrieve, index, “data mine”, or in any way reproduce or circumvent the navigational structure or presentation of the Service or its contents. </li>
            <li>You will not post, distribute or reproduce in any way any copyrighted material, trademarks, or other proprietary information without obtaining the prior consent of the owner of such proprietary rights. </li>
            <li>You will not remove any copyright, trademark or other proprietary rights notices contained in the Service. </li>
            <li>You will not interfere with or disrupt the Service or the site or the servers or networks connected to the Service or the site. </li>
            <li>You will not post, email or otherwise transmit any material that contains software viruses, or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of any computer software or hardware or telecommunications equipment. </li>
            <li>You will not forge headers or otherwise manipulate identifiers in order to disguise the origin of any information transmitted through the Service. </li>
            <li>You will not “frame” or “mirror” any part of the Service or the Service, without Fitze’s prior written authorization. You also shall not use meta tags or code or other devices containing any reference to Fitze or the Service or the site in order to direct any person to any other web site for any purpose. </li>
            <li>You will not modify, adapt, sublicense, translate, sell, reverse engineer, decipher, decompile or otherwise disassemble any portion of the Service or any software used on or for the Service or cause others to do so.  </li>
           </ul>
        </section>
       <section className="terms-section-block mb-5">
          <h2 className="terms-part-title text-uppercase">Modifications to Service.</h2>
          <p className="terms-paragraph">Fitze reserves the right at any time to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice. You agree that Fitze shall not be liable to you or to any third party for any modification, suspension or discontinuance of the Service. </p>
        </section>
        <section className="terms-section-block mb-5">
          <h2 className="terms-part-title text-uppercase">Blocking of IP Addresses.</h2>
          <p className="terms-paragraph">In order to protect the integrity of the Service, Fitze reserves the right at any time in its sole discretion to block users from certain IP addresses from accessing the Service. </p>
        </section>
        <section className="terms-section-block mb-5">
          <h2 className="terms-part-title text-uppercase">Warranties</h2>
          <p className="terms-paragraph">To the fullest extent permissible pursuant to applicable law, Fitze, and its affiliates, owners, partners, and suppliers disclaim all warranties, statutory, express, implied or otherwise, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, title, and non- infringement. You expressly agree that the use of the Service is at your sole risk and that any advice, guarantees or promises that may be posted on the Service is for informational and entertainment purposes only and will not create any warranty not expressly stated herein. The Service, user content and any third-party media, content, software, services or applications made available in conjunction with or through the Service are provided on an “as is”, “as available”, “with all faults” basis and without warranties or representations of any kind either express or implied. </p>
        </section>
        <section className="terms-section-block mb-5">
          <h2 className="terms-part-title text-uppercase">Operation and Content.</h2>
          <p className="terms-paragraph">Fitze is not responsible for any incorrect or inaccurate content posted on or in connection with the Service, whether caused by users of the Service, Users, Specialists, or by any of the equipment or programming associated with or utilized in the Service. Fitze assumes no responsibility for any error, omission, interruption, deletion, defect, delay in operation or transmission, communications line failure, theft or destruction or unauthorized access to, or alteration of, user or member communications. Fitze is not responsible for any problems or technical malfunction of any telephone network or lines, computer online systems, servers or providers, computer equipment, software, failure of email or players on account of technical problems or traffic congestion on the internet or at any website or combination thereof, including injury or damage to users and/or members or to any other person’s computer related to or resulting from participating or downloading materials in connection with the web and/or in connection with the service. </p>
        </section>
        <section className="terms-section-block mb-5">
          <h2 className="terms-part-title text-uppercase">Links and Third-Party Services. </h2>
          <p className="terms-paragraph">The Service may integrate, be integrated into, or be provided in connection with third-party websites, services, applications, tools, interfaces, content, and/or materials (“Third-Party Services”). We do not review or control any Third-Party Services. We additionally make no claim or representation regarding, and accept no responsibility for, the quality, content, nature, or reliability of Third-Party Services accessible from our websites, apps, software or any other element of the Services. There is no implied affiliation, endorsement or adoption by us of these Third-Party Services and we shall not be responsible for any content provided on or through these Third-Party Services. You should read the terms of use and privacy policies that separately apply to these Third-Party Services.</p>
        <p>Under no circumstances will Fitze be responsible for any loss or damage resulting from your reliance on third-party content posted on the Services or transmitted to or by any third-party in connection with the Services. </p>
        </section>
        <section className="terms-section-block mb-5">
          <h4>Release of Liability and Damages. </h4>
          <h2 className="terms-part-title text-uppercase">Release of Liability for Injury or Death. </h2>
          <p className="terms-paragraph">You expressly acknowledge and agree that your access, use and/or involvement with any of the Services, or individuals affiliated with Fitze may involve potentially dangerous, injurious, and physical undertakings that may lead to, without limitation, personal and/or bodily injury, death, temporary or permanent disability, loss of services, loss of consortium, mental health issues, nutritional issues, or damage to or loss of property or privacy. You hereby acknowledge and willingly accept these risks and agree to unconditionally release and hold Fitze harmless from and against all claims, suits, damages, losses, causes of action, costs, expenses or liability arising out of or related to your access, use and/or involvement with any Services. </p>
        </section>
        <section className="terms-section-block mb-5">
          
          <h2 className="terms-part-title text-uppercase">Fitze Advice Disclaimer.</h2>
          <p className="terms-paragraph">You acknowledge and agree that we do not provide or replace any professional medical advice, diagnosis, or treatment and that Fitze cannot be held liable for any medical, health or any other sort of injury suffered as a result of your use of the Service. You further agree to consult a physician prior to your use of the Service. </p>
        </section>
        <section className="terms-section-block mb-5">
          
          <h2 className="terms-part-title text-uppercase">Limitation of Liability and Damages.</h2>
          <p className="terms-paragraph">In no event, and under no legal theory, including without limitation negligence, will Fitze or its affiliates, owners, contractors, employees, agents or third party partners or suppliers be liable to you or any third person for any direct, indirect, consequential, exemplary, incidental, special or punitive damages, including without limitation lost profits, data or use or cost of cover, even if Fitze has been advised of the possibility of such damages. In cases where applicable law does not allow the above limitation of liability, Fitze’s liability will be limited to the least extent permitted by law. </p>

        </section>
        <section className="terms-section-block mb-5">
          
          <h2 className="terms-part-title text-uppercase">Limitation of Liability and Damages.</h2>
          <p className="terms-paragraph">In no event, and under no legal theory, including without limitation negligence, will Fitze or its affiliates, owners, contractors, employees, agents or third party partners or suppliers be liable to you or any third person for any direct, indirect, consequential, exemplary, incidental, special or punitive damages, including without limitation lost profits, data or use or cost of cover, even if Fitze has been advised of the possibility of such damages. In cases where applicable law does not allow the above limitation of liability, Fitze’s liability will be limited to the least extent permitted by law. </p>
          <p className="terms-paragraph">In no event shall Fitze or its affiliates, contractors, employees, agents, or third party partners, licensors or suppliers’ total liability to you for any cause whatsoever (whether in contract, tort (including negligence), warranty, or otherwise), and regardless of the form of the action, exceed the greater of: (i) one hundred dollars or (ii) the amount paid by you to Fitze for the Service in the three (3) months prior to the action giving rise to the liability. 

</p>
        </section>
        <section className="terms-section-block mb-5">
          
          <h2 className="terms-part-title text-uppercase">Sponsored Subscription </h2>
          <p className="terms-paragraph">In the scenario where you obtained your access to the Service via your employer, corporation, wellness program, or other related entity (“Sponsor”) whether directly or reimbursement, you acknowledge that Fitze remains independent of your agreement with the Sponsor. </p>
        </section>
        <section className="terms-section-block mb-5">
          <h2 className="terms-part-title text-uppercase">Indemnity by You. </h2>
          <p className="terms-paragraph">You agree to indemnify and hold Fitze, its parent company/companies, subsidiaries, affiliates, Specialists, officers, agents, licensors, owners, and other partners and employees, harmless from any loss, liability, claim, damages, obligations, or demand, including reasonable attorney’s fees, made by any third party due to or arising out of (i) your use of the Service, (ii) your violation or breach of this Agreement, (iii) your user content, or (iv) any breach of your representations and warranties set forth above. Fitze reserves the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us and you agree to cooperate with our defense of these claims. You agree not to settle any matter without the prior written consent of Fitze. Fitze will use reasonable efforts to notify you of any such claim, action or proceeding upon becoming aware of it. </p>
        </section>
        <section className="terms-section-block mb-5">
          <h2 className="terms-part-title text-uppercase">Notice</h2>
          <p className="terms-paragraph">Fitze may provide you with notices, including those regarding changes to this Agreement, by email or postings on the Service. Notice will be deemed given four (4) hours after the email is sent or after the notice has been posted on the Service. </p>
        </section>
        <section className="terms-section-block mb-5">
          <h2 className="terms-part-title text-uppercase">No Third-Party Beneficiaries.</h2>
          <p className="terms-paragraph">You agree that, except as otherwise expressly provided in this Agreement, there shall be no third-party beneficiaries to this Agreement. </p>
        </section>
        <section className="terms-section-block mb-5">
          <h2 className="terms-part-title text-uppercase">Jurisdiction and Choice of Law. </h2>
          <p className="terms-paragraph">Any dispute arising out of or in connection with this Agreement, including any question regarding its existence, validity or termination, shall be subject to the non-exclusive jurisdiction of the Abu Dhabi Global Market Courts. Each party irrevocably submits to the jurisdiction of the Abu Dhabi Global Market Courts and waives any objection it may have to disputes arising out of or in connection with this contract being heard in the Abu Dhabi Global Market Courts on the grounds that it is an inconvenient forum (forum non conveniens). This Agreement shall be governed by and construed in accordance with the law of the Abu Dhabi Global Market. </p>
        </section>
        <section className="terms-section-block mb-5">
          <h2 className="terms-part-title text-uppercase">Waiver </h2>
          <p className="terms-paragraph">A part of this Agreement may be amended or removed only by a written instrument executed by the party entitled to the benefit of such provision. The failure of Fitze to exercise or enforce any right or provision of this Agreement will not constitute a waiver of such right or provision. </p>
        </section>
         <section className="terms-section-block mb-5">
          <h2 className="terms-part-title text-uppercase">Survival </h2>
          <p className="terms-paragraph">Any provisions of this Agreement may be used for the benefit of Fitze following termination of this Agreement. Subject to the foregoing, all provisions that by their nature may survive termination of this Agreement shall be deemed to survive such termination.</p>
        </section>
         <section className="terms-section-block mb-5">
          <h2 className="terms-part-title text-uppercase">Severability </h2>
          <p className="terms-paragraph">If any part of this Agreement shall hold to be void, unlawful or unenforceable, then that specific provision shall be separated from this Agreement and shall have no impact on the validity and enforceability of any other part of this Agreement.</p>
        </section>
         <section className="terms-section-block mb-5">
          <h2 className="terms-part-title text-uppercase">Assignment </h2>
          <p className="terms-paragraph">Fitze reserves the right to transfer or assign any rights and licenses granted under the Agreement without any restriction whatsoever. However, you may not transfer or assign any part of this Agreement. Any assignment attempted to be made in violation of this Agreement shall be void. </p>
        </section>
         <section className="terms-section-block mb-5">
          <h2 className="terms-part-title text-uppercase">Claims </h2>
          <p className="terms-paragraph">You hereby agree that any claim arising out of, or in any relation whatsoever to, the Service must be filed within six (6) months of the cause of action occurring.</p>
          <p className="terms-paragraph">You explicitly agree to not participate in a class action or class-wide arbitration for any claims you may have under this Agreement and with your use of the Services. </p>
        </section>
         <section className="terms-section-block mb-5">
          <h2 className="terms-part-title text-uppercase">Entire Agreement.  </h2>
          <p className="terms-paragraph">This serves as the entire agreement between you and us and supersedes all previous communications, representations, understandings and agreements, either oral or written, between you and us. The Agreement shall not be modified by you except in writing, signed by you and us; however, Fitze reserves the right to unilaterally change this Agreement in accordance with Section IV of this Agreement. </p>
        </section>
        </Container>
    </article>
    <Footer/>
    </Fragment>
  );
};

export default TermsConditon;
