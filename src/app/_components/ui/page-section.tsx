interface PageSectionProps {
  children: React.ReactNode
}

const PageSection = ({ children }: PageSectionProps) => (
  <section className='mx-auto mb-16 mt-8 max-w-5xl'>{children}</section>
)

export default PageSection
