import { FaqItem, HowItWorksStepType, Review } from "@/app/types/home";

const navItems = [
 { label: "Home", href: "#home" },
 { label: "Features", href: "#features" },
 { label: "App Screens", href: "#tv-brands" },
 { label: "Blogs", href: "#blog" },
 { label: "Faq", href: "#faq" },
 
];



const stats = [
  {
    id: "trusted",
    icon: "star",
    preText: "Trusted by",
    highlight: "125 Million+",
    postText: "Users Worldwide",
  },
  // {
  //   id: "support",
  //   icon: "star",
  //   preText: "Support",
  //   highlight: "500+",
  //   postText: "TV Brands",
  // },
] as const;

 const features = [
    {
    title: "AI Cover Letter Generator",
    description:
      "Create professional cover letters instantly using AI.",
    iconSrc: "/images/icons/ai cover letter.png",
    iconAlt: "AI Cover Letter Generator",
  },
   {
    title: "Professional Resume Builder",
    description:
       " Build modern structured resumes with  step-by-step guidance in minutes.",
    iconSrc: "/images/icons/Internship & Job Application Letter.png",
    iconAlt: "Complete remote control",
  },
   
  {
    title: "Internship & Job Application Letters",
    description:
      "Create internship letters, job application letters, and employment documents.",
    iconSrc: "/images/icons/Internship & Job Application Letter.png",
    iconAlt: "Complete remote control",
  },
  {
    title: "ATS-Optimized CV Templates",
    description:
      "Use applicant tracking system (ATS) friendly templates.",
    iconSrc: "/images/icons/ATS-Optimized CV Templates.png",
    iconAlt: "Fast and easy connection",
  },
   
  {
    title: "Official & Educational Documents",
    description:
      "Draft resignation, motivation, recommendation & other formal documents.",
    iconSrc: "/images/icons/Official & Educational Documents.png",
    iconAlt: "Clean and user-friendly interface",
  },
   {
    title: "Multi-Language Support",
    description:
      "Create resumes and cover letters in multiple languages.",
    iconSrc: "/images/icons/Multi-Language Support.png",
    iconAlt: "Multi Language Support",
  },
  {
    title: "Proposal & Freelance Letter Writer",
    description:
      "Write professional business proposals and freelance pitches with AI.",
    iconSrc: "/images/icons/Proposal & Freelance Letter Writer.png",
    iconAlt: "Proposal Writer",
  },
  
   {
    title: "Flexible Pricing Options",
    description:
      "Choose subscription plans or one-time document purchases based on your needs.",
    iconSrc: "/images/icons/Flexible Pricing Options.png",
    iconAlt: "Smart TV and IR support",
  },
  
 
];
const steps: HowItWorksStepType[] = [
  {
    title: "Connect Device",
    description: "Connect your phone and TV to the same Wi-Fi network.",
  },
  {
    title: "Pair & Control",
    description:
      "Open the app, pair your TV, and start controlling instantly.",
  },
  {
    title: "Enjoy Smart Control",
    description:
      "Change channels, adjust volume, and use smart features easily.",
  },
];

const slides = [
  { src: "/images/mockup/fire-tv.png", alt: "Amazon Fire TV" },
  { src: "/images/mockup/android-tv.png", alt: "Android TV" },
  { src: "/images/mockup/hisense-tv.png", alt: "Hisense TV" },
  { src: "/images/mockup/lg-tv.png", alt: "LG TV" },
  { src: "/images/mockup/onn-tv.png", alt: "Onn TV" },
  { src: "/images/mockup/philips-tv.png", alt: "Philips TV" },
  { src: "/images/mockup/rca-tv.png", alt: "RCA TV" },
  { src: "/images/mockup/roku-tv.png", alt: "Roku TV" },
  { src: "/images/mockup/samsung-tv.png", alt: "Samsung TV" },
  { src: "/images/mockup/sony-tv.png", alt: "Sony TV" },
  { src: "/images/mockup/tcl-tv.png", alt: "TCL TV" },
  { src: "/images/mockup/toshiba-tv.png", alt: "Toshiba TV" },
  { src: "/images/mockup/vizio-tv.png", alt: "Vizio TV" },
];

