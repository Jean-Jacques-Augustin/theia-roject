/*

import * as React from '@theia/core/shared/react';
import {cssVariable} from '@prg-cube/ui-core';
import {
    styled,
    Tooltip,
    tooltipClasses,
    TooltipProps,
} from '@prg-cube/ui-core/shared/material';
import {Button} from "@mui/material";

const ButtonToolTip = styled(({className, ...props}: TooltipProps) => (
    <Tooltip {...props} classes={{popper: className}}/>
))(() => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: cssVariable.var.color.alert_warning_primary,
        color: cssVariable.var.color.neutral_grey_9_title,
        maxWidth: 100,
        border: cssVariable.var.color.neutral_grey_10_black,
    },
}));

const CustomButton = React.useRef((props: any, ref: any) => {
    return (
        <span className="ap-view_quick-view-element " ref={ref}>
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
              </span>
    );
});

*/