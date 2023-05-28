import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import getAlunos, { removerAluno } from "../../requests/alunos"

export default function Table(props){
    const queryClient = useQueryClient();

    const { formData, setFormData } = props;

        const { data, isFetching } = useQuery(["@alunos"], getAlunos,{
            refetchOnWindowFocus:false,
        });
    
    const { mutate } = useMutation(removerAluno,{
        onSuccess: () => queryClient.invalidateQueries(["@alunos"]),
    });

        if (isFetching){
            return <h3>Buscando alunos...</h3>;
        }

    function apagarAluno(id){
        mutate(id);
        console.log('ok excluir');
    }

    function editarCampos(aluno){
        setFormData({ ...aluno, id:aluno._id });
        console.log('ok editar');
    }

    return(
        <div>
            <h1>Minha table</h1>
            <ul>
                {data.map((aluno)=>(
                   <> <li>
                        <h4>{aluno.nome}</h4>
                        <p>{aluno.matricula}</p>
                        <p>{aluno.curso}</p>
                        <p>{aluno.bimestre}</p>
                        <button onClick={()=>editarCampos(aluno)}>Editar</button>
                        <button onClick={()=>apagarAluno(aluno._id)}>Excluir</button>
                    </li></>
                ))}
            </ul>
        </div>
    )
}