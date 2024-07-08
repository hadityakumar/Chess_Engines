import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePageTitle } from '@/context/PageTitleContext.js';
import {
    IconButton,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    Drawer,
    Card,
} from "@material-tailwind/react";
import {
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";

export function SidebarWithBurgerMenu() {
    const { setPageTitle } = usePageTitle();
    const [open, setOpen] = React.useState(0);
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const openDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);

    const handleLinkClick = (title) => {
        closeDrawer();
        setPageTitle(title);
    };

    return (
        <>
            <IconButton variant="text" size="lg" onClick={openDrawer}>
                {isDrawerOpen ? (
                    <XMarkIcon className="h-8 w-8 stroke-2" />
                ) : (
                    <Bars3Icon className="h-8 w-8 stroke-2" />
                )}
            </IconButton>
            <Drawer open={isDrawerOpen} onClose={closeDrawer}>
                <Card
                    color="transparent"
                    shadow={false}
                    className="h-[calc(100vh-2rem)] w-full p-4"
                >
                    <div className="mb-2 flex items-center gap-4 p-4">
                        <Image
                            src="/board.svg"
                            alt="brand"
                            width={32}
                            height={32}
                            className="h-8 w-8"
                        />
                        <Typography variant="h5" color="blue-gray">
                            Modes
                        </Typography>
                    </div>
                    <List>
                        <hr className="my-2 border-blue-gray-100" />
                        <Link href="/">
                            <ListItem onClick={() => handleLinkClick('Chess Engines')} className="text-black">
                                <ListItemPrefix>
                                    <Image
                                        src="/home.svg"
                                        alt="brand"
                                        width={32}
                                        height={32}
                                        className="h-8 w-8"
                                    />
                                </ListItemPrefix>
                                Home
                            </ListItem>
                        </Link>
                    </List>
                    <List className="">
                        <hr className="my-2 border-blue-gray-100" />
                        <Link href="/random">
                            <ListItem onClick={() => handleLinkClick('Random Chess Engine')} className="text-black">
                                <ListItemPrefix>
                                    <Image
                                        src="/pawn.svg"
                                        alt="brand"
                                        width={32}
                                        height={32}
                                        className="h-8 w-8"
                                    />
                                </ListItemPrefix>
                                Random Engine
                            </ListItem>
                        </Link>
                        <Link href="/stockfish">
                            <ListItem onClick={() => handleLinkClick('StockFish Chess Engine')} className="text-black">
                                <ListItemPrefix>
                                    <Image
                                        src="/horse.svg"
                                        alt="brand"
                                        width={32}
                                        height={32}
                                        className="h-8 w-8"
                                    />
                                </ListItemPrefix>
                                StockFish Engine
                            </ListItem>
                        </Link>
                        <Link href="/ml-model">
                            <ListItem onClick={() => handleLinkClick('Trained ML Model')} className="text-black items-center">
                                <ListItemPrefix>
                                    <Image
                                        src="/queen.svg"
                                        alt="brand"
                                        width={32}
                                        height={32}
                                        className="h-8 w-8"
                                    />
                                </ListItemPrefix>
                                ML Model
                            </ListItem>
                        </Link>
                    </List>
                </Card>
            </Drawer>
        </>
    );
}
