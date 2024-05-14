import s from './Intro.module.scss';

const Intro = () => {
	return (
		<section className={s.container}>
			<article className={s.info}>
				<h1 className={s.infoTitle}>
					Перетворіть ваші <br/>
					фінансові цілі у реальність
				</h1>
				<p className={s.infoDesc}>
					{`Місія ТОВ "СЕНТ ПРО" - забезпечити наших клієнтів доступом до різноманітних фінансових рішень, що відповідають їхнім потребам та сприяють їхньому успіху.`}
				</p>
			</article>
		</section>
	);
};

export default Intro;
