import React = require("@theia/core/shared/react");
import {Button, Container} from "@mui/material";
import { CustomDialog, OptionDialog } from "./components/popup/dialog";


export default function App() {
    const [dialogState, setDialogState] = React.useState(false);

    // Afficher le dialog
    const handleButtonClick = () => {

    }

    const AcceptButtonActions = () => {
        // other action
    }
   
    return (
        <div>
            <Container>
                <Button variant="text" onClick={handleButtonClick}>Créer un nouveau projet</Button>

                {
                    dialogState 
                    && 
                    <CustomDialog onDialog={dialogState} message="Voulez-vous créer un nouveau projet ?" title="Créer un nouveau projet" onAcceptButtonClick={AcceptButtonActions} onCloseButtonClick={() => setDialogState(false)} /> 
                }
                
            </Container>
        </div>
    );
}
