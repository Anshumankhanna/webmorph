"use client";

import ChatBot from "@/components/ChatBot";
import LayoutDisplay from "@/components/LayoutDisplay";
import Morphie from "@/components/Morphie";
import SideBar from "@/components/SideBar";

export default function Page() {
	return (
		<div className="full flex flex-grow">
			<SideBar />
			<div className="flex flex-col flex-grow p-5">
				<div className="flex h-1/2">
					<Morphie />
					<ChatBot />
				</div>
				<LayoutDisplay />
			</div>
		</div>
	);
};