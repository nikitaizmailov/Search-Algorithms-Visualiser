import React, { Component } from 'react';
import "./arrayStyles.css"

import { getBinarySearchAnimations } from "../searchAlgos/binarySearch";
import { getLinearSearchAnimations } from '../searchAlgos/linearSearch';
import { getJumpSearchAnimations } from '../searchAlgos/jumpSearch';

const HIGHLIGHT_COLOR = 'DeepSkyBlue';
const MIDDLE_NUM_COLOR = "red";
const ANIMATION_SPEED = 500;

class ArrayVisualier extends Component {

    constructor(props) {
        super(props);
    
        this.state = { 
            arrayOfNums: [],
            numberOfElements: 10,
            numberToFind: 0,
        }
      }


    componentDidMount() {
        this.genArray();
        this.randomSearchNum();
    }

    // Generate array of between range 
    genArray = () => {
        const arrayBuild = [];
        let i = 1;
        while (i <= this.state.numberOfElements) {
            arrayBuild.push(i);
            i++
        }

        // updating Component's state object
        this.setState({
            arrayOfNums: arrayBuild, 
        });
    }

    handleChange = (e) => {
        const valueChange = e.target.value;
        this.setState({numberOfElements: valueChange});
        this.genArray();
        this.randomSearchNum();

    }

    randomSearchNum = () => {
        let numToSearch = Math.floor(Math.random() * (this.state.numberOfElements - 1 + 1) + 1);
        this.setState({numberToFind: numToSearch});

    }

