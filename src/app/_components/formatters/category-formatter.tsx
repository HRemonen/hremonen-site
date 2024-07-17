type CategoryFormatterProps = {
  categories: string[]
}

const CategoryFormatter = ({ categories }: CategoryFormatterProps) => (
  <ul className='flex gap-2'>
    {categories.map((category) => (
      <li key={category}>{category}</li>
    ))}
  </ul>
)

export default CategoryFormatter
