import Grid from "./Grid";
import { useApiContext } from "@/context/ApiContext";
import Masonry from "./Masonry";
import Bento from "./Bento";

export default function LayoutDisplay() {
    const {
        appearance: {
            layout
        }
    } = useApiContext();

    return (
        <div className="h-1/2">
            {layout === "grid" &&
                <Grid />
            }
            {layout === "masonry" &&
                <Masonry />
            }
            {layout === "bento" &&
                <Bento />
            }
        </div>
    );
};