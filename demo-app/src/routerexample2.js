import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet,
    useParams,
} from "react-router-dom";

// add topic function
function Topic() {
    let { topicId } = useParams();
    return (
        <li key={topicId}>
            <Link to={`/topics/${topicId}`}>
                <h3>Requested topic ID: {topicId}</h3>
            </Link>
        </li>
    );
}

function Topics() {
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <Outlet />
            </ul>
        </div>
    );
}

function Home() {
    return <h2>Home</h2>;
}
function About() {
    return <h2>About</h2>;
}
function Select() {
    return <h3>Please select a topic.</h3>;
}

export default function App() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/topics">Topics</Link>
                    </li>
                </ul>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="topics" element={<Topics />}>
                        <Route path="/" element={<Select />} />
                        <Route path=":topicId" element={<Topic />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}
