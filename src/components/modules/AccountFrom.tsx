// * dynamic form for both login and sign up

// * more types will be added, such as funcs to send data to data base!
type Props = { btnTxt: String };

export default function AccountFrom({ btnTxt }: Props) {
  return (
    <>
      <form className='flex flex-col justify-center'>
        {/* name */}
        <div className='flex justify-center items-center'>
          <input
            className='my-4 rounded-[5px] focus:outline-none block border-2 border-blue-500'
            type='text'
            placeholder='Name'
            id='name'
            required
          />
        </div>
        {/* email */}
        <div className='flex justify-center items-center'>
          <input
            className='my-4 rounded-[5px] focus:outline-none block border-2 border-blue-500'
            type='text'
            placeholder='Email'
            id='email'
            required
          />
        </div>
        {/* password */}
        <div className='flex justify-center items-center'>
          <input
            className='my-4 rounded-[5px] focus:outline-none block border-2 border-blue-500'
            type='text'
            placeholder='Password'
            id='password'
            required
          />
        </div>
        <button
          type='submit'
          className='my-2 text-centers  bg-blue-500 w-fit mx-auto px-3 py-1 rounded-md text-white active:scale-95'
        >
          {btnTxt}
        </button>
      </form>
    </>
  );
}
