import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ReactNode } from "react";

type TMainButton = {
	children: ReactNode;
};

export const MainButton = ({
	children,
	className,
	...props
}: TMainButton & React.ComponentPropsWithoutRef<"button">) => {
	return (
		<Button
			className={`${cn(
				"bg-main-green text-white py-1 px-4 font-bold rounded-lg w-fit cursor-pointer hover:bg-secondary-green",
				className
			)}`}
			{...props}
		>
			{children}
		</Button>
	);
};
