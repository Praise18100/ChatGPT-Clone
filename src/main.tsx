import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "./components/ui/provider.tsx";
import { FormProvider } from "./components/ui/form-context.tsx"; 
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
      <Provider>
        <FormProvider>   
          <App />
        </FormProvider>
      </Provider>
    </BrowserRouter>
);
