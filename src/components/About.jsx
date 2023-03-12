import { useState } from "react";

const portfolioItems = [
  {
    id: 1,
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel quam vitae est varius efficitur eu sit amet diam.",
    imageUrl: "https://via.placeholder.com/300x200",
    demoUrl: "#",
    sourceUrl: "#",
  },
  {
    id: 2,
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel quam vitae est varius efficitur eu sit amet diam.",
    imageUrl: "https://via.placeholder.com/300x200",
    demoUrl: "#",
    sourceUrl: "#",
  },
  {
    id: 3,
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel quam vitae est varius efficitur eu sit amet diam.",
    imageUrl: "https://via.placeholder.com/300x200",
    demoUrl: "#",
    sourceUrl: "#",
  },
];

const About = () => {
  const [isPortfolioVisible, setIsPortfolioVisible] = useState(false);

  const handleTogglePortfolio = () => {
    setIsPortfolioVisible(!isPortfolioVisible);
  };

  return (
    <div className="bg-yellow-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-yellow-900">About Me</h2>
          <p className="mt-4 text-lg text-black-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vel quam vitae est varius efficitur eu sit amet diam. Nulla
            facilisi. Fusce vitae arcu nunc.
          </p>
          <div className="mt-8">
            <button
              onClick={handleTogglePortfolio}
              className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              My Portfolio
            </button>
            {isPortfolioVisible && (
              <div className="mt-8 grid grid-cols-1 gap-8"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
