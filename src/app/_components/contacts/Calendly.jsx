"use client";
import React from "react";
import { InlineWidget } from "react-calendly";
// import NoSSR from "./NoSSR";
export default function Calendly() {
    return (
        <>
            <InlineWidget url="https://calendly.com/dev-vasilkoff-ltd/30min" className="min-h-[680px]"/>
        </>
    );
}