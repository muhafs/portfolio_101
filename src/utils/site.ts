const site_url = process.env.NEXT_PUBLIC_APP_URL || 'https://portfolio-101-five.vercel.app'

export const siteConfig = {
	name: 'Muhafs | Full Stack Developer',
	description: 'Personal portfolio website showcasing my projects and skills as a full stack developer',
	url: site_url,
	ogImage: `${site_url}/_static/og-image.png`,
	links: {
		twitter: 'https://twitter.com/muhafs',
		github: 'https://github.com/muhafs/portfolio_101',
	},
	mailSupport: 'muhamadhaspin@gmail.com',
}
