import { ReactNode } from 'react'
import ModeButton from './ModeButton'

type Props = {
  children: ReactNode;
}

export default function Home({ children }: Props) {
  return (
    <div>
      <div className="flex justify-between items-center px-7 md:px-10 lg:px-16 py-4 border-b-2 dark:border-gray-800 shadow-gray-200 dark:shadow-gray-700 bg-white dark:bg-dark-blue">
        <h1 className="text-sm lg:text-4xl dark:text-white text-light-gray-900 font-bold">
          Where in the world?
        </h1>
        <ModeButton />
      </div>
      <div className="px-7 md:px-16 py-10 bg-light-white dark:bg-dark-blue">
        {children}
      </div>
    </div>
  )
}