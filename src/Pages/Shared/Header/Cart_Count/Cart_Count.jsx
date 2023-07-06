
const Cart_Count = () => {
    return (
        <div className="flex gap-3 justify-center items-center cursor-pointer group">
            <p className="text-xl font-semibold"><span className="text-primary font-black">৳</span>{150}</p>
            <div className="border-2 border-primary px-3 relative rounded-b-lg font-semibold group-hover:bg-primary group-hover:text-black">
                {2}
                <p className="w-5 h-10 rounded-full border-t-2 border-primary absolute -top-3 left-0 right-0 mx-auto"></p>
            </div>
        </div>
    );
};

export default Cart_Count;