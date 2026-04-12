"use client";
import { createContext, useContext, useState } from "react";

const HeaderContext = createContext({
    title: "",
    setTitle: (title: string) => {}
});

export const HeaderProvider = ({ children }: { children: React.ReactNode }) => {
    const [title, setTitle] = useState("");
    return <HeaderContext value={{ title, setTitle }}>{children}</HeaderContext>;
};

export const useHeader = () => useContext(HeaderContext); // 아래 컴포넌트에서 읽기 위해 호출
