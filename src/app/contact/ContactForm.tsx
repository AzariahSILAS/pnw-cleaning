function ContactForm() {
    return (
        <div className=" w-full space-y-4 max-w-lg mx-auto mt-[20px] lg:mt-[0px] p-4 border rounded-md shadow-md bg-white">
  <h2 className="text-2xl font-semibold">Contact Us</h2>

  <div>
    <label className="block mb-1 font-medium">Phone Number</label>
    <p className="w-full border p-2 rounded bg-gray-100">+1 (555) 123-4567</p>
  </div>

  <div>
    <label className="block mb-1 font-medium">Email</label>
    <p className="w-full border p-2 rounded bg-gray-100">contact@toppjanitorial.com</p>
  </div>

  <div>
    <label className="block mb-1 font-medium">Service Areas</label>
    <p className="w-full border p-2 rounded bg-gray-100">
      Seattle, Bellevue, Tacoma, Renton, Redmond, and surrounding areas in the PNW.
    </p>
  </div>
</div>

    )
}
export default ContactForm;