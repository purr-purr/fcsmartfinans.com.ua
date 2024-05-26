import { importDoc } from '@utils/formatters';
import type { IDocumentsList } from '@utils/types';

import ICON_ANALYTICS from '@public/assets/icon-analytics.svg';
import ICON_BUILDING from '@public/assets/icon-building.svg';
import ICON_MONEY from '@public/assets/icon-money.svg';
import ICON_SECURITY from '@public/assets/icon-security.svg';

export const lendingDocumentsList: IDocumentsList[] = [
	{
		title:
			'Вартість, ціна/тарифи, розмір плати (проценти) щодо фінансової послуги надання коштів та банківських металів у кредит (розміщено)',
		link: importDoc('doc_90923.pdf'),
	},
	{
		title: 'Способи погашення кредиту (розміщено)',
		link: importDoc('doc_90926.pdf'),
	},
	{
		title:
			'Правила надання юридичним особам та фізичним особам - підприємцям фінансової послуги з надання коштів та банківських металів у кредит ТОВАРИСТВА З ОБМЕЖЕНОЮ ВІДПОВІДАЛЬНІСТЮ «СМАРТФІНАНС» (дійсні з 22.03.2024 - (діючі)) (розміщено)',
		link: importDoc('doc_101643.pdf'),
	},
	{
		title:
			'Правила надання коштів у позику, в тому числі і на умовах фінансового кредиту (редакція дійсна з 23.08.2023 по 21.03.2024 (розміщено)',
		link: importDoc('doc_90927.pdf'),
	},
];

export const factoringDocumentsList: IDocumentsList[] = [
	{
		title:
			'Вартість, ціна/тарифи, розмір плати (проценти) щодо фінансової послуги з факторингу (розміщено)',
		link: importDoc('doc_90918.pdf'),
	},
	{
		title: 'Правила надання послуг з факторингу (розміщено)',
		link: importDoc('doc_90920.pdf'),
	},
	{
		title: 'Примірний договір факторингу (розміщено)',
		link: importDoc('doc_90919.pdf'),
	},
];
