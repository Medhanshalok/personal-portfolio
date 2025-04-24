import HeroImg from "@/assets/images/photo.jpeg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Designer, Creator, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
              Hey! I'm <span className="text-yellow-400 font-semibold">Medhansh Alok</span> — a passionate
    Full Stack Developer and Software Developer who loves turning complex
    problems into clean, scalable solutions. With strong problem-solving skills
    and a solution-oriented mindset, I thrive on challenges and adapt quickly to
    new technologies and environments.{" "}
                <span className="font-bold text-white">
                  
                </span>
                , I'm dedicated to simplifying development workflows.
              </p>
              <p className="text-white">
              I'm focused on making web development faster, easier, and more accessible for all developers. As a full-stack developer and software developer, I excel in Java and C++, and I'm currently expanding into backend development to build seamless and robust web applications.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                  Whether it's crafting pixel-perfect frontends or building robust backend
    architectures, I'm always eager to learn, grow, and create impact-driven
    digital experiences.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
