import { RestfulEndpoint } from 'mongez/http';
import { FilterOption } from 'mongez/table';

const remoteSearch = (service: RestfulEndpoint) => {
	return (value, type) => {
		const data = {};

		if (type === 'initial') {
			data['id'] = value;
		} else {
			data['name'] = value;
		}

		return service.list(data);
	};
};

export const remoteFilter = (name: string, service: RestfulEndpoint): FilterOption => {
	return {
		type: 'autocomplete',
		placeholder: name,
		name: name,
		col: 4,
		inputProps: {
			searchable: true,
			label: name,
			request: remoteSearch(service),
		}
	};
};
