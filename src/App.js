import './App.css';
import React, { useState } from 'react';

function OperationButton ({operation, onButtonClick}) {
    return <button className="OperationButton" onClick={onButtonClick}>{operation}</button>
}
function CalculatorInterface () {
    const [lastAction, setLastAction] = useState('0');
    const [equation, setEquation] = useState('');
    const errorMessages = ['Syntax Error','Divide by 0 Error'];

    function calculate () {
        let array = [];
        const operators = ['+','-','*','/'];
        let number = '';
        if (operators.includes(equation[0])) {
            setEquation(errorMessages[0]); //SYNTAX ERROR
            return
        }
        for (let index in equation) {
            if (operators.includes(equation[index])) {
                array.push(parseInt(number,10));
                number = '';
                array.push(equation[index]);
            } else {
                number = number + equation[index];
            }
        }
        array.push(parseInt(number,10));
        console.log(array);
        if (array.includes(NaN)) {
            setEquation(errorMessages[0]);
            return
        }

        for (let index in array) {
            if (array[index] === '*') {
                let temp = array[index-1] * array[index+1];
                array.splice(index-1,3);
                array.splice(index-1,0,temp);
                console.log(array);
            }
        }
    }

    function handleClick (action) {
        if (action === 'AC') {
            setLastAction('AC');
            setEquation('');
        } else if (errorMessages.includes(equation)) {
            return
        } else if (action === '=') {
            calculate();
        } else {
            setLastAction(action);
            setEquation(equation + action);
        }
    }

        return (
            <>
                <div>
                    <label>{lastAction}</label>
                </div>
                <div>
                    <OperationButton operation={'AC'} onButtonClick={() => handleClick('AC')}/>
                    <OperationButton operation={'7'} onButtonClick={() => handleClick('7')}/>
                    <OperationButton operation={'8'} onButtonClick={() => handleClick('8')}/>
                    <OperationButton operation={'9'} onButtonClick={() => handleClick('9')}/>
                    <OperationButton operation={'/'} onButtonClick={() => handleClick('/')}/>
                    <OperationButton operation={'4'} onButtonClick={() => handleClick('4')}/>
                    <OperationButton operation={'5'} onButtonClick={() => handleClick('5')}/>
                    <OperationButton operation={'6'} onButtonClick={() => handleClick('6')}/>
                    <OperationButton operation={'*'} onButtonClick={() => handleClick('*')}/>
                    <OperationButton operation={'1'} onButtonClick={() => handleClick('1')}/>
                    <OperationButton operation={'2'} onButtonClick={() => handleClick('2')}/>
                    <OperationButton operation={'3'} onButtonClick={() => handleClick('3')}/>
                    <OperationButton operation={'-'} onButtonClick={() => handleClick('-')}/>
                    <OperationButton operation={'0'} onButtonClick={() => handleClick('0')}/>
                    <OperationButton operation={'.'} onButtonClick={() => handleClick('.')}/>
                    <OperationButton operation={'='} onButtonClick={() => handleClick('=')}/>
                    <OperationButton operation={'+'} onButtonClick={() => handleClick('+')}/>

                </div>
                <div>
                    <label>{equation}</label>
                </div>
            </>
        );
}

function App() {
  return (
    <div className="Heading">
        <h1>Calculator</h1>
        <CalculatorInterface/>
    </div>
  );
}

export default App;
