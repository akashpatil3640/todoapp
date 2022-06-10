import {TextField,Box,Grid, Button,ButtonGroup, FormControl,AppBar,Toolbar,IconButton,Typography } from '@mui/material'
import React ,{useState} from 'react';
function Todo()
{
    //AKASH DINKAR PATIL
    //10-6-22
    //TY.BTECH CSE

    
    /**hook to get input of text-field */
    const [name, setName] = useState('');
    
    /**hook to store all todo info */
    const [todos, setTodos] = React.useState([ 
        {
          text: "This is a sampe todo",

        }
      ]);
    
    /**event handler (saving value temprarly in 'name' ) */
    const handleChange = (event) => {
        setName(event.target.value);
        
    };

   
    /**function to handle enter key event  */
    const handleKeyDown=(event)=>{
        if(event.key==='Enter')
        {
            event.preventDefault(); //used to cancel the current event
            if (!name) return;
            addTodo(name);
            setName(""); //re-initialization of hook
        }
            
    }

    //add todo function
    const addTodo = text=>{
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    }

    /* todo remove handler function*/ 
    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
      };

   
    
    return(

        <>
            <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Todo App
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
        
        <Box>
            <Grid
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                justifyContent="center"
                align="center"
                my="120px"
                >
                    
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <TextField
                    id="outlined-name"
                    label="Enter todo item"
                    value={name}
                    onChange={handleChange}
                    type='text'
                    onKeyDown={handleKeyDown}
                    
                    />
                    
                    </FormControl>
            </Grid>  

            <Grid
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                justifyContent="center"
                align="center"
                my="120px"
                >
                   
                   <ButtonGroup
                        orientation="vertical"
                        aria-label="vertical outlined button group"
                    >
                        {todos.map( (items,index )=> {
                           return( <Button key={items.text} onClick={()=>removeTodo(index)}>{items.text}</Button>)
                        })
                    }
                    </ButtonGroup>




            </Grid>  

        </Box>

       

        </>


    )
    
}
export default Todo;