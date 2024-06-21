import { Play } from 'phosphor-react'
import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  TaskInput,
} from './styles'
import { Button } from '../../components/Button'

export function Home() {
  return (
    <HomeContainer>
      <form action="#">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            type="text"
            id="task"
            placeholder="de um nome para seu projeto"
            list="task-suggestions"
          />

          <datalist id="task-suggestions">
            <option value="Teste 1" />
            <option value="Teste 2" />
            <option value="Teste 3" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            min={5}
            max={60}
            id="minutesAmount"
            placeholder="00"
            step={5}
          />

          <span>minutos</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <Button type="submit">
          <Play size={24} />
          Começar
        </Button>
      </form>
    </HomeContainer>
  )
}
