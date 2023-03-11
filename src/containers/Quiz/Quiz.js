import React, { Component } from "react";
import './Quiz'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
    state = {
        quiz: []
    }
    render() {
        return (
            <div>
                <h1>QUIZZ</h1>
                <div>
                    <ActiveQuiz />
                </div>
            </div>
        )
    }
}

export default Quiz;