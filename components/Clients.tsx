import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { companies, testimonials } from "@/data";

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="font-bold text-4xl md:text-5xl text-center">
        Kind words from <span className="text-purple">Satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center mt-10 px-4 md:px-10">
        <div className="w-full overflow-hidden md:block hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        {/* Mobile layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:hidden w-full px-4">
          {testimonials.map((item) => (
            <div
              key={item.index}
              className="p-6 rounded-2xl border border-border backdrop-blur-sm"
            >
              <p className="text-sm wrap-break-word">{item.quote}</p>
              <div className="mt-4 font-semibold">{item.name}</div>
              <div className="text-xs text-muted-foreground">{item.title}</div>
            </div>
          ))}
        </div>
        {/* <div className="flex-center flex-wrap gap-4 md:gap-16 max-lg:mt-10">
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className="flex items-center max-w-35 md:max-w-60 gap-2">
              <img src={img} alt={name} className="md:w-10 w-5" />
              <img src={nameImg} alt={name} className="md:w-10 w-5" />
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Clients;
