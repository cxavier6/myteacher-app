import { Button } from "@mui/material"
import { Descricao, Foto, Info, ItemLista, ListaStyled, Nome, Valor } from "./Lista.style"

export const Lista = () => {
  return (
    <ListaStyled>
        <ItemLista>
            <Foto src="https://github.com/cxavier6.png"></Foto>
            <Info>
                <Nome>Camila Reis</Nome>
                <Valor>R$ 100,00 por hora</Valor>
                <Descricao>Aulas de programação</Descricao>
                <Button sx={{ width: '70%'}}>Marcar aula com Camila</Button>
            </Info>
        </ItemLista>
        <ItemLista>
            <Foto src="https://github.com/cxavier6.png"></Foto>
            <Info>
                <Nome>Camila Reis</Nome>
                <Valor>R$ 100,00 por hora</Valor>
                <Descricao>Aulas de programação</Descricao>
                <Button sx={{ width: '70%'}}>Marcar aula com Camila</Button>
            </Info>
        </ItemLista>
        <ItemLista>
            <Foto src="https://github.com/cxavier6.png"></Foto>
            <Info>
                <Nome>Camila Reis</Nome>
                <Valor>R$ 100,00 por hora</Valor>
                <Descricao>Aulas de programação</Descricao>
                <Button sx={{ width: '70%'}}>Marcar aula com Camila</Button>
            </Info>
        </ItemLista>
        <ItemLista>
            <Foto src="https://github.com/cxavier6.png"></Foto>
            <Info>
                <Nome>Camila Reis</Nome>
                <Valor>R$ 100,00 por hora</Valor>
                <Descricao>Aulas de programação</Descricao>
                <Button sx={{ width: '70%'}}>Marcar aula com Camila</Button>
            </Info>
        </ItemLista>
    </ListaStyled>
  )
}
