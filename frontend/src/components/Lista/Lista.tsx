import { Button } from "@mui/material"
import { Professor } from "../../@types/professor"
import { Descricao, Foto, Info, ItemLista, ListaStyled, ListaVazia, Nome, Valor } from "./Lista.style"

interface ListaProps {
    professores: Professor[],
}

export const Lista = (props: ListaProps) => {
  return (
    <div>
        {props.professores.length > 0 ? (
            <ListaStyled>
            {props.professores.map(professor => (
                <ItemLista key={professor.id}>
                    <Foto src={professor.foto}></Foto>
                        <Info>
                        <Nome>{professor.nome}</Nome>
                        <Valor>{professor.valor_hora.toLocaleString('pt-BR', { minimumFractionDigits: 2, style:'currency', currency: 'BRL'})} por hora</Valor>
                        <Descricao>{professor.descricao}</Descricao>
                        <Button sx={{ width: '70%'}}>Marcar aula com {professor.nome}</Button>
                    </Info>
                </ItemLista>
            ))}
        </ListaStyled>
        ) : (
            <ListaVazia>Nenhum item encontrado</ListaVazia>
        )}
    </div>
  )
}
