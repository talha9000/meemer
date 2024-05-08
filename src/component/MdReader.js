// MdReader.js
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const MdReader = ({ content }) => {
  // Function to render code blocks with syntax highlighting
 
  const components = {
    code: ({ node, inline, className, children, ...props }) => {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <SyntaxHighlighter style={vscDarkPlus} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
      ) : (
        <code className={className} {...props} />
      );
    },
    // Custom renderer for bullet points
    listItem: ({ children }) => <li>{children}</li>,
    // Custom renderer for unordered list
    list: ({ children, ordered }) => {
      if (ordered) {
        return <ol>{children}</ol>;
      } else {
        return <ul>{children}</ul>;
      }
    }
  };

  return (
    <div className="markdown-body">
      {/* Pass components as props to ReactMarkdown */}
      <ReactMarkdown components={components} children={content} />
    </div>
  );
};

export default MdReader;
