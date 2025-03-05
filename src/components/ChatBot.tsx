"use client";

import { useApiContext } from "@/context/ApiContext";
import { Appearance, Output } from "@/types/MorphieResponse";
import { FormEvent, useEffect, useState } from "react";

export default function ChatBot() {
    const {
        appearance: {
            colors: {
                primary_color,
                background_color
            }
        },
        setAppearance
    } = useApiContext();
    const [appearanceList, setAppearanceList] = useState<Appearance[]>([]);
    const [user_input, setUser_input] = useState<string>("");
    const [opacityState, setOpacityState] = useState(1);
    const [text, setText] = useState("");
    
    async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();

        if (user_input !== "") {
            try {
                // There shouldn't be any leading or trailing spaces.
                setUser_input(user_input.trim());

                const response = await fetch(`/api/ai?user_input=${user_input}`);
                const output: Output | Appearance[] | { error: string } = await response.json();
                
                if ("error" in output) {
                    setText(output.error);
                } else if ("output" in output) {
                    setText(output.output);
                } else {
                    setAppearanceList(output);
                }
            } catch (err) {
                console.log("error");
                console.log(err);
            }
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setOpacityState(0);
            setText("");

            setTimeout(() => {
                setOpacityState(1);
            }, 100);
        }, 5000);
    }, [text]);

    return (
        <div className="w-1/2 p-3">
            <div className="full rounded-md p-6 flex flex-col gap-5" style={{ boxShadow: `0 0 5px ${primary_color}` }}>
                <form onSubmit={handleSubmit}>
                    <input value={user_input} onChange={(event) => { setUser_input(event.target.value); }} className="rounded-lg px-3 py-2 w-full outline-none" type="text" style={{
                        backgroundColor: background_color,
                        boxShadow: `0 0 5px ${primary_color}`,
                        color: primary_color
                    }} placeholder="Enter here" />
                </form>
                {appearanceList &&
                    <div className="w-full flex-grow rounded-lg flex gap-3">
                        {appearanceList.map((elem, index) => (
                            <button className="h-full flex flex-col border flex-grow rounded-lg" key={`appearanceList ${index} element`} onClick={() => {
                                setAppearance(elem);
                            }}>
                                <div className="w-full text-center border-b-2" style={{
                                    color: primary_color
                                }}>
                                    {elem.layout}
                                </div>
                                <div className="w-full flex-grow p-3 grid grid-cols-2 grid-rows-2 gap-4">
                                    <div className="border rounded-lg" style={{
                                        backgroundColor: elem.colors.primary_color
                                    }}></div>
                                    <div className="border rounded-lg" style={{
                                        backgroundColor: elem.colors.secondary_color
                                    }}></div>
                                    <div className="border rounded-lg" style={{
                                        backgroundColor: elem.colors.accent_color
                                    }}></div>
                                    <div className="border rounded-lg" style={{
                                        backgroundColor: elem.colors.background_color
                                    }}></div>
                                </div>
                            </button>
                        ))}
                    </div>
                }

                {text &&
                    <div className="p-2 border rounded-lg" style={{ opacity: opacityState, transition: "opacity linear 1s" }}>
                        {text}
                    </div>
                }
            </div>
        </div>
    );
};