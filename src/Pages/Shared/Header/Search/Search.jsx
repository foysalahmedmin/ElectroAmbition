import { FaSearch } from "react-icons/fa";

const Search = () => {
    return (
        <form className="flex gap-3 justify-between items-center border border-base-content p-3 w-full">
            <input className="outline-none bg-transparent w-full flex-1" type="text" placeholder="Search" required />
            <button type="submit"><FaSearch className="text-primary" /></button>
        </form>
    );
};

export default Search;