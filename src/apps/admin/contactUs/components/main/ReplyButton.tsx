import React from 'react';
import { Tooltip } from 'mongez/components';
import { trans } from 'mongez/localization';
import { IconButton } from '@material-ui/core';
import ReplyIcon from '@material-ui/icons/Reply';
import {useTable, useTableRow} from 'mongez/table';
import { FormModal, RichTextInput } from 'mongez/form';
import service from 'apps/admin/contactUs/services/service';

export default function ReplyButton(props) {
    const [formIsOpened, openForm] = React.useState(false);
    const { options } = useTable();

    const { record, updateRecord } = useTableRow();

    if (!options.haveAccessTo('reply') || record.replied) return null;

    const formOptions = props.formOptions || options.formOptions || {};

    if (!formOptions.modalOptions) {
        formOptions.modalOptions = {
            fullScreen: true,
        };
    }

    const onSubmit = async (e) => {
        service.reply(record.id, e.target).then(() => {
            record.replied = true;
            updateRecord({ ...record });
            openForm(false);
        });
    };

    return (
        <>
            <IconButton onClick={e => openForm(true)}>
                <Tooltip title={trans('reply')}>
                    <ReplyIcon />
                </Tooltip>
            </IconButton>

            <FormModal
                open={formIsOpened}
                onSubmit={onSubmit}
                title={trans('reply')}
                onClose={() => openForm(false)}
                {...(formOptions.modalOptions || {})}
            >
                <h1>{trans('message')}</h1>
                <p>{record.message}</p>

                <RichTextInput name="reply" required onChange={e => record.reply = e} autoFocus defaultValue={record.content} label="reply" />
            </FormModal>
        </>
    )
}