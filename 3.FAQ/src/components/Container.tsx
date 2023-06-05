import Question from './Question'
import '../style/Container.css'

const Container = () => {
  return <>
    <h1>FAQ section</h1>
    <div className="container">
      <h2>Frequently asked Questions</h2>
      <div className="question-block">
        {questionList.map((question) => (
        <Question key={question.id} question={question} />
        ))}
      </div>
    </div>
  
  </> 
}

interface IQuestion {
  id: number,
  title: string,
  info: string
}

const questionList: IQuestion[] = [
  {
    id: 1,
    title: 'What are you´re opening hours?',
    info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: 2,
    title: 'What different payment options do you offer?',
    info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    id: 3,
    title: 'How can I contact you?',
    info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
]

export default Container;