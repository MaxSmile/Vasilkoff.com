import React from "react";
import { InlineWidget } from "react-calendly";
import NoSSR from "./NoSSR";
export default function Calendly() {
    return (
    <NoSSR>
    <InlineWidget url="https://calendly.com/dev-vasilkoff-ltd/30min" />
    </NoSSR>
    );
}