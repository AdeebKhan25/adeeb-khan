import React from "react";

const Card = ({ heading, content, imgSrc, tags, isOnline, git, access }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl border border-gray-300 flex flex-col h-full">
      <div className="p-4 flex-grow">
        <img
          src={imgSrc}
          alt={heading}
          className="h-full w-full border border-gray-300"
        />
      </div>
      <div className="p-4 flex-grow">
        <p className="mb-2 font-medium text-2xl">{heading}</p>
        <p>{content}</p>
      </div>
      <div className="mt-auto px-4 py-2 text-xs flex flex-wrap">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="mr-2 bg-neutral-100 text-black rounded-lg p-2"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="px-4 pt-2 pb-4 mt-auto">
        <a href={git} target="_blank" rel="noopener noreferrer">
          <button className="mr-4 inline-flex items-center gap-1.5 bg-black text-white text-sm py-1 px-2 border border-black rounded-full font-medium tracking-tight hover:bg-neutral-800 transition-colors">
            <span>Github Repo</span>
            <svg
              className="w-4 h-4 fill-current text-white"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
          </button>
        </a>
        {isOnline && (
          <a href={access} target="_blank" rel="noopener noreferrer">
            <button className="mr-4 bg-black text-white text-sm py-1 px-2 border border-black rounded-full font-medium tracking-tight">
              Access
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
