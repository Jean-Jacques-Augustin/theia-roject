

import {Button} from '@prg-cube/ui-core';
import * as React from '@theia/core/shared/react';
import {HwPlatform as MockHwPlatform} from '../../../common/protocol';
import { OptionDialog } from './popup/dialog';

interface IHwProjectComponentProps {
    updateMcu(mcu: string): void;

    hwPlatforms: MockHwPlatform[];
    mcu: string;
    projectName: string;
    projectPath: string;

    onOpenHwPlatform(
        hwPlatform: MockHwPlatform | undefined,
        projectPath: string
    ): Promise<unknown>;
}

export function HwProjectComponent(
    props: IHwProjectComponentProps
): JSX.Element {
    const [selectedHwPlatform, setSelectedHwPlatform] = React.useState(props.mcu);

    // Tis is a state to show the dialg
    const [dialogState, setDialogState] = React.useState(false);

    // Afficher le dialog
    
    /**
     * Handler on hw platform selected
     * @argument _hwPlatformName : string
     * @returns void
     */
    
    const onHwPlatformSelected = (_hwPlatformName: string): void => {
        setSelectedHwPlatform(_hwPlatformName);
    };

    /**
     * Get a hw platform
     * @argument _hwPlatformName : string
     * @returns HwPlatform | undefined
     */
    

    const getHwPlatform = (
        _hwPlatformName: string
    ): MockHwPlatform | undefined => {
        return props.hwPlatforms.find((hwPlatform: MockHwPlatform) => {
            return hwPlatform.board === selectedHwPlatform;
        });
    };


    /**
     * AcceptButtonActions is here to confirm user choice
     */

    const onClickRemovePlateform = () => {
        setSelectedHwPlatform('');
        props.updateMcu('');
    }

    const AcceptButtonActions = () => {
        onClickRemovePlateform()
    }


   


    /**
     * Generate a select with option corresponding
     * to hw platforms
     * @argument hwPlatforms : hwPlatforms[]
     * @returns HwPlatform | undefined
     */


    const makeHwPlatformSelector = (
        hwPlatforms: MockHwPlatform[]
    ): React.ReactNode => {

        return (
            <select
                title="Update MCU"
                value={selectedHwPlatform}
                onChange={(evt) => {
                    onHwPlatformSelected(evt.target.value);
                    props.updateMcu(evt.target.value);
                }}
                data-testid="hw_platform_select"
            >
                <option key="" value="" data-testid="hw_platform_select-option">
                    Select a HW platform
                </option>
                {hwPlatforms.map((hwPlatform: MockHwPlatform) => (
                    <option
                        key={hwPlatform.name}
                        value={hwPlatform.board}
                        data-testid="hw_platform_select-option"
                    >
                        {hwPlatform.name}
                    </option>
                ))}
            </select>
        );
    };

    return (
        <div>
            <div className="ap-view_platform-title">HW platform project name</div>
            <div className="ap-view_platform-box ap-view_selectedDevice">
                <div className="ap-view_hw-icon">
                    <span>H</span>
                </div>
                <div className="ap_view_platform-child">
                    {makeHwPlatformSelector(props.hwPlatforms)}
                </div>
                {selectedHwPlatform ? (
                    <>
                        <div className="ap_view_platform-child">
                            Board : {getHwPlatform(selectedHwPlatform)?.board} <br/>
                            Mounted Device :{' '}
                            {getHwPlatform(selectedHwPlatform)?.mountedDevice}
                        </div>
                        <div className="ap_view_platform-child">
                            <Button
                                onClick={() => {
                                    props.onOpenHwPlatform(
                                        getHwPlatform(selectedHwPlatform),
                                        props.projectPath
                                    );
                                }}
                                category="primary"
                                scale="small"
                                data-testid="hw_platform_button_open"
                                fullWidth={false}
                            >
                                Open HW platform
                            </Button>
                            <div
                                data-testid="hw_platform_button_delete"
                                className="ap_view_platform-child ap_view-remove-hw-platform"
                                onClick={() => {
                                    setDialogState(true);
                                }}
                                title="Click to remove HW platform"
                            >
                                <span className="fa fa-remove"></span>
                                Remove
                            </div>
                            {
                                /**
                                 * This condition is to show the dialog
                                 */
                                dialogState 
                                && 
                                <OptionDialog 
                                    onDialog={true} 
                                    message="Voulez-vous créer un nouveau projet ?" 
                                    title="Créer un nouveau projet" 
                                    onAcceptButtonClick={AcceptButtonActions} 
                                    onCloseButtonClick={() => setDialogState(false)} 
                                /> 
                         }
                
                        </div>
                    </>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}