import "../css/Welcome.css"
function Welcome() {
        return (
            <div className="welcome-container">
                <div className="header-container">
                    <h1 className="welcome-header">Connor Gunter: FullStack Developer</h1>
                </div>
                <div className="button-container">
                    <button>GitHub</button>
                    <button>Resume</button>
                </div>
            </div>
        );
    }

export default Welcome