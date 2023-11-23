//JSON data of questions.
const questionSet = require("./questionStore.json");

class PerfectSum {
  constructor() {
    this.ans = new Set();
  }

  //Calculating correct marks distribution from the JSON data.
  solve(idx, arr, n, sum, st) {
    if (idx >= n || sum < 0) {
      return;
    }

    if (arr[idx].marks == sum) {
      st.add(arr[idx]);
      this.ans.add(new Set(st));
      return;
    }

    if (sum === 0) {
      this.ans.add(new Set(st));
      return;
    }

    this.solve(idx + 1, arr, n, sum, new Set(st));

    if (arr[idx].marks < sum) {
      st.add(arr[idx]);
      this.solve(idx + 1, arr, n, sum - arr[idx].marks, new Set(st));
    }

    return;
  }

  /** PerfectSum method -
   * @param {array of particular difficulty tag eg: "Easy", "Medium", "Hard"} arr
   * @param {length of the array } n
   * @param {target marks to be calculated } sum
   */
  perfectSum(arr, n, sum) {
    const st = new Set();
    this.solve(0, arr, n, sum, st);
    return this.ans;
  }
}

/** solve - method
 * @param {array of particular difficulty tag eg: "Easy", "Medium", "Hard"} arr
 * @param {target marks to be calculated } sum
 */
const solve = (arr, sum) => {
  const perfectSumObj = new PerfectSum();
  const n = arr.length;

  const result = perfectSumObj.perfectSum(arr, n, sum);

  if (!result.size) console.log("error");
  return result;
};

/** setOfDifficulties  - method
 * @param {array of particular difficulty tag eg: "Easy", "Medium", "Hard"} arr
 */
const setOfDifficulties = (arr) => {
  const easySet = arr.filter((question) => question.difficulty === "Easy");
  const mediumSet = arr.filter((question) => question.difficulty === "Medium");
  const hardSet = arr.filter((question) => question.difficulty === "Hard");

  return { easySet, mediumSet, hardSet };
};

/** shuffleArray  - method
 * @param {merged array of different difficulties} array
 */
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

/** shuffleArray  - method
 * @param {JSON data of questions } questions
 * @param {percent of marks of easy question} easyPercentage
 * @param {percent of marks of medium question} mediumPercentage
 * @param {percent of marks of hard question} hardPercentage
 */
const getQuestions = (
  questions,
  easyPercentage,
  mediumPercentage,
  hardPercentage
) => {
  const { easySet, mediumSet, hardSet } = setOfDifficulties(questions);

  let easyArr = solve(easySet, easyPercentage);

  if (!easyArr.size) {
    return "Add some more questions, marks for 'difficulty level ' : easy can't be distributed";
  }

  const easyArrayFromSet = Array.from(easyArr);

  // Generate a random index within the range of the selected easy Questions
  const randomIndex = Math.floor(Math.random() * easyArrayFromSet.length);

  // Return the randomly selected element
  const easyQueSets = easyArrayFromSet[randomIndex];

  let mediumArr = solve(mediumSet, mediumPercentage);

  const mediumArrayFromSet = Array.from(mediumArr);

  // Generate a random index within the range of the selected easy Questions
  const mediumRandomIdx = Math.floor(Math.random() * mediumArrayFromSet.length);

  // Return the randomly selected element
  const mediumQueSets = mediumArrayFromSet[mediumRandomIdx];

  let hardArr = solve(hardSet, hardPercentage);

  const hardArrayFromSet = Array.from(hardArr);

  // Generate a random index within the range of the selected easy Questions
  const hardRandomIdx = Math.floor(Math.random() * hardArrayFromSet.length);

  // Return the randomly selected element
  const hardQueSets = Array.from(hardArrayFromSet[hardRandomIdx]);

  const mergedArray = [...easyQueSets, ...mediumQueSets, ...hardQueSets];

  const finalArrOfQuestions = shuffleArray(mergedArray);

  return finalArrOfQuestions;
};

// const questions = getQuestions(questionSet);

module.exports = (easyPercentage, mediumPercentage, hardPercentage) => {
  return getQuestions(
    questionSet,
    easyPercentage,
    mediumPercentage,
    hardPercentage
  );
};
