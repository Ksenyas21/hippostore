"use client";

import {Button} from "@/components/ui/button";
import {useEffect, useState} from "react";

const AddCardButton = () => {
    const [isSuccess, setIsSuccess] = useState<boolean>(false);

    useEffect(() =>{
       const timeout = setTimeout(() => {
            setIsSuccess(false)
        }, 2000)

        return () => clearTimeout(timeout)
    },[isSuccess])
    return (
        <Button onClick={() => {
            setIsSuccess(true)

        }} size="lg" className="w-full">
            {isSuccess ? 'Added!' : 'Add to cart'}
        </Button>
    )
}

export default AddCardButton;
