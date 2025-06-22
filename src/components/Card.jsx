export const Card = ( {photo, children} ) => {

    return (
        <div className="rounded-xl border-4 bg-cardBackground border-titleText/10 hover:-translate-y-1 hover:border-blue-500/30 shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-500">
            {
                photo != null ? <img className="rounded-t-lg h-60 object-cover w-full" src={photo} /> : <></>
            }
            <div className="p-6">
                {children}
            </div>
        </div>
    )
}