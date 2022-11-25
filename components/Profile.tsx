import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBuilding,
  faEnvelope,
  faMapMarkerAlt,
  faLink,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faFacebook,
  faLinkedin,
  faInstagram,
  faTelegram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const map: {
  [someStrKeyWhichIsDynamic:string]: {
    icon: IconDefinition,
    link: string,
  },
} = {
  github: {
    icon: faGithub,
    link: 'https://github.com',
  },
  facebook: {
    icon: faFacebook,
    link: 'https://www.facebook.com',
  },
  linkedin: {
    icon: faLinkedin,
    link: 'https://linkedin.com/in',
  },
  instagram: {
    icon: faInstagram,
    link: 'https://www.instagram.com',
  },
  telegram: {
    icon: faTelegram,
    link: 'https://telegram.me',
  },
  twitter: {
    icon: faTwitter,
    link: 'https://twitter.com',
  },
};

interface Props {
  enabled: boolean;
  avatar: string;
  name: string;
  organization: string;
  location: string;
  email: string;
  url: string;
  socialLinks: {
    [someStrKeyWhichIsDynamic:string]: {
      id: string,
    },
  };
}

export default function Profile({
  enabled,
  avatar,
  name,
  organization,
  location,
  email,
  url,
  socialLinks,
}: Props) {
  return enabled ? (
    <>
      <div className="flex justify-center mb-8 sm:mb-10 md:mb-12">
        <Image priority alt={name} src={avatar} height="1500" width="1500" className="w-32 h-32 rounded-full sm:w-36 sm:h-36 md:w-40 md:h-40" />
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col text-slate-800 dark:text-slate-200">
          <div className="text-4xl font-bold tracking-wider text-center">
            {name}
          </div>
          <div className="flex flex-col my-4 text-sm">
            {organization && (
              <div className="flex items-center">
                <div>
                  <FontAwesomeIcon icon={faBuilding} className="w-3 mx-2" />
                </div>
                <div>
                  {organization}
                </div>
              </div>
            )}
            {location && (
              <div className="flex items-center">
                <div>
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="w-3 mx-2" />
                </div>
                <div>
                  {location}
                </div>
              </div>
            )}
            {email && (
              <div className="flex items-center">
                <div>
                  <FontAwesomeIcon icon={faEnvelope} className="w-3 mx-2" />
                </div>
                <div>
                  <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
                    {email}
                  </a>
                </div>
              </div>
            )}
            {url && (
              <div className="flex items-center">
                <div>
                  <FontAwesomeIcon icon={faLink} className="w-3 mx-2" />
                </div>
                <div>
                  <a href={url} target="_blank" rel="noreferrer">
                    {url}
                  </a>
                </div>
              </div>
            )}
          </div>
          <div className={`flex items-center ${Object.values(socialLinks).filter(({ id }) => id).length > 4 ? 'justify-between' : 'justify-evenly'}`}>
            {Object.keys(socialLinks).map((type) => {
              const { id } = socialLinks[type];
              const { icon, link } = map[type];
              return (
                id && (
                  <a key={type} href={`${link}/${id}`} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={icon} className="w-6 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100" />
                  </a>
                )
              );
            })}
          </div>
        </div>
      </div>
    </>
  ) : <template />;
}
