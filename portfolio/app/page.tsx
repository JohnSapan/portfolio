'use client'
import SideNav from './components/sidenav';
import ScrollSpy from "react-ui-scrollspy";
import Image from 'next/image';
import type { Metadata } from 'next';
import Timeline from './components/timeline';


const navItems = {
  'Summary': { href: 'summary' },
  'Experience & Education': { href: 'experience-education' },
  'Skills': { href: 'skills' },
  'Certifications': { href: 'certifications' },
  'Languages & Frameworks': { href: 'languages-frameworks' },
  'Interests': { href: 'interests' }
};

const tdCanadaTrust = {
  date: 'March 2022 - March 2023',
  company: 'TD Canada Trust, Mississauga',
  position: 'Operations Officer',
  experience: [
    `Performed specialized tasks relating to credit maintenance while
    operating within the business’ credit risk appetite and regulatory
    framework.`,
    `Participated in team meetings, providing feedback on performance
    management.
    `,
    `Communicated effectively and exercised due diligence with business
    partners from retail and sales channels, external solicitors, and other
    financial institutions`
  ]
};

const ricoh = {
  date: 'January 2019 - January 2020',
  company: 'Ricoh Canada, Mississauga',
  position: 'Co-op Application Developer  ',
  experience: [
    `Worked primarily in Salesforce development, developing cloud services to automate business processes and integrate external applications.`,
    `Deployed microservices on Microsoft’s .NET platform to replace licensed services for document generation.`,
    `Participated in daily stand-ups and weekly reviews and demonstrations.`
  ]
};

const sheridan = {
  date: 'January 2017 - June 2020',
  company: 'Sheridan College, Brampton',
  position: 'Software Engineering',
  experience: [
    `Completed the 3-year program - GPA 3.47/4.0`
  ]
};


export default function Page() {


  return (
    <section >
      <div className='flex flex-row items-center'>
        <div className='flex flex-1 justify-center'>
          <Image
            src="/opengraph-image.jpg "
            width={400}
            height={400}
            className="hidden md:block "
            alt="Picture of John Robin Sapan"
          />
        </div>
        <div className='flex-1'>
          <h1 className="text-6xl">John Robin Sapan</h1>
          <h2 className='text-2xl'>Software Engineer</h2>
        </div>
      </div>
      <div className='flex flex-row mt-64'>
        <SideNav {...navItems} />
        <div className="prose prose-neutral dark:prose-invert flex-1 max-w-none">
          <ScrollSpy useBoxMethod={false} scrollThrottle={100} >
            <div id='summary'>
              <div className='flex flex-col flex-1 items-center'>
                <h2>
                  About Me
                </h2>
                <p className="prose-default">
                  I am a skilled developer in C#, Java, SQL, ASP.NET, HTML5, CSS, and JavaScript,
                  with expertise in software design patterns. Proficient in deploying
                  applications on web servers, utilizing version control, and
                  developing/consuming REST APIs. Adept at troubleshooting hardware
                  and software issues, passionate about continuous learning, and effective
                  in collaborative cross-functional teams.
                </p>
              </div>
            </div>

            <div id='experience-education'>
              <div className='flex xl:flex-row md:flex-col'>
                <div className='flex-initial w-[33.33vw] items-center'>
                  <h1>
                    Experience & Education
                  </h1>
                  <Image
                    src="/images/home/sheridan_background.webp "
                    width={400}
                    height={400}
                    className="hidden md:block rounded-lg object-cover w-full h-auto"
                    alt="Picture of Sheridan College"
                  />
                </div>
                <div className='flex-1'>
                  <Timeline {...tdCanadaTrust} />
                  <Timeline {...ricoh} />
                  <Timeline {...sheridan} />
                </div>
              </div>
            </div>

            <div id='skills' >
              <div>
                DevOps (Docker, Git)
                Web Services & API (REST API)
                MVC frameworks (ASP.NET)
                Full stack development
                Database design and development
              </div>
            </div>

            <div id='certifications' >
              <div>AZ-900 - Microsoft Certified:
                Azure Fundamentals
                Develop an ASP.NET Core web
                app that consumes an API
              </div>
            </div>

            <div id='languages-frameworks' >
              <div>C#
                Java
                Javascript (React, Angular, Vue.js)
                Python
                HTML5 & CSS
                SQL & NoSQL
              </div>
            </div>

            <div id='interests' >
              <div>Enthusiastic about staying
                current with and adopting the
                latest technologies, languages,
                and frameworks in computer and
                information technology.
              </div>
            </div>
          </ScrollSpy>
        </div>
      </div>
    </section >
  );
}
