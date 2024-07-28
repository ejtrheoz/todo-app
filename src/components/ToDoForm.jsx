import React, { useState } from 'react'
import { FormControl, Container, TextField, Button } from '@mui/material';




const ToDoForm = ({addTodo}) => {

    const [text, setText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(text)
        setText("")
    }

    return(
        <div>
            <Container maxWidth='sm'>
                <form onSubmit={handleSubmit}>
                    <FormControl fullWidth={true}>
                        <TextField label='I will do this' 
                            style={{marginTop:30, }}
                            required={true}
                            value={text} onChange={(e) => setText(e.target.value)}/>
                        <Button type='submit' 
                        color='primary' 
                        variant='contained' 
                        style={{marginTop:5}}>
                            Add Todo
                        </Button>
                    </FormControl>
                </form>
            </Container>
        </div>
    )
}


export default ToDoForm
