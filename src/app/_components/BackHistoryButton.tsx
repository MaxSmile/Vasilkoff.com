"use client";
import { ArrowLeftCircle } from "react-bootstrap-icons";

export default function BackHistoryButton() {

    return (
        <button onClick={() => window.history.back()} className='text-secondary py-4'>
            <ArrowLeftCircle className='text-2xl' />
          </button>
          );
}