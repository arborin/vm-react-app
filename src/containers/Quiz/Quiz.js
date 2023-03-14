import React, { Component } from "react";
import './Quiz'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
    state = {
        quiz: [
            {
                question: "How are you?",
                answers: [{ text: 'OK', id: 0 }, { text: 'ok', id: 1 }],
                rightAnswerId: 0
            }
        ]
    }

    onAnswerClickHandler = (answerId) => {
        console.log('answer id: ', answerId);
    }

    render() {
        return (
            <div>
                <h1>QUIZZ</h1>
                <div>
                    <ActiveQuiz
                        question={this.state.quiz[0].question}
                        answers={this.state.quiz[0].answers}
                        onAnswerClick={this.onAnswerClickHandler} />
                </div>
            </div>
        )
    }
}

export default Quiz;