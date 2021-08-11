import React from 'react';
import './MemoryCard.css';


class MemoryCard extends React.Component {
    
    constructor() {
        super();
        this.state = {isFlipped: false};
    }
    clickHandler  = () => {
        this.setState(
            {isFlipped: !this.state.isFlipped}

        )
    }
    
    
    render() {
        let innerClass="MemoryCard__inner"
        if(this.state.isFlipped){
            innerClass += "flipped";
        }
        return (
            <div className="MemoryCard" onClick= {this.clickHandler}>
                <div className={innerClass}>
                    <div className="MemoryCard__back">
                        <img src="https://www.digitalcrafts.com/img/logo-wrench-white.png" alt="DigitalCraft logo" />
                    </div>
                    <div className="MemoryCard__front">
                        ∆
                    </div>
                </div>
            </div>
        );
    }
}

export default MemoryCard;



