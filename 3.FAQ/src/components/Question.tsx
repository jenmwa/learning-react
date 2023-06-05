import { useState } from "react";

interface QuestionProps {
  question: { id: number; title: string, info: string}; 
}

function Question({ question }: QuestionProps) {
    const [isOpen, setOpen] = useState(false);
  
    return (
      <section>
        <div className={isOpen ? 'open' : 'closed'}>
          <h4>{question.title}</h4>
          <button
            tabIndex={0}
            onClick={() => setOpen(!isOpen)}
          >
          {isOpen ? '-' : '+'}</button>
        </div>
        {isOpen && <p>{question.info}</p>}
      </section>
    );
  }

export default Question;