import React from "react";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

interface NavData {
	title: string;
	id: number;
}

export const navigation: NavData[] = [
	{
		title: "Таблицы",
		id: 1,
	},
	{
		title: "Список",
		id: 2,
	},
	{
		title: "Файлы",
		id: 3,
	},
];

type Columns = {
	title: string;
	key: string;
	dataIndex: string;
	render?: any;
	align?: any;
	sorter?: any;
};

const sortByInt = (
	propName: string,
	a: { [key: string]: any },
	b: { [key: string]: any }
) => a[propName] - b[propName];

const sortByName = (
	propName: string,
	a: { [key: string]: any },
	b: { [key: string]: any }
) => (a[propName] > b[propName] ? 1 : -1);

export const columns: Columns[] = [
	{
		title: "Имя",
		key: "name",
		dataIndex: "name",
		sorter: (a: { name: string }, b: { name: string }) =>
			sortByName("name", a, b),
	},
	{
		title: "Телефон",
		key: "phone",
		dataIndex: "phone",
		sorter: (a: { phone: string }, b: { phone: string }) =>
			sortByName("phone", a, b),
	},
	{
		title: "Компания",
		key: "company",
		dataIndex: "company",
		sorter: (a: { company: string }, b: { company: string }) =>
			sortByName("company", a, b),
	},
	{
		title: "Город",
		key: "city",
		dataIndex: "city",
		sorter: (a: { city: string }, b: { city: string }) =>
			sortByName("city", a, b),
	},
	{
		title: "Возраст",
		key: "age",
		dataIndex: "age",
		align: "center",
		sorter: (a: { age: string }, b: { age: string }) => sortByInt("age", a, b),
	},
	{
		title: "Состоит в браке",
		key: "married",
		dataIndex: "married",
		render: (isMarried: boolean) =>
			isMarried ? <CheckOutlined /> : <CloseOutlined />,
		align: "center",
		sorter: (a: { married: string }, b: { married: string }) =>
			sortByName("married", a, b),
	},
	{
		title: "Есть дети",
		key: "haveChildren",
		dataIndex: "haveChildren",
		render: (haveChildren: boolean) =>
			haveChildren ? <CheckOutlined /> : <CloseOutlined />,
		align: "center",
		sorter: (a: { haveChildren: string }, b: { haveChildren: string }) =>
			sortByName("haveChildren", a, b),
	},
];

export type TableData = {
	id: string;
	name: string;
	age: number;
	company: string;
	city: string;
	phone: number;
	haveChildren: number;
	married: boolean;
};

export type ListData = {
	title: string;
	text: string;
	id: number;
	detail: string[];
};

export const listData: ListData[] = [
	{
		title: "День 1",
		text: "Расписание занятий на 3 месяца",
		id: 1,
		detail: [
			"1. Изучить HTML + CSS",
			"2. Изучить нативный JavaScript",
			"3. Написать приложение на чистом JS",
			"4. Изучить React",
			"5. Написать приложение на React",
		],
	},
	{
		title: "День 2",
		text: "Список дел на завтра",
		id: 2,
		detail: [
			"1. Сделать навигацию сайта",
			"2. Добавить навигацию на горячие клавиши",
			"3. Расширить функционал приложения",
			"4. Сделать рефактор кода",
			"5. Написать документацию",
		],
	},
	{
		title: "День 3",
		text: "Список покупок",
		id: 3,
		detail: [
			"1. Купить сыр",
			"2. Купить хлеб",
			"3. Купить овощи",
			"4. Купить творог",
			"5. Купить бананы",
		],
	},
];

export interface FolderData {
	name: string;
	id: string;
	files: {
		name: string;
		id: string;
	}[];
}

export const folderData: FolderData[] = [
	{
		name: "Папка 1",
		id: "1",
		files: [
			{
				name: "Файл 1",
				id: "1-1",
			},
			{
				name: "Файл 2",
				id: "1-2",
			},
		],
	},
	{
		name: "Папка 2",
		id: "2",
		files: [
			{
				name: "Файл 1",
				id: "2-1",
			},
		],
	},
];
