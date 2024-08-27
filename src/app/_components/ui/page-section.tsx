interface PageSectionProps {
  children: React.ReactNode
}

const PageSection = ({ children }: PageSectionProps) => (
  <section className='mx-auto mt-8 max-w-5xl sm:mb-16'>{children}</section>
)

export default PageSection
