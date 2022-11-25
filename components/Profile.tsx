import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBuilding,
  faEnvelope,
  faMapMarkerAlt,
  faLink,
} from '@fortawesome/free-solid-svg-icons';
import SocialLinks from './SocialLinks';

interface ProfileProps {
  enabled: boolean;
  avatar: string;
  name: string;
  organization: string;
  location: string;
  email: string;
  url: string;
  socialLinks: any;
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
}: ProfileProps) {
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
          <SocialLinks items={socialLinks} />
        </div>
      </div>
    </>
  ) : <template />;
}
