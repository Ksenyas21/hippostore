"use client"
import {Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Separator} from "@/components/ui/separator";
import {ShoppingCart} from "lucide-react";
import {formatPrice} from "@/lib/utils";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";
import Image from "next/image";

const Cart = () => {

    const itemsCount = 0
    const fee = 1
    return(
        <Sheet>
            <SheetTrigger className="group -m-2 flex items-center p-2">
                <ShoppingCart
                    aria-hidden="true"
                    className="h-6 w-6 fllex-shrink-0 text-gray-400 group-hover:text-gray-500" />
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                   {itemsCount}
                </span>
            </SheetTrigger>
            <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
                <SheetHeader className=" space-y-2.5 pr-6">
                    <SheetTitle>
                        Cart ({itemsCount})
                    </SheetTitle>
                </SheetHeader>
                {
                    itemsCount > 0 ? (
                        <>
                            <div className="flex w-full flx-col pr-6">
                                {/*  TODO: card logic */}
                                card items
                            </div>
                            <div className="space-y-4 pr-6">
                                <Separator />
                                <div className="space-y-1.5 text-sm">
                                    <div className="flex">
                                        <span className="flex-1">Shipping</span>
                                        <span>Free</span>
                                    </div>
                                    <div className="flex">
                                        <span className="flex-1">Transaction Fee</span>
                                        <span>{formatPrice(fee)}</span>
                                    </div>
                                    <div className="flex">
                                        <span className="flex-1">Total</span>
                                        <span>{formatPrice(fee)}</span>
                                    </div>
                                </div>
                                <SheetFooter>
                                    <SheetTrigger asChild>
                                        <Link
                                            href="/cart"
                                            className={buttonVariants(
                                                { className: 'w-full' })}>
                                            Continue to Checkout
                                        </Link>
                                    </SheetTrigger>
                                </SheetFooter>
                            </div>
                        </>
                    ) : (
                        <div className="flex h-full flex-col items-center justify-center space-y-1">
                            <div className="relative mb-4 h-60 w-60 text-muted-foreground">
                                <Image src="/hippo-empty-cart.png" fill alt="empty shopping card hippo" />
                            </div>
                            <div className="text-xl font-semibold">
                                Your cart is empty
                            </div>
                            <SheetTrigger asChild>
                                <Link
                                    href="/products"
                                    className={buttonVariants({
                                        variant: "link",
                                        size: 'sm',
                                        className: 'text-sm text-muted-foreground'})}>
                                    Add Items to your cart to checkout
                                </Link>
                            </SheetTrigger>
                        </div>
                    )
                }
            </SheetContent>
        </Sheet>
    )
};
export default Cart;
