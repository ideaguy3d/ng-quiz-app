<?php
/**
 * Created by PhpStorm.
 * User: Julius Alvarado
 * Date: 3/19/2017
 * Time: 6:39 PM
 */
/*
[
  {
    "question": "What does MVC stand for?",
    "answer": [
      {"id": 0, "text": "Model View Controller"},
      {"id": 1, "text": "Mike Victor Charles"},
      {"id": 2, "text": "Micro View Code"},
      {"id": 3, "text": "MySQL Variables Count"}
    ],
    "correct": 0
  }
]
*/

class QuizModel
{
    public $question;
    public $answer;
    public $correct;

    public function __construct($question = '', $answer = array(), $correct = 0) {
        $this->question = $question;
        $this->answer = $answer;
        $this->correct = $correct;
    }
}