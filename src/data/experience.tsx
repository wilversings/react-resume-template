import {TimelineItem} from './dataDef';

export const experience: TimelineItem[] = [
  {
    title: 'Pentalog',
    location: 'Cluj-Napoca',
    date: 'March 2007 - February 2010',
    content: (
      <>
        <h1 className="text-2xl font-extrabold">Javascript Developer</h1>
        <p>
          Developing, fixing and maintaining a legacy ExtJS BI/enterprise front-end application My responsibilities
          were:
        </p>
        <ul className="list-disc">
          <li>Building very complex UIs</li>
          <li>Requirement disambiguation</li>
          <li>Taking technical decisions</li>
          <li>Constantly researching and improving the existing product</li>
        </ul>
        <br />
        <h1 className="text-2xl font-extrabold">.NET (Full-stack) Developer</h1>
        Full-stack development My responsibilities were:
        <ul className="list-disc">
          <li>Building a single page application.</li>
          <li>Taking important technical decisions related to the customer requirements and domain's business.</li>
          <li>Finding efficient ways to improve and repair the legacy product.</li>
          <li>Pushing SW development practices (not cargo-culting).</li>
          <li>Suggesting ways to improve the whole Scrum process.</li>
        </ul>
        <p>Technologies used: C#, Visual Basic, SQL Server, Entity Framework, WebForms, Asp.Net WebApi, jQuery</p>
      </>
    ),
  },

  {
    title: 'Bosch',
    location: 'Cluj-Napoca',
    date: 'Jun 2017 - Jun 2018',
    content: (
      <>
        <p>
          Developing a traceability and reporting tool which supports the V-Model development process used in Powertrain
          SW Engineering.
        </p>
        <p>Technologies used: C#, MSSQL, Entity Framework, OSLC, jQuery, WCF, Asp.Net MVC, AD/LDAP, IBM Rational</p>
      </>
    ),
  },

  {
    title: 'Yonder',
    location: 'Cluj-Napoca',
    date: 'Jun 2018 - Jun 2019',
    content: (
      <>
        <p>Developing features upon a medical application</p>
        <p>Technologies used: Angular 1 & 2+, .NET Stack</p>
        <p>
          Developing features upon a complex traceability solution. Technical challenge includes synchronization between
          systems, rich UIs and heavy customizability.
        </p>
        <p>My responsibilities were: </p>
        <ul className="list-disc">
          <li>Requirement disambiguation</li>
          <li>Suggesting functional improvements</li>
          <li>Reverse engineering and legacy migration</li>
        </ul>
        Technologies used: Active Directory, LDAP, Angular 2+, .NET Stack
      </>
    ),
  },

  {
    title: 'Itiviti',
    location: 'Cluj-Napoca',
    date: 'Jun 2019 - Jul 2022',
    content: (
      <>
        <p>
          Technologies: Java, Kotlin, Groovy, OSGi, C#, F#, DevExpress, Rx (.Net, Java and Kotlin), ReactiveUI, WPF,
          WinForms, Gradle, React, TypeScript, Python, Shell, and several proprietary technologies
        </p>

        <p>Projects revolved around an Agency Trading Order Management System:</p>
        <ul className="list-disc">
          <li>
            Enhanced the support for FixATDL on our Algorithm Management product, as well as customer support (not
            direct), bug-fixing, and addressing tech debt.
          </li>
          <li>
            Contributed to the development of key features on various products, including Program Trading, Algorithm
            Management, Single Stock, and other technical products, (implementation, refining with stakeholders,
            researching and deliberating optimal ways to proceed).
          </li>
          <li>
            Researched and implemented solutions to streamline the process of writing and maintaining back-end automated
            tests.
          </li>
          <li>Demonstrated features to stakeholders.</li>
          <li>Provided evolutive maintenance on the legacy WinForms Single Stock trading product.</li>
          <li>Fixed and refactored an internal tool that helps the automatic release.</li>
          <li>Conducted code reviews to maintain high-quality standards.</li>
        </ul>
      </>
    ),
  },

  {
    title: 'Microsoft',
    location: 'Fully Remote',
    date: 'Aug 2022 - Feb 2023',
    content: (
      <>
        Had my shot at big tech software engineering. Worked on Microsoft Teams front-end, mainly focusing on at-mention
        functionality
      </>
    ),
  },

  {
    title: 'Broadridge Trading and Connectivity Solutions',
    location: 'Cluj-Napoca',
    date: 'March 2023 - Present',
    content: <></>,
  },
];