const slidesForHome = [
  { src: "/images/slides/cover-letter-ai-img-1.png", alt: "Cover Letter Screen 1" },
  { src: "/images/slides/cover-letter-ai-img-2.png", alt: "Cover Letter Screen 2" },
  { src: "/images/slides/cover-letter-ai-img-3.png", alt: "Cover Letter Screen 3" },
  { src: "/images/slides/cover-letter-ai-img-4.png", alt: "Cover Letter Screen 4" },
  { src: "/images/slides/cover-letter-ai-img-5.png", alt: "Cover Letter Screen 5" },
  { src: "/images/slides/cover-letter-ai-img-6.png", alt: "Cover Letter Screen 5" },
  { src: "/images/slides/cover-letter-ai-img-7.png", alt: "Cover Letter Screen 7" },
  { src: "/images/slides/cover-letter-ai-img-8.png", alt: "Cover Letter Screen 8" },
  { src: "/images/slides/cover-letter-ai-img-9.png", alt: "Cover Letter Screen 9" },
  { src: "/images/slides/cover-letter-ai-img-10.png", alt: "Cover Letter Screen 10" },
  
];

const FAQS: FaqItem[] = [
  {
    question: "What is this app about?",
    answer:
      "This app helps you create professional resumes and cover letters quickly and easily. Using AI technology, it generates customized documents that are tailored to the job you’re applying for, saving you time and effort.",
  },
  {
    question: "How does the AI help me create a resume and cover letter?",
    answer:
      "The AI uses your input to automatically craft personalized resumes and cover letters that highlight your skills, experience, and achievements. It ensures your documents are professionally formatted and job-ready in just a few minutes.",
  },
  {
    question: "Can I create multiple versions of my resume and cover letter?",
    answer:
      "Yes! You can create multiple versions of your resume and cover letter for different job applications, making it easy to customize your documents for each position.",
  },
  {
    question: "Is this app suitable for both experienced professionals and beginners?",
    answer:
      "Yes, it’s perfect for both! Whether you're just starting your career or you have years of experience, the app helps you showcase your skills, experience, and achievements in a professional manner",
  },
  {
    question: "How do I use the app to create my resume and cover letter?",
    answer:
      "Simply enter your personal details, work experience, and skills. The app will generate a custom cover letter and resume, which you can edit, personalize, and save in various formats.",
  },
  {
    question: "Can I edit the cover letter and resume after the AI generates them?",
    answer:
      "Absolutely! After the AI generates your cover letter and resume, you can easily edit and customize them. Adjust the content, design, and layout to make them exactly how you want.",
  },
  {
    question: "Does the app support different file formats for my documents?",
    answer:
      "Yes, you can export your cover letter and resume as PDF or Word files. This makes it easy to send your documents directly to employers or upload them to job boards.",
  },
  {
    question: "Is the app free to use?",
    answer:
      "You can use the app for free with limited features, including basic resume and cover letter templates. To unlock premium features, like Premium CV templates, you can upgrade to the full version with a subscription",
  },
  {
    question: "Are there templates for different types of cover letters?",
    answer:
      "Yes, the app offers a variety of customizable templates for different job positions and industries. Whether you're applying for a creative, corporate, or remote position, you’ll find the right style and format to match your needs.",
  },
  {
    question: "Can this app help with writing a Statement of Purpose (SOP)?",
    answer:
      "Yes, it can! Along with resumes and cover letters, the app also provides assistance with writing a Statement of Purpose (SOP) for academic or professional applications, with tailored suggestions based on your field of study or career goals.",
  },
  {
    question: "How safe is my personal information on the app?",
    answer:
      "Your privacy is our top priority. All your personal data is securely encrypted, and we do not store it on external servers. Your cover letter and resume are stored locally or in your chosen cloud storage for easy access.",
  },
];

