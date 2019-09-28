import * as db from '../utils/_DATA'

export function getInitialData(){
  return Promise.all([db._getUsers(), db._getQuestions()])
    .then(([users, questions]) => ({
        users,
        questions
      })
    )
}