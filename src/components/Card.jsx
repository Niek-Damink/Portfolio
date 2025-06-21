export const Card = ( {children} ) => {

    return (
        <div className="p-6 rounded-xl border-4 bg-cardBackground border-titleText/10 hover:-translate-y-1 hover:border-blue-500/30 shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-500">
            {children}
        </div>
    )
}