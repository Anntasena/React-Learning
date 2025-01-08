import { useQuestions } from "../context/QuestionContext";

function Progress() {
  const { index, numQuestions, points, maxPossiblePoints, answer } =
    useQuestions();

  return (
    <div className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />

      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </div>
  );
}

export default Progress;
