// import logo from './logo.svg';
import './App.css';
import { BentoGrid, BentoGridItem } from './Grid';
import GridPattern from './GridPattern';
// import { StickyScroll } from './RevealScroll';
import { ContainerScroll } from './ScrollContainer';
import { VelocityScroll } from './Velocity';
import image from './images/vercel.com_varunjajoos-projects.png'
import image1 from './images/zomato_page-0001.jpg'
import { SparklesCore } from './Sparkles';
import IconCloud from './IconCloud';
function App() {
  let expanded = false;
  const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-gray-900 bg-black"></div>
  );
  const iconSlugs = ["react", "typescript", "javascript"];
  const items = [
    {
      title: "The Dawn of Innovation",
      description: "Explore the birth of groundbreaking ideas and inventions.",
      header: <Skeleton />,
      className: "md:col-span-2 bg-black border-gray-900",
      icon: "",
    },
    {
      title: "The Digital Revolution",
      description: "Dive into the transformative power of technology.",
      header: <Skeleton />,
      className: "md:col-span-1",
      icon: "",
    },
    {
      title: "The Art of Design",
      description: "Discover the beauty of thoughtful and functional design.",
      header: <Skeleton />,
      className: "md:col-span-1",
      icon: "",
    },
    {
      title: "The Power of Communication",
      description:
        "Understand the impact of effective communication in our lives.",
      header: <Skeleton />,
      className: "md:col-span-2",
      icon: "",
    },
  ];
  
  return (
    <div className="bg-gray-50">
       <GridPattern className="absolute inset-0 h-[135rem]  md:h-[125rem] lg:h-[130em] " numSquares={20} x={0} y={0}/>
      <header className="relative z-10 py-4 md:py-6  bg-opacity-50 backdrop-blur " x-data="{expanded: false}">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between">
            <div className="flex-shrink-0">
              <a href="#" title="" className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                <img className="w-auto h-8" src="" alt="" />
              </a>
            </div>

            <div className="flex md:hidden">
              <button type="button" className="text-gray-900" onClick={() => expanded = !expanded} aria-expanded={expanded ? "true" : "false"}>
                <span style={{ display: !expanded ? 'block' : 'none' }} aria-hidden="true">
                  <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </span>

                <span style={{ display: expanded ? 'block' : 'none' }} aria-hidden="true">
                  <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
              </button>
            </div>

            <div className="hidden md:flex md:items-center md:justify-center md:space-x-10 md:absolute md:inset-y-0 md:left-1/2 md:-translate-x-1/2 lg:space-x-16">
              <a href="#" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Features </a>

              <a href="#" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Pricing </a>

              <a href="#" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Support </a>
            </div>

            <div className="hidden md:flex">
              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Achievements
              </a>
            </div>
          </div>

          <nav style={{ display: expanded ? 'block' : 'none' }}>
            <div className="px-1 py-8">
              <div className="grid gap-y-7">
                <a href="#" title="" className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Features </a>

                <a href="#" title="" className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Pricing </a>

                <a href="#" title="" className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Support </a>

                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  Achievements
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <section className="relative py-12 sm:py-16 lg:pb-40">
        {/* <div className="absolute bottom-0 right-0 overflow-hidden">
          <img className="w-full h-auto origin-bottom-right transform scale-150 lg:w-auto lg:mx-auto lg:object-cover lg:scale-75" src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/background-pattern.png" alt="" />
        </div> */}

        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-4 lg:items-center lg:grid-cols-2 xl:grid-cols-2">
            <div className="text-center xl:col-span-1 lg:text-left md:px-16 lg:px-0 xl:pr-20">
              <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">Let's Build Something Amazing Together</h1>
              <p className="mt-2 text-lg text-gray-600 sm:mt-6 font-inter">Hey there, I'm Varun Jajoo, a web developer who loves diving into hackathons to push my limits and innovate. </p>
              <a href="#" title="" className="inline-flex px-8 py-4 mt-8 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded sm:mt-10 font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
                Achievements
              </a>

              <div className="mt-8 sm:mt-16">
               

                <blockquote className="mt-6">
                  <p className="text-lg font-bold text-gray-900 font-pj">Best code editor in market!</p>
                 </blockquote>

               
              </div>
            </div>

            <div className="xl:col-span-1">
              {/* <img className="w-full mx-auto mb-[-4rem] md:mb-0 " src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/illustration.png" alt="" />
               */}
              <IconCloud iconSlugs={["powerbi","googlecolab", "javascript", "react", "typescript", "python", "java", "github", "vercel", "mongodb", "postgresql", "huggingface","amazonaws","nextdotjs","nodedotjs","jupyter","framer","threedotjs","langchain","googlegemini","openai","llama","html5","css3","supabase","d3dotjs", "express", "node.js", "next.js", "firebase", "HTML", "hugging-face"]} />

            </div>
          </div>
        </div>
      </section>
      <ContainerScroll className="" titleComponent={<h1 className='text-5xl md:text-7xl font-bold font-pj md:mb-0 mb-[-3rem] '>Power BI Dashboard</h1>} children={<img className='rounded-xl' src={image1}/>}/>
      {/* <StickyScroll className="h-[120vh] " content={content}/> */}
      <div className='bg-black relative   md:mt-[30vh] mt-[-7rem] z-10'>
      <div className="py-5 w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-5xl pb-5 text-3xl lg:text-7xl font-bold text-center text-white relative z-20">
        PROJECTS
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
     <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] mt-[-5rem] md:px-0 px-5 relative z-10 text-white">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={`${item.className} bg-black border border-gray-900 text-white`}
          icon={item.icon}
          
        />
      ))}
    </BentoGrid>
    </div>
  

    </div>
  );
}

export default App;
