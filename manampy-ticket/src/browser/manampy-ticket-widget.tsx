import * as React from 'react';
import {injectable, postConstruct, inject} from '@theia/core/shared/inversify';
import {ReactWidget} from '@theia/core/lib/browser/widgets/react-widget';
import {MessageService} from '@theia/core';
import {Message} from '@theia/core/lib/browser';
import App from "./App";

@injectable()
export class ManampyTicketWidget extends ReactWidget {

    static readonly ID = 'manampy-ticket:widget';
    static readonly LABEL = 'ManampyTicket Widget';

    @inject(MessageService)
    protected readonly messageService!: MessageService;

    @postConstruct()
    protected async init(): Promise<void> {
        this.id = ManampyTicketWidget.ID;
        this.title.label = ManampyTicketWidget.LABEL;
        this.title.caption = ManampyTicketWidget.LABEL;
        this.title.closable = true;
        this.title.iconClass = 'fa fa-window-maximize'; // example widget icon.
        this.update();
    }

    render(): React.ReactElement {
        return (
            <div id='widget-container'>
                <App/>
            </div>
        )
    }

    protected displayMessage(): void {
        this.messageService.info('Congratulations: ManampyTicket Widget Successfully Created!');
    }

    protected onActivateRequest(msg: Message): void {
        super.onActivateRequest(msg);
        const htmlElement = document.getElementById('displayMessageButton');
        if (htmlElement) {
            htmlElement.focus();
        }
    }
}
