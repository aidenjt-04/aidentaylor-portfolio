import "../styles/CodeWindow.css";

const lines = [
    { text: "// MySkills.js", color: "#d23fffff", delay: 0 },
    { text: "import { HTML/CSS, Javascript, Java, Python, C/C++, Lisp, Prolog, Bash } from './Languages';", color: "#61afef", delay: 1.8 },
    { text: "import { React, Node.js, Express.js, Python Django, Python Flask } from './Frameworks';", color: "#61afef", delay: 3.6 },
    { text: "import { MySQL, PostgreSQL, MongoDB } from './Databases';", color: "#61afef", delay: 5.4 },
    { text: "import { Git, Github, Google Suite, Jira, Figma, Wireshark, Ubuntu } from './Tools';", color: "#61afef", delay: 7.2 },
    { text: "import { Intermediate Spanish, Problem-Solving, Creativity, Leadership, Adaptability } from './SoftSkills';", color: "#61afef", delay: 9 },
    { text: "export default MySkills = createStack('Everything you're looking for');", color: "#e5c07b", delay: 10.8 },
];

function CodeWindow() {
    return (
        <div className="vscode-window">
            <div className="vscode-top-bar">
                <div className="circle red"></div>
                <div className="circle yellow"></div>
                <div className="circle green"></div>
            </div>

            <div className="vscode-code-area">
                {lines.map((line, idx) => (
                <div
                    key={idx}
                    className="typing"
                    style={{
                    animationDelay: `${line.delay}s`,
                    color: line.color,
                    }}
                >
                    {line.text}
                </div>
                ))}
            </div>
        </div>
    );
}

export default CodeWindow;