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
  uni: string;
  password: string;
  conpassword: string;
  degree: string;
  course: string;
  grad: string;
  gender: string;
  picture: File | null;
  picturePreview: string | null;
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
    uni: "",
    password: "",
    conpassword: "",
    degree: "",
    course: "",
    grad: "",
    gender: "",
    picture: null,
    picturePreview: null,
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
      uni: "",
      password: "",
      conpassword: "",
      degree: "",
      course: "",
      grad: "",
      gender: "",
      picture: null,
      picturePreview: null,
    });
  };

  return (
    <FormContext.Provider value={{ data, updateData, reset }}>
      {children}
    </FormContext.Provider>
  );
};
