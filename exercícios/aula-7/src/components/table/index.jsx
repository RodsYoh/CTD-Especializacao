import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import getAlunos, { removerAluno } from "../../requests/alunos"
import { toast } from "react-toastify"

export default function Table(props){
    const queryClient = useQueryClient();

    const { formData, setFormData } = props;

        const { data, isFetching } = useQuery(["@alunos"], getAlunos,{
            refetchOnWindowFocus:false,
        });
    
    const { mutate } = useMutation(removerAluno,{
        onSuccess: () => {
            queryClient.invalidateQueries(["@alunos"]);
            toast.success('Apagado com sucesso!');
        },
        onError:()=>{
            toast.error('Erro ao apagar aluno!');
        }
    });

        if (isFetching){
            return <h3>Buscando alunos...</h3>;
        }

    function apagarAluno(id){
        mutate(id);
    }

    function editarCampos(aluno){
        setFormData({ ...aluno, id:aluno._id });
    }

    return(
        <div className="font-opensans">
            <h1>Minha tabela</h1>

            <table>
                <thread>
                    <tr>
                        <th>Ordem</th>
                        <th>Nome</th>
                        <th>Matrícula</th>
                        <th>Curso</th>
                        <th>Bimestre</th>
                        <th>Ações</th>
                    </tr>
                </thread>
                <tbody>
                   {data.map((aluno)=>(
                    <><tr>
                           <td>1</td>
                           <td>{aluno.nome}</td>
                           <td>{aluno.matricula}</td>
                           <td>{aluno.curso}</td>
                           <td>{aluno.bimestre}</td>
                       </tr>
                            <td>
                               <button>Editar</button>
                               <button>Excluir</button>
                           </td></>
                   ))} 
                </tbody>
            </table>
            {/* <h1>Minha table</h1>
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
            </ul> */}
        </div>
        );
}