const Contact = () => {
    return(
        <div className="flex flex-col sm:flex-row justify-between mx-3 mt-2 mb-1 border border-gray-300 rounded-md p-4">
            <div className="flex-1 mb-4 sm:mb-0">
                <h3 className="flex-grow text-4xl p-10 mr-3 font-semibold">
                I'm always interested in hearing about new projects, 
                so if you'd like to chat please get in touch.
                </h3>
            </div>
            <div className="flex-1" >
                <form className="flex flex-col space-y-3">
                    <input
                    placeholder="Full name"
                    className="border border-gray-300 rounded-md p-3 "
                    />
                    <input
                    placeholder="Email"
                    className="border border-gray-300 rounded-md p-3 "
                    />
                    <textarea
                    placeholder="Hello Mariane. Glad to see you!"
                    className="h-[20vh] border border-gray-300 rounded-md p-3 "
                    />
                    <button className="border rounded-md w-[30vh] bg-orange-500 p-3 text-white text-2xl hover:bg-orange-300">Get in touch!</button>
                </form>
            </div>
        </div>
    )
}
export default Contact;