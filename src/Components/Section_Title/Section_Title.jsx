
const Section_Title = ({firstWord, secondWord}) => {
    return (
        <div className="text-center mb-5">
            <h1 className="text-3xl mb-1">
                <span>{firstWord}</span> <span className="font-bold">{secondWord}</span>
            </h1>
            <p className="h-2 w-10 bg-primary mx-auto rounded-full"></p>
            
        </div>
    );
};

export default Section_Title;