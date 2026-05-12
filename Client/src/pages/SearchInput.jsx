import {Search} from 'lucide-react'

export default function SearchInput(){
    return (
        <div className='relative'>
            <input type="text"  className="w-65 h-8 bg-white pl-2 rounded font-[Arial]" placeholder="Enter a city name..."   />
            
            <Search  className='absolute bottom-1 left-58'/>

            </div>
    )
}