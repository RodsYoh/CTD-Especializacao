import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import getCursos from "../../requests/cursos";
import { alterarAluno, saveAluno } from "../../requests/alunos";

export default function Form(props){

    const queryClient = useQueryClient();

    const { formData, setFormData, clearState } = props;

    const { data, isFetching } = useQuery(["@cursos"], getCursos, {
        refetchOnWindowFocus: false,
    });

    const { mutate, error } = useMutation(saveAluno, {
        onSuccess: () => {
            alert('Salvo com sucesso'),
            queryClient.invalidateQueries(["@alunos"]);
        },
        onError: () => alert('Erro ao salvar dados'),
    });

    const { mutate: editMutate } = useMutation(alterarAluno, {
        onSuccess: () => {
            alert('Salvo com sucesso'),
            queryClient.invalidateQueries(["@alunos"]);
        },
        onError: () => alert('Erro ao salvar dados'),
    });

    function editarAluno(){
        editMutate({
            id: formData.id,
            nome: formData.nome,
            matricula: formData.matricula,
            curso: formData.curso,
            bimestre: formData.bimestre,
          });
          clearState();
    }

    function save() {
        mutate({
          nome: formData.nome,
          matricula: formData.matricula,
          curso: formData.curso,
          bimestre: formData.bimestre,
        });
        clearState();
      }

    if (isFetching){
        return <h2>Carregando...</h2>;
    }

    return (
        <div>
            <input
                placeholder="Nome" 
                value={formData.nome} 
                onChange={(event) => 
                    setFormData({...formData, nome: event.target.value})
                }
            />
            <input 
                placeholder="Matrícula" 
                value={formData.matricula} 
                onChange={(event) => 
                    setFormData({...formData, matricula: event.target.value})
                }
            />
            <select
                value={formData.curso} 
                onChange={(event) => 
                    setFormData({...formData, curso: event.target.value})
                    }
            >
                {data.cursos.map((curso)=>(
                    <option key={curso.id}>{curso.name}</option>
                ))}
            </select>
            <input 
                placeholder="Bimestre"
                value={formData.bimestre} 
                onChange={(event) => 
                    setFormData({...formData, bimestre: event.target.value})
                } />
            <button onClick={formData.id ? editarAluno : save}>Salvar</button>
        </div>
    )
}