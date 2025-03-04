/**
 * Navbar Toggle Menu
 */
const toggleMenuBtn = document.getElementById(
	'toggle-menu'
) as HTMLButtonElement;
const navbarMenu = document.querySelector('.navbar-menu') as HTMLUListElement;

toggleMenuBtn?.addEventListener('click', () => {
	navbarMenu?.classList.toggle('__show');

	toggleMenuBtn
		.querySelectorAll('i')
		?.forEach((icon) => icon.classList.toggle('__hidden'));
});
