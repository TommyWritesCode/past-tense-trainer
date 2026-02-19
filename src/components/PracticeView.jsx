import { useEffect, useRef, useCallback } from 'react';
import HintBox from './HintBox.jsx';
import FeedbackBox from './FeedbackBox.jsx';
import SpanishSentence from './SpanishSentence.jsx';
import styles from './PracticeView.module.css';

export default function PracticeView({
  exercise, phase, selectedTense, userInput, feedback, showHint,
  onClassify, onInputChange, onSubmit, onNext, onShowHint,
}) {
  const inputRef = useRef(null);
  // Guard: after submitting, ignore Enter/Space for 400ms so the same
  // keypress doesn't immediately also fire onNext and wipe the feedback.
  const justSubmittedRef = useRef(false);

  useEffect(() => {
    if (phase === 'conjugate' && inputRef.current) {
      inputRef.current.focus();
    }
  }, [phase]);

  // When phase transitions TO feedback, arm the cooldown
  const prevPhaseRef = useRef(phase);
  useEffect(() => {
    if (prevPhaseRef.current === 'conjugate' && phase === 'feedback') {
      justSubmittedRef.current = true;
      setTimeout(() => { justSubmittedRef.current = false; }, 400);
    }
    prevPhaseRef.current = phase;
  }, [phase]);

  const handleKeyDown = useCallback((e) => {
    if (phase === 'classify') {
      if (e.key === '1') onClassify('PRETERITE');
      if (e.key === '2') onClassify('IMPERFECT');
    } else if (phase === 'conjugate') {
      if (e.key === 'Enter') onSubmit();
    } else if (phase === 'feedback') {
      if ((e.key === 'Enter' || e.key === ' ') && !justSubmittedRef.current) {
        onNext();
      }
    }
  }, [phase, onClassify, onSubmit, onNext]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (!exercise) return <div className={styles.loading}>Loading...</div>;

  const isTTSAvailable = 'speechSynthesis' in window;
  const speakSentence = () => {
    if (!isTTSAvailable) return;
    const utterance = new SpeechSynthesisUtterance(exercise.contextText);
    utterance.lang = 'es-ES';
    utterance.rate = 0.85;
    speechSynthesis.speak(utterance);
  };

  return (
    <div className={styles.container}>
      {/* Prompt Zone */}
      <div className={styles.promptZone}>
        <div className={styles.promptMeta}>
          <span className={styles.subject}>
            Subject: <strong>{exercise.subject}</strong>
          </span>
          <span className={styles.verb}>
            Verb: <strong>{exercise.verb}</strong>
          </span>
          {isTTSAvailable && (
            <button className={styles.ttsBtn} onClick={speakSentence} title="Listen (TTS)">
              🔊
            </button>
          )}
        </div>
        <p className={styles.sentenceWrapper}>
          <SpanishSentence text={exercise.contextText} />
        </p>
        <p className={styles.hoverHint}>Hover any word for English</p>
      </div>

      {/* Decision Zone */}
      <div className={styles.decisionZone}>
        <p className={styles.decisionLabel}>
          {phase === 'classify'
            ? 'Step 1 — What type of past action is the blank?'
            : phase === 'feedback'
            ? 'Tense Classification:'
            : 'You chose:'}
        </p>
        <div className={styles.decisionBtns}>
          <button
            className={`${styles.decisionBtn} ${styles.pretBtn}
              ${selectedTense === 'PRETERITE' ? styles.selected : ''}
              ${phase === 'feedback' && exercise.expectedTense === 'PRETERITE' ? styles.correct : ''}
              ${phase === 'feedback' && selectedTense === 'PRETERITE' && exercise.expectedTense !== 'PRETERITE' ? styles.wrong : ''}
              ${phase !== 'classify' ? styles.disabled : ''}
            `}
            onClick={() => phase === 'classify' && onClassify('PRETERITE')}
            disabled={phase !== 'classify'}
          >
            <span className={styles.btnKey}>[1]</span>
            <span className={styles.btnIcon}>⚡</span>
            <span className={styles.btnTitle}>EVENT</span>
            <span className={styles.btnSub}>Preterite · completed · point in time</span>
          </button>

          <button
            className={`${styles.decisionBtn} ${styles.impBtn}
              ${selectedTense === 'IMPERFECT' ? styles.selected : ''}
              ${phase === 'feedback' && exercise.expectedTense === 'IMPERFECT' ? styles.correct : ''}
              ${phase === 'feedback' && selectedTense === 'IMPERFECT' && exercise.expectedTense !== 'IMPERFECT' ? styles.wrong : ''}
              ${phase !== 'classify' ? styles.disabled : ''}
            `}
            onClick={() => phase === 'classify' && onClassify('IMPERFECT')}
            disabled={phase !== 'classify'}
          >
            <span className={styles.btnKey}>[2]</span>
            <span className={styles.btnIcon}>🌊</span>
            <span className={styles.btnTitle}>BACKGROUND</span>
            <span className={styles.btnSub}>Imperfect · ongoing · habitual · description</span>
          </button>
        </div>
      </div>

      {/* Hint */}
      {phase === 'conjugate' && !showHint && (
        <button className={styles.hintToggle} onClick={onShowHint}>
          Show hint (pattern reminder only)
        </button>
      )}
      {showHint && phase === 'conjugate' && (
        <HintBox exercise={exercise} />
      )}

      {/* Answer Zone */}
      <div className={`${styles.answerZone} ${phase === 'classify' ? styles.locked : ''}`}>
        <p className={styles.answerLabel}>
          Step 2 — Type the conjugated form:
          {phase === 'classify' && <span className={styles.lockHint}> (choose EVENT or BACKGROUND first)</span>}
        </p>
        <div className={styles.inputRow}>
          <input
            ref={inputRef}
            className={`${styles.input} ${
              phase === 'feedback'
                ? feedback?.conjugationCorrect
                  ? styles.inputCorrect
                  : styles.inputWrong
                : ''
            }`}
            type="text"
            value={userInput}
            onChange={e => onInputChange(e.target.value)}
            // No onKeyDown here — window listener is the single source of truth
            placeholder={phase === 'classify' ? '—' : `Conjugate: ${exercise.verb} (${exercise.subject})`}
            disabled={phase !== 'conjugate'}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
          />
          {phase === 'conjugate' && (
            <button className={styles.submitBtn} onClick={onSubmit}>
              Check ↵
            </button>
          )}
        </div>
      </div>

      {/* Feedback Zone */}
      {phase === 'feedback' && feedback && (
        <FeedbackBox
          exercise={exercise}
          selectedTense={selectedTense}
          userInput={userInput}
          feedback={feedback}
          onNext={onNext}
        />
      )}

      {/* Keyboard shortcuts reminder */}
      <div className={styles.shortcuts}>
        {phase === 'classify' && <span>[1] Event · [2] Background</span>}
        {phase === 'conjugate' && <span>[Enter] to submit</span>}
        {phase === 'feedback' && <span>[Enter] or [Space] for next</span>}
      </div>
    </div>
  );
}
