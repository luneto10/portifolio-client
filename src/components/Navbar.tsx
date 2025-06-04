"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import React, { useState } from "react";

const navItems = [
    { label: "About", href: "#about" },
    { label: "Technologies", href: "#technologies" },
    { label: "Projects", href: "#projects" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const handleScroll = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string
    ) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
            setOpen(false);
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur border-b border-border">
            <div className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 h-20">
                <a
                    href="#about"
                    onClick={(e) => handleScroll(e, "#about")}
                    className="font-bold text-2xl tracking-tight"
                >
                    Portfolio
                </a>
                <div className="hidden md:flex gap-4 items-center">
                    {navItems.map((item, i) => (
                        <React.Fragment key={item.href}>
                            <Button
                                asChild
                                variant="ghost"
                                size="sm"
                                className="px-4 font-medium text-lg"
                            >
                                <a
                                    href={item.href}
                                    onClick={(e) => handleScroll(e, item.href)}
                                >
                                    {item.label}
                                </a>
                            </Button>
                            {i < navItems.length - 1 && (
                                <Separator
                                    orientation="vertical"
                                    className="h-6"
                                />
                            )}
                        </React.Fragment>
                    ))}
                </div>
                <div className="md:hidden">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="size-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="p-0 w-64">
                            <div className="flex flex-col gap-1 pt-8">
                                {navItems.map((item) => (
                                    <Button
                                        key={item.href}
                                        asChild
                                        variant="ghost"
                                        size="lg"
                                        className="justify-start w-full text-lg px-6 py-4"
                                    >
                                        <a
                                            href={item.href}
                                            onClick={(e) =>
                                                handleScroll(e, item.href)
                                            }
                                        >
                                            {item.label}
                                        </a>
                                    </Button>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}
