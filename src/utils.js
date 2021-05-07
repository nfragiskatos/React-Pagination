const paginate = (followers) => {
	const itemsPerPage = 9;
	const numPages = Math.ceil(followers.length / itemsPerPage);
	const pages = Array.from({ length: numPages }, (_, index) => {
		const start = index * itemsPerPage;
		return followers.slice(start, start + itemsPerPage);
	});
	return pages;
};

export default paginate;
