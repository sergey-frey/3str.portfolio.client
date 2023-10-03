import { classes } from "@/shared/lib";

export const Header = () => {
  return (
    <header
      className={classes(
        "fixed w-full flex gap-[10px] px-4 header-animation",
        "lg:px-10"
      )}
    >
      <div
        className={classes(
          "text-primary-500 bg-neutral-600/40 text-h3 font-h3 px-5 py-4 backdrop-blur-xl rounded-b-md",
          "md:text-h2 font-h2"
        )}
      >
        3str.Portfolio
      </div>

      <div
        className={classes(
          "w-full hidden items-center justify-end px-5 py-4 bg-neutral-600/40 backdrop-blur-xl rounded-b-md",
          "md:flex"
        )}
      >
        {/* В разработке */}
      </div>
    </header>
  );
};
