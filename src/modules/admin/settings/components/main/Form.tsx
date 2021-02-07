import React from 'react';
import { TextInput, RichTextInput, HiddenInput } from 'mongez/form';

export default function Form({record}) {
    return (
        <>
            <TextInput name="title" required autoFocus defaultValue={record.title} placeholder="title" />
            <HiddenInput name="name"  value={record.name} placeholder="name" />
            <RichTextInput name="content" required autoFocus defaultValue={record.content} placeholder="content" />
        </>
    )
}