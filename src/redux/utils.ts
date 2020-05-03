export const filterBy = (
	prop: any,
	filteredValue: string,
	arr: {}[]
): {}[] | [] => {
	return !prop
		? arr
		: arr.filter(
				(item: { [key: string]: any }) => item[filteredValue] === prop
		  );
};

export const filterByBooleanValue = (
	prop: any,
	filteredValue: string,
	arr: {}[] | []
): {}[] | [] => {
	return !prop
		? arr
		: arr.filter((item: { [key: string]: any }) =>
				item[filteredValue] ? true === prop : false === prop
		  );
};

export const filterByAge = (ageFrom: number, ageTo: number, arr: {}[] | []) => {
	if (!ageFrom && !ageTo) return arr;
	else if (ageFrom && ageTo)
		return arr.filter(
			(item: { [key: string]: any }) => item.age >= ageFrom && item.age <= ageTo
		);
	else if (!ageFrom && ageTo)
		return arr.filter((item: { [key: string]: any }) => item.age <= ageTo);
	else if (!ageTo && ageFrom)
		return arr.filter((item: { [key: string]: any }) => item.age >= ageFrom);
};
