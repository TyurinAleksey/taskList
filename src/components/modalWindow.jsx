import React from 'react';

const ModalWindow = ({active, setActive, children}) => {
    return (
        <div className={active ? "modalWindow active" : "modalWindow"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default ModalWindow;