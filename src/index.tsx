import ReactDOM from "react-dom/client";
import { App } from "./App";
import { GlobalStyles } from "./config/GlobalStyles";
import { BudgetContextProvider } from "./context/BudgetContext/BudgetContext";
import { CurrencyContextProvider } from "./context/CurrencyContext/CurrencyContext";
import { ExpensesContextProvider } from "./context/ExpensesContext/ExpensesContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <GlobalStyles />
    <BudgetContextProvider>
      <CurrencyContextProvider>
        <ExpensesContextProvider>
          <App />
        </ExpensesContextProvider>
      </CurrencyContextProvider>
    </BudgetContextProvider>
  </>
);
