export const WorkGridItem = () => {
    return (
        <div className="cursor-pointer">
            <div className="h-[200px] w-[200px] bg-red-400 rounded-lg"></div>
            <div className="text-center p-5">
                <h1 className="font-bold text-2xl mb-5">Title</h1>
                <p>Description</p>
            </div>
        </div>
    )
}