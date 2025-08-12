"use client";

import React, { useEffect, useRef, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript"; // add more languages as needed
import "prismjs/themes/prism-tomorrow.css";

interface CodeBlockProps {
  language: string;
  code: string;
  showCopy?: boolean;
  showLines?: boolean;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  language,
  code,
  showCopy = true,
  showLines = true,
}) => {
  const codeRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code, language]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const lines = code.split("\n");

  return (
    <div className="code-block bg-gray-900 text-white rounded p-4 font-mono">
      <div className="flex justify-between mb-2">
        <span className="uppercase text-xs">{language}</span>
        {showCopy && (
          <button
            onClick={handleCopy}
            className="text-sm px-2 py-1 bg-gray-700 rounded hover:bg-gray-600"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        )}
      </div>

      <pre className={`language-${language} flex overflow-auto`}>
        {showLines && (
          <code
            aria-hidden="true"
            className="select-none text-gray-500 pr-4 border-r border-gray-700 text-right"
            style={{ userSelect: "none" }}
          >
            {lines.map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </code>
        )}
        <code ref={codeRef} className={`language-${language} flex-1 whitespace-pre`}>
          {code}
        </code>
      </pre>
    </div>
  );
};
