import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise-list.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
 
function App() {
    return (
        <Router>
          <div className="container">
            <Navbar />
            <br />
          <Routes>
            <Route path="/" exact component={ ExercisesList } />
            <Route path="/edit:id" exact component={ EditExercise } />
            <Route path="/create" exact component={ CreateExercise } />
            <Route path="/user" exact component={ CreateUser } />
          </Routes>
          </div>
        </Router>
    );
}
 
export default App;
