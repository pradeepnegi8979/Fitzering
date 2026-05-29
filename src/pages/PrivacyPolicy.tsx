import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import '../styles/PrivacyPolicy.css';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';

export const PrivacyPolicy: React.FC = () => {
  return (
    <Fragment>
     <Header/> 
    <article className="privacy-policy-view" id="privacy-policy-document">
      <Container className="privacy-container">
       
        {/* Page Title & Header Information */}
        <header className="privacy-document-header text-center mb-5">
          <h1 className="privacy-main-title">Privacy Policy</h1>
          <p className="privacy-last-updated">Last updated: November 18, 2024</p>
        </header>

        {/* Intro */}
        <section className="privacy-section-block mb-5">
          <p className="privacy-paragraph">
            This Privacy Policy (“Policy”) is designed to help you understand how we use your Personal Data in accordance with the data protection laws and regulations in the Abu Dhabi Global Market (“ADGM”) [1], UAE’s Personal Data Protection Law (“PDPL”), European Union’s General Data Protection Regulation (“GDPR”), and further guidance thereunder applicable legislation. This Policy applies to the Processing of Personal Data by Fitze, which is incorporated in ADGM, Abu Dhabi, United Arab Emirates.
          </p>
          <p className="privacy-paragraph text-muted">
            We encourage you to read the whole Policy. This policy was last updated on September 23rd, 2023.
          </p>
        </section>

        {/* PART A */}
        <section className="privacy-section-block mb-5">
          <h2 className="privacy-part-title text-uppercase">PART A – PURPOSE & APPLICABILITY</h2>
          
          <h3 className="privacy-sub-title">Identity</h3>
          <p className="privacy-paragraph">
            We, Fitonclick FZE, and our affiliate, subsidiary and parent companies (collectively, “Fitze”, “us”, “we” or “our”) and as applicable to the respective entity, in this Privacy policy.
          </p>
          <p className="privacy-paragraph font-bold">
            Our registered office is located at:<br />
            <span className="text-secondary font-semibold">Fitonclick FZE T1-10-6F AKEZ Amenity Center Al Hamra Industrial Zone-FZ</span>
          </p>

          <h3 className="privacy-sub-title font-bold">Our use of Personal Data</h3>
          <p className="privacy-paragraph">
            In compliance with the applicable legislation and regulations (“Applicable Legislation”), we collect several different types of information for various purposes to provide and improve our Service to you.
          </p>

          <h3 className="privacy-sub-title">What is Personal Data?</h3>
          <p className="privacy-paragraph">
            Personal Data is any information referring to an identified or Identifiable Natural Person [3]. This includes information like your name, (e-mail) address, and telephone number but can also include less obvious information such as your attendance at a seminar or analysis of your use of our website(s).
          </p>
          <p className="privacy-paragraph">
            Additional protection is afforded under the Applicable Legislation to Special Categories of Personal Data, i.e., Personal Data revealing or concerning (directly or indirectly) racial or ethnic origin, communal origin, political affiliations or opinions, religious or philosophical beliefs, criminal record, trade-union membership and health or sex life and including genetic data and biometric data where it is used for the purpose of uniquely identifying a natural person.
          </p>

          <h3 className="privacy-sub-title">Personal Data</h3>
          <p className="privacy-paragraph">
            While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (“Personal Data”). Personally identifiable information may include, but is not limited to:
          </p>
          <ul className="privacy-bullet-list mb-4">
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number</li>
            <li>Address, Country, State, Province, ZIP/Postal code, City</li>
            <li>Cookies and Usage Data</li>
          </ul>
          <p className="privacy-paragraph">
            We may use your Personal Data to contact you with newsletters, marketing or promotional materials and other information that may be of interest to you through emails, phone calls, SMS, WhatsApp or social media. You may opt out of receiving any, or all, of these communications from us by following the unsubscribe link on emails or through an explicit email to <a href="mailto:support@fitze.ae" className="privacy-link">support@fitze.ae</a> requesting opt out.
          </p>

          <h3 className="privacy-sub-title">Usage Data</h3>
          <p className="privacy-paragraph">
            We may also collect information that your browser sends whenever you visit our Service or when you access Service by or through any device (“Usage Data”).
          </p>
          <p className="privacy-paragraph">
            This Usage Data may include information such as your computer’s Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
          </p>
          <p className="privacy-paragraph">
            When you access Service with a device, this Usage Data may include information such as the type of device you use, data from Services and fitness app, your device unique ID, the IP address of your device, your device operating system, the type of Internet browser you use, unique device identifiers and other diagnostic data.
          </p>
          <p className="privacy-paragraph">
            We might also use user-generated data from the fitness activities and associated services, including fitness-generated data, fitness performance data, and sell or provide it to third parties and governments in an anonymized fashion.
          </p>
          <p className="privacy-paragraph">
            By using Fitze app and services, you give up any rights to the data our platform generates while you are using it, and you are giving up any commercial rights arising from the data you generate in the app and associated Fitze platforms.
          </p>

          <h3 className="privacy-sub-title">Location Data</h3>
          <p className="privacy-paragraph">
            We may use and store information about your location if you give us permission to do so (“Location Data”). We use this data to provide features of our Service, to improve and customize our Service.
          </p>
          <p className="privacy-paragraph">
            You can enable or disable location services when you use our Service at any time by way of your device settings.
          </p>

          <h3 className="privacy-sub-title">Tracking Cookies Data</h3>
          <p className="privacy-paragraph">
            We use cookies and similar tracking technologies to track the activity of our Service, and we hold certain information.
          </p>
          <p className="privacy-paragraph">
            Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Other tracking technologies such as beacons, tags, and scripts, are also used to collect and track information, and to improve and analyze our Service.
          </p>
          <p className="privacy-paragraph">
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
          </p>
          <p className="privacy-paragraph">
            Examples of Cookies we use:
          </p>
          <ul className="privacy-bullet-list mb-4">
            <li>Session Cookies: We use Session Cookies to operate our Service.</li>
            <li>Preference Cookies: We use Preference Cookies to remember your preferences and various settings.</li>
            <li>Security Cookies: We use Security Cookies for security purposes.</li>
            <li>Advertising Cookies: Advertising Cookies are used to serve you with advertisements that may be relevant to you and your interests.</li>
          </ul>

          <h3 className="privacy-sub-title">Employment Data</h3>
          <p className="privacy-paragraph">
            We may also collect the following information: sex, age, date of birth, place of birth, passport details, citizenship, registration at place of residence and actual address, telephone number (work, mobile), details of documents on education, qualification, professional training, employment agreements, NDA agreements, information on bonuses and compensation, information on marital status, family members, social security (or other taxpayer identification) number, office location, and other data related to employment with Fitze.
          </p>

          <h3 className="privacy-sub-title">Children’s Privacy</h3>
          <p className="privacy-paragraph">
            Our Services are not intended for use by children under the age of 18 (“Child” or “Children”).
          </p>
          <p className="privacy-paragraph">
            We do not knowingly collect personally identifiable information from Children under 18. If you become aware that a Child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from Children without verification of parental consent, we take steps to remove that information from our servers.
          </p>

          <h3 className="privacy-sub-title">This Privacy Policy</h3>
          <p className="privacy-paragraph">
            This is our general Privacy Policy that applies to our operations.
          </p>

          <h3 className="privacy-sub-title">Updating this Privacy Policy</h3>
          <p className="privacy-paragraph">
            This Policy may be updated from time to time and can be found in its most current format here: <a href="https://www.fitze.ae/privacy-policy/" className="privacy-link" target="_blank" rel="noreferrer">https://www.fitze.ae/privacy-policy/</a>
          </p>

          <h3 className="privacy-sub-title">Our responsibility to you</h3>
          <p className="privacy-paragraph">
            We Process your Personal Data in our capacity as a Controller. This means we are responsible for ensuring we comply with the Applicable Legislation when Processing your Personal Data.
          </p>

          <h3 className="privacy-sub-title">Contact Person for Data Protection</h3>
          <p className="privacy-paragraph">
            We have a data protection officer (DPO) to monitor our compliance with data privacy, provide advice where requested, and cooperate with supervisory authorities. You can contact our data protection officer for any queries relating to our Data Processing activities under this Policy or Applicable Legislation, by:<br />
            <strong>sending an email to:</strong> <a href="mailto:jason@cybersense.one" className="privacy-link">jason@cybersense.one</a><br />
            <strong>calling us at:</strong> +1 (570) 530-9779
          </p>
          <p className="privacy-paragraph">
            For any queries relating to our Data Processing activities in relation EU (European Union) GDPR (General Data Protection Regulation) requirements, you may contact us by:<br />
            <strong>sending an email to:</strong> <a href="mailto:jason@cybersense.one" className="privacy-link">jason@cybersense.one</a><br />
            <strong>writing us at:</strong> JORGE SIMÕES DIAS UNIPESSOAL LDA<br />
            <strong>Address:</strong> Rua Doutor Justino Cruz 90 7, 4700-314 Braga – Portugal
          </p>
        </section>

        {/* PART B */}
        <section className="privacy-section-block mb-5">
          <h2 className="privacy-part-title text-uppercase">PART B – YOUR PERSONAL DATA</h2>
          
          <h3 className="privacy-sub-title">Why are we collecting Personal Data about you?</h3>
          <p className="privacy-paragraph">
            We only collect Personal Data about you in connection with providing our services and conducting our normal business operations, and/ or communications to invite you to our event or sharing relevant information with you. We may hold information about you if:
          </p>
          <ul className="privacy-bullet-list mb-4">
            <li>to provide and maintain our Service</li>
            <li>to notify you about changes to our Service</li>
            <li>to allow you to participate in interactive features of our Service when you choose to do so</li>
            <li>to provide customer support</li>
            <li>to gather analysis or valuable information so that we can improve our Service</li>
            <li>to monitor the usage of our Service</li>
            <li>to detect, prevent and address technical issues</li>
            <li>to carry out our obligations and enforce our rights arising from any contracts entered between you and us, including for billing and collection</li>
            <li>to provide you with notices about your account and/or subscription, including expiration and renewal notices, email instructions, etc.</li>
            <li>to provide you with news, exclusive offers and general information about other goods, services, and events which we offer that are like those that you have already purchased or enquired about unless you have opted not to receive such information in any other way we may describe when you provide the information</li>
            <li>for any other purpose with your consent</li>
            <li>you are a client, a representative of a client, or the beneficial owner of a client.</li>
            <li>you are a party or the representative of a party in a matter on which we are advising a client.</li>
            <li>we are required to Process your Personal Data in accordance with Applicable Legislation, for e.g., anti-money laundering laws.</li>
            <li>your information is provided to us by a client or others, or we otherwise obtain your information, in connection with the service(s) we are providing a client.</li>
            <li>you provide services to us (or you represent a company which provides services to us).</li>
            <li>you represent a regulator, certification body or government body which has dealings with us.</li>
            <li>you attend our seminars, webinars, or events, receive our newsletter updates, or visit our offices or websites.</li>
            <li>you are an applicant for a job with us.</li>
            <li>you are or were an employee of the group.</li>
            <li>you are an authorized signatory or a director or an individual shareholder or an office bearer.</li>
            <li>you are an authorized signatory or a director or a shareholder or an office bearer of the shareholder.</li>
            <li>you may have met one of our staff and have exchanged business cards or contact details.</li>
          </ul>

          <h3 className="privacy-sub-title">What Personal Data do we collect about you?</h3>
          <p className="privacy-paragraph">
            Depending on the purposes, the types of information we Process about you may include:
          </p>
          <p className="privacy-paragraph font-italic text-muted">
            As a policy, we do not normally collect any Special Categories of Personal Data, unless such collection is warranted under specific circumstances such as employment.
          </p>

          <h3 className="privacy-sub-title">Where do we collect your Personal Data from?</h3>
          <p className="privacy-paragraph">
            We may collect your Personal Data from various sources, including:
          </p>
          <ul className="privacy-bullet-list mb-4">
            <li>your usage of our product and services</li>
            <li>our clients and our service providers</li>
            <li>anti-money laundering and counter-terrorism financing databases, sanctions lists, court judgements and other databases</li>
            <li>government agencies and publicly accessible registers or sources of information</li>
            <li>by actively obtaining your Personal Data ourselves, for example, app usage.</li>
          </ul>
          <p className="privacy-paragraph">
            The sources that apply to you will depend on the purpose for which we are collecting your Personal Data. Where we obtain your information from a third party, we may ask them to provide you with a copy of this Privacy Policy (or a shortened version of it) to ensure that you know we are Processing your information and the purpose for such Processing.
          </p>
        </section>

        {/* PART C */}
        <section className="privacy-section-block mb-5">
          <h2 className="privacy-part-title text-uppercase">PART C – OUR USE OF YOUR PERSONAL DATA</h2>
          
          <h3 className="privacy-sub-title">How do we use your Personal Data?</h3>
          <p className="privacy-paragraph">
            In this section we set out in more detail:
          </p>
          <ul className="privacy-bullet-list mb-4">
            <li>the main purposes for which we Process your Personal Data</li>
            <li>the lawful bases upon which we are Processing your Personal Data</li>
          </ul>

          <h3 className="privacy-sub-title">Consent</h3>
          <p className="privacy-paragraph">
            We generally Process your Personal Data based on your consent (as we usually cannot rely on another lawful basis). Where we do Process your Personal Data based on your consent, you have the right to withdraw your consent at any time. To withdraw your consent, please contact us using the contact details mentioned above.
          </p>

          <h3 className="privacy-sub-title">Do we share your information with anyone else?</h3>
          <p className="privacy-paragraph">
            We do not sell your information nor make it generally available to others. However, we may share your information in the following circumstances:
          </p>
          <ul className="privacy-bullet-list mb-4">
            <li>Depending on the situation or on your request, we may transfer Personal Data to countries or jurisdictions with data protection or privacy laws that are not adequate in comparison with the applicable legislation. Where any such transfers of Personal Data to non-adequate jurisdictions take place, we take appropriate measures to protect Personal Data in accordance with the applicable legislation.</li>
            <li>We may Process Personal Data of clients, or representatives, or beneficial owners of clients, through screening databases or search engines for identity verification or background screening.</li>
            <li>Depending on the scope of our services, we may require the assistance of various external professional service providers, based in or out of the group. The use of these external service providers may involve the service provider receiving your Personal Data from us, and some transfers of Personal Data may be made to countries or jurisdictions with data protection or privacy laws that are not adequate in comparison with the Law. Where any such transfers of Personal Data to non-adequate jurisdictions take place, we take appropriate measures to protect Personal Data in accordance with the applicable legislation.</li>
            <li>We use the support services of various external companies to help us run our business efficiently, particularly in relation to our IT systems. Some of these services (such as email hosting and data backups) may involve the service provider Processing your Personal Data. Some transfers of Personal Data may be made to countries or jurisdictions with data protection or privacy laws that are not adequate in comparison with the applicable legislation. Where any such transfers of Personal Data to non-adequate jurisdictions take place, we take appropriate measures to protect Personal Data in accordance with the applicable legislation.</li>
            <li>Where we use external companies to organize or host events for us, we may need to provide these service providers with your Personal Data.</li>
            <li>We share your Personal Data and Usage Data with our business partners, service providers, and governments.</li>
            <li>We may share your Personal Data with other third parties, such as relevant regulators or other authorities, where we are required to do so to comply with legal or regulatory requirements.</li>
          </ul>
          <p className="privacy-paragraph font-semibold">
            In each case where we share your Personal Data with other parties, whether or not in an adequate jurisdiction, we take appropriate measures and ensure that the relevant party is contractually required to keep such Personal Data safe, secure and confidential in accordance with the minimum standards under the applicable legislation.
          </p>
        </section>

        {/* PART D */}
        <section className="privacy-section-block mb-5">
          <h2 className="privacy-part-title text-uppercase">PART D – OTHER IMPORTANT INFORMATION</h2>
          
          <h3 className="privacy-sub-title">Keeping your Personal Data safe</h3>
          <p className="privacy-paragraph">
            We implement appropriate steps to help maintain the security of our information systems and processes and prevent the accidental destruction, loss, or unauthorized disclosure of the Personal Data we Process.
          </p>
          <p className="privacy-paragraph font-bold">
            How We Protect Your Personal Data
          </p>
          <p className="privacy-paragraph text-muted">
            We maintain administrative, technical, and physical safeguards for the protection of your Personal Data.
          </p>

          <h4 className="privacy-sub-sub-title">Administrative Safeguards</h4>
          <p className="privacy-paragraph">
            Access to the Personal Data of our users is limited to authorized personnel who have a legitimate need to know based on their job descriptions, for example, employees who provide technical support to end users, or who service user accounts. In the case of third-party contractors who process personal information on our behalf, similar requirements are imposed. These third parties are contractually bound by confidentiality clauses, even when they leave the company. Where an individual employee no longer requires access, that individual’s credentials are revoked.
          </p>

          <h4 className="privacy-sub-sub-title">Technical Safeguards</h4>
          <p className="privacy-paragraph">
            We store your personal information in our database using the protections described above. In addition, we utilize technical safeguards such as up-to-date firewall protection for an additional layer of security, high-quality anti-virus software, and we regularly update our virus definitions. Third parties who we hire to provide services and who have access to our users’ data are required to adopt appropriate measures if we deem them necessary.
          </p>

          <h4 className="privacy-sub-sub-title">Physical Safeguards</h4>
          <p className="privacy-paragraph">
            Access to user information in our database by Internet requires using an encrypted VPN, except for email which requires user authentication. Third-party contractors who process Personal Data on our behalf agree to provide reasonable physical safeguards.
          </p>

          <h3 className="privacy-sub-title">Proportionality</h3>
          <p className="privacy-paragraph">
            We strive to collect no more Personal Data from you than is required by the purpose for which we collect it. This, in turn, helps reduce the total risk of harm should data loss or a breach in security occur: the less data we collect, the smaller the overall risk.
          </p>

          <h3 className="privacy-sub-title">Profiling and automated decision making</h3>
          <p className="privacy-paragraph">
            We do not use profiling (where an electronic system uses Personal Data to try and predict something about you) or automated decision making (where an electronic system uses Personal Data to make a decision about you without human intervention).
          </p>

          <h3 className="privacy-sub-title">How long do we keep your Personal Data?</h3>
          <p className="privacy-paragraph">
            We retain your Personal Data in accordance with our data retention policy which categorizes all the information held by us and specifies the appropriate retention period for each category of information. Those periods are based on the requirements of the relevant laws and regulations, and the purpose for which the information is collected and used, taking into account legal and regulatory requirements to retain the information for a minimum period, limitation periods for taking legal action, good practice and our business purposes.
          </p>

          <h3 className="privacy-sub-title">Cross-border transfers of your Personal Data</h3>
          <p className="privacy-paragraph">
            We transfer Personal Data in specific circumstances. We do not work within sanction-affected states.
          </p>
          <p className="privacy-paragraph">
            Where any such transfers of Personal Data to non-adequate jurisdictions take place, we take appropriate measures in accordance with the Law.
          </p>
          <p className="privacy-paragraph">
            We are a global business that provides products and services all around the world. In order to reach all of our users and provide all of them with our software, we operate on an infrastructure that spans the globe. The servers that are part of this infrastructure may therefore be located in a country different than the one where you live. We provide the same level of protection to all Personal Data processed.
          </p>
          <p className="privacy-paragraph">
            At the same time, when we transfer Personal Data or cooperate with a third-party vendor, we always make sure to put in place appropriate safeguards, such as Standard Contractual Clauses or adequacy decisions adopted by ADGM, to ensure that your data remains safe and secure at all times and that your rights are protected.
          </p>
          <p className="privacy-paragraph">
            Situations where we transfer Personal Data include allowing access to Personal Data stored in the Amazon cloud services, the provisioning of our products and services and third-party services related to it, the processing of transactions and of your payment details, sharing of fitness data to third parties and governments, and the delivery of support services. Further, a transfer may also occur in case of a merger, acquisition or a restructuring (see the Mergers, Acquisitions and Restructurings section).
          </p>

          <h3 className="privacy-sub-title">Mergers, Acquisitions and Corporate Restructurings</h3>
          <p className="privacy-paragraph">
            Like any other company, we too go through our own cycle of growth, expansion, streamlining and optimization. Our business decisions and market developments therefore affect our structure. As a result of such transactions, and for maintaining a continued relationship with you, we may transfer your Personal Data to a related affiliate.
          </p>
          <p className="privacy-paragraph">
            If we are involved in a reorganization, merger, acquisition or sale of our assets, your Personal Data may be transferred as part of that transaction. We will notify you of any such deal and outline your choices in that event, when applicable. Information including personal data relating to our business may be shared with other parties in order to evaluate and conclude the transaction. This would also be the case if we were required by law to make such changes.
          </p>
        </section>

        {/* PART E */}
        <section className="privacy-section-block mb-5">
          <h2 className="privacy-part-title text-uppercase">PART E – YOUR RIGHTS</h2>
          
          <h3 className="privacy-sub-title">Contacting us and your rights</h3>
          <p className="privacy-paragraph">
            If you have any questions in relation to our use of your Personal Data, please contact us using the details provided:
          </p>
          <p className="privacy-paragraph text-muted font-italic">
            For any queries relating to our Data Processing activities under this Policy or Applicable Legislation, you may contact us by:<br />
            <strong>sending an email to:</strong> <a href="mailto:jason@cybersense.one" className="privacy-link">jason@cybersense.one</a><br />
            <strong>calling us at:</strong> +1 (570) 530-9779
          </p>
          <p className="privacy-paragraph text-muted font-italic">
            For any queries relating to our Data Processing activities in relation EU (European Union) GDPR (General Data Protection Regulation) requirements, you may contact us by:<br />
            <strong>sending an email to:</strong> <a href="mailto:jason@cybersense.one" className="privacy-link">jason@cybersense.one</a><br />
            <strong>writing us at:</strong> JORGE SIMÕES DIAS UNIPESSOAL LDA<br />
            <strong>Address:</strong> Rua Doutor Justino Cruz 90 7, 4700-314 Braga – Portugal
          </p>
          <p className="privacy-paragraph">
            Subject to certain exceptions outlined in local legislation, you have the right to require us to:
          </p>
          <ul className="privacy-bullet-list mb-4">
            <li><strong>Right to information</strong> – Right to receive information about the processing of your Personal Data, prior to processing as well as during the processing, upon request.</li>
            <li><strong>Right of access</strong> – You have the right to receive a copy of your Personal Data</li>
            <li><strong>Right to rectification</strong> – You have the right to seek correction of inaccurate Personal Data.</li>
            <li><strong>Right to erasure (“right to be forgotten”)</strong> – You have the right to erasure of your Personal Data, but only in specific cases stipulated by law, e.g., if there is no legally recognized title on our part for further processing of your Personal Data.</li>
            <li><strong>Right to data portability</strong> – The right to receive Personal Data which you have provided and is being processed on the basis of consent or where it is necessary for the purpose of conclusion and performance of a contract, in machine-readable format. This right applies exclusively to Personal Data where processing is carried out by automated means.</li>
            <li><strong>Right to withdraw consent</strong> – In the case of processing based on your consent, as specified in our Consent Policy, you can withdraw your consent at any time, by using the same method (if technically possible) you used to provide it to us (the exact method will be described in more detail with each consent when you provide it). The withdrawal of consent shall not affect the lawfulness of processing based on your consent before its withdrawal.</li>
            <li><strong>Right to restriction of processing</strong> – You have the right to restriction of processing of your Personal Data if: You are contesting the accuracy of your Personal Data for a period enabling us to verify the accuracy of your Personal Data; the processing is unlawful, and you oppose the erasure of the Personal Data and request the restriction of its use instead; we no longer need the Personal Data for the purposes of the processing, but they are required by you for the establishment, exercise or defense of legal claims.</li>
            <li><strong>Right to contact a supervisory authority or court</strong> – You may contact and lodge a complaint with the supervisory authority or your local authority or a relevant court. provide you with further details on the nature of your Personal Data held by us and the use we make of your Personal Data, including any sharing or transfer thereof.</li>
          </ul>
          <p className="privacy-paragraph">
            In certain circumstances, we may need to restrict your rights to safeguard the public interest (e.g., the prevention or detection of crime) and our interests (e.g., responding to regulatory requests) or in accordance with other exceptions and limitations specified in local legislation.
          </p>

          <h3 className="privacy-sub-title">Your Right to Erasure</h3>
          <p className="privacy-paragraph">
            Under the General Data Protection Regulation (GDPR), users have the right to request the deletion of their personal data. If you wish to exercise this right, please use the “Delete Account Permanently” option under Settings -&gt; Account Info. Upon receiving a verifiable request, we will delete your data from our systems within 3 days, unless otherwise required by law. This deletion will include all personal information and associated content, ensuring that the data is permanently removed and cannot be recovered.
          </p>

          <h3 className="privacy-sub-title">Your Right to complain</h3>
          <p className="privacy-paragraph">
            If you are not satisfied with our use of your Personal Data or our response to any request by you to exercise your rights, or if you think that we have breached any relevant provision of the Law, then you have the right to complain to the authority that supervises our Processing of your Personal Data.
          </p>
          <p className="privacy-paragraph">
            Our data protection supervisory authority is the Office of Data Protection in ADGM whose contact details are as follows:
          </p>
          <p className="privacy-paragraph bg-light-card p-3 rounded border">
            <strong>Office of the Data Protection, ADGM</strong><br />
            Abu Dhabi Global Market<br />
            <strong>Telephone:</strong> +971 (2) 333 8888<br />
            <strong>Website:</strong> <a href="https://www.adgm.com/operating-in-adgm/office-of-data-protection" className="privacy-link" target="_blank" rel="noreferrer">https://www.adgm.com/operating-in-adgm/office-of-data-protection</a><br />
            <strong>Email:</strong> <a href="mailto:Data.Protection@adgm.com" className="privacy-link">Data.Protection@adgm.com</a>
          </p>
        </section>

        {/* PART F */}
        <section className="privacy-section-block mb-5">
          <h2 className="privacy-part-title text-uppercase">PART F – The California Consumer Privacy Act Supplement</h2>
          
          <h3 className="privacy-sub-title">PII Rights for California Residents</h3>
          <p className="privacy-paragraph">
            The California Consumer Privacy Act (“CCPA”) requires us to make certain additional disclosures and provides California residents with the ability to request additional information about their PII. If you are a California resident and it is determined that the CCPA applies to you, this section details those rights, how you may exercise them, and what Fitze will do in response.
          </p>
          <p className="privacy-paragraph">
            Please note that the rights under the CCPA do not apply to PII collected, processed, sold or disclosed pursuant to Gramm-Leach-Bliley Act (Public Law 106-102) and Fair Credit Reporting Act (12 CFR 1022).
          </p>
          <p className="privacy-paragraph">
            If you are an individual who resides in California and whose PII is collected and processed by Fitze, you may have the right to:
          </p>
          <ul className="privacy-bullet-list mb-4">
            <li>Request that we disclose, free of charge, the categories and specifics of the PII we collect about California residents, the sources from which the PII was collected (and/or, if applicable, sell or otherwise disclose to a third party), and the business purpose for collecting PII.</li>
            <li>Choose to opt-out of the sale of PII. Currently, however, Fitze does not sell PII.</li>
            <li>Request that we delete the PII we have collected. Following our verification of the request, we will comply with the request and delete any or all the PII in our possession that we collected from the California resident and/or any or all such PII in the possession of our service providers, unless otherwise restricted by law or regulation.</li>
          </ul>

          <h3 className="privacy-sub-title">Non-Discrimination for Exercising Your PII Rights</h3>
          <p className="privacy-paragraph">
            We follow the requirements of California Civil Code §1798.125, and will not discriminate against any consumer who exercises the rights set forth in this privacy policy.
          </p>
        </section>

        {/* Footnotes */}
        <section className="privacy-footnotes mt-5 pt-5 border-top">
          <p className="footnote-text">
            <strong>[1]</strong> <a href="https://www.adgm.com/operating-in-adgm/office-of-data-protection" className="privacy-link" target="_blank" rel="noreferrer">https://www.adgm.com/operating-in-adgm/office-of-data-protection</a>
          </p>
          <p className="footnote-text">
            <strong>[2]</strong> “Processing” of Personal Data can include any one or more of the following, whether or not by automated means: collection, recording, organization, structuring, storage and archiving, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination, transfer or otherwise making available, alignment or combination, restricting, erasure or destruction.
          </p>
          <p className="footnote-text">
            <strong>[3]</strong> Identifiable Natural Person means a natural living person who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one (1) or more factors specific to his biological, physical, biometric, physiological, mental, genetic, economic, cultural or social identity (and “Identified Natural Person” is interpreted accordingly).
          </p>
        </section>

      </Container>
    </article>
    <Footer/>
    </Fragment>
  );
};

export default PrivacyPolicy;
