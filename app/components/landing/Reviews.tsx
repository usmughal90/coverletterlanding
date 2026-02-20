import ReviewSlider from "@/app/components/shared/ReviewSlider";

const reviews = [
  {
    id: 1,
    name: "samatha_drewp",
    role: "Sep 15, 2025",
    text: "The generated cover letters feel personal and not robotic. The AI helps me convey my personality and professionalism at the same time.",
  },
  {
    id: 2,
    name: "Janell Charlott5",
    role: "Sep 15, 2025",
    text: "The AI helps me find the right words when I struggle to describe my experience. This makes my cover letters stronger.",
  },
  {
    id: 3,
    name: "zaragoza lurlene",
    role: "Sep 15, 2025",
    text: "It has improved my confidence in applying to jobs because I know my cover letters look professional and well-structured.",
  },
  {
    id: 4,
    name: "shemika basilia",
    role: "Sep 14, 2025",
    text: "The app is reliable and never crashes. It makes the process of writing cover letters much less stressful.",
  },
  {
    id: 5,
    name: "Cassi_Rocioq",
    role: "Sep 14, 2025",
    text: "This app is a great tool for anyone looking for a job. It saves effort and ensures every cover letter is polished and professional.",
  },
  {
    id: 6,
    name: "galvin dickey",
    role: "Sep 11, 2025",
    text: "Overall I think this app is a must have for anyone actively searching for jobs. It takes away the pressure of writing the perfect cover letter and helps highlight my strengths in a professional way.",
  },
  {
    id: 7,
    name: "Maupin Magdalen",
    role: "Sep 11, 2025",
    text: "The AI feels very smart because it understands the job description I paste and tailors the letter to match. This makes my applications feel more personalized and less generic cọmpared to letters I used to write on my own.",
  },
  {
    id: 8,
    name: "Humes Scarbrough",
    role: "Sep 7, 2025",
    text: "It is great for professionals who need to apply for multiple jobs quickly. I can prepare many letters in less time and still keep each one unique.",
  },
];

export default function Review() {
  return (
    <section
      id="reviews"
      className="bg-[#059669] py-24 px-6 lg:px-12 overflow-hidden min-h-[70vh] flex items-center justify-center"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center w-full">
        <h2 className="text-2xl sm:text-4xl  font-extrabold mb-4 tracking-tighter capitalize">
          Reviews
        </h2>

        <ReviewSlider reviews={reviews} />
      </div>
    </section>
  );
}
