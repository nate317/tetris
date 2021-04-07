import React from 'react';
import { StyledCell} from './styles/StyledCell';
import { TETROMINOS } from '../tetrominos';

function Cell({ type }) {
    
    return(
        <StyledCell type={type} color={TETROMINOS[type].color}>
            {console.log("rerender")}
        </StyledCell>
    );
}

// React.memo(Cell) is optimizing how many cells are rerendering.
export default React.memo(Cell);