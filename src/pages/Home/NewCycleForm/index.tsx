import { useFormContext } from 'react-hook-form'
import * as S from './styles'

import { useContext } from 'react'
import { CyclesContext } from '..'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <S.FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <S.TaskInput
        type="text"
        id="task"
        placeholder="de um nome para seu projeto"
        list="task-suggestions"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Teste 1" />
        <option value="Teste 2" />
        <option value="Teste 3" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <S.MinutesAmountInput
        type="number"
        min={5}
        max={60}
        id="minutesAmount"
        placeholder="00"
        step={5}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos</span>
    </S.FormContainer>
  )
}
