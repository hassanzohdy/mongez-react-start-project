import React from 'react';
import Is from '@flk/supportive-is';
import Globals from 'mongez/globals';
import { trans } from 'mongez/localization';
// import { useRequiredInputValidator } from 'mongez/form';
import useRequiredInputValidator from './useReq';

let baseRef = {
    c: null
};

const getItem = (items, value, grouped = false) => {
    if (grouped) {
        let foundItem;
        items.forEach(itemGroup => {
            if (!foundItem) {
                foundItem = itemGroup.items.find(item => item.value === value);
            }
        });
        return foundItem;
    }
    return items.find(item => item.value === value);
};
const getItems = (items, values, grouped = false) => {
    if (grouped) {
        let foundItems;
        items.forEach(itemGroup => {
            if (!foundItems) {
                foundItems = itemGroup.items.filter(item => values.includes(item.value));
            }
        });
        return foundItems || [];
    }
    return items.filter(item => values.includes(item.value));
};


function defaultMapItem(item) {
    if (Is.string(item)) {
        item = {
            label: trans(item),
            value: item,
        };
    }
    else if (Is.numeric(item)) {
        item = {
            label: item,
            value: item,
        };
    }
    else if (Is.plainObject(item)) {
        let label = item.label || item.text || item.name;
        if (Is.plainObject(label) && label[Globals.localeCode]) {
            label = label[Globals.localeCode];
        }
        item = {
            ...item,
            label: label,
            value: item.value || item.id
        };
    }
    return item;
}
export default function Select(props) {
    // get the item object for the given value
    const componentRef = React.useRef(null);

    const mapItems = items => {
        if (!items)
            return [];
        return items.map(mapItem);
    };
    const defaultMapResponse = response => {
        return mapItems(response.data.records);
    };

    // console.log(componentRef);

    let { id, label, name, grouped, classes = {}, mapItem = defaultMapItem, fullWidth = true, variant = 'outlined', onChange, lazyLoading, request, mapResponse = defaultMapResponse, labelId, placeholder, required, value = '', items, imagable, iconable, multiple, readOnly, none, ...otherProps } = props;
    // for multiple selections
    const [currentItems, setItems] = React.useState(mapItems(items || []));
    const [isLoading, setLoading] = React.useState(lazyLoading);
    const [loaded, requestIsLoaded] = React.useState(false);

    const adjustValue = value => {
        if (isLoading)
            return multiple ? [] : '';
        if (value === null)
            return multiple ? [] : '';
        if (Is.numeric(value))
            return Number(value);
        return value;
    };

    const [opened, setOpenedStatus] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [currentValue, setValue] = React.useState(adjustValue(value));
    // console.log({ ...componentRef });

    console.log(componentRef.current && componentRef.current.uid);

    const clearRequiredInput = useRequiredInputValidator(required, componentRef, currentValue, setError);
    const hasError = Boolean(error);
    const checkNoneItem = (() => {
        if (none && !currentItems.find(item => item.none)) {
            // add none 
            const noneItem = {
                value: '',
                label: trans('none'),
                none: true,
            };
            setItems([noneItem, ...currentItems]);
        }
    });
    const checkPlaceholder = (() => {
        if (placeholder && currentItems && !currentItems.find(item => item.placeholder)) {
            const placeholderItem = {
                value: '',
                label: trans(placeholder),
                disabled: true,
                placeholder: true,
            };
            setItems([placeholderItem, ...currentItems]);
        }
    });
    React.useEffect(() => {
        if (items === undefined) return;

        setItems(mapItems(items));
        checkPlaceholder();
        checkNoneItem();
    }, [items]);
    // terminate the select input with clearing the required validation
    React.useEffect(() => {
        return () => clearRequiredInput(true);
    }, []);


    React.useEffect(() => {
        setValue(adjustValue(value));
    }, [value]);

    React.useEffect(() => {
        if (!lazyLoading || loaded) return;

        request().then(response => {
            setTimeout(() => {
                const items = mapResponse(response);
                // const items = [1, 2, 3];
                checkPlaceholder();
                checkNoneItem();
                setItems(items);
                requestIsLoaded(true);
                setLoading(false);
                setValue(value || '');
            }, 100);
        });
    }, [lazyLoading, loaded]);

    checkPlaceholder();
    checkNoneItem();
    // const handleChange = (event) => {
    //     let value = event.target.value;
    //     setValue(value);
    //     // select the item by value
    //     let item = getItem(currentItems, value);
    //     // set the item as an argument for the onChange event 
    //     onChange && onChange(item);
    //     if (value) {
    //         clearRequiredInput();
    //     }
    // };
    return <h1>OK</h1>
}