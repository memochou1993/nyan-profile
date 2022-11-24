import React, {
  useState,
} from 'react';
import Divider from './Divider';
import Heading from './Heading';
import LoadMoreButton from './LoadMoreButton';
import ProjectItem from './ProjectItem';
import config from '../assets/config.json';

const {
  title,
  limit,
  items,
} = config.components.projectList;

export default function ProjectList() {
  const [page, setPage] = useState(1);
  return (
    <>
      <Divider anchor={title} />
      <Heading text={title} />
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-12">
        {items.map(({
          name,
          link,
          image,
          tags,
          action,
        }, i) => (
          i < limit * page && (
            <div key={name} className="flex justify-center">
              <ProjectItem
                name={name}
                link={link}
                image={image}
                tags={tags}
                action={action}
              />
            </div>
          )
        ))}
      </div>
      {page < items.length / limit && (
        <div className="flex justify-center mt-12">
          <LoadMoreButton onClick={() => setPage(page + 1)} />
        </div>
      )}
    </>
  );
}
