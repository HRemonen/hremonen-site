type CategoryFormatterProps = {
  categories: string[]
}

const CategoryFormatter = ({ categories }: CategoryFormatterProps) => (
  <ul className='flex gap-2'>
    {categories.map((category) => (
      <li
        key={category}
        className='text-sm uppercase text-gray-500 dark:text-ring'
      >
        {category}
      </li>
    ))}
  </ul>
)

export default CategoryFormatter
