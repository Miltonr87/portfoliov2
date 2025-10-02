import ExperienceDesktop from './ExperienceDesktop';
import ExperienceMobile from './ExperienceMobile';

const Experience = () => {
  return (
    <>
      {/* Mobile version */}
      <div className="block xl:hidden">
        <ExperienceMobile />
      </div>

      {/* Desktop version */}
      <div className="hidden xl:block">
        <ExperienceDesktop />
      </div>
    </>
  );
};

export default Experience;
