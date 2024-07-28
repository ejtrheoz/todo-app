import React, {useState} from "react";
import { Card, CardContent, Typography, Container, IconButton } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import { green } from "@mui/material/colors";
import { red } from "@mui/material/colors";

const ToDo = ({title, checkTodo, id, isCompleted, deleteTodo}) => {

    const markComplete = () => checkTodo(id)
    const todoStyle = isCompleted ? {textDecoration: "line-through"} : {textDecoration: "none"}
    const toDelete = () => deleteTodo(id)

    return (
        <div>
            <Container>
                <Card variant="outlined" style={{marginTop:35, background:'lightgray'}}>
                    <CardContent>
                        <Typography style={todoStyle}>
                            <IconButton variant='outlined' onClick={markComplete}>
                                <CheckIcon style={{color:green[500]}}/>
                            </IconButton>
                            {title}
                            <IconButton style={{float:"right"}} onClick={toDelete}>
                                <DeleteIcon style={{color:red[500]}}></DeleteIcon>
                            </IconButton>
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
        </div>
    )
}

export default ToDo;
