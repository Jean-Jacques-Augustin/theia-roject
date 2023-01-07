import { ContainerModule } from '@theia/core/shared/inversify';
import { ManampyTicketWidget } from './manampy-ticket-widget';
import { ManampyTicketContribution } from './manampy-ticket-contribution';
import { bindViewContribution, FrontendApplicationContribution, WidgetFactory } from '@theia/core/lib/browser';

import '../../src/browser/style/index.css';

export default new ContainerModule(bind => {
    bindViewContribution(bind, ManampyTicketContribution);
    bind(FrontendApplicationContribution).toService(ManampyTicketContribution);
    bind(ManampyTicketWidget).toSelf();
    bind(WidgetFactory).toDynamicValue(ctx => ({
        id: ManampyTicketWidget.ID,
        createWidget: () => ctx.container.get<ManampyTicketWidget>(ManampyTicketWidget)
    })).inSingletonScope();
});
