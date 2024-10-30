"use client";

import { BsArrowLeftCircle } from "react-icons/bs";

export default function BackHistoryButton() {

    return (
        <button onClick={() => window.history.back()} className='text-secondary py-4'>
            <BsArrowLeftCircle className='text-2xl' />
          </button>
          );
}