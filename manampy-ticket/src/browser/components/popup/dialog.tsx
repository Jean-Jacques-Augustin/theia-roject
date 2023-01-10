
/**
 * Write react dialog whithout UI framework
 */

import React = require("react");

interface CustomDialogProps {
     onDialog: boolean;
     message: string;
     title: string;
     onAcceptButtonClick: () => void;
     onCloseButtonClick: () => void;
}

export const OptionDialog = (props: CustomDialogProps) => {
     return (
          <div>
                <div className="dialog">
                    <div className="dialog__title">
                        <h1>{props.title}</h1>
                    </div>
                    <div className="dialog__message">
                        <p>{props.message}</p>
                    </div>
                    <div className="dialog__button">
                        <button className="dialog__button__accept" onClick={props.onAcceptButtonClick}>Yes</button>
                        <button className="dialog__button__close" onClick={props.onCloseButtonClick}>Non</button>
                    </div>
                </div>
            </div>
     )
}