import * as React from 'react'
import registry from './Registry'
import elements from 'Elements'
import {ReactNode} from "react";

export function renderElement(id: number): ReactNode {
    const container = registry[id]

}