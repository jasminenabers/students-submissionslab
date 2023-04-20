"use strict";
// 1.
const submissions = [
  { name: "Jane", score: 95, date: "2020-01-24", passed: true },
  { name: "Joe", score: 77, date: "2018-05-14", passed: true },
  { name: "Jack", score: 59, date: "2019-07-05", passed: false },
  { name: "Jill", score: 88, date: "2020-04-22", passed: true },
];

const oldSubmissions = [
  { name: "Andrea", score: 20, date: "2018-01-24", passed: false },
];

// 2.
const addSubmission = (array, newName, newScore, newDate) => {
  // push to "placeholder array (parameter)"
  // dynamic destination for whatever we push
  let newPassed = null;
  if (newScore >= 60) {
    newPassed = true;
  } else {
    newPassed = false;
  }
  const newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newPassed,
  };
  array.push(newSubmission);
};

addSubmission(oldSubmissions, "James", 60, "2018-01-24");
console.log(oldSubmissions);
addSubmission(submissions, "James", 90, "2018-01-24");
console.log(submissions);

const addSubmissionV2 = (array, name, score, date) => {
  const newSubmission = {
    // name: name,
    // shorthand for object key/value pairs: we can only do this bc the key (left of :) is spelled the same as the variable (right of the :)
    name,
    // score: score,
    score,
    // date: date,
    date,
    passed: score >= 60,
  };
  array.push(newSubmission);
};

const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

deleteSubmissionByIndex(oldSubmissions, 0);
console.log(oldSubmissions);
deleteSubmissionByIndex(submissions, 2);
console.log(submissions);



// 7. "The superlative" (the most of something) -deck of cards
const findLowestScore =(array) => {
    // 1.assign lowestScore to first element
    let lowestScoreHolder = array[0];
     // array[0] is an object
    array.forEach((submissionFromArray) => {
        // 3a. check if there's a lower score
        //3b. If there is: hand over the ttitle of lowest score
        if(submissionFromArray.score < lowestScoreHolder.score) {
            lowestScoreHolder =submissionFromArray;

        }
        return lowestScoreHolder;
    });

};

console.log(findLowestScore(submissions));





