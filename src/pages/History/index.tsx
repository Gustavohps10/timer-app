import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Minha tarefa</td>
              <td>20 minutos</td>
              <td>Ha 20 minutos</td>
              <td>
                <Status color="green">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Minha tarefa</td>
              <td>20 minutos</td>
              <td>Ha 20 minutos</td>
              <td>
                <Status>Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Minha tarefa</td>
              <td>20 minutos</td>
              <td>Ha 20 minutos</td>
              <td>
                <Status>Concluído</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
