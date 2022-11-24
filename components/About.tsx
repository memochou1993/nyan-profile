import React from 'react';
import Divider from './Divider';
import Heading from './Heading';
import config from '../assets/config.json';

const {
  title,
} = config.components.about;

export default function About() {
  return (
    <>
      <Divider anchor={title} />
      <Heading text={title} />
      <div className="dark:text-slate-300">
        <p className="my-4 text-2xl font-medium">Hi there 🙋</p>
        <p className="my-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="my-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className="my-4">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </>
  );
}
