import React from 'react';
import { TextInput, ImageInput, TextAreaInput } from 'mongez/form';

export default function Form({ record }) {
    return (
        <>
            <TextInput name="title" required autoFocus defaultValue={record.title} placeholder="title" />
            <TextAreaInput name="content" required autoFocus defaultValue={record.content} placeholder="content" />
            <ImageInput name="image" label="image" value={record.image} />
        </>
    )
}