    // Searching Algorithms Visualiser support functions
    binarySearchAlgo = () => {
        // console.log("Binary Search Algo Running!");
        // You need to add an arrow function to setTimeout method as otherwis it the method is not binded to this and hence it executes it immediately without the delay.
        // setTimeout(() => {
        //     console.log("Done!")
        // }, 1000);
        const animations = getBinarySearchAnimations(this.state.arrayOfNums, this.state.numberToFind);
        const divs = document.getElementsByClassName("array-box");
        console.log(animations);

        for (let i = 0; i < animations.length; i++) {
            // This means every third iteration run else block.
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                // highlight the selected numbers
                const [div_left_idx, div_right_idx] = animations[i];
                const div_left_style = divs[div_left_idx].style;
                const div_right_style = divs[div_right_idx].style;
                const color = i % 3 === 0 ? HIGHLIGHT_COLOR : "white";
                const opacityPassed = i % 3 === 0 ? 0.2 : 1;
                setTimeout(() => {
                    div_left_style.backgroundColor = color;
                    div_right_style.backgroundColor = color;

                    // decrease opacity of unselected numbers to 0.2
                    const divsNotToInclude = [divs[div_left_idx], divs[div_right_idx]];
                    // Array contains all unselected numbers
                    // Converting HTMLCollection to array to filter some divs out
                    const filtredDivs = Array.from(divs).filter(x => !divsNotToInclude.includes(x));
                    
                    filtredDivs.forEach((x) => {
                        const div_selected = x.style;
                        div_selected.opacity = opacityPassed;
                    });

                }, i * ANIMATION_SPEED);

            } else {
                // Middle element visualised.
                const middle_div_ids = animations[i];
                const middle_div_style = divs[middle_div_ids].style;
                setTimeout(() => {
                    middle_div_style.backgroundColor = MIDDLE_NUM_COLOR;
                    middle_div_style.border = `3px solid ${MIDDLE_NUM_COLOR}`;
                }, i * ANIMATION_SPEED);
                if (i !== (animations.length - 1)) {
                    setTimeout(() => {
                        middle_div_style.backgroundColor = "white";
                        middle_div_style.border = `3px solid ${HIGHLIGHT_COLOR}`;
                    }, i * ANIMATION_SPEED + 300);
                } else {
                    setTimeout(() => {
                        alert(`Success! The target number: ${this.state.numberToFind} is found!`);
                        middle_div_style.backgroundColor = "white";
                        middle_div_style.border = `3px solid ${HIGHLIGHT_COLOR}`;
                    }, i * ANIMATION_SPEED + 1000);
                }
            }
        }
    }

    linearSearchAlgo = () => {
        const animations = getLinearSearchAnimations(this.state.arrayOfNums, this.state.numberToFind);
        const divs = document.getElementsByClassName("array-box");
        console.log(animations);

        for (let i = 0; i < animations.length; i++) {
            const isLastElem = (i === animations.length - 1)
            const color = i % 2 === 0 ? MIDDLE_NUM_COLOR : "white";
            const colorBorder = i % 2 === 0 ? MIDDLE_NUM_COLOR : HIGHLIGHT_COLOR;
            const opacityPassed = i % 2 === 0 ? 0.2 : 1;

            const div_chosen_idx = animations[i];
            const div_chosen_style = divs[div_chosen_idx].style;

            if (!isLastElem) {
                setTimeout(() => {
                    div_chosen_style.backgroundColor = color;
                    div_chosen_style.border = `3px solid ${colorBorder}`;

                    // decrease opacity of unselected numbers to 0.2
                    const divsNotToInclude = [divs[div_chosen_idx]];
                    // Array contains all unselected numbers
                    // Converting HTMLCollection to array to filter some divs out
                    const filtredDivs = Array.from(divs).filter(x => !divsNotToInclude.includes(x));
                    
                    filtredDivs.forEach((x) => {
                        const div_selected = x.style;
                        div_selected.opacity = opacityPassed;
                    });
                }, i * ANIMATION_SPEED);
            } else {
                setTimeout(() => {
                    div_chosen_style.backgroundColor = MIDDLE_NUM_COLOR;
                    div_chosen_style.border = `3px solid ${MIDDLE_NUM_COLOR}`;
                }, i * ANIMATION_SPEED);
                setTimeout(() => {
                    alert(`Success! The target number: ${this.state.numberToFind} is found!`);
                    div_chosen_style.backgroundColor = "white";
                    div_chosen_style.border = `3px solid ${HIGHLIGHT_COLOR}`;
                }, i * ANIMATION_SPEED + 1000);
            }
        }

    }

    jumpSearchAlgo = () => {
        const animations = getJumpSearchAnimations(this.state.arrayOfNums, this.state.numberToFind);
        const divs = document.getElementsByClassName("array-box");
        console.log(animations);

        for (let i = 0; i < animations.length; i++) {
            const isLastElem = (i === animations.length - 1)
            const color = i % 2 === 0 ? MIDDLE_NUM_COLOR : "white";
            const colorBorder = i % 2 === 0 ? MIDDLE_NUM_COLOR : HIGHLIGHT_COLOR;
            const opacityPassed = i % 2 === 0 ? 0.2 : 1;

            const div_chosen_idx = animations[i];
            const div_chosen_style = divs[div_chosen_idx].style;

            if (!isLastElem) {
                setTimeout(() => {
                    div_chosen_style.backgroundColor = color;
                    div_chosen_style.border = `3px solid ${colorBorder}`;

                    // decrease opacity of unselected numbers to 0.2
                    const divsNotToInclude = [divs[div_chosen_idx]];
                    // Array contains all unselected numbers
                    // Converting HTMLCollection to array to filter some divs out
                    const filtredDivs = Array.from(divs).filter(x => !divsNotToInclude.includes(x));
                    
                    filtredDivs.forEach((x) => {
                        const div_selected = x.style;
                        div_selected.opacity = opacityPassed;
                    });
                }, i * ANIMATION_SPEED);
            } else {
                setTimeout(() => {
                    div_chosen_style.backgroundColor = MIDDLE_NUM_COLOR;
                    div_chosen_style.border = `3px solid ${MIDDLE_NUM_COLOR}`;
                }, i * ANIMATION_SPEED);
                setTimeout(() => {
                    alert(`Success! The target number: ${this.state.numberToFind} is found!`);
                    div_chosen_style.backgroundColor = "white";
                    div_chosen_style.border = `3px solid ${HIGHLIGHT_COLOR}`;
                }, i * ANIMATION_SPEED + 1000);
            }
        }
    }

    render() { 
        return (
                <React.Fragment>
                    <div className="text-center">
                        <div className='row'>
                            <div className='col'>
                                <div className='sliderDesc'>
                                    Size of the sorted array to search: {this.state.numberOfElements}
                                </div>
                                <div className='sliderPanel'>
                                <input type="range" min="10" max="30" name='numberOfElements' step="1" value={this.state.numberOfElements} onChange={(e) => {this.handleChange(e)}} />
                                </div>
                            </div>
                            <div className='col'>
                                Target number to look in the array: <div className='array-box-unique' key="50">{this.state.numberToFind}</div>
                                <div>
                                <button className='btn btn-outline-primary' onClick={() => {this.randomSearchNum()}}>
                                    Generate Random Number
                                </button></div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <div className='colorPalet'>
                                    <ul>
                                        <li><div className='array-box-color'>0</div>Color of the Boundaries Selected</li>
                                        <li><div className='array-box-color2'>0</div>Color of the Selected Number to Compare with Target Number</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='array-container'>
                            {this.state.arrayOfNums.map((num, idx) => (
                                <div className='array-box' key={idx}>{num}</div>
                            ))}
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <span className='button'>
                                    <button className='btn btn-primary' onClick={() => {this.binarySearchAlgo()}}>
                                        Binary Search
                                    </button>
                                </span>
                                <span className='button'>
                                    <button className='btn btn-primary' onClick={() => {this.linearSearchAlgo()}}>
                                        Linear Search
                                    </button>
                                </span>
                                <span className='button'>
                                    <button className='btn btn-primary' onClick={() => {this.jumpSearchAlgo()}}>
                                        Jump Search
                                    </button>
                                </span>
                                <span className='button'>
                                    <button className='btn btn-primary'>
                                        Interpolation Search
                                    </button>
                                </span>
                                <span className='button'>
                                    <button className='btn btn-primary'>
                                        Fibonacci Search
                                    </button>
                                </span>
                                <span className='button'>
                                    <button className='btn btn-primary'>
                                        AnyText
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
        );
    }
}
 
export {ArrayVisualier};