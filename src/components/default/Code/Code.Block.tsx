import React, {useState} from 'react';
import Highlight, {defaultProps} from 'prism-react-renderer';
import './codeTheme.css';

function preToCodeBlock(preProps) {
  if (preProps.children && preProps.children.props && preProps.children.props.mdxType === 'code') {
    const {children: codeString, className = '', ...props} = preProps.children.props;

    const matches = className.match(/language-(?<lang>.*)/);

    return {
      codeString: codeString.trim(),
      className,
      language: matches && matches.groups && matches.groups.lang ? matches.groups.lang : '',
      ...props,
    };
  }
}

export default (preProps) => {
  const props = preToCodeBlock(preProps);
  const {codeString, language, metastring} = props;
  return (
    <Highlight {...defaultProps} code={codeString} language={language} theme={undefined}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={`${className} mb-12 relative`} style={style}>
          <Copy toCopy={codeString} />
          {tokens.map((line, i) => (
            <div {...getLineProps({line, key: i})}>
              <span className="pr-2 opacity-25">{i + 1} </span>
              {line.map((token, key) => (
                <span {...getTokenProps({token, key})} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

function Copy({toCopy}) {
  const [hasCopied, setHasCopied] = useState(false);

  function copyToClipboardOnClick() {
    if (hasCopied) return;

    copyToClipboard(toCopy);
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }

  return (
    <button
      onClick={copyToClipboardOnClick}
      data-a11y="false"
      className="flex text-gray-1 copy-button  hover:text-primary rounded-lg "
    >
      {hasCopied ? (
        <>
          Copied
          <svg className="w-6 h-6 pl-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
            <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
          </svg>
        </>
      ) : (
        <>
          Copy
          <svg
            className="w-6 h-6 pl-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
            />
          </svg>
        </>
      )}
    </button>
  );
}

export function copyToClipboard(toCopy) {
  const el = document.createElement(`textarea`);
  el.value = toCopy;
  el.setAttribute(`readonly`, ``);
  el.style.position = `absolute`;
  el.style.left = `-9999px`;
  document.body.appendChild(el);
  el.select();
  document.execCommand(`copy`);
  document.body.removeChild(el);
}
