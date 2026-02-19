import { useState, useEffect, useCallback } from 'react';
import styles from './ContrastView.module.css';

function randomTense() {
  return Math.random() > 0.5 ? 'PRETERITE' : 'IMPERFECT';
}

export default function ContrastView({ exercises, onResult }) {
  const [idx, setIdx] = useState(() => Math.floor(Math.random() * exercises.length));
  const [selected, setSelected] = useState(null); // 'A' | 'B'
  const [showFeedback, setShowFeedback] = useState(false);
  // Re-randomized on every new exercise
  const [targetTense, setTargetTense] = useState(randomTense);

  const exercise = exercises[idx];
  if (!exercise) return null;

  const correctChoice = exercise.tenseA === targetTense ? 'A' : 'B';
  const targetDescription = targetTense === 'IMPERFECT' ? exercise.promptA : exercise.promptB;
  const correctSentence = correctChoice === 'A' ? exercise.sentenceA : exercise.sentenceB;
  const correctPrompt = correctChoice === 'A' ? exercise.promptA : exercise.promptB;

  const handleSelect = (choice) => {
    if (showFeedback) return;
    setSelected(choice);
    setShowFeedback(true);
    onResult(choice === correctChoice);
  };

  const handleNext = useCallback(() => {
    setSelected(null);
    setShowFeedback(false);
    setTargetTense(randomTense());
    setIdx(i => (i + 1) % exercises.length);
  }, [exercises.length]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        if (showFeedback) handleNext();
      }
      if (!showFeedback) {
        if (e.key === '1') handleSelect('A');
        if (e.key === '2') handleSelect('B');
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [showFeedback, handleNext]);

  const isCorrect = selected === correctChoice;

  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <h2 className={styles.title}>Contrast Mode</h2>
        <p className={styles.subtitle}>
          Same verb, different tense — different meaning. Which sentence best matches the English below?
        </p>
      </div>

      <div className={styles.target}>
        <span className={styles.targetLabel}>Which Spanish sentence means…</span>
        <p className={styles.targetText}>"{targetDescription}"</p>
      </div>

      <div className={styles.choices}>
        {['A', 'B'].map((choice) => {
          const sentence = choice === 'A' ? exercise.sentenceA : exercise.sentenceB;
          const prompt = choice === 'A' ? exercise.promptA : exercise.promptB;
          const isSelected = selected === choice;
          const isTheCorrect = correctChoice === choice;

          let choiceClass = styles.choice;
          if (showFeedback) {
            choiceClass += ' ' + styles.disabled;
            if (isSelected && isTheCorrect) choiceClass += ' ' + styles.right;
            else if (isSelected && !isTheCorrect) choiceClass += ' ' + styles.wrong;
            else if (!isSelected && isTheCorrect) choiceClass += ' ' + styles.reveal;
          }

          return (
            <button
              key={choice}
              className={choiceClass}
              onClick={() => handleSelect(choice)}
              disabled={showFeedback}
            >
              <span className={styles.choiceKey}>[{choice === 'A' ? 1 : 2}]</span>
              <div className={styles.choiceContent}>
                <span className={styles.choiceLang}>ES</span>
                <span className={styles.choiceText}>{sentence}</span>
                {showFeedback && (
                  <span className={styles.choiceSub}>{prompt}</span>
                )}
              </div>
              {showFeedback && isTheCorrect && (
                <span className={styles.correctBadge}>✓ correct</span>
              )}
            </button>
          );
        })}
      </div>

      {showFeedback && (
        <div className={`${styles.feedback} ${isCorrect ? styles.feedbackOk : styles.feedbackErr}`}>
          <p className={styles.feedbackResult}>
            {isCorrect ? '✓ Correct!' : '✗ Not quite.'}
          </p>

          {/* Show correct answer explicitly when wrong */}
          {!isCorrect && (
            <div className={styles.correctAnswer}>
              <span className={styles.correctAnswerLabel}>Correct answer:</span>
              <p className={styles.correctAnswerSentence}>"{correctSentence}"</p>
              <p className={styles.correctAnswerMeaning}>{correctPrompt}</p>
            </div>
          )}

          <div className={styles.verbTag}>
            <span className={styles.verbLabel}>Verb: </span>
            <strong>{exercise.verb}</strong>
          </div>
          <p className={styles.why}>{exercise.why}</p>
          <button className={styles.nextBtn} onClick={handleNext}>
            Next contrast → <span className={styles.enterHint}>[Enter]</span>
          </button>
        </div>
      )}

      {!showFeedback && (
        <p className={styles.hint}>Press [1] or [2] to choose</p>
      )}
    </div>
  );
}
