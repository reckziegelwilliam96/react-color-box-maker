import React, { useState } from 'react';
import Box from './Box';
import { v4 as uuid } from 'uuid';
import NewBoxForm from './NewBoxForm';
import './BoxList.css';

const BoxList = () => {
    const INITIAL_STATE = [
        {id: 1, color: 'magenta', height: 300, width: 300},
        {id: 2, color: 'turquoise', height: 200, width: 400},
        {id: 3, color: 'pink', height: 500, width: 300}
    ]
    const [boxes, setBoxes] = useState(INITIAL_STATE)

    const addBox = (newBox) => {
		setBoxes(newBox => [...boxes, {...newBox, id: uuid() }])
	}
    const removeBox = (id) => {
        const newBoxes = boxes.filter((box) => box.id !== id);
        setBoxes(newBoxes);
      };

    return (
            <div className="boxList">
                <h3>Colored Boxes</h3>
                <NewBoxForm addBox/>
                {boxes.map((box) => (
                    <Box
                      key={box.id}
                      id={box.id}
                      color={box.color}
                      width={box.width}
                      height={box.height}
                      removeBox={removeBox}
                    />
                ))}
            </div>
    )
}
 
export default BoxList;