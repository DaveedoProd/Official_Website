import clsx from "clsx";
import { Link } from "react-router-dom";

const Button = ({ id, before, after, rightIcon, leftIcon, containerClass, linkTo }) => {
    return (
        <Link to={linkTo}>
            <button
                id={id}
                className={clsx(
                    "group relative z-10 cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black",
                    "w-45",
                    containerClass
                )}
            >
                {leftIcon}

                <span className="relative inline-flex w-40 overflow-hidden font-general text-xs">
                    <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12 ml-auto mr-auto">
                        {before}
                    </div>
                    <div className="absolute translate-y-[164%] skew-y-20 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0 ml-auto">
                        {after}
                    </div>
                </span>

                {rightIcon}
            </button>
        </Link>
    );
};

export default Button;
