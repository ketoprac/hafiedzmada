import { PinTopIcon } from "@radix-ui/react-icons";

const BackToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button className="bg-white/50 dark:bg-white/20 fixed bottom-4 right-4 font-semibold p-4 rounded-full shadow" onClick={scrollToTop}>
      <PinTopIcon />
    </button>
  );
};

export default BackToTopButton;