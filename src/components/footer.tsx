export default function Footer() {
    return (
        <footer className="w-full bg-light-pink py-8 px-6 text-gray-800">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="mb-6 md:mb-0">
                    <h5 className="text-2xl font-semibold">ArtyFlow</h5>
                    <p className="mt-2 text-sm">Connecting art lovers with inspiring artworks.</p>
                </div>

                {/* Contact */}
                <div className="mb-6 md:mb-0">
                    <h6 className="font-semibold mb-2">Contact</h6>
                    <p className="text-sm">Email: contact@artyflow.com</p>
                    <p className="text-sm">Phone: +1 (123) 456-7890</p>
                    <p className="text-sm">Location: 123 Art Street, Paris, France</p>
                </div>

                {/* RS */}

                <div className="flex space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <svg className="w-6 h-6 text-pinker hover:text-gray-800" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .732.592 1.324 1.325 1.324h11.495v-9.294h-3.123v-3.622h3.123v-2.672c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.464.099 2.794.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.732 0 1.324-.592 1.324-1.324v-21.351c0-.733-.592-1.325-1.324-1.325z"/>
                        </svg>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <svg className="w-6 h-6 text-pinker hover:text-gray-800" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.719 0-4.92 2.202-4.92 4.917 0 .385.043.76.127 1.118-4.088-.205-7.715-2.164-10.141-5.144-.424.724-.666 1.561-.666 2.458 0 1.697.865 3.194 2.181 4.072-.803-.025-1.56-.246-2.223-.616v.062c0 2.37 1.685 4.348 3.918 4.794-.411.111-.846.171-1.294.171-.316 0-.624-.03-.926-.086.625 1.956 2.444 3.379 4.6 3.419-1.684 1.319-3.808 2.106-6.115 2.106-.398 0-.79-.023-1.175-.068 2.18 1.4 4.768 2.215 7.557 2.215 9.054 0 14.009-7.496 14.009-13.986 0-.21-.004-.423-.014-.633.961-.694 1.8-1.562 2.46-2.549z"/>
                        </svg>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <svg className="w-6 h-6 text-pinker hover:text-gray-800" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.351 3.608 1.326.974.974 1.264 2.241 1.326 3.607.059 1.265.071 1.645.071 4.849s-.012 3.584-.071 4.849c-.062 1.366-.351 2.633-1.326 3.608-.974.974-2.241 1.264-3.607 1.326-1.265.059-1.645.071-4.849.071s-3.584-.012-4.849-.071c-1.366-.062-2.633-.351-3.608-1.326-.974-.974-1.264-2.241-1.326-3.607-.059-1.265-.071-1.645-.071-4.849s.012-3.584.071-4.849c.062-1.366.351-2.633 1.326-3.608.974-.974 2.241-1.264 3.607-1.326 1.265-.059 1.645-.071 4.849-.071zm0-2.163c-3.259 0-3.667.012-4.947.071-1.568.072-3.007.492-4.122 1.607-1.114 1.115-1.534 2.554-1.607 4.122-.059 1.279-.071 1.688-.071 4.947s.012 3.667.071 4.947c.072 1.568.492 3.007 1.607 4.122 1.115 1.114 2.554 1.534 4.122 1.607 1.279.059 1.688.071 4.947.071s3.667-.012 4.947-.071c1.568-.072 3.007-.492 4.122-1.607 1.114-1.115 1.534-2.554 1.607-4.122.059-1.279.071-1.688.071-4.947s-.012-3.667-.071-4.947c-.072-1.568-.492-3.007-1.607-4.122-1.115-1.114-2.554-1.534-4.122-1.607-1.279-.059-1.688-.071-4.947-.071zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.324c-2.294 0-4.162-1.867-4.162-4.162s1.867-4.162 4.162-4.162 4.162 1.867 4.162 4.162-1.867 4.162-4.162 4.162zm6.406-11.845c0 .796-.646 1.442-1.442 1.442s-1.442-.646-1.442-1.442.646-1.442 1.442-1.442 1.442.646 1.442 1.442z"/>
                        </svg>
                    </a>
                </div>
            </div>

            <div className="container mx-auto mt-8 border-t border-gray-300 pt-4 text-center text-sm text-gray-600">
                <p>&copy; 2024 ArtyFlow. All rights reserved.</p>
            </div>
        </footer>
    );
}
