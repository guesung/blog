'use client'

import { useHello } from "@guesung/hooks"

export default function ClientComponent () {
    useHello();
    return <div>ClientComponent</div>
}}
