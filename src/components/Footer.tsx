import { Container } from '@radix-ui/themes'
import {
	FacebookIcon,
	InstagramIcon,
	LogoIcon,
	TelegramIcon,
	TikTokIcon,
	YoutubeIcon,
} from './Icons'

const Footer = () => {
  return (
    <>
    <footer className='text-gray-600 body-font'>
			<Container>
				<div className='py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col cursor-pointer'>
					<div className='w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left'>
						<a className='flex items-center md:justify-start justify-center'>
							<LogoIcon />
							<span className='sr-only'>MaxWay icon</span>
						</a>
					</div>
					<div className='flex-grow flex flex-wrap -mb-10 md:mt-0 mt-10 md:text-left text-center'>
						<div className='lg:w-1/4 md:w-1/2 w-full px-4'>
							<h2 className='text-xl font-semibold text-[#003846] tracking-widest mb-3'>
								Asosiy
							</h2>
							<ul className='flex flex-col gap-5 mb-10'>
								<li>
									<a className='text-gray-600 hover:text-gray-800'>
										Kompaniya haqida
									</a>
								</li>
								<li>
									<a className='text-gray-600 hover:text-gray-800'>Filiallar</a>
								</li>
								<li>
									<a className='text-gray-600 hover:text-gray-800'>
										Bolalar uchun
									</a>
								</li>
							</ul>
						</div>
						<div className='lg:w-1/4 md:w-1/2 w-full px-4 cursor-pointer'>
							<h2 className='text-xl font-semibold text-[#003846] tracking-widest mb-3'>
								Qo’shimcha
							</h2>
							<ul className='flex flex-col gap-5 mb-10'>
								<li>
									<a className='text-gray-600 hover:text-gray-800'>
										Menyu
									</a>
								</li>
								<li>
									<a className='text-gray-600 hover:text-gray-800'>
                  Bonusli karta</a>
								</li>
								<li>
									<a className='text-gray-600 hover:text-gray-800'>
										Bu qanday ishlaydi?
									</a>
								</li>
							</ul>
						</div>
						<div className='lg:w-1/4 md:w-1/2 w-full px-4'></div>
						<div className='lg:w-1/4 md:w-1/2  w-72 h-36 px-4  bg-blue '>
							<h2 className='text-xl font-semibold text-[#003846] tracking-widest mb-3'>
								Biz bilan aloqa
							</h2>
							<ul className='list-none mb-10'>
								<li>
									<a className='text-gray-600 text-[23px] hover:text-gray-800' href='tel:+998712005400'>
                  <span>
								<span className='block text-sm'>(+99871)</span>
								<span className='block text-2xl font-bold'>200-54-00</span>
							</span>
									</a>
								</li>
								<li>
									<a className='text-gray-600 hover:text-gray-800'>
                    <address>
									100011, Toshkent sh. Shayxontohur tumani,
                   Zarqaynar ko’chasi, 3B-uy
                    </address>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<hr />
				<div>
					<div className='container mx-auto py-4 pr-5 flex flex-wrap flex-col sm:flex-row'>
						<p className='text-gray-500 text-sm text-center sm:text-left'>
							© Maxway, 2024
							<a
								href='https://github.com/Abduakhad'
								rel='noopener noreferrer'
								className='text-gray-600 ml-1'
								target='_blank'>
								Abduakhad_Kuyliev
							</a>
						</p>
						<ul className='inline-flex gap-6 sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start'>
							<a>
								<YoutubeIcon />
								<span className='sr-only'>Youtube icon</span>
							</a>
							<a>
								<FacebookIcon />
								<span className='sr-only'>Facebook icon</span>
							</a>
							<a>
								<InstagramIcon />
								<span className='sr-only'>Instagram icon</span>
							</a>
							<a>
								<TelegramIcon />
								<span className='sr-only'>Telegram icon</span>
							</a>
							<a>
								<TikTokIcon />
								<span className='sr-only'>TikTok icon</span>
							</a>
						</ul>
					</div>
				</div>
			</Container>
		</footer>
    </>
  )
}

export default Footer
