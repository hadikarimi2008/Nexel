import { ContanerType } from '@/types/ContainerType'

export default function ContainerComponent({children} : ContanerType) {
  return (
    <div className='w-[80%] mx-auto'>
      {children}
    </div>
  )
}
