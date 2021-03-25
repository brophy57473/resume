const data = {
    about: {
        first: 'Ryan', 
        last: 'Brophy',
        digits: '7349040788',
        email: 'rbrophy@att.net'
         },
    summary: {
        one: 'Patient Education - Educate patients using common terminology, have received positive feedback from patients and peers regarding knowledge and care.',
        two: 'Time Management -  Experience filling an average of 350 prescriptions per day as the only pharmacist on staff while managing 2-4 pharmacy technicians. From October-November 2020, administered approximately 50 flu shots per day while maintaining the normal workload of the pharmacy.',
        three: 'Team Leadership - Provide on-the-job education and training to new technicians to improve overall workflow and patient satisfaction.'
    },
    education: {
        where: 'Ferris State University',
        when: 'May 2020',
        degree: 'PharmD'
    },
    professional: {
        cvs: [{
            when: 'July 2020 - PRESENT', 
            where: 'Kalamazoo, MI', 
            what: 'Staff Pharmacist',
            summary: 'Experience at high volume (400+ prescriptions/day) stores throughout West Michigan. Staff pharmacist in Kalamazoo (Sept. 2020) at a location that fills, on average, 250 scripts per day.'
        },{
            when: 'Dec 2016 - July 2020',
            where: 'Grand Rapids, MI',
            what: 'Pharmacy Intern',
            summary: 'Responsibilities included data entry of prescriptions, prescription production, patient care outreach, administering immunizations, resolving insurance rejections and supporting/teaching pharmacy technicians.'
        }],
        rotations: [{
            when: 'May 2019 - June 2019',
            what: 'Nuclear Pharmacy',
            where: 'Cardinal Health',
            summary: 'Assisted with quality assurance to ensure every dose had the required radioactive activity needed for imaging.'
        },{
            when: 'June 2019 - July 2019',
            what: 'Community Pharmacy',
            where: 'Spartan Nash',
            summary: 'Focused on patient care through vaccinations, Comprehensive Medication Reviews and TIPs in MTMOutcomes. Provided patient education through production of a webpage which discussed outdoor safety hazards found in Michigan during the summer.'
        },{
            when: 'Aug 2019 - Oct 2019',
            what: 'Ambulatory Care',
            where: 'Spectrum Health',
            summary: 'Two rotations that advanced my ability to lead patient appointments and complete Comprehensive Medication Reviews.'
        },{
            when: 'Oct 2019 - Nov 2019',
            what: 'Institutional Pharmacy',
            where: 'Metro Health',
            summary: 'Spent time investigating patient charts in all areas of the hospital including infectious disease, ICU and transitional care.'
        },{
            when: 'Jan 2020 - Feb 2020',
            what: 'Internal Medicine',
            where: 'Spectrum Health',
            summary: 'Reviewed charts for 5 to 10 patients every morning and presented recommendations during rounds.'
        }]
    },
    qualificationsSkills: [
        'Patient Education',
        'Retail Pharmacy Operations',
        'Time Management',
        'Team Management',
        'Quality Assurance Checks',
        'Innovative Use of Technology',
        'Immunizations',
        'EMR Experience',
    ],
    presentationsProjects: [
        'Brophy, R. (May 2020) The Use of Pimavanserin in Alzheimer’s Disease Related Psychosis. Paper presented at Ferris State University College of Pharmacy, Grand Rapids, MI.',
        'Brophy, R. (Sep 2019) Opioids: Use and Safety. Presented at Spectrum Health United Hospital, Greenville, MI.'
    ],
    tech: {
        languages: ['JS','HTML','CSS','React.js'],
        github: 'brophy57473',
        projects: {
            putting: {
                what: 'Big Rapids Disc Golf Putting League Website',
                when: 'Fall 2019',
                src: 'https://script.google.com/macros/s/AKfycbxmmTUj6aW09eFcgykMUF6LwvX02PDDu3WZsxNJAESX5Bu7fQ/exec',
                srcAlternative: 'https://script.google.com/macros/s/AKfycbwaKvQxX2f7hxaek3qFZAtqe_SCh02ck9bmflbXk-jZ-MEkLA/exec',
                summary: 'A website to manage the local disc golf putting league. Built to ensure the league could self-sustain once I moved out of Big Rapids. This project challenged my understanding of html/css/js. As I had not learned about React or back-end development, I use a Google Sheet as my database and built it entirely in Google Apps Script.',
            },
            workflow: {
                what: 'Community Pharmacy Workflow Aid',
                when: 'Fall 2020 - Present',
                src: '',
                summary: 'A small project to increase efficiency while working as a retail pharmacist. This page generates various barcodes which are used to complete prescription verification within the software used by CVS.'
            },
            alternativeScoring: {
                what: 'Brophy Disc Golf Scoring',
                when: 'Winter 2020 - Present',
                src: 'https://friendly-hypatia-0eebde.netlify.app/',
                summary: 'A web application in progress. This application is intended to be used on a mobile interface and assist in scoring casual rounds of disc golf using various scoring structures. My first project built with React.js.'
            }
        }
    },
    leadership: {
        pdga: {
            what: 'Professional Disc Golf Association Tournament Director',
            when: 'Sept 2018 - PRESENT',
            summary: 'Doubled player attendance over three years through collaboration with local businesses, participating with course improvements, and overhauling event organization.',
            recentEvents: [{
                name: "Champion's Course Grand Opening",
                when: 'Nov 2020',
                size: '57 players',
                tier: 'C-tier'
            },{
                name: 'Big Dawg 2020',
                when: 'Sept 2020',
                size: '65 players',
                tier: 'C-tier'
            },{
                name: 'Big Dawg 2019',
                when: 'Sept 2019',
                size: '30 players',
                tier: 'C-tier'
            },{
                name: 'Big Dawg 2018',
                when: 'Sept 2018',
                size: '37 Players',
                tier: 'C-tier'
            }]
        },
        coach: {
            what: 'Coach of Ferris Statue University Disc Golf Team',
            when: 'May 2019 - PRESENT',
            summary: 'Teach new and experienced golfers the skills needed to compete in collegiate disc golf at the highest level. Plan and coordinate team trips and events. Conduct tryouts and assist in announcing team decisions. Developed and managed a website to score and track statistics for Big Rapids’ annual winter putting league.'
        },
        president: {
            what: 'President of Ferris State University Disc Sports Club',
            when: 'Aug 2015 - May 2019',
            summary: 'Competed with and led the 2015, 2017 and 2019 National Collegiate Disc Golf Champions. Successfully restructured the club, monitored spending, and presented the club budget to Club Sports Council each spring. Raised awareness of the club through advertising and recruiting on campus which increased student involvement each year throughout my presidency.'
        }
    },
    licenses: {
        pharmacist: {
            name: 'Michigan Pharmacist License',
            expires: '7/13/2022',
            licenseNumber: '5302412615'
        },
        controlledSubstance: {
            name: 'Controlled Substance License',
            expires: '7/13/2022',
            licenseNumber: '5315220122'
        },
        basicLifeSupport: {
            name: 'BLS Certified',
            expires: '7/13/2022',
        },
        immunization: {
            name: 'Immunization Certified'
        }
    }
}

export default data;