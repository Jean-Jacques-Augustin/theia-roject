import React = require("@theia/core/shared/react");
import {Button, Container} from "@mui/material";
import { CustomDialog } from "./components/popup/dialog";


export default function App() {
    const [showModal, setShowModal] = React.useState(false);

    const handleButtonClick = () => {
        setShowModal(true);
    };

    const handleCloseButtonClick = () => {
        setShowModal(false);
    };

    const comminucationBack = () => {
        // les opération backend
    }

    return (
        <div>
            <Container>
                <Button variant="text" onClick={handleButtonClick}>Créer un nouveau projet</Button>
                {showModal
                    &&
                    <CustomDialog
                        onDialog={showModal}
                        message={"Message"}
                        title={"Titre du message"}
                        onAcceptButtonClick={comminucationBack}
                        onCloseButtonClick={setShowModal(false)}
                    />
                }
            </Container>
        </div>
    );
}
