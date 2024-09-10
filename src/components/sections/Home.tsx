import { Linkedin, Mail, FileText } from "lucide-react";

const Home = () => {
  return (
    <section id="home" className="pt-32 pb-10 relative">
      <div className="flex flex-col-reverse lg:flex-row items-center">
        <div className="w-full lg:w-1/2 text-left relative z-10">
          <div className="flex space-x-6 mb-5">
            <a
              href="#"
              className="text-gray-600 hover:text-amber-500 transition-colors"
            >
              <FileText size={24} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-amber-500 transition-colors"
            >
              <Mail size={24} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-amber-500 transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
          <h1 className="text-5xl lg:text-6xl font-black mb-6 !leading-normal tracking-tight">
            <span className="text-amber-500">Hey there,</span>
            <br /> It's Àlex Luelmo.
          </h1>
          <p className="text-xl mb-6 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam...
          </p>
        </div>
        <div className="lg:ml-auto relative">
          <img
            src="src/assets/images/me.webp"
            alt="Àlex Luelmo"
            className="w-64 lg:w-96 rounded-full z-10 relative"
          />
          <div className="absolute top-[-20px] right-[-20px] w-32 h-32 bg-purple-200 rounded-full z-0"></div>
          <div className="absolute bottom-[-20px] left-[-20px] w-24 h-24 bg-amber-200 rounded-full z-0"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
