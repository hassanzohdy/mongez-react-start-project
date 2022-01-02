import React from 'react';
import { TextInput, RichTextInput } from 'mongez/form';

export default function Form({ record }) {    
    return (
        <>
            <TextInput name="title" required autoFocus defaultValue={record.title} placeholder="title" />
            <RichTextInput name="content" required autoFocus defaultValue={record.content} label="content" />
        </>
    )
}