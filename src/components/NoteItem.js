import React from 'react'

export default function NoteItem(props) {
    const {note} = props;
  return (
    <div>
        <div className='flex max-h-96 w-52 border-2 border-solid mx-3 rounded-md mt-4'>
            <div className='flex flex-col p-3 min-h-0'>
                <h3 className='text-xl font-semibold'>{note.title}</h3>
                <p className='text-sm mt-1'>{note.description}Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae exercitationem consequuntur dolorum ipsam! Hic vero distinctio repellendus sapiente. Deleniti asperiores omnis dolorem maxime quo ipsam molestiae sequi culpa. Consequatur harum cumque temporibus adipisci aperiamx.</p>
            </div>
        </div>
    </div>
  )
}
