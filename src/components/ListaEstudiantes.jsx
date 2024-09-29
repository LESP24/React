import Estudiante from "./Estudiante.jsx";

const ListaEstudiantes = ({ estudiante, estudiantes, borrar, setEstudiante }) => {
  return (
    <div className="col-md-7 mt-2">
      <div className="card">
        <div className="card-header">Lista de estudiantes</div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Correo</th>
                <th scope="col">Telefono</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {estudiantes && estudiantes.length > 0 ?
              (
                estudiantes.map((est) => (
                    <Estudiante setEstudiante={setEstudiante} borrar={borrar} estudiante={est} key={est.id} />
                ))
              ):
                (<tr>
                  <td colSpan={5} scope = "row">No hay estudiantes</td>
                </tr>)
                }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
  
export default ListaEstudiantes;