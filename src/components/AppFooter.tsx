

const Footer = () => {
  return (
    <footer className="border-t-[1px]
    xl:mt-20 mx-2">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-4 my-5 justify-between">

          <div className="mt-2 md:mt-0">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full">
                <img src="/assets/app/akash.jpeg" alt="avatar" className="w-full h-full rounded-full object-cover" />
              </div>
              <h1 className="text-xl font-bold">akash2003mondal@gmail.com</h1>

            </div>
          </div>

          <div className="mt-2 md:mt-0">
            <h5 className="uppercase mb-3">Resources</h5>
            <ul className="list-none">
              <li className="mt-2">
                <a href="#hero">
                  <div className=" hover:opacity-80 transition-all delay-75 duration-150 sm:cursor-pointer">Portfolio</div>
                </a>
              </li>
              <li className="mt-2">
                <a href="#about">
                  <div className=" hover:opacity-80 transition-all delay-75 duration-150 sm:cursor-pointer">About</div>
                </a>
              </li>
              <li className="mt-2">
                <a href="#projects">
                  <div className=" hover:opacity-80 transition-all delay-75 duration-150 sm:cursor-pointer">Projects</div>
                </a>
              </li>
              <li className="mt-2">
                <a href="#contact">
                  <div className=" hover:opacity-80 transition-all delay-75 duration-150 sm:cursor-pointer">Contact</div>
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-2 md:mt-0">
            <h5 className="uppercase mb-3">More</h5>
            <ul className="list-none">
              <li className="mt-2">

                <div className=" hover:opacity-80 transition-all delay-75 duration-150 sm:cursor-pointer">Privacy Policy</div>

              </li>
              <li className="mt-2">
                <div className=" hover:opacity-80 transition-all delay-75 duration-150 sm:cursor-pointer">Terms of Service</div>

              </li>
            </ul>
          </div>

          <div className="mt-2 md:mt-0">
            <h5 className="uppercase mb-3">About Sky.inc</h5>
            <ul className="list-none">
              <li className="mt-2">
                <a href="https://github.com/AkashMondal0" target="_blank">
                  <div className=" hover:opacity-80 transition-all delay-75 duration-150 sm:cursor-pointer">
                    Github
                  </div>
                </a>
              </li>
              <li className="mt-2">
                <a href="https://stackoverflow.com/users/21296702/akash-mondal" target="_blank">
                  <div className=" hover:opacity-80 transition-all delay-75 duration-150 sm:cursor-pointer">
                    Stack Overflow
                  </div>
                </a>
              </li>
              <li className="mt-2">
                <a href="https://www.linkedin.com/in/akashmondal0"
                target="_blank">
                  <div className=" hover:opacity-80 transition-all delay-75 duration-150 sm:cursor-pointer">
                    LinkedIn
                  </div>
                </a>
              </li>
              <li className="mt-2">
                <a href="https://www.instagram.com/akashmondal__1/" target="_blank">
                  <div className=" hover:opacity-80 transition-all delay-75 duration-150 sm:cursor-pointer">
                    Instagram
                  </div>
                </a>
              </li>
            </ul>
          </div>

        </div>
        <div className="border-t-[1px]">
          <p className="text-base hover:opacity-80 py-2 transition-all delay-75 duration-150">
            &copy; 2023 Sky.Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;