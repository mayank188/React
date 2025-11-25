import Card from './components/Card'

const App = () => {

 const jobOpenings = [
  {
    brandLogo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$65/hour",
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    companyName: "Apple",
    datePosted: "3 weeks ago",
    post: "iOS Developer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$90/hour",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    companyName: "Netflix",
    datePosted: "10 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$110/hour",
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png",
    companyName: "Google",
    datePosted: "1 week ago",
    post: "Cloud Solutions Architect",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$85/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
    companyName: "Microsoft",
    datePosted: "4 weeks ago",
    post: "Data Scientist",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$75/hour",
    location: "Redmond, USA"
  },
  {
    brandLogo: "https://blog.logomaster.ai/hs-fs/hubfs/ibm-logo-1967.jpg?width=672&height=454&name=ibm-logo-1967.jpg",
    companyName: "IBM",
    datePosted: "2 days ago",
    post: "AI Research Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hour",
    location: "New York, USA"
  },
  {
    brandLogo: "https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png",
    companyName: "Tesla",
    datePosted: "6 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$80/hour",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
    companyName: "NVIDIA",
    datePosted: "3 weeks ago",
    post: "GPU Programmer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$120/hour",
    location: "Santa Clara, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s",
    companyName: "Oracle",
    datePosted: "8 days ago",
    post: "Database Administrator",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hour",
    location: "Mumbai, India"
  },

  // ----------- NEW 10 JOBS BELOW -----------

  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2017/02/Samsung-Logo.png",
    companyName: "Samsung",
    datePosted: "9 days ago",
    post: "Embedded Systems Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$78/hour",
    location: "Seoul, South Korea"
  },
  {
    brandLogo: "https://assets.stickpng.com/images/58429299a6515b1e0ad75aca.png",
    companyName: "Adobe",
    datePosted: "1 week ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$68/hour",
    location: "San Jose, USA"
  },
  {
    brandLogo: "https://www.pngmart.com/files/23/Spotify-Logo-PNG-Photos.png",
    companyName: "Spotify",
    datePosted: "12 days ago",
    post: "Audio ML Specialist",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$105/hour",
    location: "Stockholm, Sweden"
  },
  {
    brandLogo: "https://companieslogo.com/img/orig/UBER-b3cdfe7c.png",
    companyName: "Uber",
    datePosted: "4 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$82/hour",
    location: "San Francisco, USA"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2020/09/PayPal-Logo.png",
    companyName: "PayPal",
    datePosted: "1 day ago",
    post: "Cybersecurity Analyst",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$100/hour",
    location: "Dublin, Ireland"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2021/03/Zoom-Logo.png",
    companyName: "Zoom",
    datePosted: "3 days ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$88/hour",
    location: "Remote"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2017/05/Intel-Logo.png",
    companyName: "Intel",
    datePosted: "2 weeks ago",
    post: "Chip Design Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$115/hour",
    location: "Portland, USA"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2021/05/OpenAI-logo.png",
    companyName: "OpenAI",
    datePosted: "6 days ago",
    post: "AI Prompt Engineer",
    tag1: "Contract",
    tag2: "Expert Level",
    pay: "$140/hour",
    location: "Remote"
  },
  {
    brandLogo: "https://cdn.freebiesupply.com/logos/large/2x/twitter-logo-svg-vector.svg",
    companyName: "X (Twitter)",
    datePosted: "2 weeks ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$85/hour",
    location: "Texas, USA"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2023/04/TikTok-logo.png",
    companyName: "TikTok",
    datePosted: "5 days ago",
    post: "Content ML Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$108/hour",
    location: "Singapore"
  }
];



  return (
    <div className='parent'>
      {jobOpenings.map(function (elem, idx) {
        return <div key={idx}>
          <Card company={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} brandLogo={elem.brandLogo} pay={elem.pay} tag2={elem.tag2} location = {elem.location} />
        </div>
      })}
    </div>
  )
}

export default App