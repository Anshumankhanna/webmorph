import Products from "./Product";

export default function Masonry() {
    return (
        <div className="h-full p-3 flex flex-col gap-5">
            <div className="full flex gap-5">
                <Products width={"70%"} height={"100%"} />
                <Products width={"30%"} height={"100%"} />
            </div>
            <div className="full flex gap-5">
                <Products width={"30%"} height={"100%"} />
                <Products width={"70%"} height={"100%"} />
            </div>
        </div>
    );
};