const REVIEWS: Review[] = [
  {
    name: "Kent Lion",
    role: "Android user",
    rating: 5,
    text: "Unlike the other apps tried, it easily found and connected to the TV, and worked.",
  },
  {
    name: "Corine Raymond",
    role: "Smart TV + IR",
    rating: 5,
    text: "Just downloaded this out of boredom. It was super easy to set up and it makes me wonder why all remotes aren't designed like this. I love the interface and I actually use it more than the actual remote the TV came with. I love how it has all my TV apps in one location. I found some apps I had forgotten about. I can't find a negative thing to say. I wonder if there is a way to turn ads off, even if it means paying a small fee. I have a Sony Bravia TV.",
  },
  {
    name: "Ramjot Grewal",
    role: "Home setup",
    rating: 5,
    text: "I usually don't review but I had to for this. This was the only remote app that worked for me because this was the only one that I found that works as an IR remote. This works well for the most part except sometimes it goes ahead two spaces instead of one when I am in the settings. I will probably continue using this in the future.",
  },
  {
    name: "Google user",
    role: "Streaming",
    rating: 4,
    text: "Although the app was not compatible with my tv when I e-mailed them on not knowing how to connect it at 1 am they responded at 3 am with help the early morning help was much appreciated as I was not expecting any response or if a response later in the day at a more regular hour. It was very refreshing and much appreciated. Great costumer service..",
  },
  {
    name: "Yashna Chattree",
    role: "Daily use",
    rating: 4,
    text: "This is a really great app, and it barely took me 2 minutes to set my TV up! But some advice I have is: My TV measures volume from 1-100, and because the volume doesn't change when you long press the volume button, it's very tedious when you have to press the volume button over and over. And second: You could add a vibrate feature whenever you press a button. It feels really delicate to use the app otherwise. But overall, it's an awesome app!.",
  },
  {
    name: "N River",
    role: "Daily use",
    rating: 4,
    text: "Worked flawlessly as a smart remote with my LG OLED webOS TV. My only complaint is that I can't hold down the volume buttons, but that is minor. Out of all the apps I tested, this was the only one that worked. Not only that, but the ads are out of the way and not obtrusive at all. Well done.",
  },
  {
    name: "Christopher Garner",
    role: "Daily use",
    rating: 5,
    text: "Thank you for this app guys, I'm using the free version and was staggered that your list of tv's included my obscure, old skool artefact! The interface is first class and includes all I need. Wonderful and totally unexpected gem. I'm upgrading to 5 stars now I am familiar with all the options. I can fully recommend this feature for all the frustrated searchers out there, download and good luck! Thanks again, Chris.",
  },
  {
    name: "David Ermoian",
    role: "Daily use",
    rating: 5,
    text: "Motel TVs- I like to connect my own device to watch my own recordings. That often requires switching which input on the TV is being used. Quite often the remote control provided by the motel won't allow that to happen. And quite often the commercial TV in a motel has had all of the buttons removed. But if you have your own universal remote you can get around all that. This app worked great at helping me do that. Also helps shut off the closed captioning if it's on 62 people found this review helpful"
  },
  {
    name: "Chris REDDING",
    role: "Daily use",
    rating: 5,
    text: "Well Have a Bolva tv and there is no code listed for it , nor is it listed in either list. That being said!! You and your team have Nailed this app, easy to sorce it easy to use as well bright very well color coded and a huge list of codes available. If you ever lose your TV control, it's such a good app even if you don't Lose it this is an amazing app, features and design. Ilk even take it a little further what a team if you post an issue a team member quickly responds!! 2 Thumbs Up!!"
  },
  {
    name: "Kamran Zahoor",
    role: "Daily use",
    rating: 5,
    text: "I have used so many remote apps. Yet i couldn't find any better than this. This universal remote has so much options working silk smooth. It has track pad, keyboard, full tv remote accessies,and most of all it allows you to search your TV brand and pair in just a click. I am simply amazed."
  },
  {
    name: "Ada",
    role: "Daily use",
    rating: 5,
    text: "Simple setup with an incredible number of brands supported, clean interface, unobtrusive ads. Unfortunately, I didn't think to check whether my new phone has IR capability before downloading (my last phone did and this one is supposed to be an upgrade)"
  },
];


export { navItems, stats, features, slidesForHome, steps, slides,FAQS as faqs, REVIEWS as reviews };