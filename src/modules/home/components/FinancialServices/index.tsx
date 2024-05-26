import Accordion from '@modules/common/components/Accordion';
import DocumentsList from '@modules/common/components/DocumentsList';
import SplitBlocks from '@modules/common/components/SplitBlocks';
import {
	factoringDocumentsList,
	lendingDocumentsList,
} from '@modules/home/components/About/data';

const HomeFinancialServices = () => {
	return (
		<SplitBlocks
			title="Фінансові послуги"
			titleType="heading"
			anchor="fin-services"
		>
			<Accordion title="Надання коштів та банківських металів у кредит">
				<p>Для юридичних осіб та фізичних осіб-підприємців</p>
				<br />
				<DocumentsList list={lendingDocumentsList} />
			</Accordion>

			<Accordion title="Факторинг">
				<DocumentsList list={factoringDocumentsList} />
			</Accordion>
		</SplitBlocks>
	);
};

export default HomeFinancialServices;
