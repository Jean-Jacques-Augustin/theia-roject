// *****************************************************************************
// Copyright (C) 2022 STMicroelectronics.
//
// All rights reserved. This program and the accompanying materials
// is the property of STMicroelectronics and must not be
// reproduced, disclosed to any third party, or used in any
// unauthorized manner without written consent.
// *****************************************************************************
/*
import { Button } from '@prg-cube/ui-core';
import * as React from '@theia/core/shared/react';
import { SwProject } from '../../../common/protocol';
import ButtonToolTip from './button-tooltip';

interface IProjectHeaderComponentProps {
    projectName: string;
    swProjects: SwProject[];
    generateCode(): void;
}



function GenerateCodeButton(props: IProjectHeaderComponentProps): JSX.Element {
    return (
        <div className="ap-view_quick-view-element ">
            <Button
                disabled={props.swProjects.length === 0}
                onClick={() => props.generateCode()}
                data-testid="generate_code_button"
                category="primary"
                scale="small"
            >
                <span className="fa fa-download top-bar-icon"></span>
                &nbsp;Generate code
            </Button>
        </div>
    );
}

export function ProjectHeaderComponent(
    props: IProjectHeaderComponentProps
): JSX.Element {
    const [projectName] = React.useState(props.projectName);

    /**
     * A separate component of the button to generate the code
     * @returns JSX.Element
     **/
/** 
    return (
        <div id="ap-view_project-header">
            <div id="ap-view_header">
                Your project : <h2>{projectName}</h2>
                <span className="fa fa-pencil"></span>
            </div>
            <div id="ap-view_quick-view">
                <div id="ap-view_left-side">
          <span className="ap-view_quick-view-element ap-view_quick-view-current-element">
            Project overview
          </span>
                    <span className="ap-view_quick-view-element">
            Relatives files and documentation
          </span>
                </div>
                <div id="ap-view_right-side">
          <span
              className="ap-view_quick-view-element fa fa-cloud ap-view_top-bar-icon"
              title="Export"
          >
            &nbsp;Export
          </span>
                    <span
                        className="ap-view_quick-view-element fa fa-share-alt-square ap-view_top-bar-icon"
                        title="Share"
                    ></span>
                    <span className="ap-view_quick-view-element fa fa-th ap-view_top-bar-icon"></span>
                    <span className="ap-view_quick-view-element fa fa-list ap-view_top-bar-icon"></span>

                    {
                        // If the project name is valid, use the component CustomButton
                        // If the project name is not valid, use the component ButtonToolTip with the children CustomButtonprops
                        props.swProjects ? (
                            <ButtonToolTip
                                title={
                                    <React.Fragment>
                                        Requires at least one Software project in the application
                                        project.{' '}
                                    </React.Fragment>
                                }
                            >
                                <GenerateCodeButton
                                    swProjects={props.swProjects}
                                    generateCode={props.generateCode}
                                 projectName={projectName}/>
                            </ButtonToolTip>
                        ) : (
                            <GenerateCodeButton
                                swProjects={props.swProjects}
                                generateCode={props.generateCode}
                                projectName={projectName}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
}; */

const CustomButton = ((props: any, ref: any) => {});

export default CustomButton;
