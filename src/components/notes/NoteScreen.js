import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar/>
            <div className="notes__content">
                <form action="">

                    <input type="text" placeholder="Some awesome title" className="notes__title-input"/>
                    <textarea placeholder="What happen today" className="notes_textarea"></textarea>
                    <div className="notes__image">
                        <img src="https://m.media-amazon.com/images/I/71An-c9UxXS._AC_SX679_.jpg" alt="img" />
                    </div>
                </form>
            </div>
        </div>
    )
}
