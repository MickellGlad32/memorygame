import React from 'react';
import './MemoryCard.css';


class MemoryCard extends React.Component {
    

    
    render() {
        let innerClass="MemoryCard__inner"
        if(this.props.isFlipped){
            innerClass += " flipped";
        }
        return (
            <div className="MemoryCard"  onClick= {this.props.clickHandler}>
                <div className={innerClass}>
                    <div className="MemoryCard__back">
                        <img src="https://www.digitalcrafts.com/img/logo-wrench-white.png" alt="DigitalCraft logo" />
                    </div>
                    <div className="MemoryCard__front">
                        {this.props.symbol}
                    </div>
                </div>
            </div>
        );
    }
}

export default MemoryCard;



