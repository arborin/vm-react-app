import React, { Component } from "react";
import './Quiz'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
    state = {
        activeQuestion: 0,
        answerState: null, // { [id]: 'success' 'error'}
        quiz: [
            {
                question: "How are you?",
                answers: [{ text: 'OK', id: 0 }, { text: 'ok', id: 1 }],
                rightAnswerId: 0,
                id: 1
            },
            {
                question: "today is?",
                answers: [{ text: 'Monday', id: 0 }, { text: 'Sunday', id: 1 }],
                rightAnswerId: 1,
                id: 2
            }
        ]
    }

    onAnswerClickHandler = (answerId) => {
        console.log('answer id: ', answerId);

        const question = this.state.quiz[this.state.activeQuestion];

        if (question.id === answerId) {
            this.setState({
                answerState: { [answerId]: 'success' }
            })
            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {

                } else {

                }
                this.setState({
                    answerState: { [answerId]: '' }
                })
                window.clearTimeout(timeout)
            }, 1000);
            console.log("YES!!!")
            this.setState({
                activeQuestion: this.state.activeQuestion + 1
            })
        } else {
            console.log("NO :( ")
            this.setState({
                answerState: { [answerId]: 'error' }
            })

            const timeout = window.setTimeout(() => {
                this.setState({
                    answerState: { [answerId]: '' }
                })
            })

            timeout.clearTimeout()
        }

    }


    isQuizFinished = () => {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    render() {
        return (
            <div>
                <h1>QUIZZ</h1>
                <div>
                    <ActiveQuiz
                        question={this.state.quiz[this.state.activeQuestion].question}
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                        answerState={this.state.answerState}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz;