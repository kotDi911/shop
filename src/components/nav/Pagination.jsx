import React from 'react';

const Pagination = (props) => {
    const { nav = null, disable, onNextPageClick, onPrevPageClick } = props;

    const handleNextPageClick = () => {
        onNextPageClick();
    };
    const handlePrevPageClick = () => {
        onPrevPageClick();
    };

    return (
        <div className="paginator">
            <button
                className="arrow"
                type="button"
                onClick={handlePrevPageClick}
                disabled={disable.left}
            >
                {'< Prev'}
            </button>
            {nav && (
                <span className="paginator__nav" >
          {nav.current} / {nav.total}
        </span>
            )}
            <button
                className="arrow"
                type="button"
                onClick={handleNextPageClick}
                disabled={disable.right}
            >
                {'Next >'}
            </button>
        </div>
    );
};

export default React.memo(Pagination)