import { SectionTitle } from "@/components/common/SectionTitle";
import { SignUpForm } from "@/features/auth/components/SignupForm";
import React from "react";

const page = () => {
	return (
		<div className="flex min-h-[calc(100svh-80px)] w-full items-center justify-center p-6 md:p-10">
			<div className="w-full max-w-sm">
				<div className="flex items-centerk justify-center mb-10 text-center">
					<SectionTitle title="Get Started" description="Create new account" />
				</div>
				<SignUpForm />
			</div>
		</div>
	);
};

export default page;
