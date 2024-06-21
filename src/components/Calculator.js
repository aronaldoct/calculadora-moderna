import { Container, Paper, TextField } from "@mui/material";
import { useState } from "react"


const Calculator = () => {

    const [input, setInput] = useState('');
    
    const handleClick = (value) => {
        if (value === '='){
            try{
                setInput(eval(input).toString());
            } catch (e) {
                setInput('Error');
            }
        } else if (value === 'C') {
            setInput('');
        } else {
            setInput(input + value);
        }
    };

    const buttons = [
        '7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'
    ];

    return (

        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ padding:2, marginTop:5 }}>
                <TextField
                    fullWidth
                    value={input}
                    inputProps={{ readOnly: true }}
                    variant="outlined"
                />
            </Paper>
        </Container>

    )

}