const { createApp } = Vue

createApp({
    data() {
        return {
            jobs: [
                {
                    "company":"MITRE",
                    "position":"Software Engineering Associate",
                    "dates":"June 2021 - present"
                },
                {
                    "company":"BetaPrime Consulting Inc.",
                    "position":"Software Engineering Intern",
                    "dates":"October 2020 - May 2021"
                },
                {
                    "company":"RIVA Solutions Inc.",
                    "position":"Information Technology Intern",
                    "dates":"June 2020 - October 2020"
                },
                {
                    "company":"Deloitte",
                    "position":"Cyber Risk Intern",
                    "dates":"July 2020 - July 2020"
                },
                {
                    "company":"Amtrak",
                    "position":"Test Analyst Intern",
                    "dates":"January 2020 - May 2020"
                },
                {
                    "company":"Massachussetts General Hospital",
                    "position":"Web Development Intern",
                    "dates":"May 2019 - September 2019"
                }
            ]
        }
    }
}).mount('#app')