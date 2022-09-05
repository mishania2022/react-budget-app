import { Budget } from '../Budget/Budget'
import { HeaderBudgetApp } from '../HeaderBudgetApp/HeaderBudgetApp'
import { Remaining } from '../Remaining/Remaining'
import { Spent } from '../Spent/Spent'
import { StyledBudgetApp } from './styles'

export const BudgetApp = () => {
  return (
    <StyledBudgetApp>
      <HeaderBudgetApp/>
      <Budget/>
      <Remaining/>
      <Spent/>
    </StyledBudgetApp>
  )
}
