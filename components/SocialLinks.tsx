import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTelegram,
  faThreads,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const map: {
  [someStrKeyWhichIsDynamic: string]: {
    icon: IconDefinition,
    link: string,
  },
} = {
  github: { icon: faGithub, link: 'https://github.com/' },
  facebook: { icon: faFacebook, link: 'https://www.facebook.com/' },
  linkedin: { icon: faLinkedin, link: 'https://linkedin.com/in/' },
  instagram: { icon: faInstagram, link: 'https://www.instagram.com/' },
  telegram: { icon: faTelegram, link: 'https://telegram.me/' },
  twitter: { icon: faTwitter, link: 'https://twitter.com/' },
  threads: { icon: faThreads, link: 'https://threads.com/@' },
};

interface SocialLinksProps {
  items: {
    [someStrKeyWhichIsDynamic: string]: {
      id: string;
    };
  };
}

export default function SocialLinks({
  items,
}: SocialLinksProps) {
  return (
    <div className="flex items-center justify-center">
      {Object.keys(items).map((type) => {
        const { id } = items[type];
        const { icon, link } = map[type];
        return (
          id && (
            <a key={type} href={`${link}${id}`} target="_blank" rel="noreferrer" className="mx-2">
              <FontAwesomeIcon icon={icon} className="w-6 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100" />
            </a>
          )
        );
      })}
    </div>
  );
}
