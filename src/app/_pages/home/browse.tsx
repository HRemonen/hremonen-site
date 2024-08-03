import ButtonLink from '@/app/_components/ui/button-link'
import PageSection from '@/app/_components/ui/page-section'
import SubSectionTitle from '@/app/_components/ui/page-sub-section-title'

const BrowseSection = () => (
  <PageSection>
    <div className='flex flex-col px-4 md:flex-row'>
      <SubSectionTitle title='All blog posts' subtitle='Browse all posts.' />
      <div className='mb-12 flex w-full items-center justify-center md:mt-8 md:justify-normal lg:mb-16'>
        <ButtonLink linkText='Check all posts' href='/blog' />
      </div>
    </div>
  </PageSection>
)

export default BrowseSection
