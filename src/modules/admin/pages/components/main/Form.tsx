import React from 'react';
import { TextInput, RichTextInput, TextAreaInput, HiddenInput } from 'mongez/form';

export default function Form({record}) {
    return (
        <>
            <TextInput name="title" required autoFocus defaultValue={record.title} placeholder="title" />
            <HiddenInput name="name" value={record.name} placeholder="name" />
            <TextAreaInput name="metaDescription" required defaultValue={record.metaDescription} placeholder="shortDescription" />
            <RichTextInput name="description" required defaultValue={record.description} placeholder="description" />
        </>
    )
}