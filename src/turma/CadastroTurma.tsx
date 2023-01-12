import { Button, Container, TextField } from "@material-ui/core";
import { ChangeEvent, useState } from "react";
import Turma from "./Turma";

function CadastroTurma() {

    const [turma, setTurma] = useState<Turma>({
        id: 0,
        descricao: ''
    })



function updatedTurma(e: ChangeEvent<HTMLInputElement>) {

    setTurma({
        ...turma,
        [e.target.name]: e.target.value,
    })

}

return (
<>

<Container maxWidth="sm" className="topo">

            
           
            
<form >
    <TextField value={turma.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTurma(e)} id="descricao" label="Turma" variant="outlined" name="descricao" margin="normal" fullWidth />
             
    <Button type="submit" variant="contained" color="primary">
        Publicar
    </Button>
</form>
</Container>
</>

)
}

export default CadastroTurma;