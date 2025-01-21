'use client'

import { SectionsTitle } from '@/app/components/sections-title'
import { HorizontalDivider } from '@/app/components/divider/horizontal'

export const EducationSection = () => {

	return (
		<section id='education' className='container py-16'>
			<SectionsTitle title='Education' subtitle='' />
			<HorizontalDivider className='mb-16' />
			<div className='max-w-[420px]'>
				<p className='font-mono text-emerald-400'>Hello, my name is</p>
				<h2 className='text-4xl font-medium mt-2'>Rivaldo Sabino</h2>
			</div>
			<div className='flex flex-col gap-4'></div>
		</section>
	)
}
