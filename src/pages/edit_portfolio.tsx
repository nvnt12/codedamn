import NavBar from '../../components/NavBar'
import SideNav from '../../components/SideNav'
import PrimaryButton from '../../components/PrimaryButton'
import SecondaryButton from '../../components/SecondaryButton'
import Card from '../../components/Card'

export default function Edit_Porfolio(props: any) {
	return (
		<>
			<NavBar />
			<div className="flex p-12 justify-between">
				<SideNav />
				<div className="w-9/12 px-20">
					<div className="mb-8 w-full">
						<div className="flex justify-between items-center mb-6">
							<h1 className="font-semibold text-2xl"></h1>
						</div>
						<div className="grid grid-cols-2 gap-4">
							<Card
								type="playground"
								src={'/html-logo.png'}
								alt="Image"
								title="Facebook Clone"
								lang="HTML/CSS"
								date="12/2/2023"
								selected="true"
							/>
							<Card
								type="playground"
								src={'/html-logo.png'}
								alt="Image"
								title="Facebook Clone"
								lang="HTML/CSS"
								date="12/2/2023"
							/>
							<Card
								type="playground"
								src={'/html-logo.png'}
								alt="Image"
								title="Facebook Clone"
								lang="HTML/CSS"
								date="12/2/2023"
								selected="true"
							/>
							<Card
								type="playground"
								src={'/html-logo.png'}
								alt="Image"
								title="Facebook Clone"
								lang="HTML/CSS"
								date="12/2/2023"
							/>
						</div>
					</div>
					<div className="mb-8 w-full">
						<div className="flex justify-between items-center mb-6">
							<h1 className="font-semibold text-2xl">Projects</h1>
						</div>
						<div className="grid grid-cols-2 gap-4">
							<Card
								type="project"
								src={'/project-img.png'}
								alt="Image"
								title="Facebook Login Page"
								lang="HTML/CSS"
								date="12/2/2023"
								selected="true"
							/>
							<Card
								type="project"
								src={'/project-img.png'}
								alt="Image"
								title="Quiz App"
								lang="HTML/CSS"
								date="12/2/2023"
							/>
							<Card
								type="project"
								src={'/project-img.png'}
								alt="Image"
								title="Twitter Clone"
								lang="HTML/CSS"
								date="12/2/2023"
							/>
							<Card
								type="project"
								src={'/project-img.png'}
								alt="Image"
								title="Calculator"
								lang="HTML/CSS"
								date="12/2/2023"
							/>
						</div>
					</div>

					<div className="mb-6 flex justify-end">
						<SecondaryButton value="Cancel"></SecondaryButton>
						<PrimaryButton value="Save changes" type="submit"></PrimaryButton>
					</div>
				</div>
			</div>
		</>
	)
}
