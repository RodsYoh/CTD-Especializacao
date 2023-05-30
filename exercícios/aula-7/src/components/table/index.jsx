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
        <div className="font-sans">
            <h1>Minha tabela</h1>

            <table className="min-w-full">
                <thead>
                    <tr>
                        <th className="py-2 px-4 font-semibold text-left">Ordem</th>
                        <th className="py-2 px-4 font-semibold text-left">Nome</th>
                        <th className="py-2 px-4 font-semibold text-left">Matrícula</th>
                        <th className="py-2 px-4 font-semibold text-left">Curso</th>
                        <th className="py-2 px-4 font-semibold text-left">Bimestre</th>
                        <th className="py-2 px-4 font-semibold text-left">Ações</th>
                    </tr>
                </thead>
                <tbody>
                   {data.map((aluno)=>(
                    <><tr className="border-b">
                           <td>1</td>
                           <td>{aluno.nome}</td>
                           <td>{aluno.matricula}</td>
                           <td>{aluno.curso}</td>
                           <td>{aluno.bimestre}</td>
                            <td>
                               <button className="bg-sucess text-white text-sm p-2 hover:bg-green-400 transition ease-out delay-50" onClick={()=>editarCampos(aluno)}>Editar</button>
                               <button className="bg-danger text-white text-sm p-2 hover:bg-red-400 transition ease-out delay-50"onClick={()=>apagarAluno(aluno._id)}>Excluir</button>
                           </td>
                    </tr></>
                   ))} 
                </tbody>
            </table>
        </div>
        );
}