import { ActionTypes } from './actions'

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptDate?: Date
  finishedDate?: Date
}

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export type AddNewCycleAction = {
  type: ActionTypes.ADD_NEW_CYCLE
  payload: {
    newCycle: Cycle
  }
}

export type InterruptNewCycleAction = {
  type: ActionTypes.INTERRUPT_NEW_CYCLE
}

export type MarkCurrentCycleAsFinishedAction = {
  type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED
}

type CyclesAction =
  | AddNewCycleAction
  | InterruptNewCycleAction
  | MarkCurrentCycleAsFinishedAction

export function cyclesReducer(state: CyclesState, action: CyclesAction) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
      return {
        ...state,
        cycles: [...state.cycles, action.payload.newCycle],
        activeCycleId: action.payload.newCycle.id,
      }
    case ActionTypes.INTERRUPT_NEW_CYCLE:
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === state.activeCycleId) {
            cycle.interruptDate = new Date()
          }
          return cycle
        }),
        activeCycleId: null,
      }
    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED:
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === state.activeCycleId) {
            cycle.finishedDate = new Date()
          }
          return cycle
        }),
        activeCycleId: null,
      }
    default:
      return state
  }
}
