import { useState } from 'react';
import { lookupWord } from '../data/dictionary.js';
import styles from './SpanishSentence.module.css';

// Tokenize into: blank+infinitive chunk | words | whitespace/punctuation
function tokenize(text) {
  // Split on: ____ (blank+optional infinitive) | word chars (including accented) | non-word chars
  const re = /(__+\s*\([^)]+\))|(__+)|([a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]+)|([^a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]+)/g;
  const tokens = [];
  let match;
  while ((match = re.exec(text)) !== null) {
    if (match[1]) tokens.push({ type: 'blank_with_inf', raw: match[1] });
    else if (match[2]) tokens.push({ type: 'blank', raw: match[2] });
    else if (match[3]) tokens.push({ type: 'word', raw: match[3] });
    else if (match[4]) tokens.push({ type: 'punct', raw: match[4] });
  }
  return tokens;
}

function WordToken({ raw }) {
  const [visible, setVisible] = useState(false);
  const translation = lookupWord(raw);

  if (!translation) {
    return <span className={styles.word}>{raw}</span>;
  }

  return (
    <span
      className={`${styles.word} ${styles.hasTranslation}`}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {raw}
      {visible && (
        <span className={styles.tooltip}>{translation}</span>
      )}
    </span>
  );
}

export default function SpanishSentence({ text }) {
  const tokens = tokenize(text);

  return (
    <span className={styles.sentence}>
      {tokens.map((token, i) => {
        if (token.type === 'blank_with_inf') {
          // Split into blank and (infinitive)
          const blankMatch = token.raw.match(/(__+)(\s*\([^)]+\))/);
          if (blankMatch) {
            const inf = blankMatch[2].trim().replace(/[()]/g, '');
            const translation = lookupWord(inf);
            return (
              <span key={i}>
                <strong className={styles.blank}>{blankMatch[1]}</strong>
                {' '}
                <em className={styles.infinitive}>
                  ({inf}
                  {translation && <span className={styles.infTranslation}> = {translation}</span>}
                  )
                </em>
              </span>
            );
          }
          return <strong key={i} className={styles.blank}>{token.raw}</strong>;
        }
        if (token.type === 'blank') {
          return <strong key={i} className={styles.blank}>{token.raw}</strong>;
        }
        if (token.type === 'word') {
          return <WordToken key={i} raw={token.raw} />;
        }
        // punct / whitespace
        return <span key={i}>{token.raw}</span>;
      })}
    </span>
  );
}
