"use client";

import { useApiContext } from "@/context/ApiContext";
import Image from "next/image";
import styles from "@/components/SideBar.module.css"

export default function SideBar() {
    const size: number = 100;
    const {
        appearance: {
            colors: {
                primary_color,
                accent_color,
                background_color
            }
        }
    } = useApiContext();

    return (
        <div className={`h-full w-32 flex flex-col items-center py-5 px-3 gap-5 border-r custom-shadow ${styles["side-bar"]}`} style={{ backgroundColor: background_color, color: primary_color }}>
            <div style={{ backgroundColor: accent_color }}>
                <div>
                    <Image
                        className="full"
                        src={"/Search.png"}
                        width={size}
                        height={size}
                        alt="here"
                    />
                </div>
            </div>
            <div>
                <div>
                    <Image
                        className="full"
                        src={"/Home.png"}
                        width={size}
                        height={size}
                        alt="here"
                    />
                </div>
                Home
            </div>
            <div>
                <div>
                    <Image
                        className="full"
                        src={"/Get-started.png"}
                        width={size}
                        height={size}
                        alt="here"
                    />
                </div>
                Get Started
            </div>
            <div>
                <div>
                    <Image
                        className="full"
                        src={"/Book.png"}
                        width={size}
                        height={size}
                        alt="here"
                    />
                </div>
                Foundation
            </div>
            <div>
                <div>
                    <Image
                        className="full"
                        src={"/Styles.png"}
                        width={size}
                        height={size}
                        alt="here"
                    />
                </div>
                Styles
            </div>
            <div>
                <div>
                    <Image
                        className="full"
                        src={"/Circle-arrows.png"}
                        width={size}
                        height={size}
                        alt="here"
                    />
                </div>
                Morphie
            </div>
            <div>
                <div>
                    <Image
                        className="full"
                        src={"/Account.png"}
                        width={size}
                        height={size}
                        alt="here"
                    />
                </div>
                You
            </div>
            <div style={{ backgroundColor: accent_color }}>
                <div>
                    <Image
                        className="full"
                        src={"/Sun.png"}
                        width={size}
                        height={size}
                        alt="here"
                    />
                </div>
            </div>
        </div>
    );
};