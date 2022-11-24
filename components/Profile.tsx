import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBuilding,
  faEnvelope,
  faMapMarkerAlt,
  faLink,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faFacebook,
  faLinkedin,
  faInstagram,
  faTelegram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import config from '../assets/config.json';

const links = [
  {
    icon: faGithub,
    enabled: !!config.socialLinks.github.id,
    url: `https://github.com/${config.socialLinks.github.id}`,
  },
  {
    icon: faFacebook,
    enabled: !!config.socialLinks.facebook.id,
    url: `https://www.facebook.com/${config.socialLinks.facebook.id}`,
  },
  {
    icon: faLinkedin,
    enabled: !!config.socialLinks.linkedin.id,
    url: `https://linkedin.com/in/${config.socialLinks.linkedin.id}`,
  },
  {
    icon: faInstagram,
    enabled: !!config.socialLinks.instagram.id,
    url: `https://www.instagram.com/${config.socialLinks.instagram.id}`,
  },
  {
    icon: faTelegram,
    enabled: !!config.socialLinks.telegram.id,
    url: `https://telegram.me/${config.socialLinks.telegram.id}`,
  },
  {
    icon: faTwitter,
    enabled: !!config.socialLinks.twitter.id,
    url: `https://twitter.com/${config.socialLinks.twitter.id}`,
  },
];

export default function Profile() {
  return (
    <>
      <div className="flex justify-center mb-8 sm:mb-10 md:mb-12">
        <Image priority alt={config.meta.author} src={config.meta.image} height="1500" width="1500" className="w-32 h-32 rounded-full sm:w-36 sm:h-36 md:w-40 md:h-40" />
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col text-slate-800 dark:text-slate-200">
          <div className="text-4xl font-bold tracking-wider text-center">
            {config.profile.name}
          </div>
          <div className="flex flex-col my-4 text-sm">
            {config.profile.organization && (
              <div className="flex items-center">
                <div>
                  <FontAwesomeIcon icon={faBuilding} className="w-3 mx-2" />
                </div>
                <div>
                  {config.profile.organization}
                </div>
              </div>
            )}
            {config.profile.email && (
              <div className="flex items-center">
                <div>
                  <FontAwesomeIcon icon={faEnvelope} className="w-3 mx-2" />
                </div>
                <div>
                  <a href={`mailto:${config.profile.email}`} target="_blank" rel="noreferrer">
                    {config.profile.email}
                  </a>
                </div>
              </div>
            )}
            {config.profile.location && (
              <div className="flex items-center">
                <div>
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="w-3 mx-2" />
                </div>
                <div>
                  {config.profile.location}
                </div>
              </div>
            )}
            {config.profile.url && (
              <div className="flex items-center">
                <div>
                  <FontAwesomeIcon icon={faLink} className="w-3 mx-2" />
                </div>
                <div>
                  <a href={config.profile.url} target="_blank" rel="noreferrer">
                    {config.profile.url}
                  </a>
                </div>
              </div>
            )}
          </div>
          <div className={`flex items-center ${links.filter(({ enabled }) => enabled).length > 4 ? 'justify-between' : 'justify-evenly'}`}>
            {links.map(({ icon, enabled, url }) => (
              enabled && (
                <a key={url} href={url} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={icon} className="w-6 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100" />
                </a>
              )
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
