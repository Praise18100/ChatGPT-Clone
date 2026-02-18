import { createContext, useContext, useState } from "react";


/**
 * Our form state
 */
type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  bio: string;
};

type FormContextType = {
  data: FormData;
  updateData: (values: Partial<FormData>) => void;
  reset: () => void;
};

const FormContext = createContext<FormContextType | null>(null);

export const useRegister = () => {
  const ctx = useContext(FormContext);
  if (!ctx) throw new Error("useRegister must be inside RegisterProvider");
  return ctx;
};

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    bio: "",
  });

  const updateData = (values: Partial<FormData>) => {
    setData((prev) => ({ ...prev, ...values }));
  };

  const reset = () => {
    setData({
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      bio: "",
    });
  };

  return (
    <FormContext.Provider value={{ data, updateData, reset }}>
      {children}
    </FormContext.Provider>
  );
};
