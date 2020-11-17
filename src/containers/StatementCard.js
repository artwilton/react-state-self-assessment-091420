import React from 'react';
import Image from '../components/image';
import Statement from "../components/statement";
import { yes, no } from '../objects'

class StatementCard extends React.Component {

    state = {
        clicked: false,
        statement: no["no-statement"],
        src: no["no-image"]
    }

    clickHandler = () => {
        this.setState((prevState) => ({clicked: !prevState.clicked}), this.toggleYesNo)
        
    }

    toggleYesNo = () => {
        if (!!this.state.clicked) {
            this.setState({statement: yes["yes-statement"], src: yes["yes-image"]})
        } else {
            this.setState({statement: no["no-statement"], src: no["no-image"]})
        }
    }

    render() {

        return (
            <div onClick={this.clickHandler}>
                    <Statement statement={this.state.statement}/>
                    <Image src={this.state.src}/>   
            </div>
        )
    }

}

export default StatementCard;