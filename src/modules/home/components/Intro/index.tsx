import { COMPANY_CATCHPHRASE } from '@utils/const';

import s from './Intro.module.scss';

const Intro = () => {
	return (
		<section className={s.container}>
			<article className={s.info}>
				<h1 className={s.infoTitle}>
					Вигідні рішення <br /> для вашого зростання
				</h1>
				<p className={s.infoDesc}>{COMPANY_CATCHPHRASE}</p>
			</article>
		</section>
	);
};

export default Intro;
