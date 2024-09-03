import MainBlock from "./components/MainBlock/MainBlock";
import Choose from "./components/Choose/Choose";
import Create from "./components/Create/Create";
import Reviews from "./components/Reviews/Reviews";
import Histories from "./components/Histories/Histories";
import Bottom from "./components/Bottom/Bottom";
import styles from "../app/styles/page.module.scss";
import Gallery from "./components/Gallery/Gallery";

export default function Home() {
	return (
		<main className={styles.page}>
			<MainBlock />
			<Choose />
			<Create />
			<Reviews />
			<Gallery />
			<Histories />
			<Bottom />
		</main>
	);
}
