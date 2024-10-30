"use client";

import { BsArrowDownLeftCircle } from "react-icons/bs";

export default function BackHistoryButton() {

    return (
        <button onClick={() => window.history.back()} className='text-secondary py-4'>
            <BsArrowDownLeftCircle className='text-2xl' />
          </button>
          );
}