import React from 'react'

const Dashboard = (props) => {
    console.log("Dashboard", props)
    return (
        <div>
            <div className="button-container">
                <button
                    name="ball"
                    onClick={() => props.add_ball()}
                    >Ball</button>
                <button onClick={() => props.add_strike()}>Strike</button>
                <button onClick={() => props.add_foul()}>Foul</button>
                <button onClick={() => props.add_hit()}>Hit</button>
            </div>
        </div>
    )
}

export default Dashboard;