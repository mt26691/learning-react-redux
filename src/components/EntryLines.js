import React from 'react';
import EntryLine from './EntryLine';

const EntryLines = ({ entries, deleteEntry, editEntry}) => {
    return (entries.map(entry => <EntryLine key={entry.id} {...entry} deleteEntry={deleteEntry}  editEntry={editEntry} />));
}

export default EntryLines;