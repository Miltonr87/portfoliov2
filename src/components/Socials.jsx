import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/miltonr87' },
  {
    icon: <FaLinkedin />,
    path: 'https://www.linkedin.com/in/milton-rodrigues-33b0b531/',
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className={iconsStyles}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
