import ExperienceDesktop from './ExperienceDesktop';
import ExperienceMobile from './ExperienceMobile';

const Experience = () => {
  return (
    <>
      <div className="block xl:hidden">
        <ExperienceMobile />
      </div>
      <div className="hidden xl:block">
        <ExperienceDesktop />
      </div>
    </>
  );
};

export default Experience;
