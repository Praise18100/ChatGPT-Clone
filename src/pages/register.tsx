import { Routes, Route, Navigate } from "react-router-dom";
import { FormProvider } from "../components/ui/form-context"

import StepOne from "../components/ui/register/step1";
import StepTwo from "../components/ui/register/step2";
import StepThree from "../components/ui/register/step3";
import Summary from "../components/ui/register/summary";

export function Register() {
  return (
    <FormProvider>
      <Routes>
        {}
        <Route index element={<Navigate to="step1" replace />} />

        <Route path="step1" element={<StepOne />} />
        <Route path="step2" element={<StepTwo />} />
        <Route path="step3" element={<StepThree />} />
        <Route path="summary" element={<Summary />} />
      </Routes>
    </FormProvider>
  );
}
