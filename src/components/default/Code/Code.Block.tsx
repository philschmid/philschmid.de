import React, {useState} from 'react';
import Highlight, {defaultProps} from 'prism-react-renderer';
import './codeTheme.css';

export default ({codeString, language, metastring, ...props}) => {
  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={undefined}
    >
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={className} style={style}>
          <Copy toCopy={codeString} />
          {tokens.map((line, i) => (
            <div {...getLineProps({line, key: i})}>
              <span>{i + 1} |</span>
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
    <button onClick={copyToClipboardOnClick} data-a11y="false">
      {hasCopied ? (
        <>
          {/* Copied <Icons.Copied fill="#6f7177" /> */}
          <div>copied</div>
        </>
      ) : (
        <>
          {/* Copy <Icons.Copy fill="#6f7177" /> */}
          <div>copy</div>
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
