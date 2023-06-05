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

interface IQuestions {
  id: number,
  title: string,
  info: string
}

const questionList: IQuestions[] = [
  {
    id: 1,
    title: 'What are you´re opening hours?',
    info:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.'
  },
  {
    id: 2,
    title: 'What different payment options do you offer?',
    info:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.'
  },
  {
    id: 3,
    title: 'How can I contact you?',
    info:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.'
  }
]

export default Container;