import { SectionTitle } from "@/components/common/SectionTitle";
import { LoginForm } from "@/features/auth/components/LoginForm";

export const Page = () => {
	return (
		<div className="flex min-h-[calc(100svh-80px)] w-full items-center justify-center p-6 md:p-10">
			<div className="w-full max-w-sm">
				<div className="flex items-centerk justify-center mb-10 text-center">
					<SectionTitle
						title="Welcome Again"
						description="Login to your account"
					/>
				</div>
				<LoginForm />
			</div>
		</div>
	);
};

export default Page;
