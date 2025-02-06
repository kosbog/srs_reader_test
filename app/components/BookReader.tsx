import React from 'react'

interface BookReaderProps {
  title: string;
  content: string[];
}

export const BookReader: React.FC<BookReaderProps> = ({ title, content }) => {
  return (
    <div className="m-auto max-w-900 px-4">
      <h1 className="pb-8 text-3xl dark:text-white">
        {title}
      </h1>
      {content.map((paragraph, index) => (
        <p key={index} className="pb-8 indent-8 text-base tracking-wide md:text-lg">
          {paragraph}
        </p>
      ))}
    </div>
  )
}
