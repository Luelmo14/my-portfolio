import { Linkedin, Mail, FileText } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Home = () => {
  return (
    <section id="home" className="pt-32 pb-10 relative">
      <div className="flex flex-col-reverse lg:flex-row items-center">
        <div className="w-full lg:w-1/2 text-left relative z-10">
          <div className="flex mb-5">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="mr-8" asChild>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-amber-500 transition-colors dark:text-white/70 dark:hover:text-amber-500"
                  >
                    <FileText size={24} />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View Resume</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger className="mr-8" asChild>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-amber-500 transition-colors dark:text-white/70 dark:hover:text-amber-500"
                  >
                    <Mail size={24} />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Send Email</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-amber-500 transition-colors dark:text-white/70 dark:hover:text-amber-500"
                  >
                    <Linkedin size={24} />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>LinkedIn Profile</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
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
          <div className="absolute top-[0px] right-[-20px] w-12 h-12 bg-orange-500/80 rounded-full z-0"></div>
          <div className="absolute top-[125px] right-[350px] w-10 h-10 bg-fuchsia-600/80 rounded-full z-0"></div>
          <div className="absolute top-[20px] left-[-20px] w-4 h-4 bg-black/70 rounded-full z-0"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
