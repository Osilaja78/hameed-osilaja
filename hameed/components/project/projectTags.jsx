import React from "react";

export default function Tag({ name }) {
    return (
        <div className="px-3 text-[11px] pt-2 pb-3 rounded-3xl bg-black bg-opacity-20 max-w-max hover:bg-opacity-30">
            {name}
        </div>
    )
}