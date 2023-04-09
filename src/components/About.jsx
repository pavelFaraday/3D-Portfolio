import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
	<Tilt className="xs:w-[250px] w-full">
		<motion.div
			variants={fadeIn("right", "spring", index * 0.5, 0.75)}
			className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
		>
			<div
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
			>
				<img
					src={icon}
					alt="web-development"
					className="w-16 h-16 object-contain"
				/>

				<h3 className="text-white text-[20px] font-bold text-center">
					{title}
				</h3>
			</div>
		</motion.div>
	</Tilt>
);

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
			>
				I have expert knowledge and experience in building complex,
				modern and responsive friendly websites. I work in{" "}
				<a
					class="companySite"
					href="https://mc-zero.one/"
					target="_blank"
				>
					Mc-Zero.One
				</a>{" "}
				as Full Stack Web Developer & develop fully fledged platforms. I
				really enjoy learning languages and frameworks like React and
				Next.js, as well as work in WordPress. You can get acquainted
				with the experience and additional projects gained in Web
				development through my{" "}
				<a
					class="companySite"
					href="https://github.com/pavelFaraday"
					target="_blank"
				>
					Github
				</a>{" "}
				profile & Company Website. Over the years, working with teams
				and clients through Agile methodology (Scrum Framework) I have
				developed the skills to help you define goals & priorities,
				manage your project delivery and increase team productivity.
			</motion.p>

			<div className="mt-20 flex flex-wrap gap-10">
				{services.map((service, index) => (
					<ServiceCard
						key={service.title}
						index={index}
						{...service}
					/>
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");
