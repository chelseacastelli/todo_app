
import React, { useState } from 'react'
import './Todo.css';
import { List, ListItem, ListItemAvatar, ListItemText, Modal, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');

    const updateTodo = () => {
        // update todo with new input text
        db.collection('todos').doc(props.todo.id).set({
            todo: input
            // Prevents overwriting ➡ will append, not u
        }, { merge: true });

        setOpen(false);
    }

    return (
        // ⬇ React fragment
        <>
        <Modal
            open={open} 
            onClose={e => setOpen(false)}
        >
            <div className={classes.paper}>
                <h1>I am a modal</h1>
                <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)}/>
                <Button onClick={updateTodo}>Update</Button>
            </div>
        </Modal>
        <List>
            <ListItem>
            <ListItemAvatar>
            </ListItemAvatar>
                <ListItemText primary={'↪ ' + props.todo.todo}/>
            </ListItem>
            <button type='button' onClick={e => setOpen(true)}>Edit</button>
            <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}/>
        </List>
        </>
    )
}

export default Todo


