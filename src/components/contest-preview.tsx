import * as React from 'react';

const ContestPreview: React.FC<{contest: object, onClick: any}> = ({contest, onClick}: any) => {
    const handleClick = (ev)=>{
        ev.preventDefault();
        onClick(contest.id);
    }
    return (
        <div className="contest-preview" onClick={handleClick}>
            <div className="category">{contest.categoryName}</div>
            <div className="contest">{contest.contestName}</div>
        </div>
    );
};

export default ContestPreview