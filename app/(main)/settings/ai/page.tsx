"use client";
import Button from "@/components/common/button";
import Input from "@/components/common/input";

export default function AI() {
    return (
        <section className="section">
            <div className="flex flex-col gap-[10px]">
                <Input placeholder="API Key 입력"></Input>
                <Button>등록</Button>
            </div>
        </section>
    );
}
