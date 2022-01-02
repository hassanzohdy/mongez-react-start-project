import { RestfulEndpoint } from "mongez/http";
import { TableColumn, SwitchFormatter } from "mongez/table";

export default function publishSwitch(service: RestfulEndpoint, key: string = 'published'): TableColumn {
    return {
        heading: key,
        key: key,
        formatter: SwitchFormatter,
        settings: {
            onChange: (record, checked) => {
                service.publish(record.id, { [key]: checked });
            }
        }
    };
}