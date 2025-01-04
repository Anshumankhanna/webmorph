import Products from "./Product";

export default function Bento() {
    return (
        <div className="h-full p-3 flex gap-5">
            <div className="w-1/3 h-full flex flex-col gap-5">
                <Products width={"100%"} height={"50%"} />
                <Products width={"100%"} height={"50%"} />
            </div>

            <Products width={"33%"} height={"100%"} />
            <Products width={"33%"} height={"100%"} />
        </div>
    );
};