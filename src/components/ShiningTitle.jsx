export const ShiningTitle = ({children}) => {

    return (
        <span className="text-4xl font-extrabold text-center mb-2 text-blue-500/70 pb-2 border-b-4 px-5
        animate-shiny bg-clip-text bg-no-repeat [background-position:0_0] [background-size:100px_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)]
        bg-gradient-to-r from-transparent via-50% to-transparent via-primaryText/80"
        >
            {children}
        </span>
    )
}