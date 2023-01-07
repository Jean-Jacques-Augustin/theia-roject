import React = require("@theia/core/shared/react");
import {Button, Container} from "@mui/material";
import CustomModal from "./components/CustomModal";

const linkBackend = "http://localhost:3001";

export default function App() {
    const [showModal, setShowModal] = React.useState(false);

    const handleButtonClick = () => {
        setShowModal(true);
    };

    const handleCloseButtonClick = () => {
        setShowModal(false);
    };

    const comminucationBack = () => {
        
    }

    return (
        <div>
            <Container>
                <Button variant="text" onClick={handleButtonClick}>Créer un nouveau projet</Button>
                {showModal
                    &&
                    <CustomModal onCloseButtonClick={handleCloseButtonClick} onAcceptButtonClick={comminucationBack} message={"Message"}  title={"Titre du message"}/>
                }
            </Container>
        </div>
    );
}
