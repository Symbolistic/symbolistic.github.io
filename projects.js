const projects = document.querySelectorAll('.project');

const showAll = () => {
	projects.forEach((project, index) => {
		project.classList.remove('hide');

		// This adds the nice gray background to each odd element and keeps the even one index elements white background
		if (index % 2 === 0) {
			project.classList.add('gray-bg');
		} else {
			project.classList.remove('gray-bg');
		}
	});
};

const typescript = () => {
	projects.forEach((project) => {
		project.classList.add('hide');
		project.classList.remove('gray-bg');
	});

	typescriptProjects = document.querySelectorAll('.project.typescript');
	typescriptProjects.forEach((project, index) => {
		project.classList.remove('hide');

		// This adds the nice gray background to each odd element and keeps the even one index elements white background
		if (index % 2 === 0) {
			project.classList.add('gray-bg');
		} else {
			project.classList.remove('gray-bg');
		}
	});
};

const react = () => {
	projects.forEach((project) => {
		project.classList.add('hide');
		project.classList.remove('gray-bg');
	});

	reactProjects = document.querySelectorAll('.react');
	reactProjects.forEach((project, index) => {
		project.classList.remove('hide');

		// This adds the nice gray background to each odd element and keeps the even one index elements white background
		if (index % 2 === 0) {
			project.classList.add('gray-bg');
		} else {
			project.classList.remove('gray-bg');
		}
	});
};

const fullStack = () => {
	projects.forEach((project) => {
		project.classList.add('hide');
		project.classList.remove('gray-bg');
	});

	fullStackProjects = document.querySelectorAll('.fullstack');
	fullStackProjects.forEach((project, index) => {
		project.classList.remove('hide');

		// This adds the nice gray background to each odd element and keeps the even one index elements white background
		if (index % 2 === 0) {
			project.classList.add('gray-bg');
		} else {
			project.classList.remove('gray-bg');
		}
	});
};

const d3 = () => {
	projects.forEach((project) => {
		project.classList.add('hide');
		project.classList.remove('gray-bg');
	});

	d3Projects = document.querySelectorAll('.d3');
	d3Projects.forEach((project, index) => {
		project.classList.remove('hide');

		// This adds the nice gray background to each odd element and keeps the even one index elements white background
		if (index % 2 === 0) {
			project.classList.add('gray-bg');
		} else {
			project.classList.remove('gray-bg');
		}
	});
};
