import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { TextField, Typography} from "@mui/material";


const projectNameRegex = new RegExp("^[a-zA-Z0-9_]*$");

const CreateProject = () => {
    const [projectName, setProjectName] = React.useState('');
    const [projectNameError, setProjectNameError] = React.useState(false);


    const handleProjectNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProjectName(event.target.value);
        if (projectNameRegex.test(event.target.value)) {
            setProjectNameError(false);
        } else {
            setProjectNameError(true);
        }
    }


    return (
        <Box>
            <Typography>
                <h2>Créer un nouveau projet</h2>
            </Typography>
            <TextField
                error = {projectNameError}
                id="outlined-error-helper-text"
                label="Error"
                defaultValue="Hello World"
                helperText={ projectNameError ? "Incorrect entry."  : ""}
                value={projectName}
                onChange={handleProjectNameChange}
            />
        </Box>
    )
};

const ExistProject = () => {
    return (
        <div>
            <h1>Exist project</h1>
        </div>
    )
};

export default function Create() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <Typography>
                Générer un nouveau projet
            </Typography>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Item One" value="1" />
                        <Tab label="Item Two" value="2" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <CreateProject/>
                </TabPanel>
                <TabPanel value="2">
                    <ExistProject/>
                </TabPanel>
            </TabContext>
        </Box>
    );
}

