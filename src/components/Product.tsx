import { useApiContext } from "@/context/ApiContext";

export default function Products({ width, height }: { width: string, height: string }) {
    const {
        appearance: {
            colors: {
                primary_color,
                background_color
            }
        }
    } = useApiContext();

    return (
        <div className="rounded-lg flex justify-center items-center custom-shadow" style={{ width, height, backgroundColor: background_color }}>
            <p className="font-mono" style={{ color: primary_color }}>
                Here some products will come <br />
                Overall it shows a layout type
            </p>
        </div>
    );
};