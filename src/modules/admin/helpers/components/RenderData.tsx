import React from 'react';
import Is from '@flk/supportive-is';
import { styled } from '@material-ui/core';
import { trans } from 'mongez/localization';
import { Obj, capitalize } from 'reinforcements';
import { If, For, GridItem, GridContainer } from 'mongez/components';

const TextItem = styled(GridItem)({
    border: '1px solid #eee',
    padding: '1rem !important',
});

const ValueItem = styled(TextItem)({
    fontWeight: 'bold',
});

function renderValue(data, key) {
    if (key.value) return key.value(data);

    if (Is.object(key)) {
        key = key.key;
    }

    let value = Obj.get(data, key);

    if (Is.array(value)) return value.map(capitalize).join(', ');

    return capitalize(String(value));
}

export default function RenderData({ data, keys }) {
    return (
        <For array={keys} render={row => (
            <GridContainer>
                <For array={row} render={column => (
                    <If condition={column.when && column.when(data) === true || column.when === undefined} render={() => (
                        <>
                            <TextItem sm={column.tetCols || 3}>{Is.string(column) ? trans(column) : column.text}</TextItem>
                            <ValueItem sm={column.cols || 3}>{renderValue(data, column)}</ValueItem>
                        </>
                    )} />
                )} />
            </GridContainer>
        )} />
    )
}